import type { AutoAnimateOptions } from '@formkit/auto-animate'
import type { FormKitNode, FormKitSchemaDefinition } from '@formkit/core'
import autoAnimate from '@formkit/auto-animate'
import { isDOM } from '@formkit/core'
import { eachSection } from '@formkit/inputs'

/** Sections to animate, per input type. `global` applies to every input. */
export type AutoAnimateTargets = Record<string, string[]>

// `@formkit/addons`' own plugin calls `autoAnimate()` again on EVERY marked element each
// time a new input is created. AutoAnimate does not dedupe: each call adds another
// MutationObserver to the element and leaves the old one running, so after the first
// insert/clone in a repeater every change is animated twice (then three times, ...) and
// the animation turns fast and glitchy. This plugin marks the same sections but attaches
// each element once.
//
// The attribute value is the key of the element's options, and stays the same on the server and
// in the browser (a counter would differ between them and fail hydration).
const DEFAULT_KEY = 'true'
const optionsByKey = new Map<string, Partial<AutoAnimateOptions>>()
const attached = new WeakSet<Element>()
const pendingIds = new Set<string>()
let observer: MutationObserver | null = null
let attachTimer: ReturnType<typeof setTimeout> | undefined

function attachNewTargets(): void {
  if (typeof document === 'undefined')
    return
  document.querySelectorAll<HTMLElement>('[data-auto-animate]').forEach((target) => {
    if (attached.has(target))
      return
    attached.add(target)
    autoAnimate(target, optionsByKey.get(target.getAttribute('data-auto-animate') ?? '') ?? {})
  })
}

function checkPendingIds(): void {
  if (typeof document === 'undefined')
    return
  pendingIds.forEach((id) => {
    if (!document.getElementById(id))
      return
    pendingIds.delete(id)
    // Let the freshly rendered children settle first, so they are not animated in.
    clearTimeout(attachTimer)
    attachTimer = setTimeout(attachNewTargets, 250)
  })
}

function observeUntilRendered(): void {
  if (observer || typeof document === 'undefined')
    return
  checkPendingIds()
  if (!pendingIds.size)
    return
  observer = new MutationObserver(() => {
    checkPendingIds()
    if (!pendingIds.size) {
      observer?.disconnect()
      observer = null
    }
  })
  observer.observe(document, { childList: true, subtree: true })
}

/**
 * Drop-in replacement for `createAutoAnimatePlugin` from `@formkit/addons` with the same
 * arguments, that does not stack animations on an element after inputs are added to it.
 */
export function createAutoAnimatePlugin(options: Partial<AutoAnimateOptions> = {}, targets: AutoAnimateTargets = {}) {
  optionsByKey.set(DEFAULT_KEY, options)

  return (node: FormKitNode): void => {
    node.on('created', () => {
      if (typeof node.props.definition?.schema !== 'function')
        return

      const originalSchema = node.props.definition.schema
      node.props.definition.schema = (extensions) => {
        const schema = originalSchema(extensions)
        const finalSchema = (Array.isArray(schema) ? schema[0] : schema) as FormKitSchemaDefinition
        let marked = false

        eachSection(finalSchema, (section) => {
          if (!isDOM(section))
            return

          let key: string | undefined
          const meta = section.meta
          if (meta?.autoAnimate) {
            key = DEFAULT_KEY
            if (typeof meta.autoAnimate === 'object') {
              key = `${node.props.id}-${meta.section ?? 'section'}`
              optionsByKey.set(key, { ...options, ...meta.autoAnimate })
            }
          }
          else {
            const sectionName = meta?.section
            if (typeof sectionName === 'string' && (targets.global?.includes(sectionName) || targets[node.props.type]?.includes(sectionName)))
              key = DEFAULT_KEY
          }
          if (key === undefined)
            return

          section.attrs = { ...section.attrs, 'data-auto-animate': key }
          marked = true
        })

        if (marked && node.props.id && typeof window !== 'undefined') {
          pendingIds.add(node.props.id)
          observeUntilRendered()
        }
        return finalSchema
      }
    })
  }
}
