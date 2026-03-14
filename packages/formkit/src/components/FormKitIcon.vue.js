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
Object.defineProperty(exports, "__esModule", { value: true });
var __VLS_props = defineProps({
    iconClass: {
        type: String,
        default: "",
    },
    onClick: { type: Function, default: undefined },
    position: {
        type: String,
        required: true,
        validator: function (val) { return ["prefix", "suffix"].includes(val); },
    },
});
var __VLS_ctx = __assign(__assign(__assign({}, {}), {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.i)(__assign({ onClick: (__VLS_ctx.onClick) }, { class: (["formkit-".concat(__VLS_ctx.position, "-icon"), __VLS_ctx.iconClass]) }));
// @ts-ignore
[onClick, position, iconClass,];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    props: {
        iconClass: {
            type: String,
            default: "",
        },
        onClick: { type: Function, default: undefined },
        position: {
            type: String,
            required: true,
            validator: function (val) { return ["prefix", "suffix"].includes(val); },
        },
    },
});
exports.default = {};
