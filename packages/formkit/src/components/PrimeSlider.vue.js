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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
Object.defineProperty(exports, "__esModule", { value: true });
var index_ts_1 = require("../composables/index.ts");
var props = defineProps({
    context: {
        type: Object,
        required: true,
    },
});
var _6 = (0, index_ts_1.useFormKitInput)(props.context), unstyled = _6.unstyled, isInvalid = _6.isInvalid, handleBlur = _6.handleBlur, modelValue = _6.modelValue;
function handleInput(e) {
    var _a, _b;
    (_a = props.context) === null || _a === void 0 ? void 0 : _a.node.input(e);
    (_b = props.context) === null || _b === void 0 ? void 0 : _b.handlers.blur(e);
}
var __VLS_ctx = __assign(__assign(__assign(__assign({}, {}), {}), {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "p-formkit" }));
/** @type {__VLS_StyleScopedClasses['p-formkit']} */ ;
var __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Slider} */
Slider;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ 'onChange': {} }, { 'onBlur': {} }), { id: (__VLS_ctx.context.id), modelValue: (__VLS_ctx.modelValue) }), ((_a = __VLS_ctx.context) === null || _a === void 0 ? void 0 : _a.attrs)), { disabled: (!!((_b = __VLS_ctx.context) === null || _b === void 0 ? void 0 : _b.disabled)), readonly: ((_d = (_c = __VLS_ctx.context) === null || _c === void 0 ? void 0 : _c.attrs.readonly) !== null && _d !== void 0 ? _d : false) }), { style: ((_e = __VLS_ctx.context) === null || _e === void 0 ? void 0 : _e.attrs.style) }), { class: ((_g = (_f = __VLS_ctx.context) === null || _f === void 0 ? void 0 : _f.attrs) === null || _g === void 0 ? void 0 : _g.class) }), { invalid: (__VLS_ctx.isInvalid), tabindex: ((_h = __VLS_ctx.context) === null || _h === void 0 ? void 0 : _h.attrs.tabindex), 'aria-label': ((_j = __VLS_ctx.context) === null || _j === void 0 ? void 0 : _j.attrs.ariaLabel), 'aria-labelledby': ((_k = __VLS_ctx.context) === null || _k === void 0 ? void 0 : _k.attrs.ariaLabelledby), min: ((_l = __VLS_ctx.context.min) !== null && _l !== void 0 ? _l : 0), max: ((_m = __VLS_ctx.context.max) !== null && _m !== void 0 ? _m : 100), step: ((_o = __VLS_ctx.context.step) !== null && _o !== void 0 ? _o : undefined), range: ((_p = __VLS_ctx.context.range) !== null && _p !== void 0 ? _p : false), orientation: ((_q = __VLS_ctx.context.orientation) !== null && _q !== void 0 ? _q : 'horizontal'), pt: (__VLS_ctx.context.pt), ptOptions: (__VLS_ctx.context.ptOptions), unstyled: (__VLS_ctx.unstyled) })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign(__assign(__assign(__assign(__assign(__assign({ 'onChange': {} }, { 'onBlur': {} }), { id: (__VLS_ctx.context.id), modelValue: (__VLS_ctx.modelValue) }), ((_r = __VLS_ctx.context) === null || _r === void 0 ? void 0 : _r.attrs)), { disabled: (!!((_s = __VLS_ctx.context) === null || _s === void 0 ? void 0 : _s.disabled)), readonly: ((_u = (_t = __VLS_ctx.context) === null || _t === void 0 ? void 0 : _t.attrs.readonly) !== null && _u !== void 0 ? _u : false) }), { style: ((_v = __VLS_ctx.context) === null || _v === void 0 ? void 0 : _v.attrs.style) }), { class: ((_x = (_w = __VLS_ctx.context) === null || _w === void 0 ? void 0 : _w.attrs) === null || _x === void 0 ? void 0 : _x.class) }), { invalid: (__VLS_ctx.isInvalid), tabindex: ((_y = __VLS_ctx.context) === null || _y === void 0 ? void 0 : _y.attrs.tabindex), 'aria-label': ((_z = __VLS_ctx.context) === null || _z === void 0 ? void 0 : _z.attrs.ariaLabel), 'aria-labelledby': ((_0 = __VLS_ctx.context) === null || _0 === void 0 ? void 0 : _0.attrs.ariaLabelledby), min: ((_1 = __VLS_ctx.context.min) !== null && _1 !== void 0 ? _1 : 0), max: ((_2 = __VLS_ctx.context.max) !== null && _2 !== void 0 ? _2 : 100), step: ((_3 = __VLS_ctx.context.step) !== null && _3 !== void 0 ? _3 : undefined), range: ((_4 = __VLS_ctx.context.range) !== null && _4 !== void 0 ? _4 : false), orientation: ((_5 = __VLS_ctx.context.orientation) !== null && _5 !== void 0 ? _5 : 'horizontal'), pt: (__VLS_ctx.context.pt), ptOptions: (__VLS_ctx.context.ptOptions), unstyled: (__VLS_ctx.unstyled) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_5;
var __VLS_6 = ({ change: {} },
    { onChange: (__VLS_ctx.handleInput) });
var __VLS_7 = ({ blur: {} },
    { onBlur: (__VLS_ctx.handleBlur) });
var __VLS_3;
var __VLS_4;
// @ts-ignore
[context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, modelValue, isInvalid, unstyled, handleInput, handleBlur,];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    props: {
        context: {
            type: Object,
            required: true,
        },
    },
});
exports.default = {};
