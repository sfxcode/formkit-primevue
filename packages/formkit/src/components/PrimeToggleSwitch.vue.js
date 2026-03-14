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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
Object.defineProperty(exports, "__esModule", { value: true });
var index_ts_1 = require("../composables/index.ts");
var props = defineProps({
    context: {
        type: Object,
        required: true,
    },
});
var _2 = (0, index_ts_1.useFormKitSection)(props.context), hasPrefix = _2.hasPrefix, hasSuffix = _2.hasSuffix;
var _3 = (0, index_ts_1.useFormKitInput)(props.context), unstyled = _3.unstyled, isInvalid = _3.isInvalid, handleInput = _3.handleInput, handleBlur = _3.handleBlur, modelValue = _3.modelValue;
var __VLS_ctx = __assign(__assign(__assign(__assign({}, {}), {}), {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "p-formkit" }));
/** @type {__VLS_StyleScopedClasses['p-formkit']} */ ;
if (__VLS_ctx.hasPrefix) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign({ class: "formkit-prefix" }));
    /** @type {__VLS_StyleScopedClasses['formkit-prefix']} */ ;
    ((_a = __VLS_ctx.context) === null || _a === void 0 ? void 0 : _a.prefix);
}
var __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.ToggleSwitch} */
ToggleSwitch;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0(__assign(__assign(__assign(__assign({ 'onChange': {} }, { 'onBlur': {} }), { modelValue: (__VLS_ctx.modelValue) }), ((_b = __VLS_ctx.context) === null || _b === void 0 ? void 0 : _b.attrs)), { inputId: (__VLS_ctx.context.id), disabled: (!!((_c = __VLS_ctx.context) === null || _c === void 0 ? void 0 : _c.disabled)), readonly: ((_e = (_d = __VLS_ctx.context) === null || _d === void 0 ? void 0 : _d.attrs.readonly) !== null && _e !== void 0 ? _e : false), inputStyle: ((_f = __VLS_ctx.context) === null || _f === void 0 ? void 0 : _f.attrs.style), inputClass: ((_h = (_g = __VLS_ctx.context) === null || _g === void 0 ? void 0 : _g.attrs) === null || _h === void 0 ? void 0 : _h.class), invalid: (__VLS_ctx.isInvalid), tabindex: ((_j = __VLS_ctx.context) === null || _j === void 0 ? void 0 : _j.attrs.tabindex), 'aria-label': ((_k = __VLS_ctx.context) === null || _k === void 0 ? void 0 : _k.attrs.ariaLabel), 'aria-labelledby': ((_l = __VLS_ctx.context) === null || _l === void 0 ? void 0 : _l.attrs.ariaLabelledby), trueValue: ((_m = __VLS_ctx.context.trueValue) !== null && _m !== void 0 ? _m : undefined), falseValue: ((_o = __VLS_ctx.context.falseValue) !== null && _o !== void 0 ? _o : undefined), pt: (__VLS_ctx.context.pt), ptOptions: (__VLS_ctx.context.ptOptions), unstyled: (__VLS_ctx.unstyled) })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign(__assign(__assign({ 'onChange': {} }, { 'onBlur': {} }), { modelValue: (__VLS_ctx.modelValue) }), ((_p = __VLS_ctx.context) === null || _p === void 0 ? void 0 : _p.attrs)), { inputId: (__VLS_ctx.context.id), disabled: (!!((_q = __VLS_ctx.context) === null || _q === void 0 ? void 0 : _q.disabled)), readonly: ((_s = (_r = __VLS_ctx.context) === null || _r === void 0 ? void 0 : _r.attrs.readonly) !== null && _s !== void 0 ? _s : false), inputStyle: ((_t = __VLS_ctx.context) === null || _t === void 0 ? void 0 : _t.attrs.style), inputClass: ((_v = (_u = __VLS_ctx.context) === null || _u === void 0 ? void 0 : _u.attrs) === null || _v === void 0 ? void 0 : _v.class), invalid: (__VLS_ctx.isInvalid), tabindex: ((_w = __VLS_ctx.context) === null || _w === void 0 ? void 0 : _w.attrs.tabindex), 'aria-label': ((_x = __VLS_ctx.context) === null || _x === void 0 ? void 0 : _x.attrs.ariaLabel), 'aria-labelledby': ((_y = __VLS_ctx.context) === null || _y === void 0 ? void 0 : _y.attrs.ariaLabelledby), trueValue: ((_z = __VLS_ctx.context.trueValue) !== null && _z !== void 0 ? _z : undefined), falseValue: ((_0 = __VLS_ctx.context.falseValue) !== null && _0 !== void 0 ? _0 : undefined), pt: (__VLS_ctx.context.pt), ptOptions: (__VLS_ctx.context.ptOptions), unstyled: (__VLS_ctx.unstyled) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_5;
var __VLS_6 = ({ change: {} },
    { onChange: (__VLS_ctx.handleInput) });
var __VLS_7 = ({ blur: {} },
    { onBlur: (__VLS_ctx.handleBlur) });
var __VLS_3;
var __VLS_4;
if (__VLS_ctx.hasSuffix) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign({ class: "formkit-suffix" }));
    /** @type {__VLS_StyleScopedClasses['formkit-suffix']} */ ;
    ((_1 = __VLS_ctx.context) === null || _1 === void 0 ? void 0 : _1.suffix);
}
// @ts-ignore
[hasPrefix, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, modelValue, isInvalid, unstyled, handleInput, handleBlur, hasSuffix,];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    props: {
        context: {
            type: Object,
            required: true,
        },
    },
});
exports.default = {};
