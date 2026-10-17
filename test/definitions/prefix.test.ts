import type { FormKitExtendableSchemaRoot } from '@formkit/core'
import { createNode } from '@formkit/core'
import { describe, expect, it, vi } from 'vitest'
import { useInputEditor } from '../../src/composables/useInputEditor'
import { formInputs, formOutputs, primeInputs, primeOutputs } from '../../src/definitions'
import { renamePrefix } from '../../src/definitions/prefix'
import { addLabelPlugin, addPrimeAsteriskPlugin, createAutoAnimatePlugin } from '../../src/plugins'

// The names that existed before the `form` prefix was added: all of them must stay registered, as they were.
const ORIGINAL_INPUTS = ['primeAutoComplete', 'primeInputText', 'primeInputNumber', 'primeInputMask', 'primePassword', 'primeCheckbox', 'primeToggleSwitch', 'primeTextarea', 'primeSelect', 'primeMultiSelect', 'primeDatePicker', 'primeSlider', 'primeKnob', 'primeRating', 'primeRadioButton', 'primeColorPicker', 'primeToggleButton', 'primeListbox', 'primeSelectButton', 'primeCascadeSelect', 'primeTreeSelect', 'primeInputOtp', 'primeRepeater']
const ORIGINAL_OUTPUTS = ['primeOutputText', 'primeOutputLink', 'primeOutputReference', 'primeOutputNumber', 'primeOutputDate', 'primeOutputBoolean', 'primeOutputDuration', 'primeOutputList']

const toForm = (key: string): string => key.replace(/^prime/, 'form')
const asRecord = (definitions: object): Record<string, unknown> => definitions as Record<string, unknown>

describe('form prefix aliases', () => {
  it('keeps every original prime name in primeInputs and primeOutputs', () => {
    expect(ORIGINAL_INPUTS).toHaveLength(23)
    expect(ORIGINAL_OUTPUTS).toHaveLength(8)
    for (const key of ORIGINAL_INPUTS)
      expect(asRecord(primeInputs)[key], key).toBeDefined()
    for (const key of ORIGINAL_OUTPUTS)
      expect(asRecord(primeOutputs)[key], key).toBeDefined()
  })

  it('contains the prime names and their form names, and nothing else', () => {
    expect(Object.keys(primeInputs).sort()).toEqual([...ORIGINAL_INPUTS, ...ORIGINAL_INPUTS.map(toForm)].sort())
    expect(Object.keys(primeOutputs).sort()).toEqual([...ORIGINAL_OUTPUTS, ...ORIGINAL_OUTPUTS.map(toForm)].sort())
  })

  it('registers each form name with the same definition as its prime name', () => {
    for (const key of ORIGINAL_INPUTS)
      expect(asRecord(primeInputs)[toForm(key)], key).toBe(asRecord(primeInputs)[key])
    for (const key of ORIGINAL_OUTPUTS)
      expect(asRecord(primeOutputs)[toForm(key)], key).toBe(asRecord(primeOutputs)[key])
  })

  it('offers formInputs and formOutputs with only the form names', () => {
    expect(Object.keys(formInputs)).toEqual(ORIGINAL_INPUTS.map(toForm))
    expect(Object.keys(formOutputs)).toEqual(ORIGINAL_OUTPUTS.map(toForm))
    for (const [key, definition] of Object.entries(formInputs))
      expect(definition, key).toBe(asRecord(primeInputs)[key])
    for (const [key, definition] of Object.entries(formOutputs))
      expect(definition, key).toBe(asRecord(primeOutputs)[key])
  })

  it('includes the inputs and outputs that are mentioned by name', () => {
    expect(primeInputs.formInputText).toBe(primeInputs.primeInputText)
    expect(primeInputs.formRepeater).toBe(primeInputs.primeRepeater)
    expect(primeOutputs.formOutputText).toBe(primeOutputs.primeOutputText)
    expect(formInputs.formInputText).toBe(primeInputs.primeInputText)
  })

  it('does not overlap between inputs and outputs', () => {
    const all = [...Object.keys(primeInputs), ...Object.keys(primeOutputs)]

    expect(new Set(all).size).toBe(all.length)
  })

  it('does not use the form names that FormKit or applications may already own', () => {
    expect(Object.keys(primeInputs)).not.toContain('form')
    expect(Object.keys(formInputs).every(key => /^form[A-Z]/.test(key))).toBe(true)
    expect(Object.keys(formOutputs).every(key => /^formOutput[A-Z]/.test(key))).toBe(true)
  })
})

