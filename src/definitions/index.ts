import type { FormKitTypeDefinition } from '@formkit/core'
import { createInput } from '@formkit/vue'

import PrimeAutoComplete from '../components/PrimeAutoComplete.vue'
import PrimeCalendar from '../components/PrimeCalendar.vue'
import PrimeCascadeSelect from '../components/PrimeCascadeSelect.vue'
import PrimeCheckbox from '../components/PrimeCheckbox.vue'
import PrimeChips from '../components/PrimeChips.vue'
import PrimeColorPicker from '../components/PrimeColorPicker.vue'
import PrimeDropdown from '../components/PrimeDropdown.vue'
import PrimeEditor from '../components/PrimeEditor.vue'
import PrimeInputMask from '../components/PrimeInputMask.vue'
import PrimeInputNumber from '../components/PrimeInputNumber.vue'
import PrimeInputOtp from '../components/PrimeInputOtp.vue'
import PrimeInputSwitch from '../components/PrimeInputSwitch.vue'
import PrimeInputText from '../components/PrimeInputText.vue'
import PrimeTextarea from '../components/PrimeTextarea.vue'
import PrimeKnob from '../components/PrimeKnob.vue'
import PrimeMultiSelect from '../components/PrimeMultiSelect.vue'
import PrimeListbox from '../components/PrimeListbox.vue'
import PrimePassword from '../components/PrimePassword.vue'
import PrimeRadioButton from '../components/PrimeRadioButton.vue'
import PrimeRating from '../components/PrimeRating.vue'
import PrimeSlider from '../components/PrimeSlider.vue'
import PrimeToggleButton from '../components/PrimeToggleButton.vue'
import PrimeTreeSelect from '../components/PrimeTreeSelect.vue'
import PrimeSelectButton from '../components/PrimeSelectButton.vue'
import PrimeTriStateCheckbox from '../components/PrimeTriStateCheckbox.vue'

export const primeAutoCompleteDefinition: FormKitTypeDefinition = createInput(PrimeAutoComplete, {
  props: ['pt', 'ptOptions', 'unstyled', 'dropdown', 'multiple'],
})
export const primeInputTextDefinition: FormKitTypeDefinition = createInput(PrimeInputText, {
  props: [
    'pt',
    'ptOptions',
    'unstyled',
    'placeholder',
    'icon',
  ],
})

export const primeInputNumberDefinition: FormKitTypeDefinition = createInput(PrimeInputNumber, {
  props: [
    'useGrouping',
    'min',
    'max',
    'minFractionDigits',
    'maxFractionDigits',
    'locale',
    'mode',
    'currency',
    'prefix',
    'suffix',
    'showButtons',
    'buttonLayout',
    'step',
    'pt',
    'ptOptions',
    'unstyled',
    'placeholder',
  ],
})

export const primeInputMaskDefinition: FormKitTypeDefinition = createInput(PrimeInputMask, {
  props: [
    'mask',
    'slotChar',
    'autoClear',
    'unmask',
    'pt',
    'ptOptions',
    'unstyled',
    'invalid',
    'variant',
    'iconLeft',
    'iconRight',
  ],
})

export const primePasswordDefinition: FormKitTypeDefinition = createInput(PrimePassword, {
  props: [
    'mediumRegex',
    'strongRegex',
    'promptLabel',
    'weakLabel',
    'mediumLabel',
    'strongLabel',
    'hideIcon',
    'showIcon',
    'pt',
    'ptOptions',
    'unstyled',
    'placeholder',
    'feedback',
    'toggleMask',
  ],
})

export const primeTextareaDefinition: FormKitTypeDefinition = createInput(PrimeTextarea, {
  props: [
    'pt',
    'ptOptions',
    'unstyled',
    'autoResize',
    'rows',
    'placeholder',
  ],
})

