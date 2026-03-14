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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var index_ts_1 = require("../composables/index.ts");
var FormKitIcon_vue_1 = require("./FormKitIcon.vue");
var FormKitPrefix_vue_1 = require("./FormKitPrefix.vue");
var FormKitSuffix_vue_1 = require("./FormKitSuffix.vue");
var props = defineProps({
    context: {
        type: Object,
        required: true,
    },
});
var _x = (0, index_ts_1.useFormKitSection)(props.context), hasPrefix = _x.hasPrefix, hasPrefixIcon = _x.hasPrefixIcon, hasSuffix = _x.hasSuffix, hasSuffixIcon = _x.hasSuffixIcon;
var url = (0, vue_1.computed)(function () {
    var _a, _b, _c, _d;
    if ((_a = props.context) === null || _a === void 0 ? void 0 : _a._value)
        return ((_b = props.context) === null || _b === void 0 ? void 0 : _b._value.indexOf("http")) > -1
            ? (_c = props.context) === null || _c === void 0 ? void 0 : _c._value
            : "https://".concat((_d = props.context) === null || _d === void 0 ? void 0 : _d._value);
    else
        return "";
});
var title = (0, vue_1.computed)(function () {
    var _a, _b, _c, _d;
    var value = (_b = (_a = props.context) === null || _a === void 0 ? void 0 : _a._value) !== null && _b !== void 0 ? _b : "";
    return (_d = (_c = props.context) === null || _c === void 0 ? void 0 : _c.title) !== null && _d !== void 0 ? _d : value;
});
var __VLS_ctx = __assign(__assign(__assign(__assign({}, {}), {}), {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "p-formkit p-output-link" }));
/** @type {__VLS_StyleScopedClasses['p-formkit']} */ ;
/** @type {__VLS_StyleScopedClasses['p-output-link']} */ ;
if (__VLS_ctx.hasPrefixIcon) {
    var __VLS_0 = FormKitIcon_vue_1.default;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        iconClass: (_a = __VLS_ctx.context) === null || _a === void 0 ? void 0 : _a.iconPrefix,
        onClick: (_b = __VLS_ctx.context) === null || _b === void 0 ? void 0 : _b.onIconPrefixClicked,
        position: "prefix",
    }));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
            iconClass: (_c = __VLS_ctx.context) === null || _c === void 0 ? void 0 : _c.iconPrefix,
            onClick: (_d = __VLS_ctx.context) === null || _d === void 0 ? void 0 : _d.onIconPrefixClicked,
            position: "prefix",
        }], __VLS_functionalComponentArgsRest(__VLS_1), false));
}
if (__VLS_ctx.hasPrefix) {
    var __VLS_5 = FormKitPrefix_vue_1.default;
    // @ts-ignore
    var __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
        prefix: (_e = __VLS_ctx.context) === null || _e === void 0 ? void 0 : _e.prefix,
    }));
    var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([{
            prefix: (_f = __VLS_ctx.context) === null || _f === void 0 ? void 0 : _f.prefix,
        }], __VLS_functionalComponentArgsRest(__VLS_6), false));
}
if ((_g = __VLS_ctx.context) === null || _g === void 0 ? void 0 : _g.value) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)(__assign(__assign(__assign({ id: ((_h = __VLS_ctx.context) === null || _h === void 0 ? void 0 : _h.id) }, { style: ((_k = (_j = __VLS_ctx.context) === null || _j === void 0 ? void 0 : _j.attrs) === null || _k === void 0 ? void 0 : _k.style) }), { class: ((_m = (_l = __VLS_ctx.context) === null || _l === void 0 ? void 0 : _l.attrs) === null || _m === void 0 ? void 0 : _m.class) }), { href: (__VLS_ctx.url), target: ((_q = (_p = (_o = __VLS_ctx.context) === null || _o === void 0 ? void 0 : _o.attrs) === null || _p === void 0 ? void 0 : _p.target) !== null && _q !== void 0 ? _q : '_new') }));
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (__VLS_ctx.title);
}
if (__VLS_ctx.hasSuffix) {
    var __VLS_10 = FormKitSuffix_vue_1.default;
    // @ts-ignore
    var __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
        suffix: (_r = __VLS_ctx.context) === null || _r === void 0 ? void 0 : _r.suffix,
    }));
    var __VLS_12 = __VLS_11.apply(void 0, __spreadArray([{
            suffix: (_s = __VLS_ctx.context) === null || _s === void 0 ? void 0 : _s.suffix,
        }], __VLS_functionalComponentArgsRest(__VLS_11), false));
}
if (__VLS_ctx.hasSuffixIcon) {
    var __VLS_15 = FormKitIcon_vue_1.default;
    // @ts-ignore
    var __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({
        iconClass: (_t = __VLS_ctx.context) === null || _t === void 0 ? void 0 : _t.iconSuffix,
        onClick: (_u = __VLS_ctx.context) === null || _u === void 0 ? void 0 : _u.onIconSuffixClicked,
        position: "suffix",
    }));
    var __VLS_17 = __VLS_16.apply(void 0, __spreadArray([{
            iconClass: (_v = __VLS_ctx.context) === null || _v === void 0 ? void 0 : _v.iconSuffix,
            onClick: (_w = __VLS_ctx.context) === null || _w === void 0 ? void 0 : _w.onIconSuffixClicked,
            position: "suffix",
        }], __VLS_functionalComponentArgsRest(__VLS_16), false));
}
// @ts-ignore
[hasPrefixIcon, context, context, context, context, context, context, context, context, context, context, context, hasPrefix, url, title, hasSuffix, hasSuffixIcon,];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    props: {
        context: {
            type: Object,
            required: true,
        },
    },
});
exports.default = {};
