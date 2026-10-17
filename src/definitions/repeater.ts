import type { FormKitNode, FormKitTypeDefinition } from '@formkit/core'
import { createInput } from '@formkit/vue'
import { useFormKitSchema } from '../composables'
import { clonePlain } from '../utils/clonePlain'

const { addList, addElement, addListGroup, addComponent } = useFormKitSchema()

function addButtonGroup(buttonGroupClass: string = '', buttonGroupItemClass: string = '', buttonSize: string, render: string = 'true') {
  // The buttons only show an icon, so each gets the name that screen readers and the tooltip show: its label
  // with the number of its row (`Delete item 2`), as the rows have the same buttons.
  const addActionButtonComponent = (onClick: string = '', icon: string = '', severity: string = '', render: string = 'true', disabled: string = 'false', label: string = ''): object => {
    const name = `${label} + " " + ($index + 1)`
    return addElement('div', [addComponent('Button', { 'onClick': onClick, icon, severity, disabled, 'size': buttonSize, 'aria-label': name, 'title': name })], { class: buttonGroupItemClass }, render)
  }

  return addElement('div', [
    addActionButtonComponent('$moveNodeUp($node.parent, $index)', 'pi pi-arrow-up', 'secondary', '$renderMoveButtons', '$index === 0', '$moveUpLabel'),
    addActionButtonComponent('$removeNode($node.parent, $index)', 'pi pi-trash', 'danger', '$displayDeleteButton', '$node.parent.value.length === $minItems', '$deleteLabel'),
    addActionButtonComponent('$cloneNode($node.parent, $index)', 'pi pi-clone', '', '$displayCloneButton', '$node.parent.value.length > $maxItems -1', '$cloneLabel'),
    addActionButtonComponent('$addNode($node.parent, $index)', 'pi pi-plus', '', '$displayAddButton', '$node.parent.value.length > $maxItems -1', '$addLabel'),
    addActionButtonComponent('$moveNodeDown($node.parent, $index)', 'pi pi-arrow-down', 'secondary', '$renderMoveButtons', '$index === $node.parent.value.length -1', '$moveDownLabel'),
  ], { class: buttonGroupClass }, render)
}

function addInsertButton(label: string = 'Add Item', icon: string = 'i-lucide-plus', styleClass: string = '', buttonSize: string, render: string = 'true') {
  return addElement('div', [
    addComponent('Button', { onClick: '$insertNode($node)', label, icon, size: buttonSize, disabled: '$node.value.length > $maxItems -1' }),
  ], { class: styleClass }, render)
}

function addDragHandle(handleClass: string = '', iconClass: string = '', render: string = 'true') {
  return addElement('span', [
    addElement('i', [], { class: iconClass }),
  ], {
    'class': handleClass,
    'aria-label': 'Drag to reorder',
  }, render)
}

export const primeRepeaterDefinition: FormKitTypeDefinition = createInput(
  addElement('div', [
    addList('$listName', [
      addInsertButton('$insertButtonLabel', 'pi pi-plus', '$insertButtonClass', '$insertButtonSize', '$node.children.length == 0 || $alwaysDisplayInsertButton'),
      addListGroup([
        addElement('div', [
          addDragHandle('$internalDragHandleClass', '$dragHandleIconClass', '$renderDragHandle'),
          { children: '$slots.default' },
          addButtonGroup('$buttonGroupClass', '$buttonGroupItemClass', '$buttonSize', '$renderButtons'),
        ], {
          id: '$getListItemId($index)',
          class: '$getListItemClass($index)',
          draggable: '$draggable',
          onDragstart: '$dragNodeStart($node.parent, $index)',
          onDragover: '$dragNodeOver($index)',
          onDragleave: '$dragNodeLeave($index)',
          onDrop: '$dropNode($node.parent, $index)',
          onDragend: '$dragNodeEnd',
        }),
      ], true, {}),
    ], true, 'true', { value: '$value', validation: '$repeaterValidation' }),
  ], { class: '$internalListClass', id: '$internalListId' }, true),
  {
    props: ['insertButtonLabel', 'insertButtonClass', 'insertButtonSize', 'alwaysDisplayInsertButton', 'newItem', 'listClass', 'listItemClass', 'hideButtonGroup', 'hideMoveButtons', 'buttonGroupClass', 'buttonGroupItemClass', 'buttonSize', 'displayCloneButton', 'displayAddButton', 'displayDeleteButton', 'minItems', 'maxItems', 'moveUpLabel', 'moveDownLabel', 'deleteLabel', 'cloneLabel', 'addLabel', 'displayDragHandle', 'draggable', 'dragHandleClass', 'dragHandleIconClass'],
    features: [addRepeaterHandler],
  },
)

