import type { FormKitNode, FormKitTypeDefinition } from '@formkit/core'
import { createInput } from '@formkit/vue'
import { useFormKitSchema } from '../composables/useFormKitSchema'

const { addList, addElement, addListGroup, addComponent, addElementsInOuterDiv } = useFormKitSchema()

function addActionButtons(innerClass: string = '', outerClass: string = '', label: string = 'Actions', help: string = '', render: string = 'true') {
  const addButtonComponent = (onClick: string = '', label: string = '', icon: string = '', severity: string = '', render: string = 'true', disabled: string = 'false', styleClass: string = 'p-button-sm'): object => {
    return addComponent('Button', { onClick, label, icon, class: styleClass, severity, disabled }, render)
  }

  return addElementsInOuterDiv([
    addButtonComponent('$removeNode($node.parent, $index)', '', 'pi pi-times', 'danger', 'true', '$false'),
    addButtonComponent('$cloneNode($node.parent, $index)', '', 'pi pi-clone', '', '$displayCloneButton', '$false'),
    addButtonComponent('$moveNodeDown($node.parent, $index)', '', 'pi pi-arrow-down', 'secondary', 'true', '$index === $node.parent.value.length -1'),
    addButtonComponent('$moveNodeUp($node.parent, $index)', '', 'pi pi-arrow-up', 'secondary', 'true', '$index === 0'),
  ], innerClass, outerClass, label, help, render)
}

export const primeRepeaterDefinition: FormKitTypeDefinition = createInput(
  [
    addElement('div', [
      addList('$listName', [
        addComponent('Button', { onClick: '$addNode($node)', label: '$addButtonLabel', size: 'small', icon: 'pi pi-plus', class: '$addButtonClass' }, '$node.children.length == 0 || $alwaysDisplayAddButton'),
        addListGroup([
          addElement('div', [
            {
              children: '$slots.default',
            },
            addActionButtons('$buttonsInnerClass', '$buttonsOuterClass', '$buttonsLabel'),
          ], { class: '$itemClass' }),

        ]),
      ], true, 'true'),
    ], { class: '$listClass' }),

  ],
  {
    props: ['buttonsOuterClass', 'buttonsInnerClass', 'buttonsLabel', 'addButtonLabel', 'addButtonClass', 'newItem', 'itemClass', 'listClass', 'displayCloneButton', 'alwaysDisplayAddButton'],
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
    if (node.context)  {
      const newItem = node.context.newItem || {}

    node.context.listName = node.name

    node.context.removeNode = (parentNode: FormKitNode, index: number) => (): void => {
      if (parentNode && Array.isArray(parentNode._value)) {
        parentNode.input(parentNode._value.filter((_: any, i: number): boolean => i !== index), false)
      }
    }
    node.context.addNode = (parentNode: any) => (): void => {
      if (parentNode && Array.isArray(parentNode._value)) {
        const newArray: any[] = [...parentNode.value, newItem]
        parentNode.input(newArray, false)
      }
    }
    node.context.cloneNode = (parentNode: any, index: number) => (): void => {
      if (parentNode && Array.isArray(parentNode._value)) {
        const item: any = parentNode.value[index]
        const newArray: any[] = [...parentNode.value.slice(0, index), { ...item }, ...parentNode.value.slice(index)]
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
