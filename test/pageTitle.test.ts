import { describe, expect, it } from 'vitest'
import { APP_TITLE, pageTitle, routeParts } from '../dev/utils/pageTitle'

describe('pageTitle', () => {
  it('is the app title for the home page and for a route without a name', () => {
    expect(pageTitle('index')).toBe(APP_TITLE)
    expect(pageTitle(undefined)).toBe(APP_TITLE)
    expect(pageTitle(null)).toBe(APP_TITLE)
    expect(pageTitle('')).toBe(APP_TITLE)
    expect(pageTitle(Symbol('route'))).toBe(APP_TITLE)
  })

  it('names the page, keeping the casing of its file, and its section', () => {
    expect(pageTitle('inputs-InputText')).toBe('InputText - Inputs | FormKit PrimeVue Demo')
    expect(pageTitle('outputs-OutputText')).toBe('OutputText - Outputs | FormKit PrimeVue Demo')
    expect(pageTitle('samples-Repeater')).toBe('Repeater - Samples | FormKit PrimeVue Demo')
  })

  it('tells pages with the same name apart by their section', () => {
    expect(pageTitle('inputs-Repeater')).not.toBe(pageTitle('samples-Repeater'))
  })

  it('uses only the last two segments of a deeper name', () => {
    expect(pageTitle('a-b-C')).toBe('C - B | FormKit PrimeVue Demo')
  })

  it('names a page without a section by itself', () => {
    expect(pageTitle('About')).toBe('About | FormKit PrimeVue Demo')
  })
})

describe('routeParts', () => {
  it('has no parts for the home page and for a route without a name', () => {
    expect(routeParts('index')).toBeUndefined()
    expect(routeParts(undefined)).toBeUndefined()
    expect(routeParts(null)).toBeUndefined()
    expect(routeParts('')).toBeUndefined()
    expect(routeParts(Symbol('route'))).toBeUndefined()
  })

  it('splits the name of a page route into its page and its section', () => {
    expect(routeParts('inputs-InputText')).toEqual({ page: 'InputText', section: 'Inputs' })
    expect(routeParts('samples-Repeater')).toEqual({ page: 'Repeater', section: 'Samples' })
  })

  it('has no section for a page without one', () => {
    expect(routeParts('About')).toEqual({ page: 'About', section: undefined })
  })
})
