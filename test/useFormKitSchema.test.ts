import { expect, it } from 'vitest'
import { useFormKitSchema } from '../src/composables'

function renderToBoolean(element: any): boolean {
  return !!element?.if
}

it('add element', () => {
  const { addElement } = useFormKitSchema()

  const e1 = addElement()
  expect(e1.$el).toBe('div')
  expect(renderToBoolean(e1)).toBe(true)
  expect(e1.children?.length).toBe(0)

  const e2 = addElement('span', [e1], { name: 'test' }, false)
  expect(e2.$el).toBe('span')
  expect(renderToBoolean(e2)).toBe(false)
  expect(e2.children?.length).toBe(1)
  expect(e2.attrs?.name).toBe('test')
})

it('add component', () => {
  const { addComponent } = useFormKitSchema()

  const c1 = addComponent()
  expect(c1.$cmp).toBe('Button')
  expect(renderToBoolean(c1)).toBe(true)
})
