import type { FormKitTypeDefinition } from '@formkit/core'
import { createInput } from '@formkit/vue'

import PrimeAutoComplete from './components/PrimeAutoComplete.vue'
import PrimeCalendar from './components/PrimeCalendar.vue'
import PrimeCascadeSelect from './components/PrimeCascadeSelect.vue'
import PrimeCheckbox from './components/PrimeCheckbox.vue'
import PrimeChips from './components/PrimeChips.vue'
import PrimeColorPicker from './components/PrimeColorPicker.vue'
import PrimeDropdown from './components/PrimeDropdown.vue'
import PrimeEditor from './components/PrimeEditor.vue'
import PrimeInputMask from './components/PrimeInputMask.vue'
import PrimeInputNumber from './components/PrimeInputNumber.vue'
import PrimeInputSwitch from './components/PrimeInputSwitch.vue'
import PrimeInputText from './components/PrimeInputText.vue'
import PrimeTextarea from './components/PrimeTextarea.vue'
import PrimeKnob from './components/PrimeKnob.vue'
import PrimeMultiSelect from './components/PrimeMultiSelect.vue'
import PrimeListbox from './components/PrimeListbox.vue'
import PrimePassword from './components/PrimePassword.vue'
import PrimeRadioButton from './components/PrimeRadioButton.vue'
import PrimeRating from './components/PrimeRating.vue'
import PrimeSlider from './components/PrimeSlider.vue'
import PrimeToggleButton from './components/PrimeToggleButton.vue'
import PrimeTreeSelect from './components/PrimeTreeSelect.vue'
import PrimeSelectButton from './components/PrimeSelectButton.vue'
import PrimeTriStateCheckbox from './components/PrimeTriStateCheckbox.vue'

import { useFormKitSchema } from './composables'

export const primeAutoCompleteDefinition: FormKitTypeDefinition = createInput(PrimeAutoComplete, {
  props: [],
})
export const primeInputTextDefinition: FormKitTypeDefinition = createInput(PrimeInputText, {
  props: ['icon', 'icon'],
})

export const primeInputNumberDefinition: FormKitTypeDefinition = createInput(PrimeInputNumber, {
  props: ['icon', 'icon'],
})

export const primeInputMaskDefinition: FormKitTypeDefinition = createInput(PrimeInputMask, {
  props: [],
})

export const primePasswordDefinition: FormKitTypeDefinition = createInput(PrimePassword, {
  props: ['feedback', 'toggleMask'],
})

export const primeTextareaDefinition: FormKitTypeDefinition = createInput(PrimeTextarea, {
  props: ['rows'],
})

export const primeCheckboxDefinition: FormKitTypeDefinition = createInput(PrimeCheckbox, {
  props: [],
})

export const primeInputSwitchDefinition: FormKitTypeDefinition = createInput(PrimeInputSwitch, {
  props: [],
})

export const primeEditorDefinition: FormKitTypeDefinition = createInput(PrimeEditor, {
  props: [],
})

export const primeDropdownDefinition: FormKitTypeDefinition = createInput(PrimeDropdown, {
  props: [],
})

export const primeMultiSelectDefinition: FormKitTypeDefinition = createInput(PrimeMultiSelect, {
  props: [],
})

export const primeListboxDefinition: FormKitTypeDefinition = createInput(PrimeListbox, {
  props: [],
})

export const primeCalendarDefinition: FormKitTypeDefinition = createInput(PrimeCalendar, {
  props: [],
})

export const primeSliderDefinition: FormKitTypeDefinition = createInput(PrimeSlider, {
  props: [],
})

export const primeRatingDefinition: FormKitTypeDefinition = createInput(PrimeRating, {
  props: [],
})
export const primeRadioButtonDefinition: FormKitTypeDefinition = createInput(PrimeRadioButton, {
  props: [],
})

export const primeChipsDefinition: FormKitTypeDefinition = createInput(PrimeChips, {
  props: [],
})

export const primeKnobDefinition: FormKitTypeDefinition = createInput(PrimeKnob, {
  props: [],
})

export const primeColorPickerDefinition: FormKitTypeDefinition = createInput(PrimeColorPicker, {
  props: [],
})

export const primeToggleButtonDefinition: FormKitTypeDefinition = createInput(PrimeToggleButton, {
  props: [],
})

export const primeSelectButtonDefinition: FormKitTypeDefinition = createInput(PrimeSelectButton, {
  props: [],
})
export const primeTriStateCheckboxDefinition: FormKitTypeDefinition = createInput(PrimeTriStateCheckbox, {
  props: [],
})
export const primeCascadeSelectDefinition: FormKitTypeDefinition = createInput(PrimeCascadeSelect, {
  props: [],
})
export const primeTreeSelectDefinition: FormKitTypeDefinition = createInput(PrimeTreeSelect, {
  props: [],
})

export const primeInputs = {
  primeAutoComplete: primeAutoCompleteDefinition,
  primeInputText: primeInputTextDefinition,
  primeInputNumber: primeInputNumberDefinition,
  primeInputMask: primeInputMaskDefinition,
  primePassword: primePasswordDefinition,
  primeCheckbox: primeCheckboxDefinition,
  primeInputSwitch: primeInputSwitchDefinition,
  primeTextarea: primeTextareaDefinition,
  primeEditor: primeEditorDefinition,
  primeDropdown: primeDropdownDefinition,
  primeMultiSelect: primeMultiSelectDefinition,
  primeCalendar: primeCalendarDefinition,
  primeSlider: primeSliderDefinition,
  primeChips: primeChipsDefinition,
  primeKnob: primeKnobDefinition,
  primeRating: primeRatingDefinition,
  primeRadioButton: primeRadioButtonDefinition,
  primeColorPicker: primeColorPickerDefinition,
  primeToggleButton: primeToggleButtonDefinition,
  primeListbox: primeListboxDefinition,
  primeSelectButton: primeSelectButtonDefinition,
  primeTriStateCheckbox: primeTriStateCheckboxDefinition,
  primeCascadeSelect: primeCascadeSelectDefinition,
  primeTreeSelect: primeTreeSelectDefinition,
}

export {
  useFormKitSchema,
}
