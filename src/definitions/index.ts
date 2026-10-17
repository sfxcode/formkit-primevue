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

const primeInputDefinitions = {
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

const primeOutputDefinitions = {
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
 * Only the `form` names: `primeInputs` and `primeOutputs` already contain them next to the `prime` names.
 */
export const formInputs = renamePrefix(primeInputDefinitions, 'prime', 'form')

export const formOutputs = renamePrefix(primeOutputDefinitions, 'prime', 'form')

/**
 * Every input, under its `prime` name and its `form` name. Both names are the same definition.
 */
export const primeInputs = { ...primeInputDefinitions, ...formInputs }

/**
 * Every output, under its `prime` name and its `form` name. Both names are the same definition.
 */
export const primeOutputs = { ...primeOutputDefinitions, ...formOutputs }
