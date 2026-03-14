"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFormKitInput = useFormKitInput;
var config_1 = require("primevue/config");
var vue_1 = require("vue");
var consola_1 = require("consola");
function useFormKitInput(context) {
    var isInvalid = (0, vue_1.computed)(function () {
        var _a, _b;
        return ((_a = context === null || context === void 0 ? void 0 : context.state) === null || _a === void 0 ? void 0 : _a.validationVisible) && !((_b = context === null || context === void 0 ? void 0 : context.state) === null || _b === void 0 ? void 0 : _b.valid);
    });
    var styleClass = (0, vue_1.computed)(function () {
        var _a, _b, _c, _d;
        return ((_a = context === null || context === void 0 ? void 0 : context.state) === null || _a === void 0 ? void 0 : _a.validationVisible) && !((_b = context === null || context === void 0 ? void 0 : context.state) === null || _b === void 0 ? void 0 : _b.valid)
            ? "".concat(((_c = context === null || context === void 0 ? void 0 : context.attrs) === null || _c === void 0 ? void 0 : _c.class) || "", " p-invalid")
            : ((_d = context === null || context === void 0 ? void 0 : context.attrs) === null || _d === void 0 ? void 0 : _d.class) || "";
    });
    function isGlobalUnstyledMode() {
        var _a;
        var result = false;
        try {
            var primevue = (0, config_1.usePrimeVue)();
            result = ((_a = primevue === null || primevue === void 0 ? void 0 : primevue.config) === null || _a === void 0 ? void 0 : _a.unstyled) || false;
        }
        catch (e) {
            consola_1.default.log(e);
        }
        return result;
    }
    var unstyled = (0, vue_1.computed)(function () {
        var _a;
        return (_a = context === null || context === void 0 ? void 0 : context.unstyled) !== null && _a !== void 0 ? _a : isGlobalUnstyledMode();
    });
    var formKitCreateInputSlots = new Set(["label", "help", "messages", "message", "input"]);
    // FormKit slots added by createInput() and should be passed to FormKit not to the wrapped component.
    var validSlotNames = (0, vue_1.computed)(function () {
        return Object.keys((context === null || context === void 0 ? void 0 : context.slots) || {}).filter(function (slotName) { return !formKitCreateInputSlots.has(slotName); });
    });
    function handleBlur(event) {
        var _a, _b;
        (_b = (_a = context === null || context === void 0 ? void 0 : context.handlers) === null || _a === void 0 ? void 0 : _a.blur) === null || _b === void 0 ? void 0 : _b.call(_a, event);
    }
    function handleChange(_) {
        var _a, _b;
        (_b = (_a = context === null || context === void 0 ? void 0 : context.node) === null || _a === void 0 ? void 0 : _a.input) === null || _b === void 0 ? void 0 : _b.call(_a, context === null || context === void 0 ? void 0 : context._value);
    }
    function handleInput(_) {
        var _a, _b;
        (_b = (_a = context === null || context === void 0 ? void 0 : context.node) === null || _a === void 0 ? void 0 : _a.input) === null || _b === void 0 ? void 0 : _b.call(_a, context === null || context === void 0 ? void 0 : context._value);
    }
    function handleSelect(e) {
        var _a, _b;
        (_b = (_a = context === null || context === void 0 ? void 0 : context.node) === null || _a === void 0 ? void 0 : _a.input) === null || _b === void 0 ? void 0 : _b.call(_a, e);
    }
    var modelValue = (0, vue_1.computed)({
        get: function () { return context._value; },
        set: function (value) {
            context.node.input(value);
        },
    });
    return {
        isInvalid: isInvalid,
        validSlotNames: validSlotNames,
        styleClass: styleClass,
        unstyled: unstyled,
        handleBlur: handleBlur,
        handleChange: handleChange,
        handleInput: handleInput,
        handleSelect: handleSelect,
        modelValue: modelValue,
    };
}
