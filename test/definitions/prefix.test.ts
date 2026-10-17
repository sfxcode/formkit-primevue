import type { FormKitExtendableSchemaRoot } from '@formkit/core'
import { createNode } from '@formkit/core'
import { describe, expect, it, vi } from 'vitest'
import { useInputEditor } from '../../src/composables/useInputEditor'
import { formInputs, formOutputs, primeInputs, primeOutputs } from '../../src/definitions'
import { renamePrefix } from '../../src/definitions/prefix'
import { addLabelPlugin, addPrimeAsteriskPlugin, createAutoAnimatePlugin } from '../../src/plugins'

describe('form prefix aliases', () => {
  it('offers every prime input under the form prefix, with the same definition', () => {
    const primeKeys = Object.keys(primeInputs)

    expect(Object.keys(formInputs)).toEqual(primeKeys.map(key => key.replace(/^prime/, 'form')))
    for (const key of primeKeys)
      expect((formInputs as Record<string, unknown>)[key.replace(/^prime/, 'form')]).toBe((primeInputs as Record<string, unknown>)[key])
  })

  it('offers every prime output under the form prefix, with the same definition', () => {
    const primeKeys = Object.keys(primeOutputs)

    expect(Object.keys(formOutputs)).toEqual(primeKeys.map(key => key.replace(/^prime/, 'form')))
    for (const key of primeKeys)
      expect((formOutputs as Record<string, unknown>)[key.replace(/^prime/, 'form')]).toBe((primeOutputs as Record<string, unknown>)[key])
  })

  it('includes the inputs and outputs that are mentioned by name', () => {
    expect(formInputs.formInputText).toBe(primeInputs.primeInputText)
    expect(formInputs.formRepeater).toBe(primeInputs.primeRepeater)
    expect(formOutputs.formOutputText).toBe(primeOutputs.primeOutputText)
  })

  it('does not overlap with the prime names', () => {
    const all = [...Object.keys(primeInputs), ...Object.keys(primeOutputs), ...Object.keys(formInputs), ...Object.keys(formOutputs)]

    expect(new Set(all).size).toBe(all.length)
  })

  it('keeps the prime exports as they were', () => {
    expect(Object.keys(primeInputs).every(key => key.startsWith('prime'))).toBe(true)
    expect(Object.keys(primeOutputs).every(key => key.startsWith('primeOutput'))).toBe(true)
    expect(Object.keys(primeInputs)).toHaveLength(23)
    expect(Object.keys(primeOutputs)).toHaveLength(8)
    expect(Object.keys(primeInputs)).toEqual(expect.arrayContaining(['primeInputText', 'primeSelect', 'primeRepeater']))
  })

  it('does not use the form names that FormKit or applications may already own', () => {
    expect(Object.keys(formInputs)).not.toContain('form')
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
