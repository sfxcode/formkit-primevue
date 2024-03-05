declare module '@formkit/inputs' {
  import type { FormKitInputs } from '@formkit/inputs'

  import type { FormKitPrimeCalendarProps } from './components/PrimeCalendar.vue'
  import type { FormKitPrimeCascadeSelectProps } from './components/PrimeCascadeSelect.vue'
  import type { FormKitPrimeCheckboxProps } from './components/PrimeCheckbox.vue'
  import type { FormKitPrimeChipsProps } from './components/PrimeChips.vue'
  import type { FormKitPrimeColorPickerProps } from './components/PrimeColorPicker.vue'
  import type { FormKitPrimeDropdownProps } from './components/PrimeDropdown.vue'
  import type { FormKitPrimeEditorProps } from './components/PrimeEditor.vue'
  import type { FormKitPrimeInputMaskProps } from './components/PrimeInputMask.vue'
  import type { FormKitPrimeInputNumberProps } from './components/PrimeInputNumber.vue'
  import type { FormKitPrimeInputSwitchProps } from './components/PrimeInputSwitch.vue'
  import type { FormKitPrimeInputTextProps } from './components/PrimeInputText.vue'
  import type { FormKitPrimeKnobProps } from './components/PrimeKnob.vue'
  import type { FormKitPrimeListboxProps } from './components/PrimeListbox.vue'
  import type { FormKitPrimeMultiSelectProps } from './components/PrimeMultiSelect.vue'
  import type { FormKitPrimePasswordProps } from './components/PrimePassword.vue'
  import type { FormKitPrimeRadioButtonProps } from './components/PrimeRadioButton.vue'
  import type { FormKitPrimeRatingProps } from './components/PrimeRating.vue'
  import type { FormKitPrimeSelectButtonProps } from './components/PrimeSelectButton.vue'
  import type { FormKitPrimeSliderProps } from './components/PrimeSlider.vue'
  import type { FormKitPrimeTextareaProps } from './components/PrimeTextarea.vue'
  import type { FormKitPrimeToggleButtonProps } from './components/PrimeToggleButton.vue'
  import type { FormKitPrimeTreeSelectProps } from './components/PrimeTreeSelect.vue'
  import type { FormKitPrimeTriStateCheckboxProps } from './components/PrimeTriStateCheckbox.vue'
  import type { FormKitPrimeAutoCompleteProps } from './components/PrimeAutoComplete.vue'

  interface FormKitInputProps<Props extends FormKitInputs<Props>> {
    primeAutoComplete: FormKitPrimeAutoCompleteProps
    primeCalendar: FormKitPrimeCalendarProps
    primeCascadeSelect: FormKitPrimeCascadeSelectProps
    primeCheckbox: FormKitPrimeCheckboxProps
    primeChips: FormKitPrimeChipsProps
    primeColorPicker: FormKitPrimeColorPickerProps
    primeDropdown: FormKitPrimeDropdownProps
    primeEditor: FormKitPrimeEditorProps
    primeInputMask: FormKitPrimeInputMaskProps
    primeInputNumber: FormKitPrimeInputNumberProps
    primeInputSwitch: FormKitPrimeInputSwitchProps
    primeInputText: FormKitPrimeInputTextProps
    primeKnob: FormKitPrimeKnobProps
    primeListbox: FormKitPrimeListboxProps
    primeMultiSelect: FormKitPrimeMultiSelectProps
    primePassword: FormKitPrimePasswordProps
    primeRadioButton: FormKitPrimeRadioButtonProps
    primeRating: FormKitPrimeRatingProps
    primeSelectButton: FormKitPrimeSelectButtonProps
    primeSlider: FormKitPrimeSliderProps
    primeTextarea: FormKitPrimeTextareaProps
    primeToggleButton: FormKitPrimeToggleButtonProps
    primeTreeSelect: FormKitPrimeTreeSelectProps
    primeTriStateCheckbox: FormKitPrimeTriStateCheckboxProps
  }
}
