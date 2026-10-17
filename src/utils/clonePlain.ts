function isPlainObject(value: object): boolean {
  const prototype = Object.getPrototypeOf(value)
  return prototype === Object.prototype || prototype === null
}

/**
 * Deep-copies arrays and plain objects and leaves every other value - class
 * instances such as `@internationalized/date`'s `CalendarDate`/`Time`/
 * `ZonedDateTime`, `Date`, `File`, `Map` - as the same reference.
 *
 * Not `@formkit/utils`' `cloneAny`: it shares a `Date`/`File`/`Map` but rebuilds a
 * `CalendarDate` as a plain object without its prototype, so the date inputs lose
 * the value without any error. A cycle is copied as a cycle.
 */
export function clonePlain<T>(value: T, seen: WeakMap<object, unknown> = new WeakMap()): T {
  if (value === null || typeof value !== 'object')
    return value
  if (seen.has(value))
    return seen.get(value) as T
  if (Array.isArray(value)) {
    const copy: unknown[] = []
    seen.set(value, copy)
    for (const item of value)
      copy.push(clonePlain(item, seen))
    return copy as T
  }
  if (!isPlainObject(value))
    return value
  const copy: Record<string, unknown> = Object.getPrototypeOf(value) === null ? Object.create(null) : {}
  seen.set(value, copy)
  for (const key of Object.keys(value))
    copy[key] = clonePlain((value as Record<string, unknown>)[key], seen)
  return copy as T
}
