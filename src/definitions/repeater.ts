import type { FormKitNode, FormKitTypeDefinition } from '@formkit/core'
import { createInput } from '@formkit/vue'
import { useFormKitSchema } from '../composables'

const { addList, addElement, addListGroup, addComponent } = useFormKitSchema()

function addButtonGroup(buttonGroupClass: string = '', buttonGroupItemClass: string = '', buttonSize: string, render: string = 'true') {
  const addActionButtonComponent = (onClick: string = '', icon: string = '', severity: string = '', render: string = 'true', disabled: string = 'false'): object => {
    return addElement('div', [addComponent('Button', { onClick, icon, severity, disabled, size: buttonSize })], { class: buttonGroupItemClass }, render)
  }

  return addElement('div', [
    addActionButtonComponent('$moveNodeUp($node.parent, $index)', 'pi pi-arrow-up', 'secondary', '$renderMoveButtons', '$index === 0'),
    addActionButtonComponent('$removeNode($node.parent, $index)', 'pi pi-trash', 'danger', '$displayDeleteButton', '$node.parent.value.length === $minItems'),
    addActionButtonComponent('$cloneNode($node.parent, $index)', 'pi pi-clone', '', '$displayCloneButton', '$node.parent.value.length > $maxItems -1'),
    addActionButtonComponent('$addNode($node.parent, $index)', 'pi pi-plus', '', '$displayAddButton', '$node.parent.value.length > $maxItems -1'),
    addActionButtonComponent('$moveNodeDown($node.parent, $index)', 'pi pi-arrow-down', 'secondary', '$renderMoveButtons', '$index === $node.parent.value.length -1'),
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
          draggable: '$renderDragHandle',
          onDragstart: '$dragNodeStart($node.parent, $index)',
          onDragover: '$dragNodeOver($index)',
          onDragleave: '$dragNodeLeave($index)',
          onDrop: '$dropNode($node.parent, $index)',
          onDragend: '$dragNodeEnd',
        }),
      ], true, {}),
    ], true, 'true'),
  ], { class: '$internalListClass', id: '$internalListId' }, true),
  {
    props: ['insertButtonLabel', 'insertButtonClass', 'insertButtonSize', 'alwaysDisplayInsertButton', 'newItem', 'listClass', 'listItemClass', 'hideButtonGroup', 'hideMoveButtons', 'buttonGroupClass', 'buttonGroupItemClass', 'buttonSize', 'displayCloneButton', 'displayAddButton', 'displayDeleteButton', 'minItems', 'maxItems', 'displayDragHandle', 'dragHandleClass', 'dragHandleIconClass'],
    features: [addRepeaterHandler],
  },
)

function addRepeaterHandler(node: FormKitNode): void {
  const swapElements = (array: any[], index1: number, index2: number) => {
    array.splice(index2, 0, array.splice(index1, 1)[0])
    return array
  }

  const uuid = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2)

  node.on('created', () => {
    if (node.context) {
      let dragStartIndex: number | null = null
      let dragOverIndex: number | null = null
      const newItem = node.context.newItem || {}

      node.context.listName = node.name
      node.context.renderButtons = !node.context.hideButtonGroup
      node.context.insertButtonSize = node.context.insertButtonSize ? node.context.insertButtonSize : ''
      node.context.buttonSize = node.context.buttonSize ? node.context.buttonSize : ''
      node.context.renderMoveButtons = !node.context.hideMoveButtons
      node.context.renderDragHandle = !!node.context.displayDragHandle
      node.context.dragHandleIconClass = node.context.dragHandleIconClass || 'pi pi-bars'
      node.context.internalDragHandleClass = node.context.dragHandleClass ? `formkit-repeater-drag-handle ${node.context.dragHandleClass}` : 'formkit-repeater-drag-handle'
      node.context.internalListClass = node.context.listClass ? `formkit-items ${node.context.listClass}` : 'formkit-items'
      node.context.internalListItemClass = node.context.listItemClass ? `formkit-item ${node.context.listItemClass}` : 'formkit-item'
      node.context.internalListId = `formkit-items-${uuid}`

      node.context.getListItemClass = (index: number): string => {
        if (dragOverIndex === index && dragStartIndex !== index)
          return `${node.context?.internalListItemClass} formkit-repeater-drop-target`
        return node.context?.internalListItemClass?.toString() ?? ''
      }

      node.context.getListItemId = (index: number): string => {
        return `formkit-item-${index}-${uuid}`
      }

      node.context.insertNode = (parentNode: any) => (): void => {
        if (parentNode && Array.isArray(parentNode._value)) {
          const newArray: any[] = [{ ...newItem }, ...parentNode.value]
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
          array.splice(index + 1, 0, newItem)
          parentNode.input(array, false)
        }
      }
      node.context.cloneNode = (parentNode: any, index: number) => (): void => {
        if (parentNode && Array.isArray(parentNode._value)) {
          const item: any = parentNode.value[index]
          const array: any[] = parentNode.value
          array.splice(index + 1, 0, item)
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
        dragOverIndex = targetIndex
        if (event?.dataTransfer)
          event.dataTransfer.dropEffect = 'move'
      }
      node.context.dragNodeLeave = (targetIndex: number) => (): void => {
        if (dragOverIndex === targetIndex)
          dragOverIndex = null
      }
      node.context.dropNode = (parentNode: any, targetIndex: number) => (event?: DragEvent): void => {
        event?.preventDefault()
        if (!parentNode || !Array.isArray(parentNode._value)) {
          dragOverIndex = null
          return
        }

        const sourceFromEvent = Number.parseInt(event?.dataTransfer?.getData('text/plain') || '', 10)
        const sourceIndex = Number.isInteger(sourceFromEvent) ? sourceFromEvent : dragStartIndex

        if (sourceIndex === null || sourceIndex === targetIndex) {
          dragOverIndex = null
          return
        }
        if (sourceIndex < 0 || sourceIndex >= parentNode.value.length) {
          dragOverIndex = null
          return
        }

        parentNode.input(swapElements(parentNode.value, sourceIndex, targetIndex), false)
        dragStartIndex = null
        dragOverIndex = null
      }
      node.context.dragNodeEnd = (): void => {
        dragStartIndex = null
        dragOverIndex = null
      }
    }
  })
}
