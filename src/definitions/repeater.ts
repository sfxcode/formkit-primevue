import type { FormKitNode, FormKitTypeDefinition } from '@formkit/core'
import { createInput } from '@formkit/vue'
import { useFormKitSchema } from '../composables/useFormKitSchema'

const { addList, addElement, addListGroup, addComponent } = useFormKitSchema()

function addButtonGroup(buttonGroupClass: string = '', buttonGroupItemClass: string = '', buttonSize: string, render: string = 'true') {
  const addActionButtonComponent = (onClick: string = '', icon: string = '', severity: string = '', render: string = 'true', disabled: string = 'false'): object => {
    return addElement('div', [addComponent('Button', { onClick, icon, severity, disabled, size: buttonSize })], { class: buttonGroupItemClass }, render)
  }

  return addElement('div', [
    addActionButtonComponent('$moveNodeUp($node.parent, $index)', 'pi pi-arrow-up', 'secondary', '$renderMoveButtons', '$index === 0'),
    addActionButtonComponent('$removeNode($node.parent, $index)', 'pi pi-trash', 'danger', '$displayDeleteButton', '$false'),
    addActionButtonComponent('$cloneNode($node.parent, $index)', 'pi pi-clone', '', '$displayCloneButton', '$false'),
    addActionButtonComponent('$addNode($node.parent, $index)', 'pi pi-plus', '', '$displayAddButton', '$false'),
    addActionButtonComponent('$moveNodeDown($node.parent, $index)', 'pi pi-arrow-down', 'secondary', '$renderMoveButtons', '$index === $node.parent.value.length -1'),
  ], { class: buttonGroupClass }, render)
}

function addInsertButton(label: string = 'Add Item', icon: string = 'i-lucide-plus', styleClass: string = '', buttonSize: string, render: string = 'true') {
  return addElement('div', [
    addComponent('Button', { onClick: '$insertNode($node)', label, icon, size: buttonSize }),
  ], { class: styleClass }, render)
}

export const primeRepeaterDefinition: FormKitTypeDefinition = createInput(
  addElement('div', [
    addList('$listName', [
      addInsertButton('$insertButtonLabel', 'pi pi-plus', '$insertButtonClass', '$insertButtonSize', '$node.children.length == 0 || $alwaysDisplayInsertButton'),
      addListGroup([
        addElement('div', [{ children: '$slots.default' }, addButtonGroup('$buttonGroupClass', '$buttonGroupItemClass', '$buttonSize', '$renderButtons')], { class: '$internalListItemClass' }),
      ], true, {}),
    ], true, 'true'),
  ], { class: '$internalListClass' }, true),
  {
    props: ['insertButtonLabel', 'insertButtonClass', 'insertButtonSize', 'alwaysDisplayInsertButton', 'newItem', 'listClass', 'listItemClass', 'hideButtonGroup', 'hideMoveButtons', 'buttonGroupClass', 'buttonGroupItemClass', 'buttonSize', 'displayCloneButton', 'displayAddButton', 'displayDeleteButton'],
    features: [addRepeaterHandler],
  },
)

function addRepeaterHandler(node: FormKitNode): void {
  const swapElements = (array: any[], index1: number, index2: number) => {
    const newArray = [...array]
    const temp = newArray[index1]
    newArray[index1] = newArray[index2]
    newArray[index2] = temp
    return newArray
  }
  node.on('created', () => {
    if (node.context) {
      const newItem = node.context.newItem || {}

      node.context.listName = node.name
      node.context.renderButtons = !node.context.hideButtonGroup
      node.context.insertButtonSize = node.context.insertButtonSize ? node.context.insertButtonSize : ''
      node.context.buttonSize = node.context.buttonSize ? node.context.buttonSize : ''
      node.context.renderMoveButtons = !node.context.hideMoveButtons
      node.context.internalListClass = node.context.listClass ? `formkit-items ${node.context.listClass}` : 'formkit-items'
      node.context.internalListItemClass = node.context.listItemClass ? `formkit-item ${node.context.listItemClass}` : 'formkit-item'

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
          const newArray: any[] = [...parentNode.value.slice(0, index + 1), { ...newItem }, ...parentNode.value.slice(index + 1)]
          parentNode.input([...newArray], false)
        }
      }
      node.context.cloneNode = (parentNode: any, index: number) => (): void => {
        if (parentNode && Array.isArray(parentNode._value)) {
          const item: any = parentNode.value[index]
          const newArray: any[] = [...parentNode.value.slice(0, index + 1), { ...item }, ...parentNode.value.slice(index + 1)]
          parentNode.input([...newArray], false)
        }
      }
      node.context.moveNodeUp = (parentNode: any, index: number) => (): void => {
        if (parentNode && Array.isArray(parentNode._value)) {
          const array: any[] = [...parentNode.value]
          if (index > 0)
            parentNode.input(swapElements(array, index - 1, index), false)
        }
      }
      node.context.moveNodeDown = (parentNode: any, index: number) => (): void => {
        if (parentNode && Array.isArray(parentNode._value)) {
          const array: any[] = [...parentNode.value]
          if (index < array.length - 1)
            parentNode.input(swapElements(array, index, index + 1), false)
        }
      }
    }
  })
}
