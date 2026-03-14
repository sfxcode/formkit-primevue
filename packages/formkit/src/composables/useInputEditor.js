"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInputEditor = useInputEditor;
function useInputEditor() {
    var primeInputWithOptionNames = [
        "CascadeSelect",
        "Listbox",
        "MultiSelect",
        "RadioButton",
        "Select",
        "SelectButton",
        "TreeSelect",
    ];
    var primeInputNames = __spreadArray(__spreadArray([], primeInputWithOptionNames, true), [
        "AutoComplete",
        "Checkbox",
        "ColorPicker",
        "DatePicker",
        "Editor",
        "InputMask",
        "InputNumber",
        "InputOtp",
        "InputText",
        "Knob",
        "Password",
        "Rating",
        "Slider",
        "Textarea",
        "ToggleButton",
        "ToggleSwitch",
    ], false).sort();
    var primeOutputNames = [
        "OutputBoolean",
        "OutputDate",
        "OutputDuration",
        "OutputLink",
        "OutputList",
        "OutputNumber",
        "OutputReference",
        "OutputText",
    ];
    function editorDataToSchema(data) {
        if (!data)
            return {};
        var formkitInput = data === null || data === void 0 ? void 0 : data._dollar_formkit;
        var tempData = {};
        if (data.prime && Array.isArray(data.prime) && data.prime.length > 0) {
            var mapped = data.prime
                .filter(function (entry) {
                return entry && typeof entry === "object" && "prime_key" in entry && "prime_value" in entry;
            })
                .map(function (entry) {
                var key = entry.prime_key || "";
                var value = entry.prime_value;
                // some inputs require numbers
                if (formkitInput === "primeInputOtp" && key === "length" && value !== undefined) {
                    value = Number(value);
                }
                return [key, value];
            });
            tempData = Object.assign.apply(Object, __spreadArray([{}], mapped.map(function (_a) {
                var _b;
                var key = _a[0], val = _a[1];
                return (_b = {}, _b[key] = val, _b);
            }), false));
        }
        var readonlyValue = data.readonly === true ? true : undefined;
        var disabledValue = data.disabled === true ? true : undefined;
        var preserveValue = data.preserve === true ? true : undefined;
        var defaultObject = {
            readonly: readonlyValue,
            disabled: disabledValue,
            preserve: preserveValue,
        };
        // outer class
        var outerClass = "";
        if (data.outerClass)
            outerClass = "".concat(outerClass, " ").concat(data.outerClass).trim();
        // wrapper class
        var wrapperClass = "";
        if (data.wrapperClass)
            wrapperClass = "".concat(wrapperClass, " ").concat(data.wrapperClass).trim();
        // inner class
        var innerClass = "";
        if (data.innerClass)
            innerClass = "".concat(innerClass, " ").concat(data.innerClass).trim();
        var undefinedObject = {
            prime: undefined,
            schemaResultFormKey: undefined,
            _dollar_formkit: undefined,
            slots: undefined,
            selectButton: undefined,
        };
        var useOptions = formkitInput
            ? primeInputWithOptionNames.map(function (s) { return "prime".concat(s); }).includes(formkitInput)
            : false;
        var result = {};
        if (useOptions) {
            result = __assign(__assign(__assign(__assign(__assign(__assign({}, data), { $formkit: formkitInput }), tempData), undefinedObject), defaultObject), { outerClass: outerClass, wrapperClass: wrapperClass, innerClass: innerClass, optionLabel: "label", optionValue: "value" });
        }
        else {
            result = __assign(__assign(__assign(__assign(__assign(__assign({}, data), { $formkit: formkitInput }), tempData), undefinedObject), defaultObject), { outerClass: outerClass, wrapperClass: wrapperClass, innerClass: innerClass, options: undefined });
        }
        // cleanup empty values
        for (var key in result) {
            var value = result[key];
            if (value !== null && value !== undefined && typeof value === "string") {
                if (value.trim().length === 0) {
                    result[key] = undefined;
                }
            }
        }
        return result;
    }
    function dataToSchema(data) {
        if (!data)
            return {};
        var schema = editorDataToSchema(data);
        if ((schema === null || schema === void 0 ? void 0 : schema.options) && Array.isArray(schema.options)) {
            var options = schema.options.map(function (o) { return (o ? JSON.parse(JSON.stringify(o)) : {}); });
            return __assign(__assign({}, schema), { options: options });
        }
        else {
            return schema;
        }
    }
    function editorDataToJson(data) {
        if (!data)
            return "{}";
        return JSON.stringify(dataToSchema(data));
    }
    function objectToString(data) {
        if (!data)
            return "{}";
        return "{".concat(Object.entries(data)
            .map(function (_a) {
            var key = _a[0], value = _a[1];
            if (key === "options" && Array.isArray(value) && value.length > 0) {
                var result_1 = "[";
                value.forEach(function (o) {
                    if (o && typeof o === "object") {
                        result_1 = "".concat(result_1 + objectToString(o), ", ");
                    }
                });
                return "".concat(key, ": ").concat(result_1.substring(0, result_1.length - 2), "]");
            }
            else if (key === "primeInputOtp") {
                return "".concat(key, ": ").concat(value);
            }
            else {
                return "".concat(key, ": '").concat(value, "'");
            }
        })
            .join(), "}");
    }
    function editorDataToObject(data) {
        if (!data)
            return "{}";
        try {
            var jsonData = editorDataToJson(data);
            return objectToString(JSON.parse(jsonData));
        }
        catch (error) {
            console.error("Error in editorDataToObject:", error);
            return "{}";
        }
    }
    function schemaToEditorData(schema) {
        if (!schema)
            return {};
        var formkitInput = schema === null || schema === void 0 ? void 0 : schema.$formkit;
        return __assign(__assign({}, schema), { _dollar_formkit: formkitInput });
    }
    return {
        primeInputNames: primeInputNames,
        primeOutputNames: primeOutputNames,
        editorDataToSchema: editorDataToSchema,
        editorDataToJson: editorDataToJson,
        editorDataToCode: editorDataToObject,
        schemaToEditorData: schemaToEditorData,
    };
}
