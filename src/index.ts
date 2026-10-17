import type { FormKitBaseSlots, FormKitInputs } from '@formkit/inputs'
import type {
  AutoCompleteSlots,
  CascadeSelectSlots,
  CheckboxSlots,
  ColorPickerSlots,
  DatePickerSlots,
  InputMaskSlots,
  InputNumberSlots,
  InputOtpSlots,
  InputTextSlots,
  KnobSlots,
  ListboxSlots,
  MultiSelectSlots,
  PasswordSlots,
  RadioButtonSlots,
  RatingSlots,
  SelectButtonSlots,
  SelectSlots,
  SliderSlots,
  TextareaSlots,
  ToggleButtonSlots,
  ToggleSwitchSlots,
  TreeSelectSlots,
} from 'primevue'
import type { CascadeSelectProps } from 'primevue/cascadeselect'
import type { ListboxProps } from 'primevue/listbox'
import type { MultiSelectProps } from 'primevue/multiselect'
import type { SelectProps } from 'primevue/select'
import type { SelectButtonProps } from 'primevue/selectbutton'
import type { TreeSelectProps } from 'primevue/treeselect'
import { FormKitDataEdit, FormKitDataView } from './components'
import { useFormKitRepeater, useFormKitSchema, useInputEditor, useInputEditorSchema, usePrimeInputs } from './composables'
import { formInputs, formOutputs, primeInputs, primeOutputs } from './definitions'

export {
  formInputs,
  FormKitDataEdit,
  FormKitDataView,
  formOutputs,
  primeInputs,
  primeOutputs,
  useFormKitRepeater,
  useFormKitSchema,
  useInputEditor,
  useInputEditorSchema,
  usePrimeInputs,
}

/**
 * Keeps all slots from 1st argument, add any slots from 2nd type which do not collide with the 1st's names.
 */
type MergeSlots<A, B> = A & Omit<B, keyof A>

/**
 * Input props of every `prime` type. Also the source of the `form` types, see `FormAliases`.
 */
interface PrimeInputProps {
  primeAutoComplete: {
    type: 'primeAutoComplete'
  }
  primeInputText: {
    type: 'primeInputText'
  }
  primeInputNumber: {
    type: 'primeInputNumber'
  }
  primeInputMask: {
    type: 'primeInputMask'
  }
  primePassword: {
    type: 'primePassword'
  }
  primeCheckbox: {
    type: 'primeCheckbox'
  }
  primeToggleSwitch: {
    type: 'primeToggleSwitch'
  }
  primeTextarea: {
    type: 'primeTextarea'
  }
  primeSelect: {
    type: 'primeSelect'
    options?: SelectProps['options']
  }
  primeMultiSelect: {
    type: 'primeMultiSelect'
    options?: MultiSelectProps['options']
  }
  primeDatePicker: {
    type: 'primeDatePicker'
  }
  primeSlider: {
    type: 'primeSlider'
  }
  primeKnob: {
    type: 'primeKnob'
  }
  primeRating: {
    type: 'primeRating'
  }
  primeRadioButton: {
    type: 'primeRadioButton'
  }
  primeColorPicker: {
    type: 'primeColorPicker'
  }
  primeToggleButton: {
    type: 'primeToggleButton'
  }
  primeListbox: {
    type: 'primeListbox'
    options?: ListboxProps['options']
  }
  primeSelectButton: {
    type: 'primeSelectButton'
    options?: SelectButtonProps['options']
  }
  primeCascadeSelect: {
    type: 'primeCascadeSelect'
    options?: CascadeSelectProps['options']
  }
  primeTreeSelect: {
    type: 'primeTreeSelect'
    options?: TreeSelectProps['options']
  }
  primeInputOtp: {
    type: 'primeInputOtp'
  }
  primeOutputText: {
    type: 'primeOutputText'
  }
  primeOutputLink: {
    type: 'primeOutputLink'
  }
  primeOutputReference: {
    type: 'primeOutputReference'
  }
  primeOutputNumber: {
    type: 'primeOutputNumber'
  }
  primeOutputDate: {
    type: 'primeOutputDate'
  }
  primeOutputBoolean: {
    type: 'primeOutputBoolean'
  }
  primeOutputDuration: {
    type: 'primeOutputDuration'
  }
  primeOutputList: {
    type: 'primeOutputList'
  }
}

