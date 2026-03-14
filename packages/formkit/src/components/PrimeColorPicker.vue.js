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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
Object.defineProperty(exports, "__esModule", { value: true });
var index_ts_1 = require("../composables/index.ts");
var props = defineProps({
    context: {
        type: Object,
        required: true,
    },
});
var _y = (0, index_ts_1.useFormKitInput)(props.context), unstyled = _y.unstyled, handleChange = _y.handleChange, modelValue = _y.modelValue;
var __VLS_ctx = __assign(__assign(__assign(__assign({}, {}), {}), {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "p-formkit" }));
/** @type {__VLS_StyleScopedClasses['p-formkit']} */ ;
var __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.ColorPicker} */
ColorPicker;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0(__assign(__assign(__assign(__assign(__assign({ 'onChange': {} }, { modelValue: (__VLS_ctx.modelValue) }), ((_a = __VLS_ctx.context) === null || _a === void 0 ? void 0 : _a.attrs)), { disabled: (!!((_b = __VLS_ctx.context) === null || _b === void 0 ? void 0 : _b.disabled)), readonly: ((_d = (_c = __VLS_ctx.context) === null || _c === void 0 ? void 0 : _c.attrs.readonly) !== null && _d !== void 0 ? _d : false) }), { style: ((_e = __VLS_ctx.context) === null || _e === void 0 ? void 0 : _e.attrs.style) }), { panelClass: ((_f = __VLS_ctx.context) === null || _f === void 0 ? void 0 : _f.attrs.class), tabindex: ((_g = __VLS_ctx.context) === null || _g === void 0 ? void 0 : _g.attrs.tabindex), 'aria-label': ((_h = __VLS_ctx.context) === null || _h === void 0 ? void 0 : _h.attrs.ariaLabel), 'aria-labelledby': ((_j = __VLS_ctx.context) === null || _j === void 0 ? void 0 : _j.attrs.ariaLabelledby), defaultColor: ((_k = __VLS_ctx.context.defaultColor) !== null && _k !== void 0 ? _k : 'ff0000'), inline: ((_l = __VLS_ctx.context.inline) !== null && _l !== void 0 ? _l : false), format: (__VLS_ctx.context.format), pt: (__VLS_ctx.context.pt), ptOptions: (__VLS_ctx.context.ptOptions), unstyled: (__VLS_ctx.unstyled) })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign(__assign(__assign(__assign({ 'onChange': {} }, { modelValue: (__VLS_ctx.modelValue) }), ((_m = __VLS_ctx.context) === null || _m === void 0 ? void 0 : _m.attrs)), { disabled: (!!((_o = __VLS_ctx.context) === null || _o === void 0 ? void 0 : _o.disabled)), readonly: ((_q = (_p = __VLS_ctx.context) === null || _p === void 0 ? void 0 : _p.attrs.readonly) !== null && _q !== void 0 ? _q : false) }), { style: ((_r = __VLS_ctx.context) === null || _r === void 0 ? void 0 : _r.attrs.style) }), { panelClass: ((_s = __VLS_ctx.context) === null || _s === void 0 ? void 0 : _s.attrs.class), tabindex: ((_t = __VLS_ctx.context) === null || _t === void 0 ? void 0 : _t.attrs.tabindex), 'aria-label': ((_u = __VLS_ctx.context) === null || _u === void 0 ? void 0 : _u.attrs.ariaLabel), 'aria-labelledby': ((_v = __VLS_ctx.context) === null || _v === void 0 ? void 0 : _v.attrs.ariaLabelledby), defaultColor: ((_w = __VLS_ctx.context.defaultColor) !== null && _w !== void 0 ? _w : 'ff0000'), inline: ((_x = __VLS_ctx.context.inline) !== null && _x !== void 0 ? _x : false), format: (__VLS_ctx.context.format), pt: (__VLS_ctx.context.pt), ptOptions: (__VLS_ctx.context.ptOptions), unstyled: (__VLS_ctx.unstyled) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_5;
var __VLS_6 = ({ change: {} },
    { onChange: (__VLS_ctx.handleChange) });
var __VLS_3;
var __VLS_4;
// @ts-ignore
[modelValue, context, context, context, context, context, context, context, context, context, context, context, context, context, unstyled, handleChange,];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    props: {
        context: {
            type: Object,
            required: true,
        },
    },
});
exports.default = {};
