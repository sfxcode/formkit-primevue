import { useFormKitSchema } from './useFormKitSchema'

export function useFormKitRepeater() {
  const { addElement, addComponent, addElementsInOuterDiv } = useFormKitSchema()

  function addInsertButton(label: string = 'Add', innerClass: string = '', outerClass: string = '', buttonClass: string = 'p-button-sm', iconClass: string = 'pi pi-plus') {
    return addElementsInOuterDiv([
      addComponent('Button', { onClick: '$addNode($node)', label, class: buttonClass, icon: iconClass }, '$node.value.length == 0'),
    ], innerClass, outerClass)
  }

  function addListGroupFunctions(data: any, addNodeDefaultObject: object = {}) {
    const swapElements = (array: any[], index1: number, index2: number) => {
      array[index1] = array.splice(index2, 1, array[index1])[0]
      return array
    }

    data.addNode = (parentNode: any) => (): void => {
      const newArray: any[] = [...parentNode.value, addNodeDefaultObject]
      parentNode.input(newArray, false)
    }
    data.removeNode = (parentNode: any, index: number) => (): void => {
      parentNode.input(parentNode._value.filter((_: any, i: number): boolean => i !== index), false)
    }
    data.moveNodeUp = (parentNode: any, index: number) => (): void => {
      const array: any[] = [...parentNode.value]
      if (index > 0)
        parentNode.input(swapElements(array, index - 1, index), false)
    }
    data.moveNodeDown = (parentNode: any, index: number) => (): void => {
      const array: any[] = [...parentNode.value]
      if (index < array.length - 1)
        parentNode.input(swapElements(array, index, index + 1), false)
    }
    data.copyNode = (parentNode: any, index: number) => (): void => {
      const obj: any = parentNode.value[index]
      const newArray: any[] = [...parentNode.value, { ...obj }]
      parentNode.input(newArray, false)
    }
  }

  function addGroupButtons(innerClass: string = '', outerClass: string = 'col-4', label: string = 'Actions', help: string = '', render: string = 'true') {
    const addButtonComponent = (onClick: string = '', label: string = '', icon: string = '', severity: string = '', render: string = 'true', styleClass: string = 'p-button-sm'): object => {
      return addComponent('Button', { onClick, label, icon, class: styleClass, severity }, render)
    }

    return addElementsInOuterDiv([
      addButtonComponent('$removeNode($node, $index)', '', 'pi pi-times', 'danger'),
      addButtonComponent('$copyNode($node, $index)', '', 'pi pi-plus'),
      addButtonComponent('$moveNodeUp($node, $index)', '', 'pi pi-arrow-up', 'secondary', '$index != 0'),
      addElement('span', [], { class: 'p-space' }, '$index == 0'),
      addButtonComponent('$moveNodeDown($node, $index)', '', 'pi pi-arrow-down', 'secondary', '$index < $node.value.length -1'),
      addElement('span', [], { class: 'p-space' }, '$index == $node.value.length -1'),
    ], `p-action-buttons ${innerClass}`, outerClass, label, help, render)
  }

  return { addInsertButton, addGroupButtons, addListGroupFunctions }
}
