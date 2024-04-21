import { expect, test } from 'vitest'
import {useFormKitSchema} from '../src/composables'

function renderToBoolean(element: any):boolean {
    return new Boolean(element?.if).valueOf()
}

test('add element', () => {
    const { addElement } = useFormKitSchema()

    const e1 = addElement()
    console.log(e1)
    expect( e1.$el).toBe('div')
    expect( renderToBoolean(e1)).toBe(true)
    expect(e1.children?.length).toBe(0)

    const e2 = addElement('span', [e1], { name: 'test'}, false)
    console.log(e2)
    expect( e2.$el).toBe('span')
    expect( renderToBoolean(e2)).toBe(false)
    expect(e2.children?.length).toBe(1)
    expect(e2.attrs?.name).toBe('test')
})

test('add component', () => {
    const {addComponent} = useFormKitSchema()

    const c1 = addComponent()
    expect( c1.$cmp).toBe('Button')
    console.log(c1)
    expect(renderToBoolean(c1)).toBe(true)
})