"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.primeInputs = exports.primeTreeSelectDefinition = exports.primeCascadeSelectDefinition = exports.primeSelectButtonDefinition = exports.primeToggleButtonDefinition = exports.primeColorPickerDefinition = exports.primeKnobDefinition = exports.primeRadioButtonDefinition = exports.primeRatingDefinition = exports.primeSliderDefinition = exports.primeDatePickerDefinition = exports.primeListboxDefinition = exports.primeMultiSelectDefinition = exports.primeSelectDefinition = exports.primeInputOtpDefinition = exports.primeToggleSwitchDefinition = exports.primeCheckboxDefinition = exports.primeTextareaDefinition = exports.primePasswordDefinition = exports.primeInputMaskDefinition = exports.primeInputNumberDefinition = exports.primeInputTextDefinition = exports.primeAutoCompleteDefinition = void 0;
var vue_1 = require("@formkit/vue");
var PrimeAutoComplete_vue_1 = require("../components/PrimeAutoComplete.vue");
var PrimeCascadeSelect_vue_1 = require("../components/PrimeCascadeSelect.vue");
var PrimeCheckbox_vue_1 = require("../components/PrimeCheckbox.vue");
var PrimeColorPicker_vue_1 = require("../components/PrimeColorPicker.vue");
var PrimeDatePicker_vue_1 = require("../components/PrimeDatePicker.vue");
var PrimeInputMask_vue_1 = require("../components/PrimeInputMask.vue");
var PrimeInputNumber_vue_1 = require("../components/PrimeInputNumber.vue");
var PrimeInputOtp_vue_1 = require("../components/PrimeInputOtp.vue");
var PrimeInputText_vue_1 = require("../components/PrimeInputText.vue");
var PrimeKnob_vue_1 = require("../components/PrimeKnob.vue");
var PrimeListbox_vue_1 = require("../components/PrimeListbox.vue");
var PrimeMultiSelect_vue_1 = require("../components/PrimeMultiSelect.vue");
var PrimePassword_vue_1 = require("../components/PrimePassword.vue");
var PrimeRadioButton_vue_1 = require("../components/PrimeRadioButton.vue");
var PrimeRating_vue_1 = require("../components/PrimeRating.vue");
var PrimeSelect_vue_1 = require("../components/PrimeSelect.vue");
var PrimeSelectButton_vue_1 = require("../components/PrimeSelectButton.vue");
var PrimeSlider_vue_1 = require("../components/PrimeSlider.vue");
var PrimeTextarea_vue_1 = require("../components/PrimeTextarea.vue");
var PrimeToggleButton_vue_1 = require("../components/PrimeToggleButton.vue");
var PrimeToggleSwitch_vue_1 = require("../components/PrimeToggleSwitch.vue");
var PrimeTreeSelect_vue_1 = require("../components/PrimeTreeSelect.vue");
exports.primeAutoCompleteDefinition = (0, vue_1.createInput)(PrimeAutoComplete_vue_1.default, {
    props: [
        "pt",
        "ptOptions",
        "unstyled",
        "Select",
        "multiple",
        "typeahead",
        "optionLabel",
        "options",
        "size",
        "minLength",
        "placeholder",
        "fluid",
        "separators",
    ],
    family: "PrimeInput",
});
exports.primeInputTextDefinition = (0, vue_1.createInput)(PrimeInputText_vue_1.default, {
    props: [
        "pt",
        "ptOptions",
        "unstyled",
        "placeholder",
        "iconPrefix",
        "iconSuffix",
        "size",
        "inputType",
    ],
    family: "PrimeInput",
});
exports.primeInputNumberDefinition = (0, vue_1.createInput)(PrimeInputNumber_vue_1.default, {
    props: [
        "useGrouping",
        "min",
        "max",
        "minFractionDigits",
        "maxFractionDigits",
        "locale",
        "mode",
        "currency",
        "prefix",
        "suffix",
        "showButtons",
        "buttonLayout",
        "step",
        "pt",
        "ptOptions",
        "unstyled",
        "placeholder",
        "size",
    ],
    family: "PrimeInput",
});
exports.primeInputMaskDefinition = (0, vue_1.createInput)(PrimeInputMask_vue_1.default, {
    props: [
        "mask",
        "slotChar",
        "autoClear",
        "unmask",
        "pt",
        "ptOptions",
        "unstyled",
        "invalid",
        "variant",
        "iconPrefix",
        "iconSuffix",
        "size",
    ],
    family: "PrimeInput",
});
exports.primePasswordDefinition = (0, vue_1.createInput)(PrimePassword_vue_1.default, {
    props: [
        "mediumRegex",
        "strongRegex",
        "promptLabel",
        "weakLabel",
        "mediumLabel",
        "strongLabel",
        "hideIcon",
        "showIcon",
        "pt",
        "ptOptions",
        "unstyled",
        "placeholder",
        "feedback",
        "toggleMask",
        "size",
    ],
    family: "PrimeInput",
});
exports.primeTextareaDefinition = (0, vue_1.createInput)(PrimeTextarea_vue_1.default, {
    props: ["pt", "ptOptions", "unstyled", "autoResize", "rows", "placeholder", "size"],
    family: "PrimeInput",
});
exports.primeCheckboxDefinition = (0, vue_1.createInput)(PrimeCheckbox_vue_1.default, {
    props: [
        "binary",
        "trueValue",
        "falseValue",
        "pt",
        "ptOptions",
        "unstyled",
        "indeterminate",
        "variant",
        "prefix",
        "suffix",
        "size",
    ],
    family: "PrimeInput",
});
exports.primeToggleSwitchDefinition = (0, vue_1.createInput)(PrimeToggleSwitch_vue_1.default, {
    props: ["trueValue", "falseValue", "pt", "ptOptions", "unstyled", "prefix", "suffix"],
    family: "PrimeInput",
});
exports.primeInputOtpDefinition = (0, vue_1.createInput)(PrimeInputOtp_vue_1.default, {
    props: ["length", "variant", "mask", "integerOnly", "pt", "ptOptions", "unstyled", "size"],
    family: "PrimeInput",
});
exports.primeSelectDefinition = (0, vue_1.createInput)(PrimeSelect_vue_1.default, {
    props: [
        "options",
        "optionLabel",
        "optionValue",
        "optionDisabled",
        "optionGroupLabel",
        "optionGroupChildren",
        "scrollHeight",
        "filter",
        "filterPlaceholder",
        "filterLocale",
        "filterMatchMode",
        "filterFields",
        "filterInputProps",
        "editable",
        "placeholder",
        "dataKey",
        "showClear",
        "panelStyle",
        "panelClass",
        "panelProps",
        "appendTo",
        "resetFilterOnHide",
        "virtualScrollerOptions",
        "autoOptionFocus",
        "selectOnFocus",
        "filterMessage",
        "selectionMessage",
        "emptySelectionMessage",
        "emptyFilterMessage",
        "emptyMessage",
        "pt",
        "ptOptions",
        "unstyled",
        "size",
    ],
    family: "PrimeInput",
});
exports.primeMultiSelectDefinition = (0, vue_1.createInput)(PrimeMultiSelect_vue_1.default, {
    props: [
        "options",
        "optionLabel",
        "optionValue",
        "optionDisabled",
        "optionGroupLabel",
        "optionGroupChildren",
        "scrollHeight",
        "inputProps",
        "closeButtonProps",
        "dataKey",
        "filter",
        "filterPlaceholder",
        "filterLocale",
        "filterMatchMode",
        "filterFields",
        "appendTo",
        "display",
        "maxSelectedLabels",
        "selectedItemsLabel",
        "selectionLimit",
        "showToggleAll",
        "loading",
        "selectAll",
        "resetFilterOnHide",
        "virtualScrollerOptions",
        "autoOptionFocus",
        "autoFilterFocus",
        "filterMessage",
        "selectionMessage",
        "emptySelectionMessage",
        "emptyFilterMessage",
        "emptyMessage",
        "pt",
        "placeholder",
        "ptOptions",
        "unstyled",
        "size",
    ],
    family: "PrimeInput",
});
exports.primeListboxDefinition = (0, vue_1.createInput)(PrimeListbox_vue_1.default, {
    props: [
        "pt",
        "ptOptions",
        "unstyled",
        "options",
        "optionLabel",
        "optionValue",
        "multiple",
        "filter",
        "filterIcon",
        "filterPlaceholder",
        "filterLocale",
        "filterMatchMode",
        "autoOptionFocus",
        "selectOnFocus",
        "optionDisabled",
        "optionGroupLabel",
        "optionGroupChildren",
        "dataKey",
        "metaKeySelection",
        "virtualScrollerOptions",
    ],
    family: "PrimeInput",
});
exports.primeDatePickerDefinition = (0, vue_1.createInput)(PrimeDatePicker_vue_1.default, {
    props: [
        "dateFormat",
        "placeholder",
        "selectionMode",
        "inline",
        "icon",
        "showOtherMonths",
        "selectOtherMonths",
        "showIcon",
        "previousIcon",
        "nextIcon",
        "incrementIcon",
        "decrementIcon",
        "numberOfMonths",
        "responsiveOptions",
        "view",
        "touchUI",
        "minDate",
        "maxDate",
        "disabledDates",
        "disabledDays",
        "maxDateCount",
        "showOnFocus",
        "autoZIndex",
        "baseZIndex",
        "showButtonBar",
        "showTime",
        "timeOnly",
        "shortYearCutoff",
        "hourFormat",
        "stepHour",
        "stepMinute",
        "stepSecond",
        "showSeconds",
        "hideOnDateTimeSelect",
        "hideOnRangeSelection",
        "timeSeparator",
        "showWeek",
        "manualInput",
        "appendTo",
        "panelStyle",
        "panelClass",
        "pt",
        "ptOptions",
        "unstyled",
        "size",
        "updateModelType",
    ],
    family: "PrimeInput",
});
exports.primeSliderDefinition = (0, vue_1.createInput)(PrimeSlider_vue_1.default, {
    props: ["pt", "ptOptions", "unstyled", "min", "max", "step", "range", "orientation"],
    family: "PrimeInput",
});
exports.primeRatingDefinition = (0, vue_1.createInput)(PrimeRating_vue_1.default, {
    props: ["unstyled", "stars", "cancel", "onIcon", "offIcon", "cancelIcon", "ptOptions", "pt"],
    family: "PrimeInput",
});
exports.primeRadioButtonDefinition = (0, vue_1.createInput)(PrimeRadioButton_vue_1.default, {
    props: ["pt", "ptOptions", "unstyled", "options", "optionsClass", "optionClass", "size"],
    family: "PrimeInput",
});
exports.primeKnobDefinition = (0, vue_1.createInput)(PrimeKnob_vue_1.default, {
    props: [
        "pt",
        "ptOptions",
        "unstyled",
        "min",
        "max",
        "step",
        "size",
        "strokeWidth",
        "showValue",
        "valueColor",
        "rangeColor",
        "textColor",
        "valueTemplate",
    ],
    family: "PrimeInput",
});
exports.primeColorPickerDefinition = (0, vue_1.createInput)(PrimeColorPicker_vue_1.default, {
    props: ["defaultColor", "inline", "format", "pt", "ptOptions", "unstyled"],
    family: "PrimeInput",
});
exports.primeToggleButtonDefinition = (0, vue_1.createInput)(PrimeToggleButton_vue_1.default, {
    props: [
        "pt",
        "ptOptions",
        "unstyled",
        "onLabel",
        "offLabel",
        "onIcon",
        "offIcon",
        "iconPos",
        "size",
    ],
    family: "PrimeInput",
});
exports.primeSelectButtonDefinition = (0, vue_1.createInput)(PrimeSelectButton_vue_1.default, {
    props: [
        "pt",
        "ptOptions",
        "unstyled",
        "optionLabel",
        "optionValue",
        "optionDisabled",
        "multiple",
        "unselectable",
        "dataKey",
        "options",
        "size",
    ],
    family: "PrimeInput",
});
exports.primeCascadeSelectDefinition = (0, vue_1.createInput)(PrimeCascadeSelect_vue_1.default, {
    props: [
        "options",
        "optionLabel",
        "optionValue",
        "optionGroupLabel",
        "optionGroupChildren",
        "placeholder",
        "pt",
        "ptOptions",
        "unstyled",
        "size",
    ],
    family: "PrimeInput",
});
exports.primeTreeSelectDefinition = (0, vue_1.createInput)(PrimeTreeSelect_vue_1.default, {
    props: [
        "options",
        "placeholder",
        "selectionMode",
        "pt",
        "ptOptions",
        "unstyled",
        "emptyMessage",
        "display",
        "metaKeySelection",
        "appendTo",
        "scrollHeight",
        "panelClass",
        "variant",
        "size",
    ],
    family: "PrimeInput",
});
exports.primeInputs = {
    primeAutoComplete: exports.primeAutoCompleteDefinition,
    primeInputText: exports.primeInputTextDefinition,
    primeInputNumber: exports.primeInputNumberDefinition,
    primeInputMask: exports.primeInputMaskDefinition,
    primePassword: exports.primePasswordDefinition,
    primeCheckbox: exports.primeCheckboxDefinition,
    primeToggleSwitch: exports.primeToggleSwitchDefinition,
    primeTextarea: exports.primeTextareaDefinition,
    primeSelect: exports.primeSelectDefinition,
    primeMultiSelect: exports.primeMultiSelectDefinition,
    primeDatePicker: exports.primeDatePickerDefinition,
    primeSlider: exports.primeSliderDefinition,
    primeKnob: exports.primeKnobDefinition,
    primeRating: exports.primeRatingDefinition,
    primeRadioButton: exports.primeRadioButtonDefinition,
    primeColorPicker: exports.primeColorPickerDefinition,
    primeToggleButton: exports.primeToggleButtonDefinition,
    primeListbox: exports.primeListboxDefinition,
    primeSelectButton: exports.primeSelectButtonDefinition,
    primeCascadeSelect: exports.primeCascadeSelectDefinition,
    primeTreeSelect: exports.primeTreeSelectDefinition,
    primeInputOtp: exports.primeInputOtpDefinition,
};
