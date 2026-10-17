/**
 * Re-keys a record of type definitions from one type-name prefix to another, e.g. `primeInputText` -> `formInputText`.
 * Keys that do not start with `From` are left as they are.
 */
export type RenamePrefix<T, From extends string, To extends string> = {
  [K in keyof T as K extends `${From}${infer Rest}` ? `${To}${Rest}` : K]: T[K]
}

export function renamePrefix<T extends object, From extends string, To extends string>(definitions: T, from: From, to: To): RenamePrefix<T, From, To> {
  return Object.fromEntries(
    Object.entries(definitions).map(([key, definition]) => [key.startsWith(from) ? `${to}${key.slice(from.length)}` : key, definition]),
  ) as RenamePrefix<T, From, To>
}
