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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15;
Object.defineProperty(exports, "__esModule", { value: true });
var index_ts_1 = require("../composables/index.ts");
var props = defineProps({
    context: {
        type: Object,
        required: true,
    },
});
var _16 = (0, index_ts_1.useFormKitInput)(props.context), unstyled = _16.unstyled, isInvalid = _16.isInvalid, modelValue = _16.modelValue;
function handleInput(e) {
    var _a, _b;
    (_a = props.context) === null || _a === void 0 ? void 0 : _a.node.input(e);
    (_b = props.context) === null || _b === void 0 ? void 0 : _b.handlers.blur(e);
}
function updateValue(n) {
    var _a;
    (_a = props.context) === null || _a === void 0 ? void 0 : _a.node.input(n);
}
var __VLS_ctx = __assign(__assign(__assign(__assign({}, {}), {}), {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "p-formkit" }));
/** @type {__VLS_StyleScopedClasses['p-formkit']} */ ;
var __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Knob} */
Knob;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ 'onChange': {} }, { 'onUpdate:modelValue': {} }), { id: (__VLS_ctx.context.id), modelValue: (__VLS_ctx.modelValue) }), ((_a = __VLS_ctx.context) === null || _a === void 0 ? void 0 : _a.attrs)), { disabled: (!!((_b = __VLS_ctx.context) === null || _b === void 0 ? void 0 : _b.disabled)), readonly: ((_d = (_c = __VLS_ctx.context) === null || _c === void 0 ? void 0 : _c.attrs.readonly) !== null && _d !== void 0 ? _d : false) }), { style: ((_e = __VLS_ctx.context) === null || _e === void 0 ? void 0 : _e.attrs.style) }), { class: ((_g = (_f = __VLS_ctx.context) === null || _f === void 0 ? void 0 : _f.attrs) === null || _g === void 0 ? void 0 : _g.class) }), { invalid: (__VLS_ctx.isInvalid), tabindex: ((_h = __VLS_ctx.context) === null || _h === void 0 ? void 0 : _h.attrs.tabindex), 'aria-label': ((_j = __VLS_ctx.context) === null || _j === void 0 ? void 0 : _j.attrs.ariaLabel), 'aria-labelledby': ((_k = __VLS_ctx.context) === null || _k === void 0 ? void 0 : _k.attrs.ariaLabelledby), min: ((_l = __VLS_ctx.context.min) !== null && _l !== void 0 ? _l : 0), max: ((_m = __VLS_ctx.context.max) !== null && _m !== void 0 ? _m : 100), step: ((_o = __VLS_ctx.context.step) !== null && _o !== void 0 ? _o : undefined), size: ((_p = __VLS_ctx.context.size) !== null && _p !== void 0 ? _p : 100), strokeWidth: ((_q = __VLS_ctx.context.strokeWidth) !== null && _q !== void 0 ? _q : 14), showValue: ((_r = __VLS_ctx.context.showValue) !== null && _r !== void 0 ? _r : true), valueColor: ((_s = __VLS_ctx.context.valueColor) !== null && _s !== void 0 ? _s : undefined), rangeColor: ((_t = __VLS_ctx.context.rangeColor) !== null && _t !== void 0 ? _t : undefined), textColor: ((_u = __VLS_ctx.context.textColor) !== null && _u !== void 0 ? _u : undefined), valueTemplate: ((_v = __VLS_ctx.context.valueTemplate) !== null && _v !== void 0 ? _v : undefined), pt: (__VLS_ctx.context.pt), ptOptions: (__VLS_ctx.context.ptOptions), unstyled: (__VLS_ctx.unstyled) })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign(__assign(__assign(__assign(__assign(__assign({ 'onChange': {} }, { 'onUpdate:modelValue': {} }), { id: (__VLS_ctx.context.id), modelValue: (__VLS_ctx.modelValue) }), ((_w = __VLS_ctx.context) === null || _w === void 0 ? void 0 : _w.attrs)), { disabled: (!!((_x = __VLS_ctx.context) === null || _x === void 0 ? void 0 : _x.disabled)), readonly: ((_z = (_y = __VLS_ctx.context) === null || _y === void 0 ? void 0 : _y.attrs.readonly) !== null && _z !== void 0 ? _z : false) }), { style: ((_0 = __VLS_ctx.context) === null || _0 === void 0 ? void 0 : _0.attrs.style) }), { class: ((_2 = (_1 = __VLS_ctx.context) === null || _1 === void 0 ? void 0 : _1.attrs) === null || _2 === void 0 ? void 0 : _2.class) }), { invalid: (__VLS_ctx.isInvalid), tabindex: ((_3 = __VLS_ctx.context) === null || _3 === void 0 ? void 0 : _3.attrs.tabindex), 'aria-label': ((_4 = __VLS_ctx.context) === null || _4 === void 0 ? void 0 : _4.attrs.ariaLabel), 'aria-labelledby': ((_5 = __VLS_ctx.context) === null || _5 === void 0 ? void 0 : _5.attrs.ariaLabelledby), min: ((_6 = __VLS_ctx.context.min) !== null && _6 !== void 0 ? _6 : 0), max: ((_7 = __VLS_ctx.context.max) !== null && _7 !== void 0 ? _7 : 100), step: ((_8 = __VLS_ctx.context.step) !== null && _8 !== void 0 ? _8 : undefined), size: ((_9 = __VLS_ctx.context.size) !== null && _9 !== void 0 ? _9 : 100), strokeWidth: ((_10 = __VLS_ctx.context.strokeWidth) !== null && _10 !== void 0 ? _10 : 14), showValue: ((_11 = __VLS_ctx.context.showValue) !== null && _11 !== void 0 ? _11 : true), valueColor: ((_12 = __VLS_ctx.context.valueColor) !== null && _12 !== void 0 ? _12 : undefined), rangeColor: ((_13 = __VLS_ctx.context.rangeColor) !== null && _13 !== void 0 ? _13 : undefined), textColor: ((_14 = __VLS_ctx.context.textColor) !== null && _14 !== void 0 ? _14 : undefined), valueTemplate: ((_15 = __VLS_ctx.context.valueTemplate) !== null && _15 !== void 0 ? _15 : undefined), pt: (__VLS_ctx.context.pt), ptOptions: (__VLS_ctx.context.ptOptions), unstyled: (__VLS_ctx.unstyled) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_5;
var __VLS_6 = ({ change: {} },
    { onChange: (__VLS_ctx.handleInput) });
var __VLS_7 = ({ 'update:modelValue': {} },
    { 'onUpdate:modelValue': (__VLS_ctx.updateValue) });
var __VLS_3;
var __VLS_4;
// @ts-ignore
[context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, modelValue, isInvalid, unstyled, handleInput, updateValue,];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    props: {
        context: {
            type: Object,
            required: true,
        },
    },
});
exports.default = {};
