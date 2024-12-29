import type { FormKitInputs } from '@formkit/inputs'
import type { CascadeSelectProps } from 'primevue/cascadeselect'
import type { ListboxProps } from 'primevue/listbox'
import type { MultiSelectProps } from 'primevue/multiselect'
import type { SelectProps } from 'primevue/select'
import type { SelectButtonProps } from 'primevue/selectbutton'
import type { TreeSelectProps } from 'primevue/treeselect'
import { FormKitDataDebug, FormKitDataEdit, FormKitDataView } from './components'
import { useFormKitRepeater, useFormKitSchema, useInputEditor, useInputEditorSchema, usePrimeInputs } from './composables'
import { primeInputs, primeOutputs } from './definitions'

export {
  FormKitDataDebug,
  FormKitDataEdit,
  FormKitDataView,
  primeInputs,
  primeOutputs,
  useFormKitRepeater,
  useFormKitSchema,
  useInputEditor,
  useInputEditorSchema,
  usePrimeInputs,
}

declare module '@formkit/inputs' {
  interface FormKitInputProps<Props extends FormKitInputs<Props>> {
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
    primeEditor: {
      type: 'primeEditor'
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
}