/**
 * Slots of every `prime` type. Also the source of the `form` types, see `FormAliases`.
 */
interface PrimeInputSlots<Props extends FormKitInputs<Props>> {
  primeAutoComplete: MergeSlots<FormKitBaseSlots<Props>, AutoCompleteSlots>
  primeCascadeSelect: MergeSlots<FormKitBaseSlots<Props>, CascadeSelectSlots>
  primeCheckbox: MergeSlots<FormKitBaseSlots<Props>, CheckboxSlots>
  primeColorPicker: MergeSlots<FormKitBaseSlots<Props>, ColorPickerSlots>
  primeDatePicker: MergeSlots<FormKitBaseSlots<Props>, DatePickerSlots>
  primeInputMask: MergeSlots<FormKitBaseSlots<Props>, InputMaskSlots>
  primeInputNumber: MergeSlots<FormKitBaseSlots<Props>, InputNumberSlots>
  primeInputOtp: MergeSlots<FormKitBaseSlots<Props>, InputOtpSlots>
  primeInputText: MergeSlots<FormKitBaseSlots<Props>, InputTextSlots>
  primeKnob: MergeSlots<FormKitBaseSlots<Props>, KnobSlots>
  primeListbox: MergeSlots<FormKitBaseSlots<Props>, ListboxSlots>
  primeMultiSelect: MergeSlots<FormKitBaseSlots<Props>, MultiSelectSlots>
  primeOutputBoolean: FormKitBaseSlots<Props>
  primeOutputDate: FormKitBaseSlots<Props>
  primeOutputDuration: FormKitBaseSlots<Props>
  primeOutputLink: FormKitBaseSlots<Props>
  primeOutputList: FormKitBaseSlots<Props>
  primeOutputNumber: FormKitBaseSlots<Props>
  primeOutputReference: FormKitBaseSlots<Props>
  primeOutputText: FormKitBaseSlots<Props>
  primePassword: MergeSlots<FormKitBaseSlots<Props>, PasswordSlots>
  primeRadioButton: MergeSlots<FormKitBaseSlots<Props>, RadioButtonSlots>
  primeRating: MergeSlots<FormKitBaseSlots<Props>, RatingSlots>
  primeSelect: MergeSlots<FormKitBaseSlots<Props>, SelectSlots>
  primeSelectButton: MergeSlots<FormKitBaseSlots<Props>, SelectButtonSlots>
  primeSlider: MergeSlots<FormKitBaseSlots<Props>, SliderSlots>
  primeTextarea: MergeSlots<FormKitBaseSlots<Props>, TextareaSlots>
  primeToggleButton: MergeSlots<FormKitBaseSlots<Props>, ToggleButtonSlots>
  primeToggleSwitch: MergeSlots<FormKitBaseSlots<Props>, ToggleSwitchSlots>
  primeTreeSelect: MergeSlots<FormKitBaseSlots<Props>, TreeSelectSlots>
}

/**
 * Mirrors the `prime` entries of a props/slots record under the `form` prefix (`primeInputText` -> `formInputText`),
 * including the literal `type` of the props, so both names are typed the same.
 */
type FormAliases<T> = {
  [K in keyof T as K extends `prime${infer Rest}` ? `form${Rest}` : never]:
  K extends `prime${infer Rest}`
    ? T[K] extends { type: string } ? Omit<T[K], 'type'> & { type: `form${Rest}` } : T[K]
    : never
}

declare module '@formkit/inputs' {
  interface FormKitInputProps<Props extends FormKitInputs<Props>> extends PrimeInputProps, FormAliases<PrimeInputProps> {}

  interface FormKitInputSlots<Props extends FormKitInputs<Props>> extends PrimeInputSlots<Props>, FormAliases<PrimeInputSlots<Props>> {}
}
