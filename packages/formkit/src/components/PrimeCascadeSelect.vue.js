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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2;
Object.defineProperty(exports, "__esModule", { value: true });
var index_ts_1 = require("../composables/index.ts");
var props = defineProps({
    context: {
        type: Object,
        required: true,
    },
});
var _3 = (0, index_ts_1.useFormKitInput)(props.context), validSlotNames = _3.validSlotNames, unstyled = _3.unstyled, isInvalid = _3.isInvalid, handleInput = _3.handleInput, handleBlur = _3.handleBlur, modelValue = _3.modelValue;
var __VLS_ctx = __assign(__assign(__assign(__assign({}, {}), {}), {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "p-formkit" }));
/** @type {__VLS_StyleScopedClasses['p-formkit']} */ ;
var __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.CascadeSelect | typeof __VLS_components.CascadeSelect} */
CascadeSelect;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0(__assign(__assign(__assign(__assign(__assign(__assign({ 'onChange': {} }, { 'onBlur': {} }), { id: (__VLS_ctx.context.id), modelValue: (__VLS_ctx.modelValue) }), ((_a = __VLS_ctx.context) === null || _a === void 0 ? void 0 : _a.attrs)), { disabled: (!!((_b = __VLS_ctx.context) === null || _b === void 0 ? void 0 : _b.disabled)), readonly: ((_d = (_c = __VLS_ctx.context) === null || _c === void 0 ? void 0 : _c.attrs.readonly) !== null && _d !== void 0 ? _d : false) }), { class: ((_f = (_e = __VLS_ctx.context) === null || _e === void 0 ? void 0 : _e.attrs) === null || _f === void 0 ? void 0 : _f.class) }), { invalid: (__VLS_ctx.isInvalid), tabindex: ((_g = __VLS_ctx.context) === null || _g === void 0 ? void 0 : _g.attrs.tabindex), 'aria-label': ((_h = __VLS_ctx.context) === null || _h === void 0 ? void 0 : _h.attrs.ariaLabel), 'aria-labelledby': ((_j = __VLS_ctx.context) === null || _j === void 0 ? void 0 : _j.attrs.ariaLabelledby), size: ((_l = (_k = __VLS_ctx.context) === null || _k === void 0 ? void 0 : _k.size) !== null && _l !== void 0 ? _l : undefined), options: ((_m = __VLS_ctx.context) === null || _m === void 0 ? void 0 : _m.options), optionLabel: ((_o = __VLS_ctx.context) === null || _o === void 0 ? void 0 : _o.optionLabel), optionValue: (__VLS_ctx.context.optionValue), optionGroupLabel: (__VLS_ctx.context.optionGroupLabel), optionGroupChildren: (__VLS_ctx.context.optionGroupChildren), placeholder: (__VLS_ctx.context.placeholder), pt: (__VLS_ctx.context.pt), ptOptions: (__VLS_ctx.context.ptOptions), unstyled: (__VLS_ctx.unstyled) })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign(__assign(__assign(__assign(__assign({ 'onChange': {} }, { 'onBlur': {} }), { id: (__VLS_ctx.context.id), modelValue: (__VLS_ctx.modelValue) }), ((_p = __VLS_ctx.context) === null || _p === void 0 ? void 0 : _p.attrs)), { disabled: (!!((_q = __VLS_ctx.context) === null || _q === void 0 ? void 0 : _q.disabled)), readonly: ((_s = (_r = __VLS_ctx.context) === null || _r === void 0 ? void 0 : _r.attrs.readonly) !== null && _s !== void 0 ? _s : false) }), { class: ((_u = (_t = __VLS_ctx.context) === null || _t === void 0 ? void 0 : _t.attrs) === null || _u === void 0 ? void 0 : _u.class) }), { invalid: (__VLS_ctx.isInvalid), tabindex: ((_v = __VLS_ctx.context) === null || _v === void 0 ? void 0 : _v.attrs.tabindex), 'aria-label': ((_w = __VLS_ctx.context) === null || _w === void 0 ? void 0 : _w.attrs.ariaLabel), 'aria-labelledby': ((_x = __VLS_ctx.context) === null || _x === void 0 ? void 0 : _x.attrs.ariaLabelledby), size: ((_z = (_y = __VLS_ctx.context) === null || _y === void 0 ? void 0 : _y.size) !== null && _z !== void 0 ? _z : undefined), options: ((_0 = __VLS_ctx.context) === null || _0 === void 0 ? void 0 : _0.options), optionLabel: ((_1 = __VLS_ctx.context) === null || _1 === void 0 ? void 0 : _1.optionLabel), optionValue: (__VLS_ctx.context.optionValue), optionGroupLabel: (__VLS_ctx.context.optionGroupLabel), optionGroupChildren: (__VLS_ctx.context.optionGroupChildren), placeholder: (__VLS_ctx.context.placeholder), pt: (__VLS_ctx.context.pt), ptOptions: (__VLS_ctx.context.ptOptions), unstyled: (__VLS_ctx.unstyled) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_5;
var __VLS_6 = ({ change: {} },
    { onChange: (__VLS_ctx.handleInput) });
var __VLS_7 = ({ blur: {} },
    { onBlur: (__VLS_ctx.handleBlur) });
var __VLS_8 = __VLS_3.slots.default;
for (var _i = 0, _4 = __VLS_vFor((__VLS_ctx.validSlotNames)); _i < _4.length; _i++) {
    var slotName = _4[_i][0];
    {
        var _5 = __VLS_3.slots, _6 = __VLS_tryAsConstant(slotName), __VLS_9 = _5[_6];
        var slotProps = __VLS_vSlot(__VLS_9)[0];
        var __VLS_10 = ((_2 = __VLS_ctx.context) === null || _2 === void 0 ? void 0 : _2.slots[slotName]);
        // @ts-ignore
        var __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10(__assign({}, (__assign(__assign({}, __VLS_ctx.context), slotProps)))));
        var __VLS_12 = __VLS_11.apply(void 0, __spreadArray([__assign({}, (__assign(__assign({}, __VLS_ctx.context), slotProps)))], __VLS_functionalComponentArgsRest(__VLS_11), false));
        // @ts-ignore
        [context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, modelValue, isInvalid, unstyled, handleInput, handleBlur, validSlotNames,];
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
