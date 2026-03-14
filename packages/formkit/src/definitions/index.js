"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.primeOutputs = exports.primeInputs = void 0;
var input_ts_1 = require("./input.ts");
var output_ts_1 = require("./output.ts");
exports.primeInputs = {
    primeAutoComplete: input_ts_1.primeAutoCompleteDefinition,
    primeInputText: input_ts_1.primeInputTextDefinition,
    primeInputNumber: input_ts_1.primeInputNumberDefinition,
    primeInputMask: input_ts_1.primeInputMaskDefinition,
    primePassword: input_ts_1.primePasswordDefinition,
    primeCheckbox: input_ts_1.primeCheckboxDefinition,
    primeToggleSwitch: input_ts_1.primeToggleSwitchDefinition,
    primeTextarea: input_ts_1.primeTextareaDefinition,
    primeSelect: input_ts_1.primeSelectDefinition,
    primeMultiSelect: input_ts_1.primeMultiSelectDefinition,
    primeDatePicker: input_ts_1.primeDatePickerDefinition,
    primeSlider: input_ts_1.primeSliderDefinition,
    primeKnob: input_ts_1.primeKnobDefinition,
    primeRating: input_ts_1.primeRatingDefinition,
    primeRadioButton: input_ts_1.primeRadioButtonDefinition,
    primeColorPicker: input_ts_1.primeColorPickerDefinition,
    primeToggleButton: input_ts_1.primeToggleButtonDefinition,
    primeListbox: input_ts_1.primeListboxDefinition,
    primeSelectButton: input_ts_1.primeSelectButtonDefinition,
    primeCascadeSelect: input_ts_1.primeCascadeSelectDefinition,
    primeTreeSelect: input_ts_1.primeTreeSelectDefinition,
    primeInputOtp: input_ts_1.primeInputOtpDefinition,
};
exports.primeOutputs = {
    primeOutputText: output_ts_1.primeOutputTextDefinition,
    primeOutputLink: output_ts_1.primeOutputLinkDefinition,
    primeOutputReference: output_ts_1.primeOutputReferenceDefinition,
    primeOutputNumber: output_ts_1.primeOutputNumberDefinition,
    primeOutputDate: output_ts_1.primeOutputDateDefinition,
    primeOutputBoolean: output_ts_1.primeOutputBooleanDefinition,
    primeOutputDuration: output_ts_1.primeOutputDurationDefinition,
    primeOutputList: output_ts_1.primeOutputListDefinition,
};
