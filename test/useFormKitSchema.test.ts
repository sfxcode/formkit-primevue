import { expect, it } from 'vitest'
import { useFormKitSchema } from '../src/composables'

function renderToBoolean(element: any): boolean {
  return !!element?.if
}

it('add element', () => {
  const { addElement } = useFormKitSchema()

  const element = addElement()
  expect(element.$el).toBe('div')
  expect(renderToBoolean(element)).toBe(true)
  expect(element.children?.length).toBe(0)

  const e2 = addElement('span', [element], { name: 'test' }, false)
  expect(e2.$el).toBe('span')
  expect(renderToBoolean(e2)).toBe(false)
  expect(e2.children?.length).toBe(1)
  // @ts-expect-error: name is not in the type`
  expect(e2.attrs?.name).toBe('test')
})

it('add component', () => {
  const { addComponent } = useFormKitSchema()

  const component = addComponent()
  // @ts-expect-error: $cmp is not in the type
  expect(component.$cmp).toBe('Button')
  expect(renderToBoolean(component)).toBe(true)
})

it('add group', () => {
  const { addGroup } = useFormKitSchema()

  const group = addGroup('name')
  expect(group.$formkit).toBe('group')
  expect(renderToBoolean(group)).toBe(true)
  expect(group.name).toBe('name')
})

it('add list', () => {
  const { addList } = useFormKitSchema()

  const list = addList('name')
  expect(list.$formkit).toBe('list')
  expect(renderToBoolean(list)).toBe(true)
  expect(list.name).toBe('name')
})
