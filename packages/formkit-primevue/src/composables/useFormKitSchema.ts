export function useFormKitSchema() {
  const addComponent = (component: string = 'Button', props: object = {}, render: string | boolean = true, formKitAttrs: object = {}): object => {
    return {
      $cmp: component,
      if: render.toString(),
      props,
      ...formKitAttrs,
    }
  }

  const addElement = (element: string = 'div', children: any[] | string = [], attrs: object = {}, render: string | boolean = true, formKitAttrs: object = {}) => {
    return {
      $el: element,
      if: render.toString(),
      attrs,
      children,
      ...formKitAttrs,
    }
  }

  const addGroup = (name: string, children: object[] = [], render: string | boolean = true, formKitAttrs: object = {}) => {
    return {
      $formkit: 'group',
      if: render.toString(),
      name,
      children,
      ...formKitAttrs,
    }
  }

  const addList = (name: string, children: object[] = [], dynamic: boolean = true, render: string | boolean = true, formKitAttrs: object = {}) => {
    return {
      $formkit: 'list',
      if: render.toString(),
      name,
      dynamic,
      children,
      ...formKitAttrs,
    }
  }

  const addListGroup = (children: object[] = [], render: string | boolean = true, formKitAttrs: object = {}) => {
    return {
      $formkit: 'group',
      if: render.toString(),
      for: ['item', 'index', '$items'], // 👈 $items is in the slot’s scope
      key: '$item',
      index: '$index',
      children,
      ...formKitAttrs,
    }
  }

  const addElementsInOuterDiv = (children: object[] = [], innerClass: string = '', outerClass: string = '', label: string = '', help: string = '', render: string | boolean = true) => {
    const inner = addElement('div', children, { class: `formkit-inner ${innerClass}`, style: 'position: relative;' })
    const labelDiv = addElement('label', [label], { class: 'formkit-label' })
    const wrapperDiv = addElement('div', [labelDiv, inner], { class: 'formkit-wrapper' })
    const helpDiv = addElement('div', [help], { class: 'formkit-help' })
    return addElement('div', [wrapperDiv, helpDiv], { class: `formkit-outer ${outerClass}`, style: 'position: relative;' }, render)
  }

  return { addComponent, addElement, addGroup, addList, addListGroup, addElementsInOuterDiv }
}
