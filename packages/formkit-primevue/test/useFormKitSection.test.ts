import { expect, it } from 'vitest'
import { useFormKitSection } from '../src/composables/useFormKitSection'

it('returns true for hasPrefix when context has a non-empty prefix', () => {
  const context = { prefix: 'test-prefix' }
  const { hasPrefix } = useFormKitSection(context)
  expect(hasPrefix.value).toBe(true)
})

it('returns false for hasPrefix when context has an empty prefix', () => {
  const context = { prefix: '' }
  const { hasPrefix } = useFormKitSection(context)
  expect(hasPrefix.value).toBe(false)
})

it('returns false for hasPrefix when context is null', () => {
  const context = null
  const { hasPrefix } = useFormKitSection(context)
  expect(hasPrefix.value).toBe(false)
})

it('returns false for hasPrefix when context.prefix is null', () => {
  const context = { prefix: null }
  const { hasPrefix } = useFormKitSection(context)
  expect(hasPrefix.value).toBe(false)
})

it('returns true for hasPrefixIcon when context has a non-empty iconPrefix', () => {
  const context = { iconPrefix: 'test-icon' }
  const { hasPrefixIcon } = useFormKitSection(context)
  expect(hasPrefixIcon.value).toBe(true)
})

it('returns false for hasPrefixIcon when context has an empty iconPrefix', () => {
  const context = { iconPrefix: '' }
  const { hasPrefixIcon } = useFormKitSection(context)
  expect(hasPrefixIcon.value).toBe(false)
})

it('returns false for hasPrefixIcon when context is null', () => {
  const context = null
  const { hasPrefixIcon } = useFormKitSection(context)
  expect(hasPrefixIcon.value).toBe(false)
})

it('returns false for hasPrefixIcon when context.iconPrefix is null', () => {
  const context = { iconPrefix: null }
  const { hasPrefixIcon } = useFormKitSection(context)
  expect(hasPrefixIcon.value).toBe(false)
})

it('returns true for hasSuffixIcon when context has a non-empty iconSuffix', () => {
  const context = { iconSuffix: 'test-icon' }
  const { hasSuffixIcon } = useFormKitSection(context)
  expect(hasSuffixIcon.value).toBe(true)
})

it('returns false for hasSuffixIcon when context has an empty iconSuffix', () => {
  const context = { iconSuffix: '' }
  const { hasSuffixIcon } = useFormKitSection(context)
  expect(hasSuffixIcon.value).toBe(false)
})

it('returns false for hasSuffixIcon when context is null', () => {
  const context = null
  const { hasSuffixIcon } = useFormKitSection(context)
  expect(hasSuffixIcon.value).toBe(false)
})

it('returns false for hasSuffixIcon when context.iconSuffix is null', () => {
  const context = { iconSuffix: null }
  const { hasSuffixIcon } = useFormKitSection(context)
  expect(hasSuffixIcon.value).toBe(false)
})

it('returns true for hasSuffix when context has a non-empty suffix', () => {
  const context = { suffix: 'test-suffix' }
  const { hasSuffix } = useFormKitSection(context)
  expect(hasSuffix.value).toBe(true)
})

it('returns false for hasSuffix when context has an empty suffix', () => {
  const context = { suffix: '' }
  const { hasSuffix } = useFormKitSection(context)
  expect(hasSuffix.value).toBe(false)
})

it('returns false for hasSuffix when context is null', () => {
  const context = null
  const { hasSuffix } = useFormKitSection(context)
  expect(hasSuffix.value).toBe(false)
})

it('returns false for hasSuffix when context.suffix is null', () => {
  const context = { suffix: null }
  const { hasSuffix } = useFormKitSection(context)
  expect(hasSuffix.value).toBe(false)
})

it('generates a unique id using generateId', () => {
  const { generateId } = useFormKitSection({})
  const id1 = generateId()
  const id2 = generateId()
  expect(id1).not.toBe(id2)
  expect(id1).toMatch(/^[0-9a-f-]{36}$/i)
  expect(id2).toMatch(/^[0-9a-f-]{36}$/i)
})

it('works with empty context when generating id', () => {
  const { generateId } = useFormKitSection(null)
  const id = generateId()
  expect(id).toMatch(/^[0-9a-f-]{36}$/i)
})
