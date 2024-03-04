declare module '@formkit/inputs' {
  import { FormKitInputs, FormKitSlotData, FormKitBaseSlots } from '@formkit/inputs';

  import type { PrimeAutoCompleteProps } from './PrimeAutoComplete.vue';
  import type { FormKitPrimeCalendarProps } from './PrimeCalendar.vue';
  import type { FormKitPrimeCascadeSelectProps } from './PrimeCascadeSelect.vue';
  import type { FormKitPrimeCheckboxProps } from './PrimeCheckbox.vue';
  import type { FormKitPrimeChipsProps } from './PrimeChips.vue';
  import type { FormKitPrimeColorPickerProps } from './PrimeColorPicker.vue';
  import type { FormKitPrimeDropdownProps } from './PrimeDropdown.vue';
  import type { FormKitPrimeEditorProps } from './PrimeEditor.vue';
  import type { FormKitPrimeInputMaskProps } from './PrimeInputMask.vue';
  import type { FormKitPrimeInputNumberProps } from './PrimeInputNumber.vue';
  import type { FormKitPrimeInputSwitchProps } from './PrimeInputSwitch.vue';
  import type { FormKitPrimeInputTextProps } from './PrimeInputText.vue';
  import type { FormKitPrimeKnobProps } from './PrimeKnob.vue';
  import type { FormKitPrimeListboxProps } from './PrimeListbox.vue';
  import type { FormKitPrimeMultiSelectProps } from './PrimeMultiSelect.vue';
  import type { FormKitPrimePasswordProps } from './PrimePassword.vue';
  import type { FormKitPrimeRadioButtonProps } from './PrimeRadioButton.vue';
  import type { FormKitPrimeRatingProps } from './PrimeRating.vue';
  import type { FormKitPrimeSelectButtonProps } from './PrimeSelectButton.vue';
  import type { FormKitPrimeSliderProps } from './PrimeSlider.vue';
  import type { FormKitPrimeTextareaProps } from './PrimeTextarea.vue';
  import type { FormKitPrimeToggleButtonProps } from './PrimeToggleButton.vue';
  import type { FormKitPrimeTreeSelectProps } from './PrimeTreeSelect.vue';
  import type { FormKitPrimeTriStateCheckboxProps } from './PrimeTriStateCheckbox.vue';

  interface FormKitInputProps<Props extends FormKitInputs<Props>> {
    primeAutoComplete: FormKitPrimeAutoCompleteProps;
    primeCalendar: FormKitPrimeCalendarProps;
    primeCascadeSelect: FormKitPrimeCascadeSelectProps;
    primeCheckbox: FormKitPrimeCheckboxProps;
    primeChips: FormKitPrimeChipsProps;
    primeColorPicker: FormKitPrimeColorPickerProps;
    primeDropdown: FormKitPrimeDropdownProps;
    primeEditor: FormKitPrimeEditorProps;
    primeInputMask: FormKitPrimeInputMaskProps;
    primeInputNumber: FormKitPrimeInputNumberProps;
    primeInputSwitch: FormKitPrimeInputSwitchProps;
    primeInputText: FormKitPrimeInputTextProps;
    primeKnob: FormKitPrimeKnobProps;
    primeListbox: FormKitPrimeListboxProps;
    primeMultiSelect: FormKitPrimeMultiSelectProps;
    primePassword: FormKitPrimePasswordProps;
    primeRadioButton: FormKitPrimeRadioButtonProps;
    primeRating: FormKitPrimeRatingProps;
    primeSelectButton: FormKitPrimeSelectButtonProps;
    primeSlider: FormKitPrimeSliderProps;
    primeTextarea: FormKitPrimeTextareaProps;
    primeToggleButton: FormKitPrimeToggleButtonProps;
    primeTreeSelect: FormKitPrimeTreeSelectProps;
    primeTriStateCheckbox: FormKitPrimeTriStateCheckboxProps;
  }
}
