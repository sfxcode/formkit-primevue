import { describe, expect, it } from 'vitest'
import { APP_TITLE, pageTitle } from '../dev/utils/pageTitle'

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
