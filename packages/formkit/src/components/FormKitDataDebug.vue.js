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
Object.defineProperty(exports, "__esModule", { value: true });
var __VLS_props = defineProps({
    data: {
        type: Object,
        default: null,
    },
    header: {
        type: String,
        default: "Debug",
    },
});
var __VLS_ctx = __assign(__assign(__assign({}, {}), {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
var __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Fieldset | typeof __VLS_components.Fieldset} */
Fieldset;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0(__assign({ class: "p-formkit-data-debug" }, { legend: (__VLS_ctx.header), toggleable: (true), collapsed: (true) })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ class: "p-formkit-data-debug" }, { legend: (__VLS_ctx.header), toggleable: (true), collapsed: (true) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_5 = {};
/** @type {__VLS_StyleScopedClasses['p-formkit-data-debug']} */ ;
var __VLS_6 = __VLS_3.slots.default;
if (__VLS_ctx.data) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.pre, __VLS_intrinsics.pre)({});
    (__VLS_ctx.data);
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
}
// @ts-ignore
[header, data, data,];
var __VLS_3;
// @ts-ignore
[];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    props: {
        data: {
            type: Object,
            default: null,
        },
        header: {
            type: String,
            default: "Debug",
        },
    },
});
exports.default = {};
