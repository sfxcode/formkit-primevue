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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12;
Object.defineProperty(exports, "__esModule", { value: true });
var index_ts_1 = require("../composables/index.ts");
var props = defineProps({
    context: {
        type: Object,
        required: true,
    },
});
var _13 = (0, index_ts_1.useFormKitSection)(props.context), hasPrefix = _13.hasPrefix, hasSuffix = _13.hasSuffix, generateId = _13.generateId;
var _14 = (0, index_ts_1.useFormKitInput)(props.context), validSlotNames = _14.validSlotNames, unstyled = _14.unstyled, isInvalid = _14.isInvalid, handleInput = _14.handleInput, handleBlur = _14.handleBlur, modelValue = _14.modelValue;
var generatedId = generateId();
var __VLS_ctx = __assign(__assign(__assign(__assign({}, {}), {}), {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "p-formkit" }));
/** @type {__VLS_StyleScopedClasses['p-formkit']} */ ;
if (__VLS_ctx.hasPrefix) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)(__assign({ for: (__VLS_ctx.generatedId) }, { class: "formkit-prefix" }));
    /** @type {__VLS_StyleScopedClasses['formkit-prefix']} */ ;
    ((_a = __VLS_ctx.context) === null || _a === void 0 ? void 0 : _a.prefix);
}
var __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Checkbox | typeof __VLS_components.Checkbox} */
Checkbox;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0(__assign(__assign(__assign(__assign({ 'onChange': {} }, { 'onBlur': {} }), { modelValue: (__VLS_ctx.modelValue) }), ((_b = __VLS_ctx.context) === null || _b === void 0 ? void 0 : _b.attrs)), { inputId: (__VLS_ctx.generatedId), disabled: (!!((_c = __VLS_ctx.context) === null || _c === void 0 ? void 0 : _c.disabled)), readonly: ((_e = (_d = __VLS_ctx.context) === null || _d === void 0 ? void 0 : _d.attrs.readonly) !== null && _e !== void 0 ? _e : false), inputStyle: ((_f = __VLS_ctx.context) === null || _f === void 0 ? void 0 : _f.attrs.style), inputClass: ((_h = (_g = __VLS_ctx.context) === null || _g === void 0 ? void 0 : _g.attrs) === null || _h === void 0 ? void 0 : _h.class), invalid: (__VLS_ctx.isInvalid), tabindex: ((_j = __VLS_ctx.context) === null || _j === void 0 ? void 0 : _j.attrs.tabindex), 'aria-label': ((_k = __VLS_ctx.context) === null || _k === void 0 ? void 0 : _k.attrs.ariaLabel), 'aria-labelledby': ((_l = __VLS_ctx.context) === null || _l === void 0 ? void 0 : _l.attrs.ariaLabelledby), size: ((_o = (_m = __VLS_ctx.context) === null || _m === void 0 ? void 0 : _m.size) !== null && _o !== void 0 ? _o : undefined), indeterminate: ((_p = __VLS_ctx.context.indeterminate) !== null && _p !== void 0 ? _p : undefined), binary: ((_q = __VLS_ctx.context.binary) !== null && _q !== void 0 ? _q : true), variant: ((_r = __VLS_ctx.context.variant) !== null && _r !== void 0 ? _r : 'outlined'), trueValue: ((_s = __VLS_ctx.context.trueValue) !== null && _s !== void 0 ? _s : undefined), falseValue: ((_t = __VLS_ctx.context.falseValue) !== null && _t !== void 0 ? _t : undefined), pt: (__VLS_ctx.context.pt), ptOptions: (__VLS_ctx.context.ptOptions), unstyled: (__VLS_ctx.unstyled) })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign(__assign(__assign({ 'onChange': {} }, { 'onBlur': {} }), { modelValue: (__VLS_ctx.modelValue) }), ((_u = __VLS_ctx.context) === null || _u === void 0 ? void 0 : _u.attrs)), { inputId: (__VLS_ctx.generatedId), disabled: (!!((_v = __VLS_ctx.context) === null || _v === void 0 ? void 0 : _v.disabled)), readonly: ((_x = (_w = __VLS_ctx.context) === null || _w === void 0 ? void 0 : _w.attrs.readonly) !== null && _x !== void 0 ? _x : false), inputStyle: ((_y = __VLS_ctx.context) === null || _y === void 0 ? void 0 : _y.attrs.style), inputClass: ((_0 = (_z = __VLS_ctx.context) === null || _z === void 0 ? void 0 : _z.attrs) === null || _0 === void 0 ? void 0 : _0.class), invalid: (__VLS_ctx.isInvalid), tabindex: ((_1 = __VLS_ctx.context) === null || _1 === void 0 ? void 0 : _1.attrs.tabindex), 'aria-label': ((_2 = __VLS_ctx.context) === null || _2 === void 0 ? void 0 : _2.attrs.ariaLabel), 'aria-labelledby': ((_3 = __VLS_ctx.context) === null || _3 === void 0 ? void 0 : _3.attrs.ariaLabelledby), size: ((_5 = (_4 = __VLS_ctx.context) === null || _4 === void 0 ? void 0 : _4.size) !== null && _5 !== void 0 ? _5 : undefined), indeterminate: ((_6 = __VLS_ctx.context.indeterminate) !== null && _6 !== void 0 ? _6 : undefined), binary: ((_7 = __VLS_ctx.context.binary) !== null && _7 !== void 0 ? _7 : true), variant: ((_8 = __VLS_ctx.context.variant) !== null && _8 !== void 0 ? _8 : 'outlined'), trueValue: ((_9 = __VLS_ctx.context.trueValue) !== null && _9 !== void 0 ? _9 : undefined), falseValue: ((_10 = __VLS_ctx.context.falseValue) !== null && _10 !== void 0 ? _10 : undefined), pt: (__VLS_ctx.context.pt), ptOptions: (__VLS_ctx.context.ptOptions), unstyled: (__VLS_ctx.unstyled) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_5;
var __VLS_6 = ({ change: {} },
    { onChange: (__VLS_ctx.handleInput) });
var __VLS_7 = ({ blur: {} },
    { onBlur: (__VLS_ctx.handleBlur) });
var __VLS_8 = __VLS_3.slots.default;
for (var _i = 0, _15 = __VLS_vFor((__VLS_ctx.validSlotNames)); _i < _15.length; _i++) {
    var slotName = _15[_i][0];
    {
        var _16 = __VLS_3.slots, _17 = __VLS_tryAsConstant(slotName), __VLS_9 = _16[_17];
        var slotProps = __VLS_vSlot(__VLS_9)[0];
        var __VLS_10 = ((_11 = __VLS_ctx.context) === null || _11 === void 0 ? void 0 : _11.slots[slotName]);
        // @ts-ignore
        var __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10(__assign({}, (__assign(__assign({}, __VLS_ctx.context), slotProps)))));
        var __VLS_12 = __VLS_11.apply(void 0, __spreadArray([__assign({}, (__assign(__assign({}, __VLS_ctx.context), slotProps)))], __VLS_functionalComponentArgsRest(__VLS_11), false));
        // @ts-ignore
        [hasPrefix, generatedId, generatedId, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, modelValue, isInvalid, unstyled, handleInput, handleBlur, validSlotNames,];
    }
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_3;
var __VLS_4;
if (__VLS_ctx.hasSuffix) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)(__assign({ for: (__VLS_ctx.generatedId) }, { class: "formkit-suffix" }));
    /** @type {__VLS_StyleScopedClasses['formkit-suffix']} */ ;
    ((_12 = __VLS_ctx.context) === null || _12 === void 0 ? void 0 : _12.suffix);
}
// @ts-ignore
[generatedId, context, hasSuffix,];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    props: {
        context: {
            type: Object,
            required: true,
        },
    },
});
exports.default = {};
