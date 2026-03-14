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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vue_i18n_1 = require("vue-i18n");
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
var _t = (0, index_ts_1.useFormKitSection)(props.context), hasPrefix = _t.hasPrefix, hasPrefixIcon = _t.hasPrefixIcon, hasSuffix = _t.hasSuffix, hasSuffixIcon = _t.hasSuffixIcon;
var t = (0, vue_i18n_1.useI18n)().t;
var translated = (0, vue_1.computed)(function () {
    var _a, _b, _c, _d, _e;
    if ((_a = props.context) === null || _a === void 0 ? void 0 : _a._value)
        return (_c = (_b = props.context) === null || _b === void 0 ? void 0 : _b.trueValue) !== null && _c !== void 0 ? _c : t("formkit.prime.true", "true");
    else
        return (_e = (_d = props.context) === null || _d === void 0 ? void 0 : _d.falseValue) !== null && _e !== void 0 ? _e : t("formkit.prime.false", "false");
});
var __VLS_ctx = __assign(__assign(__assign(__assign({}, {}), {}), {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "p-formkit p-output-boolean" }));
/** @type {__VLS_StyleScopedClasses['p-formkit']} */ ;
/** @type {__VLS_StyleScopedClasses['p-output-boolean']} */ ;
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
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign(__assign({ id: ((_g = __VLS_ctx.context) === null || _g === void 0 ? void 0 : _g.id) }, { style: ((_j = (_h = __VLS_ctx.context) === null || _h === void 0 ? void 0 : _h.attrs) === null || _j === void 0 ? void 0 : _j.style) }), { class: ((_l = (_k = __VLS_ctx.context) === null || _k === void 0 ? void 0 : _k.attrs) === null || _l === void 0 ? void 0 : _l.class) }));
(__VLS_ctx.translated);
if (__VLS_ctx.hasSuffix) {
    var __VLS_10 = FormKitSuffix_vue_1.default;
    // @ts-ignore
    var __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
        suffix: (_m = __VLS_ctx.context) === null || _m === void 0 ? void 0 : _m.suffix,
    }));
    var __VLS_12 = __VLS_11.apply(void 0, __spreadArray([{
            suffix: (_o = __VLS_ctx.context) === null || _o === void 0 ? void 0 : _o.suffix,
        }], __VLS_functionalComponentArgsRest(__VLS_11), false));
}
if (__VLS_ctx.hasSuffixIcon) {
    var __VLS_15 = FormKitIcon_vue_1.default;
    // @ts-ignore
    var __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({
        iconClass: (_p = __VLS_ctx.context) === null || _p === void 0 ? void 0 : _p.iconSuffix,
        onClick: (_q = __VLS_ctx.context) === null || _q === void 0 ? void 0 : _q.onIconSuffixClicked,
        position: "suffix",
    }));
    var __VLS_17 = __VLS_16.apply(void 0, __spreadArray([{
            iconClass: (_r = __VLS_ctx.context) === null || _r === void 0 ? void 0 : _r.iconSuffix,
            onClick: (_s = __VLS_ctx.context) === null || _s === void 0 ? void 0 : _s.onIconSuffixClicked,
            position: "suffix",
        }], __VLS_functionalComponentArgsRest(__VLS_16), false));
}
// @ts-ignore
[hasPrefixIcon, context, context, context, context, context, context, context, context, context, hasPrefix, translated, hasSuffix, hasSuffixIcon,];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    props: {
        context: {
            type: Object,
            required: true,
        },
    },
});
exports.default = {};
