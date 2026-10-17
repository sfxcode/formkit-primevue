export type JsonParseResult
  = | { ok: true, value: unknown }
    | { ok: false, message: string }

/**
 * The value of a JSON editor change. In text mode the editor hands over the text, which is parsed here
 * (and may be invalid while it is typed); in tree mode it hands over the value itself.
 */
export function parseJson(value: unknown): JsonParseResult {
  if (typeof value !== 'string')
    return { ok: true, value }

  try {
    return { ok: true, value: JSON.parse(value) }
  }
  catch (error) {
    return { ok: false, message: error instanceof Error ? error.message : String(error) }
  }
}

/** A copy of a JSON value that shares nothing with the original, for resetting an editor to what it started with. */
export function cloneJson<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T
}
