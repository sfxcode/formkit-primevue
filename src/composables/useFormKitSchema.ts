export function useFormKitSchema() {
  const addComponent = (component: string = 'Button', props: object = {}, render: string = 'true'): object => {
    return {
      $cmp: component,
      if: render,
      props,
    }
  }

  const addElement = (element: string = 'div', children: any[] = [], attrs: object = {}, render: string = 'true') => {
    return {
      $el: element,
      if: render,
      attrs,
      children,
    }
  }

  const addGroup = (name: string, children: object[] = [], render: string = 'true') => {
    return {
      $formkit: 'group',
      if: render,
      name,
      children,
    }
  }

  const addList = (name: string, children: object[], dynamic: boolean = true, render: string = 'true') => {
    return {
      $formkit: 'list',
      if: render,
      name,
      dynamic,
      children,
    }
  }

  const addListGroup = (children: object[] = [], render: string = 'true') => {
    return {
      $formkit: 'group',
      if: render,
      for: ['item', 'index', '$items'], // 👈 $items is in the slot’s scope
      key: '$item',
      index: '$index',
      children,
    }
  }

  function addListGroupFunctions(data: any) {
    const swapElements = (array: any[], index1: number, index2: number) => {
      array[index1] = array.splice(index2, 1, array[index1])[0]
      return array
    }

    data.addNode = (node: any) => (): void => {
      const newArray: any[] = [...node.value, { }]
      node.input(newArray, false)
    }
    data.removeNode = (node: any, index: number) => (): void => {
      node.input(node._value.filter((_: any, i: number): boolean => i !== index), false)
    }
    data.moveNodeUp = (node: any, index: number) => (): void => {
      const array: any[] = [...node.value]
      if (index > 0)
        node.input(swapElements(array, index - 1, index), false)
    }
    data.moveNodeDown = (node: any, index: number) => (): void => {
      const array: any[] = [...node.value]
      if (index < array.length - 1)
        node.input(swapElements(array, index, index + 1), false)
    }
    data.insertDuplicate = (node: any, index: number) => (): void => {
      const obj: any = node.value[index]
      const newArray: any[] = [...node.value, obj]
      node.input(newArray, false)
    }
  }

  return { addComponent, addElement, addGroup, addList, addListGroup, addListGroupFunctions }
}
