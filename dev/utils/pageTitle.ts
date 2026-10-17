export const APP_TITLE = 'FormKit PrimeVue Demo'

export interface RouteParts {
  page: string
  section?: string
}

/**
 * The page and the section of a route, from its name (the generated page routes are named `<folder>-<File>`,
 * which keeps the casing of the file; the paths are lowercase): `inputs-InputText` -> `InputText` in `Inputs`.
 * The home page (`index`) and a route without a name have no parts.
 */
export function routeParts(routeName: string | symbol | null | undefined): RouteParts | undefined {
  const segments = typeof routeName === 'string' ? routeName.split('-').filter(Boolean) : []
  if (segments.length === 0 || routeName === 'index')
    return undefined

  const section = segments.length > 1 ? (segments.at(-2) as string) : undefined
  return {
    page: segments.at(-1) as string,
    section: section ? `${section.charAt(0).toUpperCase()}${section.slice(1)}` : undefined,
  }
}

/**
 * The document title of a demo page: `inputs-InputText` -> `InputText - Inputs | FormKit PrimeVue Demo`.
 * The home page and a route without a name are just the app title.
 */
export function pageTitle(routeName: string | symbol | null | undefined): string {
  const parts = routeParts(routeName)
  if (!parts)
    return APP_TITLE

  return `${[parts.page, parts.section].filter(Boolean).join(' - ')} | ${APP_TITLE}`
}
