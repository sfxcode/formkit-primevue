import { ref } from 'vue'

// `index.html` repeats the lookup of the first value in a small script, so the page has the right
// theme before the app is loaded. Keep both in sync.
export const THEME_STORAGE_KEY = 'formkit-primevue-demo-theme'

export const isDark = ref(true)

function readStoredTheme(): string | null {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY)
  }
  catch {
    // storage can be blocked, the theme then only lasts until the page is closed
    return null
  }
}

function storeTheme(dark: boolean): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, dark ? 'dark' : 'light')
  }
  catch {
    // see readStoredTheme
  }
}

/** the stored choice, or else the setting of the system */
export function preferredThemeIsDark(): boolean {
  const stored = readStoredTheme()
  if (stored === 'dark' || stored === 'light')
    return stored === 'dark'
  return typeof window.matchMedia === 'function' && window.matchMedia('(prefers-color-scheme: dark)').matches
}

function applyTheme(dark: boolean): void {
  const root = document.documentElement
  // PrimeVue switches its dark palette on this class, `color-scheme` does the same for scrollbars and native controls
  root.classList.toggle('p-dark', dark)
  root.style.colorScheme = dark ? 'dark' : 'light'
}

export function initTheme(): void {
  isDark.value = preferredThemeIsDark()
  applyTheme(isDark.value)
}

export function setTheme(dark: boolean): void {
  isDark.value = dark
  applyTheme(dark)
  storeTheme(dark)
}

export function toggleTheme(): void {
  setTheme(!isDark.value)
}

export function useTheme() {
  return { isDark, toggleTheme, setTheme }
}
