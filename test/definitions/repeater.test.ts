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
})
