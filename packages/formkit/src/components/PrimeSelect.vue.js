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
var _13 = (0, index_ts_1.useFormKitInput)(props.context), validSlotNames = _13.validSlotNames, unstyled = _13.unstyled, isInvalid = _13.isInvalid, handleInput = _13.handleInput, handleBlur = _13.handleBlur, modelValue = _13.modelValue;
var __VLS_ctx = __assign(__assign(__assign(__assign({}, {}), {}), {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "p-formkit" }));
/** @type {__VLS_StyleScopedClasses['p-formkit']} */ ;
var __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Select | typeof __VLS_components.Select} */
Select;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ 'onChange': {} }, { 'onBlur': {} }), { modelValue: (__VLS_ctx.modelValue) }), ((_a = __VLS_ctx.context) === null || _a === void 0 ? void 0 : _a.attrs)), { inputId: (__VLS_ctx.context.id), disabled: (!!((_b = __VLS_ctx.context) === null || _b === void 0 ? void 0 : _b.disabled)), readonly: ((_d = (_c = __VLS_ctx.context) === null || _c === void 0 ? void 0 : _c.attrs.readonly) !== null && _d !== void 0 ? _d : false) }), { style: ((_e = __VLS_ctx.context) === null || _e === void 0 ? void 0 : _e.attrs.style) }), { class: ((_g = (_f = __VLS_ctx.context) === null || _f === void 0 ? void 0 : _f.attrs) === null || _g === void 0 ? void 0 : _g.class) }), { invalid: (__VLS_ctx.isInvalid), inputStyle: ((_h = __VLS_ctx.context) === null || _h === void 0 ? void 0 : _h.attrs.style), inputClass: ((_k = (_j = __VLS_ctx.context) === null || _j === void 0 ? void 0 : _j.attrs) === null || _k === void 0 ? void 0 : _k.class), inputProps: ((_l = __VLS_ctx.context) === null || _l === void 0 ? void 0 : _l.attrs.inputProps), tabindex: ((_m = __VLS_ctx.context) === null || _m === void 0 ? void 0 : _m.attrs.tabindex), 'aria-label': ((_o = __VLS_ctx.context) === null || _o === void 0 ? void 0 : _o.attrs.ariaLabel), 'aria-labelledby': ((_p = __VLS_ctx.context) === null || _p === void 0 ? void 0 : _p.attrs.ariaLabelledby), size: ((_r = (_q = __VLS_ctx.context) === null || _q === void 0 ? void 0 : _q.size) !== null && _r !== void 0 ? _r : undefined), options: (__VLS_ctx.context.options), optionLabel: (__VLS_ctx.context.optionLabel), optionValue: (__VLS_ctx.context.optionValue), optionDisabled: (__VLS_ctx.context.optionDisabled), optionGroupLabel: (__VLS_ctx.context.optionGroupLabel), optionGroupChildren: (__VLS_ctx.context.optionGroupChildren), scrollHeight: (__VLS_ctx.context.scrollHeight), filter: ((_s = __VLS_ctx.context.filter) !== null && _s !== void 0 ? _s : false), filterPlaceholder: (__VLS_ctx.context.filterPlaceholder), filterLocale: (__VLS_ctx.context.filterLocale), filterMatchMode: (__VLS_ctx.context.filterMatchMode), fitlerFields: (__VLS_ctx.context.filterFields), filterInputProps: (__VLS_ctx.context.filterInputProps), editable: (__VLS_ctx.context.editable), placeholder: (__VLS_ctx.context.placeholder), dataKey: (__VLS_ctx.context.dataKey), showClear: ((_t = __VLS_ctx.context.showClear) !== null && _t !== void 0 ? _t : false), overlayStyle: (__VLS_ctx.context.overlayStyle), overlayClass: (__VLS_ctx.context.overlayClass), panelProps: (__VLS_ctx.context.panelProps), appendTo: (__VLS_ctx.context.appendTo), resetFilterOnHide: (__VLS_ctx.context.resetFilterOnHide), virtualScrollerOptions: (__VLS_ctx.context.virtualScrollerOptions), autoOptionFocus: (__VLS_ctx.context.autoOptionFocus), selectOnFocus: (__VLS_ctx.context.selectOnFocus), filterMessage: (__VLS_ctx.context.filterMessage), selectionMessage: (__VLS_ctx.context.selectionMessage), emptySelectionMessage: (__VLS_ctx.context.emptySelectionMessage), emptyFilterMessage: (__VLS_ctx.context.emptyFilterMessage), emptyMessage: (__VLS_ctx.context.emptyMessage), pt: (__VLS_ctx.context.pt), ptOptions: (__VLS_ctx.context.ptOptions), unstyled: (__VLS_ctx.unstyled) })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign(__assign(__assign(__assign(__assign(__assign({ 'onChange': {} }, { 'onBlur': {} }), { modelValue: (__VLS_ctx.modelValue) }), ((_u = __VLS_ctx.context) === null || _u === void 0 ? void 0 : _u.attrs)), { inputId: (__VLS_ctx.context.id), disabled: (!!((_v = __VLS_ctx.context) === null || _v === void 0 ? void 0 : _v.disabled)), readonly: ((_x = (_w = __VLS_ctx.context) === null || _w === void 0 ? void 0 : _w.attrs.readonly) !== null && _x !== void 0 ? _x : false) }), { style: ((_y = __VLS_ctx.context) === null || _y === void 0 ? void 0 : _y.attrs.style) }), { class: ((_0 = (_z = __VLS_ctx.context) === null || _z === void 0 ? void 0 : _z.attrs) === null || _0 === void 0 ? void 0 : _0.class) }), { invalid: (__VLS_ctx.isInvalid), inputStyle: ((_1 = __VLS_ctx.context) === null || _1 === void 0 ? void 0 : _1.attrs.style), inputClass: ((_3 = (_2 = __VLS_ctx.context) === null || _2 === void 0 ? void 0 : _2.attrs) === null || _3 === void 0 ? void 0 : _3.class), inputProps: ((_4 = __VLS_ctx.context) === null || _4 === void 0 ? void 0 : _4.attrs.inputProps), tabindex: ((_5 = __VLS_ctx.context) === null || _5 === void 0 ? void 0 : _5.attrs.tabindex), 'aria-label': ((_6 = __VLS_ctx.context) === null || _6 === void 0 ? void 0 : _6.attrs.ariaLabel), 'aria-labelledby': ((_7 = __VLS_ctx.context) === null || _7 === void 0 ? void 0 : _7.attrs.ariaLabelledby), size: ((_9 = (_8 = __VLS_ctx.context) === null || _8 === void 0 ? void 0 : _8.size) !== null && _9 !== void 0 ? _9 : undefined), options: (__VLS_ctx.context.options), optionLabel: (__VLS_ctx.context.optionLabel), optionValue: (__VLS_ctx.context.optionValue), optionDisabled: (__VLS_ctx.context.optionDisabled), optionGroupLabel: (__VLS_ctx.context.optionGroupLabel), optionGroupChildren: (__VLS_ctx.context.optionGroupChildren), scrollHeight: (__VLS_ctx.context.scrollHeight), filter: ((_10 = __VLS_ctx.context.filter) !== null && _10 !== void 0 ? _10 : false), filterPlaceholder: (__VLS_ctx.context.filterPlaceholder), filterLocale: (__VLS_ctx.context.filterLocale), filterMatchMode: (__VLS_ctx.context.filterMatchMode), fitlerFields: (__VLS_ctx.context.filterFields), filterInputProps: (__VLS_ctx.context.filterInputProps), editable: (__VLS_ctx.context.editable), placeholder: (__VLS_ctx.context.placeholder), dataKey: (__VLS_ctx.context.dataKey), showClear: ((_11 = __VLS_ctx.context.showClear) !== null && _11 !== void 0 ? _11 : false), overlayStyle: (__VLS_ctx.context.overlayStyle), overlayClass: (__VLS_ctx.context.overlayClass), panelProps: (__VLS_ctx.context.panelProps), appendTo: (__VLS_ctx.context.appendTo), resetFilterOnHide: (__VLS_ctx.context.resetFilterOnHide), virtualScrollerOptions: (__VLS_ctx.context.virtualScrollerOptions), autoOptionFocus: (__VLS_ctx.context.autoOptionFocus), selectOnFocus: (__VLS_ctx.context.selectOnFocus), filterMessage: (__VLS_ctx.context.filterMessage), selectionMessage: (__VLS_ctx.context.selectionMessage), emptySelectionMessage: (__VLS_ctx.context.emptySelectionMessage), emptyFilterMessage: (__VLS_ctx.context.emptyFilterMessage), emptyMessage: (__VLS_ctx.context.emptyMessage), pt: (__VLS_ctx.context.pt), ptOptions: (__VLS_ctx.context.ptOptions), unstyled: (__VLS_ctx.unstyled) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_5;
var __VLS_6 = ({ change: {} },
    { onChange: (__VLS_ctx.handleInput) });
var __VLS_7 = ({ blur: {} },
    { onBlur: (__VLS_ctx.handleBlur) });
var __VLS_8 = __VLS_3.slots.default;
for (var _i = 0, _14 = __VLS_vFor((__VLS_ctx.validSlotNames)); _i < _14.length; _i++) {
    var slotName = _14[_i][0];
    {
        var _15 = __VLS_3.slots, _16 = __VLS_tryAsConstant(slotName), __VLS_9 = _15[_16];
        var slotProps = __VLS_vSlot(__VLS_9)[0];
        var __VLS_10 = ((_12 = __VLS_ctx.context) === null || _12 === void 0 ? void 0 : _12.slots[slotName]);
        // @ts-ignore
        var __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10(__assign({}, (__assign(__assign({}, __VLS_ctx.context), slotProps)))));
        var __VLS_12 = __VLS_11.apply(void 0, __spreadArray([__assign({}, (__assign(__assign({}, __VLS_ctx.context), slotProps)))], __VLS_functionalComponentArgsRest(__VLS_11), false));
        // @ts-ignore
        [modelValue, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, isInvalid, unstyled, handleInput, handleBlur, validSlotNames,];
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
