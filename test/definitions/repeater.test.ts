import { describe, expect, it, vi } from 'vitest'
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
    const node = createRepeaterNode({ displayDragHandle: true }, { id: 'attack-list' })

    expect(node.context.renderDragHandle).toBe(true)
    expect(node.context.dragHandleIconClass).toBe('pi pi-bars')
    expect(node.context.internalListId).toBe('formkit-prime-repeater-attack-list')
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
})
