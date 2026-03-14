import { describe, expect, it, vi } from 'vitest'
import { useFormKitInput } from '../src/composables/useFormKitInput'

describe('useFormKitInput', () => {
  it('returns invalid state when validation is visible and not valid', () => {
    const context = {
      state: {
        validationVisible: true,
        valid: false,
      },
    }
    const { isInvalid } = useFormKitInput(context)
    expect(isInvalid.value).toBe(true)
  })

  it('returns valid state when validation is not visible or valid', () => {
    const context = {
      state: {
        validationVisible: false,
        valid: true,
      },
    }
    const { isInvalid } = useFormKitInput(context)
    expect(isInvalid.value).toBe(false)
  })

  it('returns correct style class when invalid', () => {
    const context = {
      state: {
        validationVisible: true,
        valid: false,
      },
      attrs: {
        class: 'custom-class',
      },
    }
    const { styleClass } = useFormKitInput(context)
    expect(styleClass.value).toBe('custom-class p-invalid')
  })

  it('returns correct style class when valid', () => {
    const context = {
      state: {
        validationVisible: false,
        valid: true,
      },
      attrs: {
        class: 'custom-class',
      },
    }
    const { styleClass } = useFormKitInput(context)
    expect(styleClass.value).toBe('custom-class')
  })

  it('handles blur event safely', () => {
    const blurHandler = vi.fn()
    const context = {
      handlers: {
        blur: blurHandler,
      },
    }
    const { handleBlur } = useFormKitInput(context)
    handleBlur(new Event('blur'))
    expect(blurHandler).toHaveBeenCalled()
  })

  it('handles change event safely', () => {
    const inputHandler = vi.fn()
    const context = {
      node: {
        input: inputHandler,
      },
      _value: 'new-value',
    }
    const { handleChange } = useFormKitInput(context)
    handleChange('new-value')
    expect(inputHandler).toHaveBeenCalledWith('new-value')
  })

  it('handles input event safely', () => {
    const inputHandler = vi.fn()
    const context = {
      node: {
        input: inputHandler,
      },
      _value: 'input-value',
    }
    const { handleInput } = useFormKitInput(context)
    handleInput('input-value')
    expect(inputHandler).toHaveBeenCalledWith('input-value')
  })

  it('handles select event safely', () => {
    const inputHandler = vi.fn()
    const context = {
      node: {
        input: inputHandler,
      },
    }
    const { handleSelect } = useFormKitInput(context)
    handleSelect('selected-value')
    expect(inputHandler).toHaveBeenCalledWith('selected-value')
  })

  it('returns valid slot names excluding FormKit slots', () => {
    const context = {
      slots: {
        label: () => {},
        help: () => {},
        customSlot: () => {},
      },
    }
    const { validSlotNames } = useFormKitInput(context)
    expect(validSlotNames.value).toEqual(['customSlot'])
  })

  it('returns unstyled mode when context unstyled is true', () => {
    const context = {
      unstyled: true,
    }
    const { unstyled } = useFormKitInput(context)
    expect(unstyled.value).toBe(true)
  })
})
