import { describe, expect, it } from 'vitest'
import { cloneJson, parseJson } from '../dev/utils/json'

describe('parseJson', () => {
  it('parses the text of the editor', () => {
    expect(parseJson('{"a":[1,2]}')).toEqual({ ok: true, value: { a: [1, 2] } })
    expect(parseJson('[]')).toEqual({ ok: true, value: [] })
    expect(parseJson('"text"')).toEqual({ ok: true, value: 'text' })
    expect(parseJson('0')).toEqual({ ok: true, value: 0 })
  })

  it('hands over a value that is not text as it is', () => {
    const value = { a: 1 }

    expect(parseJson(value)).toEqual({ ok: true, value })
    expect((parseJson(value) as { value: unknown }).value).toBe(value)
    expect(parseJson(null)).toEqual({ ok: true, value: null })
    expect(parseJson([1])).toEqual({ ok: true, value: [1] })
  })

  it('reports invalid text with the reason instead of throwing', () => {
    const result = parseJson('{"a":')

    expect(result.ok).toBe(false)
    expect((result as { message: string }).message).not.toBe('')
  })

  it('reports empty text and text that is only almost JSON', () => {
    expect(parseJson('').ok).toBe(false)
    expect(parseJson('   ').ok).toBe(false)
    expect(parseJson('{a: 1}').ok).toBe(false)
    expect(parseJson('[1, 2,]').ok).toBe(false)
    expect(parseJson('{\'a\': 1}').ok).toBe(false)
  })
})

describe('cloneJson', () => {
  it('copies without sharing anything with the original', () => {
    const original = { name: 'Sword', tags: ['sharp'], stats: { damage: [1, 2] } }
    const copy = cloneJson(original)

    expect(copy).toEqual(original)
    expect(copy).not.toBe(original)
    expect(copy.tags).not.toBe(original.tags)

    copy.stats.damage.push(3)
    expect(original.stats.damage).toEqual([1, 2])
  })

  it('copies arrays and primitives', () => {
    expect(cloneJson([1, { a: 2 }])).toEqual([1, { a: 2 }])
    expect(cloneJson('text')).toBe('text')
    expect(cloneJson(5)).toBe(5)
  })
})
