import { createNode } from '@formkit/core'
import { defaultConfig } from '@formkit/vue'
import { describe, expect, it, vi } from 'vitest'
import { computed, reactive } from 'vue'
import { primeRepeaterDefinition } from '../../src/definitions/repeater'

function createRepeaterNode(context: Record<string, any> = {}, props: Record<string, any> = {}) {
  let createdHook: (() => void) | undefined

  const node: any = {
    name: 'items',
    props,
    context,
    on: (event: string, callback: () => void) => {
      if (event === 'created')
        createdHook = callback
    },
  }

  const repeaterFeature = (primeRepeaterDefinition as any).features?.[0]
  repeaterFeature(node)
  createdHook?.()

  return node
}

describe('primeRepeaterDefinition', () => {
  it('enables drag handlers when drag handle is displayed', () => {
    const node = createRepeaterNode({ draggable: true, displayDragHandle: true }, { id: 'attack-list' })

    expect(node.context.draggable).toBe(true)
    expect(node.context.renderDragHandle).toBe(true)
    expect(node.context.dragHandleIconClass).toBe('pi pi-bars')
    expect(node.context.internalListId).toContain('formkit-items')
    expect(typeof node.context.dragNodeStart).toBe('function')
    expect(typeof node.context.dropNode).toBe('function')
  })

  it('reorders items via drag and drop', () => {
    const node = createRepeaterNode({ displayDragHandle: true })
    const parentNode: any = {
      _value: ['Sword', 'Dagger', 'Spear'],
      value: ['Sword', 'Dagger', 'Spear'],
      input: vi.fn((nextValue: string[]) => {
        parentNode.value = nextValue
        parentNode._value = nextValue
      }),
    }

    const dragEvent: any = {
      dataTransfer: {
        effectAllowed: '',
        setData: vi.fn(),
      },
    }
    node.context.dragNodeStart(parentNode, 2)(dragEvent)

    const getData = vi.fn(() => '2')
    const dropEvent: any = {
      preventDefault: vi.fn(),
      dataTransfer: {
        getData,
      },
    }
    node.context.dropNode(parentNode, 0)(dropEvent)

    expect(parentNode.input).toHaveBeenCalledTimes(1)
    expect(parentNode.value).toEqual(['Spear', 'Sword', 'Dagger'])
    expect(getData).toHaveBeenCalledWith('text/plain')
  })

  it('applies and clears drop-target highlight class during drag over', () => {
    const node = createRepeaterNode({ displayDragHandle: true, listItemClass: 'custom-item' })

    expect(node.context.getListItemClass(1)).toBe('formkit-item custom-item')

    node.context.dragNodeStart({}, 0)()
    node.context.dragNodeOver(1)({ preventDefault: vi.fn() })
    expect(node.context.getListItemClass(1)).toContain('formkit-repeater-drop-target')

    node.context.dragNodeLeave(1)()
    expect(node.context.getListItemClass(1)).toBe('formkit-item custom-item')
  })

  it('does not reorder when source and target indexes are the same', () => {
    const node = createRepeaterNode({ displayDragHandle: true })
    const parentNode: any = {
      _value: ['Axe', 'Bow'],
      value: ['Axe', 'Bow'],
      input: vi.fn(),
    }

    node.context.dragNodeStart(parentNode, 1)()
    node.context.dragNodeOver(1)({ preventDefault: vi.fn() })
    node.context.dropNode(parentNode, 1)({ preventDefault: vi.fn() })

    expect(parentNode.input).not.toHaveBeenCalled()
    expect(node.context.getListItemClass(1)).toBe('formkit-item')
  })

  it('re-renders the drop-target class when the context is reactive', () => {
    const node = createRepeaterNode(reactive({ displayDragHandle: true }))
    const itemClass = computed(() => node.context.getListItemClass(1))

    expect(itemClass.value).toBe('formkit-item')

    node.context.dragNodeStart({}, 0)()
    node.context.dragNodeOver(1)({ preventDefault: vi.fn() })
    expect(itemClass.value).toContain('formkit-repeater-drop-target')

    node.context.dragNodeEnd()
    node.context.dragNodeOver(1)({ preventDefault: vi.fn() })
    node.context.dragNodeLeave(1)()
    expect(itemClass.value).toBe('formkit-item')
  })

  describe('items never share an object', () => {
    function createParent(value: any[]) {
      const parentNode: any = {
        _value: value,
        value,
        input: vi.fn((nextValue: any[]) => {
          parentNode.value = nextValue
          parentNode._value = nextValue
        }),
      }
      return parentNode
    }

    it('cloneNode inserts a copy of the item', () => {
      const node = createRepeaterNode()
      const parentNode = createParent([{ name: 'Sword', tags: ['sharp'] }, { name: 'Dagger', tags: [] }])

      node.context.cloneNode(parentNode, 0)()

      const [original, clone] = parentNode.value
      expect(parentNode.value).toHaveLength(3)
      expect(clone).toEqual(original)
      expect(clone).not.toBe(original)
      expect(clone.tags).not.toBe(original.tags)

      clone.name = 'CLONE'
      clone.tags.push('edited')
      expect(original).toEqual({ name: 'Sword', tags: ['sharp'] })
    })

    it('addNode inserts a copy of newItem, a new one on every call', () => {
      const newItem = { name: '', damage: '' }
      const node = createRepeaterNode({ newItem })
      const parentNode = createParent([{ name: 'Sword', damage: '2D6' }])

      node.context.addNode(parentNode, 0)()
      node.context.addNode(parentNode, 0)()

      const [, first, second] = parentNode.value
      expect(first).toEqual(newItem)
      expect(first).not.toBe(newItem)
      expect(second).not.toBe(first)

      first.damage = 'POLLUTED'
      expect(newItem).toEqual({ name: '', damage: '' })
      expect(second.damage).toBe('')
    })

    it('insertNode inserts a deep copy of newItem', () => {
      const newItem = { item: '', stats: { quantity: 1 } }
      const node = createRepeaterNode({ newItem })
      const parentNode = createParent([])

      node.context.insertNode(parentNode)()
      node.context.insertNode(parentNode)()

      const [first, second] = parentNode.value
      first.stats.quantity = 99
      expect(newItem.stats.quantity).toBe(1)
      expect(second.stats.quantity).toBe(1)
    })
  })

  it('reads newItem on every insert, so a change after mount reaches new rows', () => {
    const context = reactive<Record<string, any>>({ newItem: { name: 'old' } })
    const node = createRepeaterNode(context)
    const parentNode: any = {
      _value: [],
      value: [],
      input: vi.fn((nextValue: any[]) => {
        parentNode.value = nextValue
        parentNode._value = nextValue
      }),
    }

    node.context.insertNode(parentNode)()
    context.newItem = { name: 'new' }
    node.context.insertNode(parentNode)()
    node.context.addNode(parentNode, 0)()

    expect(parentNode.value).toEqual([{ name: 'new' }, { name: 'new' }, { name: 'old' }])
  })

  it('does not copy class instances in new and cloned rows', () => {
    class Money {
      constructor(public amount: number) {}
    }
    const price = new Money(5)
    const node = createRepeaterNode({ newItem: { price } })
    const parentNode: any = {
      _value: [],
      value: [],
      input: vi.fn((nextValue: any[]) => {
        parentNode.value = nextValue
        parentNode._value = nextValue
      }),
    }

    node.context.insertNode(parentNode)()
    node.context.cloneNode(parentNode, 0)()

    expect(parentNode.value[0].price).toBe(price)
    expect(parentNode.value[1].price).toBe(price)
  })

  describe('element ids', () => {
    it('are derived from the node id, so a server render and its hydration agree', () => {
      const first = createRepeaterNode({}, { id: 'attack-list' })
      const second = createRepeaterNode({}, { id: 'attack-list' })

      expect(first.context.internalListId).toBe('formkit-items-attack-list')
      expect(first.context.internalListId).toBe(second.context.internalListId)
      expect(first.context.getListItemId(2)).toBe('formkit-item-2-attack-list')
      expect(first.context.getListItemId(2)).toBe(second.context.getListItemId(2))
    })

    it('differ between repeaters with different node ids', () => {
      const first = createRepeaterNode({}, { id: 'a' })
      const second = createRepeaterNode({}, { id: 'b' })

      expect(first.context.internalListId).not.toBe(second.context.internalListId)
    })

    it('fall back to the node name when there is no node id', () => {
      const node = createRepeaterNode()

      expect(node.context.internalListId).toBe('formkit-items-items')
    })
  })

  describe('min and max items', () => {
    it('default to no minimum and no maximum', () => {
      const node = createRepeaterNode()

      expect(node.context.minItems).toBe(0)
      expect(node.context.maxItems).toBe(Number.POSITIVE_INFINITY)
      expect(node.context.repeaterValidation).toEqual([['+length', 0, Number.POSITIVE_INFINITY]])
    })

    it('build a length rule from minItems and maxItems', () => {
      const node = createRepeaterNode({ minItems: 1, maxItems: 4 })

      expect(node.context.repeaterValidation).toEqual([['+length', 1, 4]])
    })

    it('keep a minItems of 0 and a maxItems of 0 instead of falling back to the defaults', () => {
      const node = createRepeaterNode({ minItems: 0, maxItems: 0 })

      expect(node.context.repeaterValidation).toEqual([['+length', 0, 0]])
    })

    it('fail an empty list below minItems, which FormKit would otherwise skip as empty', async () => {
      const { repeaterValidation } = createRepeaterNode({ minItems: 1, maxItems: 2 }).context
      const hasBlockingError = async (value: object[], validation: unknown) => {
        // a list takes its value from its children, so each row is a real group node
        const list = createNode({
          type: 'list',
          props: { type: 'list', validation },
          plugins: defaultConfig().plugins,
          children: value.map(row => createNode({ type: 'group', props: { type: 'group' }, value: row })),
        })
        await list.settled
        // validation runs a tick after the node settles
        await new Promise(resolve => setTimeout(resolve, 50))
        return list.ledger.value('blocking') > 0
      }

      expect(await hasBlockingError([], repeaterValidation)).toBe(true)
      expect(await hasBlockingError([{ a: 1 }], repeaterValidation)).toBe(false)
      expect(await hasBlockingError([{ a: 1 }, { a: 2 }], repeaterValidation)).toBe(false)
      expect(await hasBlockingError([{ a: 1 }, { a: 2 }, { a: 3 }], repeaterValidation)).toBe(true)
      // control: without the `+` the empty list passes
      expect(await hasBlockingError([], [['length', 1, 2]])).toBe(false)
    })

    it('are bound to the list node as its validation', () => {
      const schema = JSON.stringify((primeRepeaterDefinition as any).schema())

      expect(schema).toContain('"validation":"$repeaterValidation"')
    })
  })
})
