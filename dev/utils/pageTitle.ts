export const APP_TITLE = 'FormKit PrimeVue Demo'

/**
 * The document title of a demo page, from the name of its route (the generated page routes are named
 * `<folder>-<File>`, which keeps the casing of the file; the paths are lowercase):
 * `inputs-InputText` -> `InputText - Inputs | FormKit PrimeVue Demo`.
 * The home page (`index`) and a route without a name are just the app title.
 */
export function pageTitle(routeName: string | symbol | null | undefined): string {
  const segments = typeof routeName === 'string' ? routeName.split('-').filter(Boolean) : []
  if (segments.length === 0 || routeName === 'index')
    return APP_TITLE

  const page = segments.at(-1) as string
  const section = segments.length > 1 ? (segments.at(-2) as string) : undefined
  const capitalized = section ? `${section.charAt(0).toUpperCase()}${section.slice(1)}` : undefined
  return `${[page, capitalized].filter(Boolean).join(' - ')} | ${APP_TITLE}`
}