function addRepeaterHandler(node: FormKitNode): void {
  const swapElements = (array: any[], index1: number, index2: number) => {
    array.splice(index2, 0, array.splice(index1, 1)[0])
    return array
  }

  node.on('created', () => {
    if (node.context) {
      let dragStartIndex: number | null = null
      // Deep-cloned per row, so rows never share a nested array/object with each other or with
      // the `newItem` prop. Read on every call: a `newItem` changed after mount reaches new rows.
      const makeNewItem = (): object => clonePlain(node.context?.newItem || {})

      // Makes the list and row element ids unique per repeater instance. Not random: a server-rendered
      // page and its hydration create the repeater twice, and an id that differs between the two
      // is a hydration mismatch. FormKit's node id is unique per node and the same on both sides.
      const instanceId = String(node.props.id ?? node.name)

      // lives on the (reactive) context, so the drop-target class re-renders while dragging
      const context = node.context
      context.dragOverIndex = null

      node.context.listName = node.name
      node.context.renderButtons = !node.context.hideButtonGroup
      node.context.insertButtonSize = node.context.insertButtonSize ? node.context.insertButtonSize : ''
      node.context.buttonSize = node.context.buttonSize ? node.context.buttonSize : ''
      node.context.renderMoveButtons = !node.context.hideMoveButtons
      node.context.draggable = !!node.context.draggable
      node.context.renderDragHandle = !!node.context.displayDragHandle
      node.context.dragHandleIconClass = node.context.dragHandleIconClass || 'pi pi-bars'
      node.context.internalDragHandleClass = node.context.dragHandleClass ? `formkit-repeater-drag-handle ${node.context.dragHandleClass}` : 'formkit-repeater-drag-handle'
      node.context.internalListClass = node.context.listClass ? `formkit-items ${node.context.listClass}` : 'formkit-items'
      node.context.internalListItemClass = node.context.listItemClass ? `formkit-item ${node.context.listItemClass}` : 'formkit-item'
      node.context.moveUpLabel = node.context.moveUpLabel || 'Move item up'
      node.context.moveDownLabel = node.context.moveDownLabel || 'Move item down'
      node.context.deleteLabel = node.context.deleteLabel || 'Delete item'
      node.context.cloneLabel = node.context.cloneLabel || 'Clone item'
      node.context.addLabel = node.context.addLabel || 'Add item below'
      node.context.minItems = node.context.minItems !== undefined ? node.context.minItems : 0
      node.context.maxItems = node.context.maxItems !== undefined ? node.context.maxItems : Number.POSITIVE_INFINITY
      // `+` keeps the rule running on an empty list: FormKit skips every other rule on an empty
      // value, so a repeater below its `minItems` would otherwise pass as valid.
      node.context.repeaterValidation = [['+length', node.context.minItems, node.context.maxItems]]
      node.context.internalListId = `formkit-items-${instanceId}`

      node.context.getListItemClass = (index: number): string => {
        if (context.dragOverIndex === index && dragStartIndex !== index)
          return `${node.context?.internalListItemClass} formkit-repeater-drop-target`
        return node.context?.internalListItemClass?.toString() ?? ''
      }

      node.context.getListItemId = (index: number): string => {
        return `formkit-item-${index}-${instanceId}`
      }

      node.context.insertNode = (parentNode: any) => (): void => {
        if (parentNode && Array.isArray(parentNode._value)) {
          const newArray: any[] = [makeNewItem(), ...parentNode.value]
          parentNode.input(newArray, false)
        }
      }
      node.context.removeNode = (parentNode: any, index: number) => (): void => {
        if (parentNode && Array.isArray(parentNode._value)) {
          parentNode.input(parentNode._value.filter((_: any, i: number): boolean => i !== index), false)
        }
      }
      node.context.addNode = (parentNode: any, index: number) => (): void => {
        if (parentNode && Array.isArray(parentNode._value)) {
          const array: any[] = parentNode.value
          array.splice(index + 1, 0, makeNewItem())
          parentNode.input(array, false)
        }
      }
      node.context.cloneNode = (parentNode: any, index: number) => (): void => {
        if (parentNode && Array.isArray(parentNode._value)) {
          const array: any[] = parentNode.value
          array.splice(index + 1, 0, clonePlain(array[index]))
          parentNode.input(array, false)
        }
      }
      node.context.moveNodeUp = (parentNode: any, index: number) => (): void => {
        if (parentNode && Array.isArray(parentNode._value)) {
          if (index > 0)
            parentNode.input(swapElements(parentNode.value, index - 1, index), false)
        }
      }
      node.context.moveNodeDown = (parentNode: any, index: number) => (): void => {
        if (parentNode && Array.isArray(parentNode._value)) {
          if (index < parentNode.value.length - 1)
            parentNode.input(swapElements(parentNode.value, index, index + 1), false)
        }
      }
      node.context.dragNodeStart = (_parentNode: any, index: number) => (event?: DragEvent): void => {
        dragStartIndex = index
        if (event?.dataTransfer) {
          event.dataTransfer.effectAllowed = 'move'
          event.dataTransfer.setData('text/plain', String(index))
        }
      }
      node.context.dragNodeOver = (targetIndex: number) => (event?: DragEvent): void => {
        event?.preventDefault()
        context.dragOverIndex = targetIndex
        if (event?.dataTransfer)
          event.dataTransfer.dropEffect = 'move'
      }
      node.context.dragNodeLeave = (targetIndex: number) => (): void => {
        if (context.dragOverIndex === targetIndex)
          context.dragOverIndex = null
      }
      node.context.dropNode = (parentNode: any, targetIndex: number) => (event?: DragEvent): void => {
        event?.preventDefault()
        if (!parentNode || !Array.isArray(parentNode._value)) {
          context.dragOverIndex = null
          return
        }

        const sourceFromEvent = Number.parseInt(event?.dataTransfer?.getData('text/plain') || '', 10)
        const sourceIndex = Number.isInteger(sourceFromEvent) ? sourceFromEvent : dragStartIndex

        if (sourceIndex === null || sourceIndex === targetIndex) {
          context.dragOverIndex = null
          return
        }
        if (sourceIndex < 0 || sourceIndex >= parentNode.value.length) {
          context.dragOverIndex = null
          return
        }

        parentNode.input(swapElements(parentNode.value, sourceIndex, targetIndex), false)
        dragStartIndex = null
        context.dragOverIndex = null
      }
      node.context.dragNodeEnd = (): void => {
        dragStartIndex = null
        context.dragOverIndex = null
      }
    }
  })
}