describe('renamePrefix', () => {
  it('re-keys the prefixed entries and leaves the others', () => {
    const definition = {}
    const renamed = renamePrefix({ primeA: definition, primeBeta: 1, other: 2 }, 'prime', 'form')

    expect(renamed).toEqual({ formA: definition, formBeta: 1, other: 2 })
    expect(renamed.formA).toBe(definition)
  })

  it('only renames the prefix, not later occurrences', () => {
    expect(Object.keys(renamePrefix({ primeprimeX: 1 }, 'prime', 'form'))).toEqual(['formprimeX'])
  })
})

describe('plugins with the form prefix', () => {
  function run(plugin: (node: any) => void, type: string): boolean {
    const on = vi.fn()
    plugin({ props: { type }, on })
    return on.mock.calls.length > 0
  }

  it('adds the asterisk to prime and form inputs, not to outputs', () => {
    expect(run(addPrimeAsteriskPlugin, 'primeInputText')).toBe(true)
    expect(run(addPrimeAsteriskPlugin, 'formInputText')).toBe(true)
    expect(run(addPrimeAsteriskPlugin, 'formRepeater')).toBe(true)
    expect(run(addPrimeAsteriskPlugin, 'primeOutputText')).toBe(false)
    expect(run(addPrimeAsteriskPlugin, 'formOutputText')).toBe(false)
  })

  it('changes the label of prime and form types, outputs included', () => {
    expect(run(addLabelPlugin, 'primeInputText')).toBe(true)
    expect(run(addLabelPlugin, 'formInputText')).toBe(true)
    expect(run(addLabelPlugin, 'primeOutputText')).toBe(true)
    expect(run(addLabelPlugin, 'formOutputText')).toBe(true)
  })

  it('leaves FormKit types and the application\'s own form types alone', () => {
    for (const type of ['form', 'text', 'select', 'formAddress', 'formOutputUnknown', 'formInputTextExtra']) {
      expect(run(addPrimeAsteriskPlugin, type)).toBe(false)
      expect(run(addLabelPlugin, type)).toBe(false)
    }
  })
})

describe('createAutoAnimatePlugin targets', () => {
  function markedFor(type: string, targets: Record<string, string[]>): boolean {
    const node = createNode({
      type: 'input',
      props: {
        type,
        definition: { type: 'input', schema: () => ({ if: '$slots.input', then: '$slots.input', else: { $el: 'div', meta: { section: 'input' }, attrs: {} } }) },
      },
      plugins: [createAutoAnimatePlugin({}, targets)],
    })
    const schema = (node.props.definition!.schema as FormKitExtendableSchemaRoot)({}) as { else: { attrs?: Record<string, unknown> } }
    return schema.else.attrs?.['data-auto-animate'] !== undefined
  }

  it('applies a prime keyed entry to the prime and the form name', () => {
    expect(markedFor('primeRepeater', { primeRepeater: ['input'] })).toBe(true)
    expect(markedFor('formRepeater', { primeRepeater: ['input'] })).toBe(true)
  })

  it('applies a form keyed entry to the prime and the form name', () => {
    expect(markedFor('primeRepeater', { formRepeater: ['input'] })).toBe(true)
    expect(markedFor('formRepeater', { formRepeater: ['input'] })).toBe(true)
  })

  it('does not apply the entry of another input', () => {
    expect(markedFor('formRepeater', { primeSelect: ['input'] })).toBe(false)
    expect(markedFor('primeInputText', { primeRepeater: ['input'] })).toBe(false)
  })

  it('does not treat FormKit\'s own form type as an alias', () => {
    expect(markedFor('form', { form: ['input'] })).toBe(true)
    expect(markedFor('form', { prime: ['input'] })).toBe(false)
  })
})

describe('useInputEditor with the form prefix', () => {
  const { editorDataToSchema } = useInputEditor()
  const options = [{ label: 'A', value: 'a' }]

  it('treats a form name like its prime name, and keeps the name it was given', () => {
    const prime = editorDataToSchema({ _dollar_formkit: 'primeSelect', name: 'role', options })
    const form = editorDataToSchema({ _dollar_formkit: 'formSelect', name: 'role', options })

    expect(form.$formkit).toBe('formSelect')
    expect(form.options).toEqual(options)
    expect(form.optionLabel).toBe('label')
    expect({ ...form, $formkit: prime.$formkit }).toEqual(prime)
  })

  it('converts the length of an OTP input to a number under the form name', () => {
    const entry = { _dollar_formkit: 'formInputOtp', prime: [{ prime_key: 'length', prime_value: '6' }] }
    const form = editorDataToSchema(entry)
    const prime = editorDataToSchema({ ...entry, _dollar_formkit: 'primeInputOtp' })

    expect(form.length).toBe(6)
    expect({ ...form, $formkit: prime.$formkit }).toEqual(prime)
  })
})
