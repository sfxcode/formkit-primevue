/// <reference types="node" />

import { readdirSync, readFileSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { HOME_ROUTE, MENU_COLUMN_COUNTS, pages, searchPages, sections, toMegaMenuModel } from '../dev/utils/menu'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const pagesDir = join(root, 'dev/pages')

/** the page files of the demo, as lowercase routes: `dev/pages/inputs/InputText.vue` -> `/inputs/inputtext` */
function pageFileRoutes(directory: string = pagesDir): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name)
    if (entry.isDirectory())
      return pageFileRoutes(path)
    if (!entry.name.endsWith('.vue'))
      return []
    const route = `/${relative(pagesDir, path).replace(/\.vue$/, '').replaceAll('\\', '/')}`.toLowerCase()
    return [route === '/index' ? HOME_ROUTE : route]
  })
}

const icons = new Set([...readFileSync(join(root, 'node_modules/primeicons/primeicons.css'), 'utf8').matchAll(/\.pi-([a-z0-9-]+):before/g)].map(match => match[1]))

describe('menu pages', () => {
  it('lists every page once', () => {
    const routes = pages.map(page => page.route.toLowerCase())

    expect(new Set(routes).size).toBe(routes.length)
  })

  it('links only to pages that exist', () => {
    const files = new Set(pageFileRoutes())

    expect(pages.filter(page => !files.has(page.route.toLowerCase())).map(page => page.route)).toEqual([])
    expect(files.has(HOME_ROUTE)).toBe(true)
  })

  it('has an entry for every page except the home page', () => {
    const listed = new Set(pages.map(page => page.route.toLowerCase()))

    expect(pageFileRoutes().filter(route => route !== HOME_ROUTE && !listed.has(route))).toEqual([])
  })

  it('uses only icons of the installed icon font', () => {
    expect(icons.size).toBeGreaterThan(100)
    expect(pages.filter(page => !icons.has(page.icon)).map(page => `${page.label}: ${page.icon}`)).toEqual([])
    expect(sections.filter(section => !icons.has(section.icon)).map(section => section.icon)).toEqual([])
  })

  it('uses no icon twice within a section, so entries can be told apart', () => {
    for (const section of sections) {
      const used = pages.filter(page => page.section === section.label).map(page => page.icon)
      const repeated = used.filter((icon, index) => used.indexOf(icon) !== index)

      expect(repeated, section.label).toEqual([])
    }
  })

  it('has a column count the MegaMenu can lay out', () => {
    // PrimeVue sizes the columns of a drop-down only for 2, 3, 4 or 6 columns (one column is as wide as the panel anyway);
    // with 5 every column is as wide as the whole panel and the menu runs off the page
    for (const section of sections)
      expect(MENU_COLUMN_COUNTS, section.label).toContain(section.columns.length)
  })

  it('names the group and the section of each page', () => {
    expect(pages.find(page => page.route === '/inputs/select')).toMatchObject({ group: 'Choice', section: 'Components' })
    expect(pages.find(page => page.route === '/samples/formPrefix')).toMatchObject({ group: 'Samples', section: 'More' })
  })
})

describe('toMegaMenuModel', () => {
  const model = toMegaMenuModel() as Array<Record<string, any>>

  it('starts with a link to the home page, then one drop-down per section', () => {
    expect(model[0]).toMatchObject({ label: 'Demo', route: HOME_ROUTE })
    expect(model.slice(1).map(item => item.key)).toEqual(sections.map(section => section.label))
  })

  it('contains every page, in the columns of its section', () => {
    const routes = model.slice(1).flatMap(item => item.items.flat().flatMap((group: any) => group.items.map((page: any) => page.route)))

    expect(routes).toEqual(pages.map(page => page.route))
  })
})

describe('searchPages', () => {
  const labels = (query: string) => searchPages(query).map(page => page.label)

  it('finds nothing for an empty search', () => {
    expect(searchPages('')).toEqual([])
    expect(searchPages('   ')).toEqual([])
  })

  it('finds a page by its label, ignoring case', () => {
    expect(labels('knob')).toEqual(['Knob'])
    expect(labels('KNOB')).toEqual(['Knob'])
  })

  it('finds a page when the space of its label is typed or left out', () => {
    expect(labels('input text')).toContain('InputText')
    expect(labels('inputtext')).toContain('InputText')
    expect(labels('output text')).toContain('Output Text')
    expect(labels('outputtext')).toContain('Output Text')
  })

  it('finds the pages of a group or of a section by their name', () => {
    expect(labels('toggle')).toEqual(expect.arrayContaining(['Checkbox', 'ToggleSwitch', 'ToggleButton']))
    expect(labels('styling')).toEqual(expect.arrayContaining(['Basic', 'Grid']))
  })

  it('lists labels that start with the search before those that only contain it', () => {
    const found = labels('select')

    expect(found.indexOf('Select')).toBeLessThan(found.indexOf('MultiSelect'))
    expect(found.indexOf('SelectButton')).toBeLessThan(found.indexOf('MultiSelect'))
  })

  it('needs every word of the search to match', () => {
    expect(labels('repeater samples')).toEqual(['Repeater'])
    expect(searchPages('repeater samples')[0]?.route).toBe('/samples/repeater')
    expect(labels('knob zzz')).toEqual([])
  })

  it('finds nothing for an unknown search and ignores punctuation', () => {
    expect(labels('doesnotexist')).toEqual([])
    expect(labels('input-text')).toContain('InputText')
  })

  it('returns at most the limit', () => {
    expect(searchPages('e', 5)).toHaveLength(5)
    expect(searchPages('e').length).toBeLessThanOrEqual(12)
  })
})