export const primeCheckboxDefinition: FormKitTypeDefinition = createInput(PrimeCheckbox, {
  props: [
    'binary',
    'trueValue',
    'falseValue',
    'pt',
    'ptOptions',
    'unstyled',
    'labelLeft',
    'labelRight',
  ],
})

export const primeInputSwitchDefinition: FormKitTypeDefinition = createInput(PrimeInputSwitch, {
  props: [
    'trueValue',
    'falseValue',
    'pt',
    'ptOptions',
    'unstyled',
    'labelLeft',
    'labelRight',
  ],
})

export const primeInputOtpDefinition: FormKitTypeDefinition = createInput(PrimeInputOtp, {
  props: [
    'length',
    'variant',
    'mask',
    'integerOnly',
    'pt',
    'ptOptions',
    'unstyled',
  ],
})

export const primeEditorDefinition: FormKitTypeDefinition = createInput(PrimeEditor, {
  props: [
    'placeholder',
    'formats',
    'modules',
    'pt',
    'ptOptions',
    'unstyled',
  ],
})

export const primeDropdownDefinition: FormKitTypeDefinition = createInput(PrimeDropdown, {
  props: [
    'options',
    'optionLabel',
    'optionValue',
    'optionDisabled',
    'optionGroupLabel',
    'optionGroupChildren',
    'scrollHeight',
    'filter',
    'filterPlaceholder',
    'filterLocale',
    'filterMatchMode',
    'filterFields',
    'filterInputProps',
    'editable',
    'placeholder',
    'dataKey',
    'showClear',
    'panelStyle',
    'panelClass',
    'panelProps',
    'appendTo',
    'resetFilterOnHide',
    'virtualScrollerOptions',
    'autoOptionFocus',
    'selectOnFocus',
    'filterMessage',
    'selectionMessage',
    'emptySelectionMessage',
    'emptyFilterMessage',
    'emptyMessage',
    'pt',
    'ptOptions',
    'unstyled',
  ],
})

export const primeMultiSelectDefinition: FormKitTypeDefinition = createInput(PrimeMultiSelect, {
  props: [
    'options',
    'optionLabel',
    'optionValue',
    'optionDisabled',
    'optionGroupLabel',
    'optionGroupChildren',
    'scrollHeight',
    'inputProps',
    'closeButtonProps',
    'dataKey',
    'filter',
    'filterPlaceholder',
    'filterLocale',
    'filterMatchMode',
    'filterFields',
    'appendTo',
    'display',
    'maxSelectedLabels',
    'selectedItemsLabel',
    'selectionLimit',
    'showToggleAll',
    'loading',
    'selectAll',
    'resetFilterOnHide',
    'virtualScrollerOptions',
    'autoOptionFocus',
    'autoFilterFocus',
    'filterMessage',
    'selectionMessage',
    'emptySelectionMessage',
    'emptyFilterMessage',
    'emptyMessage',
    'pt',
    'placeholder',
    'ptOptions',
    'unstyled',
  ],
})

export const primeListboxDefinition: FormKitTypeDefinition = createInput(PrimeListbox, {
  props: [
    'pt',
    'ptOptions',
    'unstyled',
    'options',
    'optionLabel',
    'optionValue',
    'multiple',
    'filter',
    'filterIcon',
    'filterPlaceholder',
    'filterLocale',
    'filterMatchMode',
    'autoOptionFocus',
    'selectOnFocus',
  ],
})

export const primeCalendarDefinition: FormKitTypeDefinition = createInput(PrimeCalendar, {
  props: [
    'dateFormat',
    'placeholder',
    'selectionMode',
    'inline',
    'icon',
    'showOtherMonths',
    'selectOtherMonths',
    'showIcon',
    'previousIcon',
    'nextIcon',
    'incrementIcon',
    'decrementIcon',
    'numberOfMonths',
    'responsiveOptions',
    'view',
    'touchUI',
    'minDate',
    'maxDate',
    'disabledDates',
    'disabledDays',
    'maxDateCount',
    'showOnFocus',
    'autoZIndex',
    'baseZIndex',
    'showButtonBar',
    'showTime',
    'timeOnly',
    'shortYearCutoff',
    'hourFormat',
    'stepHour',
    'stepMinute',
    'stepSecond',
    'showSeconds',
    'hideOnDateTimeSelect',
    'hideOnRangeSelection',
    'timeSeparator',
    'showWeek',
    'manualInput',
    'appendTo',
    'panelStyle',
    'panelClass',
    'pt',
    'ptOptions',
    'unstyled',
  ],
})

