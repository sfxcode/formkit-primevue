"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var useFormKitInput_1 = require("../src/composables/useFormKitInput");
(0, vitest_1.describe)('useFormKitInput', function () {
    (0, vitest_1.it)('returns invalid state when validation is visible and not valid', function () {
        var context = {
            state: {
                validationVisible: true,
                valid: false,
            },
        };
        var isInvalid = (0, useFormKitInput_1.useFormKitInput)(context).isInvalid;
        (0, vitest_1.expect)(isInvalid.value).toBe(true);
    });
    (0, vitest_1.it)('returns valid state when validation is not visible or valid', function () {
        var context = {
            state: {
                validationVisible: false,
                valid: true,
            },
        };
        var isInvalid = (0, useFormKitInput_1.useFormKitInput)(context).isInvalid;
        (0, vitest_1.expect)(isInvalid.value).toBe(false);
    });
    (0, vitest_1.it)('returns correct style class when invalid', function () {
        var context = {
            state: {
                validationVisible: true,
                valid: false,
            },
            attrs: {
                class: 'custom-class',
            },
        };
        var styleClass = (0, useFormKitInput_1.useFormKitInput)(context).styleClass;
        (0, vitest_1.expect)(styleClass.value).toBe('custom-class p-invalid');
    });
    (0, vitest_1.it)('returns correct style class when valid', function () {
        var context = {
            state: {
                validationVisible: false,
                valid: true,
            },
            attrs: {
                class: 'custom-class',
            },
        };
        var styleClass = (0, useFormKitInput_1.useFormKitInput)(context).styleClass;
        (0, vitest_1.expect)(styleClass.value).toBe('custom-class');
    });
    (0, vitest_1.it)('handles blur event safely', function () {
        var blurHandler = vitest_1.vi.fn();
        var context = {
            handlers: {
                blur: blurHandler,
            },
        };
        var handleBlur = (0, useFormKitInput_1.useFormKitInput)(context).handleBlur;
        handleBlur(new Event('blur'));
        (0, vitest_1.expect)(blurHandler).toHaveBeenCalled();
    });
    (0, vitest_1.it)('handles change event safely', function () {
        var inputHandler = vitest_1.vi.fn();
        var context = {
            node: {
                input: inputHandler,
            },
            _value: 'new-value',
        };
        var handleChange = (0, useFormKitInput_1.useFormKitInput)(context).handleChange;
        handleChange('new-value');
        (0, vitest_1.expect)(inputHandler).toHaveBeenCalledWith('new-value');
    });
    (0, vitest_1.it)('handles input event safely', function () {
        var inputHandler = vitest_1.vi.fn();
        var context = {
            node: {
                input: inputHandler,
            },
            _value: 'input-value',
        };
        var handleInput = (0, useFormKitInput_1.useFormKitInput)(context).handleInput;
        handleInput('input-value');
        (0, vitest_1.expect)(inputHandler).toHaveBeenCalledWith('input-value');
    });
    (0, vitest_1.it)('handles select event safely', function () {
        var inputHandler = vitest_1.vi.fn();
        var context = {
            node: {
                input: inputHandler,
            },
        };
        var handleSelect = (0, useFormKitInput_1.useFormKitInput)(context).handleSelect;
        handleSelect('selected-value');
        (0, vitest_1.expect)(inputHandler).toHaveBeenCalledWith('selected-value');
    });
    (0, vitest_1.it)('returns valid slot names excluding FormKit slots', function () {
        var context = {
            slots: {
                label: function () { },
                help: function () { },
                customSlot: function () { },
            },
        };
        var validSlotNames = (0, useFormKitInput_1.useFormKitInput)(context).validSlotNames;
        (0, vitest_1.expect)(validSlotNames.value).toEqual(['customSlot']);
    });
    (0, vitest_1.it)('returns unstyled mode when context unstyled is true', function () {
        var context = {
            unstyled: true,
        };
        var unstyled = (0, useFormKitInput_1.useFormKitInput)(context).unstyled;
        (0, vitest_1.expect)(unstyled.value).toBe(true);
    });
});
