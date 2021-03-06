import type { FormKitTypeDefinition } from '@formkit/core'
import { createInput } from '@formkit/vue'

import PrimeInputText from './PrimeInputText.vue'
import PrimeInputNumber from './PrimeInputNumber.vue'
import PrimeInputMask from './PrimeInputMask.vue'
import PrimePassword from './PrimePassword.vue'
import PrimeInputTextArea from './PrimeInputTextArea.vue'
import PrimeCheckBox from './PrimeCheckBox.vue'
import PrimeInputSwitch from './PrimeInputSwitch.vue'
import PrimeEditor from './PrimeEditor.vue'
import PrimeDropdown from './PrimeDropdown.vue'
import PrimeMultiSelect from './PrimeMultiSelect.vue'
import PrimeCalendar from './PrimeCalendar.vue'
import PrimeSlider from './PrimeSlider.vue'
import PrimeRating from './PrimeRating.vue'
import PrimeChips from './PrimeChips.vue'

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

export const primeInputTextAreaDefinition: FormKitTypeDefinition = createInput(PrimeInputTextArea, {
  props: ['rows'],
})

export const primeCheckBoxDefinition: FormKitTypeDefinition = createInput(PrimeCheckBox, {
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

export const primeCalendarDefinition: FormKitTypeDefinition = createInput(PrimeCalendar, {
  props: [],
})

export const primeSliderDefinition: FormKitTypeDefinition = createInput(PrimeSlider, {
  props: [],
})

export const primeRatingDefinition: FormKitTypeDefinition = createInput(PrimeRating, {
  props: [],
})

export const primeChipsDefinition: FormKitTypeDefinition = createInput(PrimeChips, {
  props: [],
})

export const primeInputs = {
  primeInputText: primeInputTextDefinition,
  primeInputNumber: primeInputNumberDefinition,
  primeInputMask: primeInputMaskDefinition,
  primePassword: primePasswordDefinition,
  primeCheckBox: primeCheckBoxDefinition,
  primeInputSwitch: primeInputSwitchDefinition,
  primeInputTextArea: primeInputTextAreaDefinition,
  primeEditor: primeEditorDefinition,
  primeDropdown: primeDropdownDefinition,
  primeMultiSelect: primeMultiSelectDefinition,
  primeCalendar: primeCalendarDefinition,
  primeSlider: primeSliderDefinition,
  primeChips: primeChipsDefinition,
}
