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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var index_ts_1 = require("../composables/index.ts");
var props = defineProps({
    context: {
        type: Object,
        required: true,
    },
});
var _27 = (0, index_ts_1.useFormKitInput)(props.context), validSlotNames = _27.validSlotNames, unstyled = _27.unstyled, isInvalid = _27.isInvalid, modelValue = _27.modelValue;
function handleBlur(e) {
    var _a;
    (_a = props.context) === null || _a === void 0 ? void 0 : _a.handlers.blur(e.originalEvent);
}
function handleInput(_) {
    var _a;
    if (typeof _.value === "number" || _.value === null)
        (_a = props.context) === null || _a === void 0 ? void 0 : _a.node.input(_.value);
}
function roundToDecimals(value, decimals) {
    var factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
}
(0, vue_1.watch)(function () { return props.context._value; }, function (newValue) {
    var _a, _b;
    // Only update if the value is different
    if (newValue !== props.context.node.value && typeof newValue === "number") {
        if (props.context.maxFractionDigits && props.context.maxFractionDigits > 0) {
            // fix floating-point precision issues
            (_a = props.context) === null || _a === void 0 ? void 0 : _a.node.input(roundToDecimals(newValue, props.context.maxFractionDigits));
        }
        else {
            (_b = props.context) === null || _b === void 0 ? void 0 : _b.node.input(newValue);
        }
    }
});
var __VLS_ctx = __assign(__assign(__assign(__assign({}, {}), {}), {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "p-formkit" }));
/** @type {__VLS_StyleScopedClasses['p-formkit']} */ ;
var __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.InputNumber | typeof __VLS_components.InputNumber} */
InputNumber;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0(__assign(__assign(__assign(__assign({ 'onInput': {} }, { 'onBlur': {} }), { modelValue: (__VLS_ctx.modelValue) }), ((_a = __VLS_ctx.context) === null || _a === void 0 ? void 0 : _a.attrs)), { inputId: (__VLS_ctx.context.id), disabled: (!!((_b = __VLS_ctx.context) === null || _b === void 0 ? void 0 : _b.disabled)), readonly: ((_d = (_c = __VLS_ctx.context) === null || _c === void 0 ? void 0 : _c.attrs.readonly) !== null && _d !== void 0 ? _d : false), inputStyle: ((_e = __VLS_ctx.context) === null || _e === void 0 ? void 0 : _e.attrs.style), inputClass: ((_g = (_f = __VLS_ctx.context) === null || _f === void 0 ? void 0 : _f.attrs) === null || _g === void 0 ? void 0 : _g.class), invalid: (__VLS_ctx.isInvalid), tabindex: ((_h = __VLS_ctx.context) === null || _h === void 0 ? void 0 : _h.attrs.tabindex), 'aria-label': ((_j = __VLS_ctx.context) === null || _j === void 0 ? void 0 : _j.attrs.ariaLabel), 'aria-labelledby': ((_k = __VLS_ctx.context) === null || _k === void 0 ? void 0 : _k.attrs.ariaLabelledby), size: ((_m = (_l = __VLS_ctx.context) === null || _l === void 0 ? void 0 : _l.size) !== null && _m !== void 0 ? _m : undefined), placeholder: (__VLS_ctx.context.placeholder), useGrouping: ((_o = __VLS_ctx.context.useGrouping) !== null && _o !== void 0 ? _o : true), min: ((_p = __VLS_ctx.context.min) !== null && _p !== void 0 ? _p : undefined), max: ((_q = __VLS_ctx.context.max) !== null && _q !== void 0 ? _q : undefined), minFractionDigits: ((_r = __VLS_ctx.context.minFractionDigits) !== null && _r !== void 0 ? _r : undefined), maxFractionDigits: ((_s = __VLS_ctx.context.maxFractionDigits) !== null && _s !== void 0 ? _s : undefined), locale: ((_t = __VLS_ctx.context.locale) !== null && _t !== void 0 ? _t : undefined), mode: ((_u = __VLS_ctx.context.mode) !== null && _u !== void 0 ? _u : undefined), currency: ((_v = __VLS_ctx.context.currency) !== null && _v !== void 0 ? _v : undefined), prefix: ((_w = __VLS_ctx.context.prefix) !== null && _w !== void 0 ? _w : undefined), suffix: ((_x = __VLS_ctx.context.suffix) !== null && _x !== void 0 ? _x : undefined), showButtons: ((_y = __VLS_ctx.context.showButtons) !== null && _y !== void 0 ? _y : undefined), buttonLayout: ((_z = __VLS_ctx.context.buttonLayout) !== null && _z !== void 0 ? _z : 'stacked'), step: ((_0 = __VLS_ctx.context.step) !== null && _0 !== void 0 ? _0 : undefined), pt: (__VLS_ctx.context.pt), ptOptions: (__VLS_ctx.context.ptOptions), unstyled: (__VLS_ctx.unstyled) })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign(__assign(__assign({ 'onInput': {} }, { 'onBlur': {} }), { modelValue: (__VLS_ctx.modelValue) }), ((_1 = __VLS_ctx.context) === null || _1 === void 0 ? void 0 : _1.attrs)), { inputId: (__VLS_ctx.context.id), disabled: (!!((_2 = __VLS_ctx.context) === null || _2 === void 0 ? void 0 : _2.disabled)), readonly: ((_4 = (_3 = __VLS_ctx.context) === null || _3 === void 0 ? void 0 : _3.attrs.readonly) !== null && _4 !== void 0 ? _4 : false), inputStyle: ((_5 = __VLS_ctx.context) === null || _5 === void 0 ? void 0 : _5.attrs.style), inputClass: ((_7 = (_6 = __VLS_ctx.context) === null || _6 === void 0 ? void 0 : _6.attrs) === null || _7 === void 0 ? void 0 : _7.class), invalid: (__VLS_ctx.isInvalid), tabindex: ((_8 = __VLS_ctx.context) === null || _8 === void 0 ? void 0 : _8.attrs.tabindex), 'aria-label': ((_9 = __VLS_ctx.context) === null || _9 === void 0 ? void 0 : _9.attrs.ariaLabel), 'aria-labelledby': ((_10 = __VLS_ctx.context) === null || _10 === void 0 ? void 0 : _10.attrs.ariaLabelledby), size: ((_12 = (_11 = __VLS_ctx.context) === null || _11 === void 0 ? void 0 : _11.size) !== null && _12 !== void 0 ? _12 : undefined), placeholder: (__VLS_ctx.context.placeholder), useGrouping: ((_13 = __VLS_ctx.context.useGrouping) !== null && _13 !== void 0 ? _13 : true), min: ((_14 = __VLS_ctx.context.min) !== null && _14 !== void 0 ? _14 : undefined), max: ((_15 = __VLS_ctx.context.max) !== null && _15 !== void 0 ? _15 : undefined), minFractionDigits: ((_16 = __VLS_ctx.context.minFractionDigits) !== null && _16 !== void 0 ? _16 : undefined), maxFractionDigits: ((_17 = __VLS_ctx.context.maxFractionDigits) !== null && _17 !== void 0 ? _17 : undefined), locale: ((_18 = __VLS_ctx.context.locale) !== null && _18 !== void 0 ? _18 : undefined), mode: ((_19 = __VLS_ctx.context.mode) !== null && _19 !== void 0 ? _19 : undefined), currency: ((_20 = __VLS_ctx.context.currency) !== null && _20 !== void 0 ? _20 : undefined), prefix: ((_21 = __VLS_ctx.context.prefix) !== null && _21 !== void 0 ? _21 : undefined), suffix: ((_22 = __VLS_ctx.context.suffix) !== null && _22 !== void 0 ? _22 : undefined), showButtons: ((_23 = __VLS_ctx.context.showButtons) !== null && _23 !== void 0 ? _23 : undefined), buttonLayout: ((_24 = __VLS_ctx.context.buttonLayout) !== null && _24 !== void 0 ? _24 : 'stacked'), step: ((_25 = __VLS_ctx.context.step) !== null && _25 !== void 0 ? _25 : undefined), pt: (__VLS_ctx.context.pt), ptOptions: (__VLS_ctx.context.ptOptions), unstyled: (__VLS_ctx.unstyled) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_5;
var __VLS_6 = ({ input: {} },
    { onInput: (__VLS_ctx.handleInput) });
var __VLS_7 = ({ blur: {} },
    { onBlur: (__VLS_ctx.handleBlur) });
var __VLS_8 = __VLS_3.slots.default;
for (var _i = 0, _28 = __VLS_vFor((__VLS_ctx.validSlotNames)); _i < _28.length; _i++) {
    var slotName = _28[_i][0];
    {
        var _29 = __VLS_3.slots, _30 = __VLS_tryAsConstant(slotName), __VLS_9 = _29[_30];
        var slotProps = __VLS_vSlot(__VLS_9)[0];
        var __VLS_10 = ((_26 = __VLS_ctx.context) === null || _26 === void 0 ? void 0 : _26.slots[slotName]);
        // @ts-ignore
        var __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10(__assign({}, (__assign(__assign({}, __VLS_ctx.context), slotProps)))));
        var __VLS_12 = __VLS_11.apply(void 0, __spreadArray([__assign({}, (__assign(__assign({}, __VLS_ctx.context), slotProps)))], __VLS_functionalComponentArgsRest(__VLS_11), false));
        // @ts-ignore
        [modelValue, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, isInvalid, unstyled, handleInput, handleBlur, validSlotNames,];
    }
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_3;
var __VLS_4;
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
