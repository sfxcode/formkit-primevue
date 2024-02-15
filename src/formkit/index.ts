import type { FormKitTypeDefinition } from '@formkit/core'
import { createInput } from '@formkit/vue'

import PrimeAutoComplete from './PrimeAutoComplete.vue'
import PrimeCalendar from './PrimeCalendar.vue'
import PrimeCascadeSelect from './PrimeCascadeSelect.vue'
import PrimeCheckbox from './PrimeCheckbox.vue'
import PrimeChips from './PrimeChips.vue'
import PrimeColorPicker from './PrimeColorPicker.vue'
import PrimeDropdown from './PrimeDropdown.vue'
import PrimeEditor from './PrimeEditor.vue'
import PrimeInputMask from './PrimeInputMask.vue'
import PrimeInputNumber from './PrimeInputNumber.vue'
import PrimeInputSwitch from './PrimeInputSwitch.vue'
import PrimeInputText from './PrimeInputText.vue'
import PrimeTextarea from './PrimeTextarea.vue'
import PrimeKnob from './PrimeKnob.vue'
import PrimeMultiSelect from './PrimeMultiSelect.vue'
import PrimeListbox from './PrimeListbox.vue'
import PrimePassword from './PrimePassword.vue'
import PrimeRadioButton from './PrimeRadioButton.vue'
import PrimeRating from './PrimeRating.vue'
import PrimeSlider from './PrimeSlider.vue'
import PrimeToggleButton from './PrimeToggleButton.vue'
import PrimeTreeSelect from './PrimeTreeSelect.vue'
import PrimeSelectButton from './PrimeSelectButton.vue'
import PrimeTriStateCheckbox from './PrimeTriStateCheckbox.vue'

export const primeAutoCompleteDefinition: FormKitTypeDefinition = createInput(PrimeAutoComplete, {
  props: [],
})
export const primeInputTextDefinition: FormKitTypeDefinition = createInput(PrimeInputText, {
  props: ['iconRight', 'iconLeft'],
})

export const primeInputNumberDefinition: FormKitTypeDefinition = createInput(PrimeInputNumber, {
  props: ['iconRight', 'iconLeft'],
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
