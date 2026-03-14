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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var index_ts_1 = require("../composables/index.ts");
var props = defineProps({
    context: {
        type: Object,
        required: true,
    },
});
var _w = (0, index_ts_1.useFormKitInput)(props.context), unstyled = _w.unstyled, isInvalid = _w.isInvalid, handleChange = _w.handleChange, handleBlur = _w.handleBlur, modelValue = _w.modelValue;
var optionsClass = (0, vue_1.computed)(function () { var _a, _b; return (_b = (_a = props.context) === null || _a === void 0 ? void 0 : _a.optionsClass) !== null && _b !== void 0 ? _b : ""; });
var optionClass = (0, vue_1.computed)(function () { var _a, _b; return (_b = (_a = props.context) === null || _a === void 0 ? void 0 : _a.optionClass) !== null && _b !== void 0 ? _b : ""; });
var labelClass = (0, vue_1.computed)(function () { var _a, _b; return (_b = (_a = props.context) === null || _a === void 0 ? void 0 : _a.labelClass) !== null && _b !== void 0 ? _b : ""; });
var __VLS_ctx = __assign(__assign(__assign(__assign({}, {}), {}), {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "p-formkit p-formkit-options" }, { class: (__VLS_ctx.optionsClass) }));
/** @type {__VLS_StyleScopedClasses['p-formkit']} */ ;
/** @type {__VLS_StyleScopedClasses['p-formkit-options']} */ ;
for (var _i = 0, _x = __VLS_vFor((__VLS_ctx.context.options)); _i < _x.length; _i++) {
    var option = _x[_i][0];
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign(__assign({ key: (option.value) }, { class: "p-formkit-option" }), { class: (__VLS_ctx.optionClass) }));
    /** @type {__VLS_StyleScopedClasses['p-formkit-option']} */ ;
    var __VLS_0 = void 0;
    /** @ts-ignore @type {typeof __VLS_components.RadioButton} */
    RadioButton;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0(__assign(__assign(__assign(__assign(__assign({ 'onClick': {} }, { 'onChange': {} }), { 'onBlur': {} }), { id: (__VLS_ctx.context.id), modelValue: (__VLS_ctx.modelValue) }), ((_a = __VLS_ctx.context) === null || _a === void 0 ? void 0 : _a.attrs)), { disabled: (!!((_b = __VLS_ctx.context) === null || _b === void 0 ? void 0 : _b.disabled)), readonly: ((_d = (_c = __VLS_ctx.context) === null || _c === void 0 ? void 0 : _c.attrs.readonly) !== null && _d !== void 0 ? _d : false), name: ((_e = __VLS_ctx.context) === null || _e === void 0 ? void 0 : _e.attrs.name), value: (option.value), inputStyle: ((_f = __VLS_ctx.context) === null || _f === void 0 ? void 0 : _f.attrs.style), inputClass: ((_h = (_g = __VLS_ctx.context) === null || _g === void 0 ? void 0 : _g.attrs) === null || _h === void 0 ? void 0 : _h.class), invalid: (__VLS_ctx.isInvalid), size: ((_k = (_j = __VLS_ctx.context) === null || _j === void 0 ? void 0 : _j.size) !== null && _k !== void 0 ? _k : undefined), pt: (__VLS_ctx.context.pt), ptOptions: (__VLS_ctx.context.ptOptions), unstyled: (__VLS_ctx.unstyled) })));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign(__assign(__assign(__assign({ 'onClick': {} }, { 'onChange': {} }), { 'onBlur': {} }), { id: (__VLS_ctx.context.id), modelValue: (__VLS_ctx.modelValue) }), ((_l = __VLS_ctx.context) === null || _l === void 0 ? void 0 : _l.attrs)), { disabled: (!!((_m = __VLS_ctx.context) === null || _m === void 0 ? void 0 : _m.disabled)), readonly: ((_p = (_o = __VLS_ctx.context) === null || _o === void 0 ? void 0 : _o.attrs.readonly) !== null && _p !== void 0 ? _p : false), name: ((_q = __VLS_ctx.context) === null || _q === void 0 ? void 0 : _q.attrs.name), value: (option.value), inputStyle: ((_r = __VLS_ctx.context) === null || _r === void 0 ? void 0 : _r.attrs.style), inputClass: ((_t = (_s = __VLS_ctx.context) === null || _s === void 0 ? void 0 : _s.attrs) === null || _t === void 0 ? void 0 : _t.class), invalid: (__VLS_ctx.isInvalid), size: ((_v = (_u = __VLS_ctx.context) === null || _u === void 0 ? void 0 : _u.size) !== null && _v !== void 0 ? _v : undefined), pt: (__VLS_ctx.context.pt), ptOptions: (__VLS_ctx.context.ptOptions), unstyled: (__VLS_ctx.unstyled) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
    var __VLS_5 = void 0;
    var __VLS_6 = ({ click: {} },
        { onClick: (__VLS_ctx.handleChange) });
    var __VLS_7 = ({ change: {} },
        { onChange: (__VLS_ctx.handleChange) });
    var __VLS_8 = ({ blur: {} },
        { onBlur: (__VLS_ctx.handleBlur) });
    var __VLS_3;
    var __VLS_4;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)(__assign({ for: (option.value) }, { class: (__VLS_ctx.labelClass) }));
    (option.label);
    // @ts-ignore
    [optionsClass, context, context, context, context, context, context, context, context, context, context, context, optionClass, modelValue, isInvalid, unstyled, handleChange, handleChange, handleBlur, labelClass,];
}
// @ts-ignore
[];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    props: {
        context: {
            type: Object,
            required: true,
        },
    },
});
exports.default = {};