export const primeSliderDefinition: FormKitTypeDefinition = createInput(PrimeSlider, {
  props: [
    'pt',
    'ptOptions',
    'unstyled',
    'min',
    'max',
    'step',
    'range',
    'orientation',
  ],
})

export const primeRatingDefinition: FormKitTypeDefinition = createInput(PrimeRating, {
  props: [
    'unstyled',
    'stars',
    'cancel',
    'onIcon',
    'offIcon',
    'cancelIcon',
    'ptOptions',
    'pt',
  ],
})
export const primeRadioButtonDefinition: FormKitTypeDefinition = createInput(PrimeRadioButton, {
  props: [
    'pt',
    'ptOptions',
    'unstyled',
    'options',
    'options_class',
    'option_class',
    'label_class',
  ],
})

export const primeChipsDefinition: FormKitTypeDefinition = createInput(PrimeChips, {
  props: [
    'allowDuplicate',
    'addOnBlur',
    'max',
    'placeholder',
    'seperator',
    'pt',
    'ptOptions',
    'unstyled',
  ],
})

export const primeKnobDefinition: FormKitTypeDefinition = createInput(PrimeKnob, {
  props: [
    'pt',
    'ptOptions',
    'unstyled',
    'min',
    'max',
    'step',
    'size',
    'strokeWidth',
    'showValue',
    'valueColor',
    'rangeColor',
    'textColor',
    'valueTemplate',
  ],
})

export const primeColorPickerDefinition: FormKitTypeDefinition = createInput(PrimeColorPicker, {
  props: [
    'defaultColor',
    'inline',
    'format',
    'pt',
    'ptOptions',
    'unstyled',
  ],
})

export const primeToggleButtonDefinition: FormKitTypeDefinition = createInput(PrimeToggleButton, {
  props: [
    'pt',
    'ptOptions',
    'unstyled',
    'onLabel',
    'offLabel',
    'onIcon',
    'offIcon',
    'iconPos',
  ],
})

export const primeSelectButtonDefinition: FormKitTypeDefinition = createInput(PrimeSelectButton, {
  props: [
    'pt',
    'ptOptions',
    'unstyled',
    'optionLabel',
    'optionValue',
    'optionDisabled',
    'multiple',
    'unselectable',
    'dataKey',
    'options',
  ],
})
export const primeTriStateCheckboxDefinition: FormKitTypeDefinition = createInput(PrimeTriStateCheckbox, {
  props: [
    'pt',
    'ptOptions',
    'unstyled',
    'variant',
    'labelRight',
    'labelLeft',
  ],
})
export const primeCascadeSelectDefinition: FormKitTypeDefinition = createInput(PrimeCascadeSelect, {
  props: [
    'options',
    'optionLabel',
    'optionValue',
    'optionGroupLabel',
    'optionGroupChildren',
    'placeholder',
    'pt',
    'ptOptions',
    'unstyled',
  ],
})
export const primeTreeSelectDefinition: FormKitTypeDefinition = createInput(PrimeTreeSelect, {
  props: [
    'options',
    'placeholder',
    'selectionMode',
    'pt',
    'ptOptions',
    'unstyled',
    'emptyMessage',
    'display',
    'metaKeySelection',
    'appendTo',
    'scrollHeight',
    'panelClass',
    'variant',
  ],
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
  primeInputOtp: primeInputOtpDefinition,
}
