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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39;
Object.defineProperty(exports, "__esModule", { value: true });
var iconfield_1 = require("primevue/iconfield");
var inputicon_1 = require("primevue/inputicon");
var index_ts_1 = require("../composables/index.ts");
var props = defineProps({
    context: {
        type: Object,
        required: true,
    },
});
var _40 = (0, index_ts_1.useFormKitInput)(props.context), unstyled = _40.unstyled, isInvalid = _40.isInvalid, handleInput = _40.handleInput, handleBlur = _40.handleBlur, modelValue = _40.modelValue;
var _41 = (0, index_ts_1.useFormKitSection)(props.context), hasPrefixIcon = _41.hasPrefixIcon, hasSuffixIcon = _41.hasSuffixIcon;
var __VLS_ctx = __assign(__assign(__assign(__assign({}, {}), {}), {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "p-formkit" }));
/** @type {__VLS_StyleScopedClasses['p-formkit']} */ ;
if (__VLS_ctx.hasPrefixIcon || __VLS_ctx.hasSuffixIcon) {
    var __VLS_0 = void 0;
    /** @ts-ignore @type {typeof __VLS_components.IconField | typeof __VLS_components.IconField} */
    iconfield_1.default;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_1), false));
    var __VLS_5 = __VLS_3.slots.default;
    if (__VLS_ctx.hasPrefixIcon) {
        var __VLS_6 = void 0;
        /** @ts-ignore @type {typeof __VLS_components.InputIcon} */
        inputicon_1.default;
        // @ts-ignore
        var __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6(__assign({ class: ((_a = __VLS_ctx.context) === null || _a === void 0 ? void 0 : _a.iconPrefix) })));
        var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([__assign({ class: ((_b = __VLS_ctx.context) === null || _b === void 0 ? void 0 : _b.iconPrefix) })], __VLS_functionalComponentArgsRest(__VLS_7), false));
    }
    var __VLS_11 = void 0;
    /** @ts-ignore @type {typeof __VLS_components.InputText} */
    InputText;
    // @ts-ignore
    var __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ 'onInput': {} }, { 'onBlur': {} }), { id: (__VLS_ctx.context.id), modelValue: (__VLS_ctx.modelValue) }), ((_c = __VLS_ctx.context) === null || _c === void 0 ? void 0 : _c.attrs)), { type: ((_f = (_e = (_d = __VLS_ctx.context) === null || _d === void 0 ? void 0 : _d.attrs) === null || _e === void 0 ? void 0 : _e.inputType) !== null && _f !== void 0 ? _f : 'text'), disabled: (!!((_g = __VLS_ctx.context) === null || _g === void 0 ? void 0 : _g.disabled)), readonly: ((_j = (_h = __VLS_ctx.context) === null || _h === void 0 ? void 0 : _h.attrs.readonly) !== null && _j !== void 0 ? _j : false) }), { style: ((_l = (_k = __VLS_ctx.context) === null || _k === void 0 ? void 0 : _k.attrs) === null || _l === void 0 ? void 0 : _l.style) }), { class: ((_o = (_m = __VLS_ctx.context) === null || _m === void 0 ? void 0 : _m.attrs) === null || _o === void 0 ? void 0 : _o.class) }), { invalid: (__VLS_ctx.isInvalid), tabindex: ((_p = __VLS_ctx.context) === null || _p === void 0 ? void 0 : _p.attrs.tabindex), 'aria-label': ((_q = __VLS_ctx.context) === null || _q === void 0 ? void 0 : _q.attrs.ariaLabel), 'aria-labelledby': ((_r = __VLS_ctx.context) === null || _r === void 0 ? void 0 : _r.attrs.ariaLabelledby), size: ((_t = (_s = __VLS_ctx.context) === null || _s === void 0 ? void 0 : _s.size) !== null && _t !== void 0 ? _t : undefined), placeholder: (__VLS_ctx.context.placeholder), pt: (__VLS_ctx.context.pt), ptOptions: (__VLS_ctx.context.ptOptions), unstyled: (__VLS_ctx.unstyled) })));
    var __VLS_13 = __VLS_12.apply(void 0, __spreadArray([__assign(__assign(__assign(__assign(__assign(__assign(__assign({ 'onInput': {} }, { 'onBlur': {} }), { id: (__VLS_ctx.context.id), modelValue: (__VLS_ctx.modelValue) }), ((_u = __VLS_ctx.context) === null || _u === void 0 ? void 0 : _u.attrs)), { type: ((_x = (_w = (_v = __VLS_ctx.context) === null || _v === void 0 ? void 0 : _v.attrs) === null || _w === void 0 ? void 0 : _w.inputType) !== null && _x !== void 0 ? _x : 'text'), disabled: (!!((_y = __VLS_ctx.context) === null || _y === void 0 ? void 0 : _y.disabled)), readonly: ((_0 = (_z = __VLS_ctx.context) === null || _z === void 0 ? void 0 : _z.attrs.readonly) !== null && _0 !== void 0 ? _0 : false) }), { style: ((_2 = (_1 = __VLS_ctx.context) === null || _1 === void 0 ? void 0 : _1.attrs) === null || _2 === void 0 ? void 0 : _2.style) }), { class: ((_4 = (_3 = __VLS_ctx.context) === null || _3 === void 0 ? void 0 : _3.attrs) === null || _4 === void 0 ? void 0 : _4.class) }), { invalid: (__VLS_ctx.isInvalid), tabindex: ((_5 = __VLS_ctx.context) === null || _5 === void 0 ? void 0 : _5.attrs.tabindex), 'aria-label': ((_6 = __VLS_ctx.context) === null || _6 === void 0 ? void 0 : _6.attrs.ariaLabel), 'aria-labelledby': ((_7 = __VLS_ctx.context) === null || _7 === void 0 ? void 0 : _7.attrs.ariaLabelledby), size: ((_9 = (_8 = __VLS_ctx.context) === null || _8 === void 0 ? void 0 : _8.size) !== null && _9 !== void 0 ? _9 : undefined), placeholder: (__VLS_ctx.context.placeholder), pt: (__VLS_ctx.context.pt), ptOptions: (__VLS_ctx.context.ptOptions), unstyled: (__VLS_ctx.unstyled) })], __VLS_functionalComponentArgsRest(__VLS_12), false));
    var __VLS_16 = void 0;
    var __VLS_17 = ({ input: {} },
        { onInput: (__VLS_ctx.handleInput) });
    var __VLS_18 = ({ blur: {} },
        { onBlur: (__VLS_ctx.handleBlur) });
    var __VLS_14;
    var __VLS_15;
    if (__VLS_ctx.hasSuffixIcon) {
        var __VLS_19 = void 0;
        /** @ts-ignore @type {typeof __VLS_components.InputIcon} */
        inputicon_1.default;
        // @ts-ignore
        var __VLS_20 = __VLS_asFunctionalComponent1(__VLS_19, new __VLS_19(__assign({ class: ((_10 = __VLS_ctx.context) === null || _10 === void 0 ? void 0 : _10.iconSuffix) })));
        var __VLS_21 = __VLS_20.apply(void 0, __spreadArray([__assign({ class: ((_11 = __VLS_ctx.context) === null || _11 === void 0 ? void 0 : _11.iconSuffix) })], __VLS_functionalComponentArgsRest(__VLS_20), false));
    }
    // @ts-ignore
    [hasPrefixIcon, hasPrefixIcon, hasSuffixIcon, hasSuffixIcon, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, modelValue, isInvalid, unstyled, handleInput, handleBlur,];
    var __VLS_3;
}
if (!__VLS_ctx.hasPrefixIcon && !__VLS_ctx.hasSuffixIcon) {
    var __VLS_24 = void 0;
    /** @ts-ignore @type {typeof __VLS_components.InputText} */
    InputText;
    // @ts-ignore
    var __VLS_25 = __VLS_asFunctionalComponent1(__VLS_24, new __VLS_24(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ 'onInput': {} }, { 'onBlur': {} }), { id: (__VLS_ctx.context.id), modelValue: (__VLS_ctx.modelValue) }), ((_12 = __VLS_ctx.context) === null || _12 === void 0 ? void 0 : _12.attrs)), { type: ((_14 = (_13 = __VLS_ctx.context) === null || _13 === void 0 ? void 0 : _13.inputType) !== null && _14 !== void 0 ? _14 : 'text'), disabled: (!!((_15 = __VLS_ctx.context) === null || _15 === void 0 ? void 0 : _15.disabled)), readonly: ((_17 = (_16 = __VLS_ctx.context) === null || _16 === void 0 ? void 0 : _16.attrs.readonly) !== null && _17 !== void 0 ? _17 : false) }), { style: ((_18 = __VLS_ctx.context) === null || _18 === void 0 ? void 0 : _18.attrs.style) }), { class: ((_20 = (_19 = __VLS_ctx.context) === null || _19 === void 0 ? void 0 : _19.attrs) === null || _20 === void 0 ? void 0 : _20.class) }), { invalid: (__VLS_ctx.isInvalid), tabindex: ((_21 = __VLS_ctx.context) === null || _21 === void 0 ? void 0 : _21.attrs.tabindex), 'aria-label': ((_22 = __VLS_ctx.context) === null || _22 === void 0 ? void 0 : _22.attrs.ariaLabel), 'aria-labelledby': ((_23 = __VLS_ctx.context) === null || _23 === void 0 ? void 0 : _23.attrs.ariaLabelledby), size: ((_25 = (_24 = __VLS_ctx.context) === null || _24 === void 0 ? void 0 : _24.size) !== null && _25 !== void 0 ? _25 : undefined), placeholder: (__VLS_ctx.context.placeholder), pt: (__VLS_ctx.context.pt), ptOptions: (__VLS_ctx.context.ptOptions), unstyled: (__VLS_ctx.unstyled) })));
    var __VLS_26 = __VLS_25.apply(void 0, __spreadArray([__assign(__assign(__assign(__assign(__assign(__assign(__assign({ 'onInput': {} }, { 'onBlur': {} }), { id: (__VLS_ctx.context.id), modelValue: (__VLS_ctx.modelValue) }), ((_26 = __VLS_ctx.context) === null || _26 === void 0 ? void 0 : _26.attrs)), { type: ((_28 = (_27 = __VLS_ctx.context) === null || _27 === void 0 ? void 0 : _27.inputType) !== null && _28 !== void 0 ? _28 : 'text'), disabled: (!!((_29 = __VLS_ctx.context) === null || _29 === void 0 ? void 0 : _29.disabled)), readonly: ((_31 = (_30 = __VLS_ctx.context) === null || _30 === void 0 ? void 0 : _30.attrs.readonly) !== null && _31 !== void 0 ? _31 : false) }), { style: ((_32 = __VLS_ctx.context) === null || _32 === void 0 ? void 0 : _32.attrs.style) }), { class: ((_34 = (_33 = __VLS_ctx.context) === null || _33 === void 0 ? void 0 : _33.attrs) === null || _34 === void 0 ? void 0 : _34.class) }), { invalid: (__VLS_ctx.isInvalid), tabindex: ((_35 = __VLS_ctx.context) === null || _35 === void 0 ? void 0 : _35.attrs.tabindex), 'aria-label': ((_36 = __VLS_ctx.context) === null || _36 === void 0 ? void 0 : _36.attrs.ariaLabel), 'aria-labelledby': ((_37 = __VLS_ctx.context) === null || _37 === void 0 ? void 0 : _37.attrs.ariaLabelledby), size: ((_39 = (_38 = __VLS_ctx.context) === null || _38 === void 0 ? void 0 : _38.size) !== null && _39 !== void 0 ? _39 : undefined), placeholder: (__VLS_ctx.context.placeholder), pt: (__VLS_ctx.context.pt), ptOptions: (__VLS_ctx.context.ptOptions), unstyled: (__VLS_ctx.unstyled) })], __VLS_functionalComponentArgsRest(__VLS_25), false));
    var __VLS_29 = void 0;
    var __VLS_30 = ({ input: {} },
        { onInput: (__VLS_ctx.handleInput) });
    var __VLS_31 = ({ blur: {} },
        { onBlur: (__VLS_ctx.handleBlur) });
    var __VLS_27;
    var __VLS_28;
}
// @ts-ignore
[hasPrefixIcon, hasSuffixIcon, context, context, context, context, context, context, context, context, context, context, context, context, context, context, modelValue, isInvalid, unstyled, handleInput, handleBlur,];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    props: {
        context: {
            type: Object,
            required: true,
        },
    },
});
exports.default = {};
