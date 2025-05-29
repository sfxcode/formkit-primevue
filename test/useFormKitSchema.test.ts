import { describe, expect, it } from 'vitest'
import { useFormKitSchema } from '../src/composables'

it('add list group', () => {
  const { addListGroup } = useFormKitSchema()

  const listGroup = addListGroup()
  expect(listGroup.$formkit).toBe('group')
  expect(listGroup.if).toBe('true')
  expect(listGroup.for).toEqual(['item', 'index', '$items'])
  expect(listGroup.key).toBe('$item')
  expect(listGroup.index).toBe('$index')
})

it('add element with non-boolean render value', () => {
  const { addElement } = useFormKitSchema()
  const element = addElement('div', [], {}, '$context.visible')
  expect(element.if).toBe('$context.visible')
})

it('add component with props', () => {
  const { addComponent } = useFormKitSchema()
  const props = { label: 'Save', severity: 'primary' }
  const component = addComponent('Button', props)
  expect(component.props).toEqual(props)
})

describe('addElementsInOuterDiv', () => {
  it('creates default structure with minimal params', () => {
    const { addElementsInOuterDiv } = useFormKitSchema()
    const outerDiv = addElementsInOuterDiv()

    expect(outerDiv.$el).toBe('div')
    expect(outerDiv.attrs.class).toBe('formkit-outer ')

    const wrapperDiv = outerDiv.children[0]
    expect(wrapperDiv.$el).toBe('div')
    expect(wrapperDiv.attrs.class).toBe('formkit-wrapper')

    const labelDiv = wrapperDiv.children[0]
    expect(labelDiv.$el).toBe('label')
    expect(labelDiv.children).toEqual([''])

    const innerDiv = wrapperDiv.children[1]
    expect(innerDiv.$el).toBe('div')
    expect(innerDiv.attrs.class).toBe('formkit-inner ')
  })

  it('applies custom classes', () => {
    const { addElementsInOuterDiv } = useFormKitSchema()
    const outerDiv = addElementsInOuterDiv([], 'custom-inner', 'custom-outer')

    expect(outerDiv.attrs.class).toBe('formkit-outer custom-outer')

    const innerDiv = outerDiv.children[0].children[1]
    expect(innerDiv.attrs.class).toBe('formkit-inner custom-inner')
  })
})

it('combines formKitAttrs with element properties', () => {
  const { addElement } = useFormKitSchema()
  const formKitAttrs = { validation: 'required', validationVisibility: 'dirty' }
  const element = addElement('div', [], {}, true, formKitAttrs)

  expect(element.$el).toBe('div')
  expect(element.validation).toBe('required')
  expect(element.validationVisibility).toBe('dirty')
})

it('combines formKitAttrs with component properties', () => {
  const { addComponent } = useFormKitSchema()
  const formKitAttrs = { validation: 'required', validationLabel: 'Button' }
  const component = addComponent('Button', {}, true, formKitAttrs)

  expect(component.$cmp).toBe('Button')
  expect(component.validation).toBe('required')
  expect(component.validationLabel).toBe('Button')
})
