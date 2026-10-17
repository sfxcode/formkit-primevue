import {
  primeAutoCompleteDefinition,
  primeCascadeSelectDefinition,
  primeCheckboxDefinition,
  primeColorPickerDefinition,
  primeDatePickerDefinition,
  primeInputMaskDefinition,
  primeInputNumberDefinition,
  primeInputOtpDefinition,
  primeInputTextDefinition,
  primeKnobDefinition,
  primeListboxDefinition,
  primeMultiSelectDefinition,
  primePasswordDefinition,
  primeRadioButtonDefinition,
  primeRatingDefinition,
  primeSelectButtonDefinition,
  primeSelectDefinition,
  primeSliderDefinition,
  primeTextareaDefinition,
  primeToggleButtonDefinition,
  primeToggleSwitchDefinition,
  primeTreeSelectDefinition,
} from './input'

import {
  primeOutputBooleanDefinition,
  primeOutputDateDefinition,
  primeOutputDurationDefinition,
  primeOutputLinkDefinition,
  primeOutputListDefinition,
  primeOutputNumberDefinition,
  primeOutputReferenceDefinition,
  primeOutputTextDefinition,
} from './output'

import { renamePrefix } from './prefix'
import { primeRepeaterDefinition } from './repeater'

export const primeInputs = {
  primeAutoComplete: primeAutoCompleteDefinition,
  primeInputText: primeInputTextDefinition,
  primeInputNumber: primeInputNumberDefinition,
  primeInputMask: primeInputMaskDefinition,
  primePassword: primePasswordDefinition,
  primeCheckbox: primeCheckboxDefinition,
  primeToggleSwitch: primeToggleSwitchDefinition,
  primeTextarea: primeTextareaDefinition,
  primeSelect: primeSelectDefinition,
  primeMultiSelect: primeMultiSelectDefinition,
  primeDatePicker: primeDatePickerDefinition,
  primeSlider: primeSliderDefinition,
  primeKnob: primeKnobDefinition,
  primeRating: primeRatingDefinition,
  primeRadioButton: primeRadioButtonDefinition,
  primeColorPicker: primeColorPickerDefinition,
  primeToggleButton: primeToggleButtonDefinition,
  primeListbox: primeListboxDefinition,
  primeSelectButton: primeSelectButtonDefinition,
  primeCascadeSelect: primeCascadeSelectDefinition,
  primeTreeSelect: primeTreeSelectDefinition,
  primeInputOtp: primeInputOtpDefinition,
  primeRepeater: primeRepeaterDefinition,
}

export const primeOutputs = {
  primeOutputText: primeOutputTextDefinition,
  primeOutputLink: primeOutputLinkDefinition,
  primeOutputReference: primeOutputReferenceDefinition,
  primeOutputNumber: primeOutputNumberDefinition,
  primeOutputDate: primeOutputDateDefinition,
  primeOutputBoolean: primeOutputBooleanDefinition,
  primeOutputDuration: primeOutputDurationDefinition,
  primeOutputList: primeOutputListDefinition,
}

/**
 * The same definitions under the library-neutral `form` prefix (`formInputText`, `formRepeater`, ...), so
 * a schema can keep its type names when it moves between UI libraries that share the prefix.
 * `primeInputs` and `primeOutputs` are unchanged: register these in addition to keep both names.
 */
export const formInputs = renamePrefix(primeInputs, 'prime', 'form')

export const formOutputs = renamePrefix(primeOutputs, 'prime', 'form')
