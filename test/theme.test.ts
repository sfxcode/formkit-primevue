import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const KEY = 'formkit-primevue-demo-theme'

function stubSystemTheme(dark: boolean) {
  vi.stubGlobal('matchMedia', vi.fn((query: string) => ({ matches: dark && query === '(prefers-color-scheme: dark)' })))
}

// the module keeps its state, so each test gets a fresh one
async function loadTheme() {
  vi.resetModules()
  return await import('../dev/composables/theme')
}

describe('theme', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.className = ''
    document.documentElement.style.colorScheme = ''
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('follows the dark setting of the system when nothing is stored', async () => {
    stubSystemTheme(true)
    const { initTheme, isDark } = await loadTheme()

    initTheme()

    expect(isDark.value).toBe(true)
    expect(document.documentElement.classList.contains('p-dark')).toBe(true)
    expect(document.documentElement.style.colorScheme).toBe('dark')
  })

  it('follows the light setting of the system when nothing is stored', async () => {
    stubSystemTheme(false)
    const { initTheme, isDark } = await loadTheme()

    initTheme()

    expect(isDark.value).toBe(false)
    expect(document.documentElement.classList.contains('p-dark')).toBe(false)
    expect(document.documentElement.style.colorScheme).toBe('light')
  })

  it('prefers the stored choice over the setting of the system', async () => {
    stubSystemTheme(true)
    localStorage.setItem(KEY, 'light')
    const { initTheme, isDark } = await loadTheme()

    initTheme()

    expect(isDark.value).toBe(false)
    expect(document.documentElement.classList.contains('p-dark')).toBe(false)
  })

  it('ignores a stored value that is not a theme', async () => {
    stubSystemTheme(true)
    localStorage.setItem(KEY, 'blue')
    const { initTheme, isDark } = await loadTheme()

    initTheme()

    expect(isDark.value).toBe(true)
  })

  it('switches the theme, applies it and stores the choice', async () => {
    stubSystemTheme(true)
    const { initTheme, isDark, toggleTheme } = await loadTheme()
    initTheme()

    toggleTheme()
    expect(isDark.value).toBe(false)
    expect(document.documentElement.classList.contains('p-dark')).toBe(false)
    expect(document.documentElement.style.colorScheme).toBe('light')
    expect(localStorage.getItem(KEY)).toBe('light')

    toggleTheme()
    expect(isDark.value).toBe(true)
    expect(document.documentElement.classList.contains('p-dark')).toBe(true)
    expect(localStorage.getItem(KEY)).toBe('dark')
  })

  it('sets a theme directly', async () => {
    stubSystemTheme(false)
    const { setTheme, isDark } = await loadTheme()

    setTheme(true)

    expect(isDark.value).toBe(true)
    expect(document.documentElement.classList.contains('p-dark')).toBe(true)
  })

  it('keeps working when the storage is blocked', async () => {
    stubSystemTheme(false)
    const blocked = () => {
      throw new Error('blocked')
    }
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(blocked)
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(blocked)
    const { initTheme, toggleTheme, isDark } = await loadTheme()

    expect(() => initTheme()).not.toThrow()
    expect(isDark.value).toBe(false)
    expect(() => toggleTheme()).not.toThrow()
    expect(isDark.value).toBe(true)
    expect(document.documentElement.classList.contains('p-dark')).toBe(true)

    vi.restoreAllMocks()
  })

  it('uses the light theme when the system cannot tell', async () => {
    vi.stubGlobal('matchMedia', undefined)
    const { initTheme, isDark } = await loadTheme()

    initTheme()

    expect(isDark.value).toBe(false)
  })
})
