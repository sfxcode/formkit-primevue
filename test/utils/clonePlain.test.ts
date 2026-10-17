import { describe, expect, it } from 'vitest'
import { clonePlain } from '../../src/utils/clonePlain'

describe('clonePlain', () => {
  it('returns primitives and null unchanged', () => {
    expect(clonePlain(5)).toBe(5)
    expect(clonePlain('a')).toBe('a')
    expect(clonePlain(null)).toBeNull()
    expect(clonePlain(undefined)).toBeUndefined()
  })

  it('deep-copies plain objects and arrays', () => {
    const source = { name: 'Sword', tags: ['sharp'], stats: { damage: [1, 2] } }
    const copy = clonePlain(source)

    expect(copy).toEqual(source)
    expect(copy).not.toBe(source)
    expect(copy.tags).not.toBe(source.tags)
    expect(copy.stats).not.toBe(source.stats)
    expect(copy.stats.damage).not.toBe(source.stats.damage)

    copy.stats.damage.push(3)
    expect(source.stats.damage).toEqual([1, 2])
  })

  it('keeps class instances, Date, Map and File-like values as the same reference', () => {
    class Money {
      constructor(public amount: number) {}
    }
    const money = new Money(5)
    const date = new Date(0)
    const map = new Map([['a', 1]])
    const copy = clonePlain({ money, date, map })

    expect(copy.money).toBe(money)
    expect(copy.money).toBeInstanceOf(Money)
    expect(copy.date).toBe(date)
    expect(copy.map).toBe(map)
  })

  it('copies null-prototype objects as null-prototype objects', () => {
    const source = Object.assign(Object.create(null), { a: { b: 1 } })
    const copy = clonePlain(source)

    expect(Object.getPrototypeOf(copy)).toBeNull()
    expect(copy.a).toEqual({ b: 1 })
    expect(copy.a).not.toBe(source.a)
  })

  it('copies a cycle as a cycle instead of recursing forever', () => {
    const source: any = { name: 'loop', list: [] }
    source.self = source
    source.list.push(source)

    const copy = clonePlain(source)

    expect(copy).not.toBe(source)
    expect(copy.self).toBe(copy)
    expect(copy.list[0]).toBe(copy)
  })

  it('preserves shared references inside the copy', () => {
    const shared = { x: 1 }
    const copy = clonePlain({ a: shared, b: shared })

    expect(copy.a).toBe(copy.b)
    expect(copy.a).not.toBe(shared)
  })
})
