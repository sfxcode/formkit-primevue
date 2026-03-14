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
var _3 = (0, index_ts_1.useFormKitInput)(props.context), validSlotNames = _3.validSlotNames, unstyled = _3.unstyled, isInvalid = _3.isInvalid, handleBlur = _3.handleBlur, handleChange = _3.handleChange, modelValue = _3.modelValue;
var __VLS_ctx = __assign(__assign(__assign(__assign({}, {}), {}), {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "p-formkit" }));
/** @type {__VLS_StyleScopedClasses['p-formkit']} */ ;
var __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.MultiSelect | typeof __VLS_components.MultiSelect} */
MultiSelect;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0(__assign(__assign(__assign(__assign(__assign(__assign({ 'onChange': {} }, { 'onBlur': {} }), { modelValue: (__VLS_ctx.modelValue) }), ((_a = __VLS_ctx.context) === null || _a === void 0 ? void 0 : _a.attrs)), { inputId: (__VLS_ctx.context.id), disabled: (!!((_b = __VLS_ctx.context) === null || _b === void 0 ? void 0 : _b.disabled)), readonly: ((_d = (_c = __VLS_ctx.context) === null || _c === void 0 ? void 0 : _c.attrs.readonly) !== null && _d !== void 0 ? _d : false), listStyle: ((_e = __VLS_ctx.context) === null || _e === void 0 ? void 0 : _e.attrs.style) }), { class: ((_g = (_f = __VLS_ctx.context) === null || _f === void 0 ? void 0 : _f.attrs) === null || _g === void 0 ? void 0 : _g.class) }), { invalid: (__VLS_ctx.isInvalid), tabindex: ((_h = __VLS_ctx.context) === null || _h === void 0 ? void 0 : _h.attrs.tabindex), 'aria-label': ((_j = __VLS_ctx.context) === null || _j === void 0 ? void 0 : _j.attrs.ariaLabel), 'aria-labelledby': ((_k = __VLS_ctx.context) === null || _k === void 0 ? void 0 : _k.attrs.ariaLabelledby), size: ((_m = (_l = __VLS_ctx.context) === null || _l === void 0 ? void 0 : _l.size) !== null && _m !== void 0 ? _m : undefined), placeholder: (__VLS_ctx.context.placeholder), options: (__VLS_ctx.context.options), optionLabel: (__VLS_ctx.context.optionLabel), optionValue: (__VLS_ctx.context.optionValue), optionDisabled: (__VLS_ctx.context.optionDisabled), optionGroupLabel: (__VLS_ctx.context.optionGroupLabel), optionGroupChildren: (__VLS_ctx.context.optionGroupChildren), scrollHeight: (__VLS_ctx.context.scrollHeight), dataKey: (__VLS_ctx.context.dataKey), filter: ((_o = __VLS_ctx.context.filter) !== null && _o !== void 0 ? _o : false), filterPlaceholder: (__VLS_ctx.context.filterPlaceholder), filterLocale: (__VLS_ctx.context.filterLocale), filterMatchMode: (__VLS_ctx.context.filterMatchMode), fitlerFields: (__VLS_ctx.context.filterFields), appendTo: (__VLS_ctx.context.appendTo), closeIcon: (__VLS_ctx.context.closeIcon), display: (__VLS_ctx.context.display), maxSelectedLabels: (__VLS_ctx.context.maxSelectedLabels), selectedItemsLabel: (__VLS_ctx.context.selectedItemsLabel), selectionLimit: (__VLS_ctx.context.selectionLimit), showToggleAll: (__VLS_ctx.context.showToggleAll), loading: (__VLS_ctx.context.loading), selectAll: (__VLS_ctx.context.selectAll), resetFilterOnHide: (__VLS_ctx.context.resetFilterOnHide), virtualScrollerOptions: (__VLS_ctx.context.virtualScrollerOptions), autoOptionFocus: (__VLS_ctx.context.autoOptionFocus), autoFilterFocus: (__VLS_ctx.context.autoFilterFocus), filterMessage: (__VLS_ctx.context.filterMessage), selectionMessage: (__VLS_ctx.context.selectionMessage), emptySelectionMessage: (__VLS_ctx.context.emptySelectionMessage), emptyFilterMessage: (__VLS_ctx.context.emptyFilterMessage), emptyMessage: (__VLS_ctx.context.emptyMessage), pt: (__VLS_ctx.context.pt), ptOptions: (__VLS_ctx.context.ptOptions), unstyled: (__VLS_ctx.unstyled) })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign(__assign(__assign(__assign(__assign({ 'onChange': {} }, { 'onBlur': {} }), { modelValue: (__VLS_ctx.modelValue) }), ((_p = __VLS_ctx.context) === null || _p === void 0 ? void 0 : _p.attrs)), { inputId: (__VLS_ctx.context.id), disabled: (!!((_q = __VLS_ctx.context) === null || _q === void 0 ? void 0 : _q.disabled)), readonly: ((_s = (_r = __VLS_ctx.context) === null || _r === void 0 ? void 0 : _r.attrs.readonly) !== null && _s !== void 0 ? _s : false), listStyle: ((_t = __VLS_ctx.context) === null || _t === void 0 ? void 0 : _t.attrs.style) }), { class: ((_v = (_u = __VLS_ctx.context) === null || _u === void 0 ? void 0 : _u.attrs) === null || _v === void 0 ? void 0 : _v.class) }), { invalid: (__VLS_ctx.isInvalid), tabindex: ((_w = __VLS_ctx.context) === null || _w === void 0 ? void 0 : _w.attrs.tabindex), 'aria-label': ((_x = __VLS_ctx.context) === null || _x === void 0 ? void 0 : _x.attrs.ariaLabel), 'aria-labelledby': ((_y = __VLS_ctx.context) === null || _y === void 0 ? void 0 : _y.attrs.ariaLabelledby), size: ((_0 = (_z = __VLS_ctx.context) === null || _z === void 0 ? void 0 : _z.size) !== null && _0 !== void 0 ? _0 : undefined), placeholder: (__VLS_ctx.context.placeholder), options: (__VLS_ctx.context.options), optionLabel: (__VLS_ctx.context.optionLabel), optionValue: (__VLS_ctx.context.optionValue), optionDisabled: (__VLS_ctx.context.optionDisabled), optionGroupLabel: (__VLS_ctx.context.optionGroupLabel), optionGroupChildren: (__VLS_ctx.context.optionGroupChildren), scrollHeight: (__VLS_ctx.context.scrollHeight), dataKey: (__VLS_ctx.context.dataKey), filter: ((_1 = __VLS_ctx.context.filter) !== null && _1 !== void 0 ? _1 : false), filterPlaceholder: (__VLS_ctx.context.filterPlaceholder), filterLocale: (__VLS_ctx.context.filterLocale), filterMatchMode: (__VLS_ctx.context.filterMatchMode), fitlerFields: (__VLS_ctx.context.filterFields), appendTo: (__VLS_ctx.context.appendTo), closeIcon: (__VLS_ctx.context.closeIcon), display: (__VLS_ctx.context.display), maxSelectedLabels: (__VLS_ctx.context.maxSelectedLabels), selectedItemsLabel: (__VLS_ctx.context.selectedItemsLabel), selectionLimit: (__VLS_ctx.context.selectionLimit), showToggleAll: (__VLS_ctx.context.showToggleAll), loading: (__VLS_ctx.context.loading), selectAll: (__VLS_ctx.context.selectAll), resetFilterOnHide: (__VLS_ctx.context.resetFilterOnHide), virtualScrollerOptions: (__VLS_ctx.context.virtualScrollerOptions), autoOptionFocus: (__VLS_ctx.context.autoOptionFocus), autoFilterFocus: (__VLS_ctx.context.autoFilterFocus), filterMessage: (__VLS_ctx.context.filterMessage), selectionMessage: (__VLS_ctx.context.selectionMessage), emptySelectionMessage: (__VLS_ctx.context.emptySelectionMessage), emptyFilterMessage: (__VLS_ctx.context.emptyFilterMessage), emptyMessage: (__VLS_ctx.context.emptyMessage), pt: (__VLS_ctx.context.pt), ptOptions: (__VLS_ctx.context.ptOptions), unstyled: (__VLS_ctx.unstyled) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_5;
var __VLS_6 = ({ change: {} },
    { onChange: (__VLS_ctx.handleChange) });
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
        [modelValue, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, isInvalid, unstyled, handleChange, handleBlur, validSlotNames,];
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
