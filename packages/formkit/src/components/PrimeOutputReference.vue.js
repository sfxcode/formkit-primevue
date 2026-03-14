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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8;
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
var _9 = (0, index_ts_1.useFormKitSection)(props.context), hasPrefix = _9.hasPrefix, hasPrefixIcon = _9.hasPrefixIcon, hasSuffix = _9.hasSuffix, hasSuffixIcon = _9.hasSuffixIcon;
var reference = (0, vue_1.computed)(function () {
    var _a, _b, _c, _d, _e;
    var value = (_b = (_a = props.context) === null || _a === void 0 ? void 0 : _a._value) !== null && _b !== void 0 ? _b : "";
    var result = ((_c = props.context) === null || _c === void 0 ? void 0 : _c.reference) ? "".concat((_d = props.context) === null || _d === void 0 ? void 0 : _d.reference) : "reference-must-be-set";
    if (!((_e = props.context) === null || _e === void 0 ? void 0 : _e.internal) && !result.includes("http"))
        result = "https://".concat(result);
    return result.replace(/\{\{.*\}\}/, value);
});
var title = (0, vue_1.computed)(function () {
    var _a, _b, _c, _d;
    var value = (_b = (_a = props.context) === null || _a === void 0 ? void 0 : _a._value) !== null && _b !== void 0 ? _b : "";
    var result = (_d = (_c = props.context) === null || _c === void 0 ? void 0 : _c.title) !== null && _d !== void 0 ? _d : value;
    return "".concat(result).replace(/\{\{.*\}\}/, value);
});
var __VLS_ctx = __assign(__assign(__assign(__assign({}, {}), {}), {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "p-formkit p-output-reference" }));
/** @type {__VLS_StyleScopedClasses['p-formkit']} */ ;
/** @type {__VLS_StyleScopedClasses['p-output-reference']} */ ;
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
if ((_g = __VLS_ctx.context) === null || _g === void 0 ? void 0 : _g.internal) {
    var __VLS_10 = (((_h = __VLS_ctx.context) === null || _h === void 0 ? void 0 : _h.linkComponentName) ? (_j = __VLS_ctx.context) === null || _j === void 0 ? void 0 : _j.linkComponentName : 'RouterLink');
    // @ts-ignore
    var __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10(__assign(__assign(__assign({ style: ((_l = (_k = __VLS_ctx.context) === null || _k === void 0 ? void 0 : _k.attrs) === null || _l === void 0 ? void 0 : _l.style) }, { class: ((_o = (_m = __VLS_ctx.context) === null || _m === void 0 ? void 0 : _m.attrs) === null || _o === void 0 ? void 0 : _o.class) }), { to: (__VLS_ctx.reference) }), ((_p = __VLS_ctx.context) === null || _p === void 0 ? void 0 : _p.attrs))));
    var __VLS_12 = __VLS_11.apply(void 0, __spreadArray([__assign(__assign(__assign({ style: ((_r = (_q = __VLS_ctx.context) === null || _q === void 0 ? void 0 : _q.attrs) === null || _r === void 0 ? void 0 : _r.style) }, { class: ((_t = (_s = __VLS_ctx.context) === null || _s === void 0 ? void 0 : _s.attrs) === null || _t === void 0 ? void 0 : _t.class) }), { to: (__VLS_ctx.reference) }), ((_u = __VLS_ctx.context) === null || _u === void 0 ? void 0 : _u.attrs))], __VLS_functionalComponentArgsRest(__VLS_11), false));
    var __VLS_15 = __VLS_13.slots.default;
    (__VLS_ctx.title);
    // @ts-ignore
    [hasPrefixIcon, context, context, context, context, context, context, context, context, context, hasPrefix, reference, title,];
    var __VLS_13;
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)(__assign(__assign(__assign({ id: ((_v = __VLS_ctx.context) === null || _v === void 0 ? void 0 : _v.id) }, { style: ((_x = (_w = __VLS_ctx.context) === null || _w === void 0 ? void 0 : _w.attrs) === null || _x === void 0 ? void 0 : _x.style) }), { class: ((_z = (_y = __VLS_ctx.context) === null || _y === void 0 ? void 0 : _y.attrs) === null || _z === void 0 ? void 0 : _z.class) }), { href: (__VLS_ctx.reference), target: ((_2 = (_1 = (_0 = __VLS_ctx.context) === null || _0 === void 0 ? void 0 : _0.attrs) === null || _1 === void 0 ? void 0 : _1.target) !== null && _2 !== void 0 ? _2 : '_new') }));
    (__VLS_ctx.title);
}
if (__VLS_ctx.hasSuffix) {
    var __VLS_16 = FormKitSuffix_vue_1.default;
    // @ts-ignore
    var __VLS_17 = __VLS_asFunctionalComponent1(__VLS_16, new __VLS_16({
        suffix: (_3 = __VLS_ctx.context) === null || _3 === void 0 ? void 0 : _3.suffix,
    }));
    var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([{
            suffix: (_4 = __VLS_ctx.context) === null || _4 === void 0 ? void 0 : _4.suffix,
        }], __VLS_functionalComponentArgsRest(__VLS_17), false));
}
if (__VLS_ctx.hasSuffixIcon) {
    var __VLS_21 = FormKitIcon_vue_1.default;
    // @ts-ignore
    var __VLS_22 = __VLS_asFunctionalComponent1(__VLS_21, new __VLS_21({
        iconClass: (_5 = __VLS_ctx.context) === null || _5 === void 0 ? void 0 : _5.iconSuffix,
        onClick: (_6 = __VLS_ctx.context) === null || _6 === void 0 ? void 0 : _6.onIconSuffixClicked,
        position: "suffix",
    }));
    var __VLS_23 = __VLS_22.apply(void 0, __spreadArray([{
            iconClass: (_7 = __VLS_ctx.context) === null || _7 === void 0 ? void 0 : _7.iconSuffix,
            onClick: (_8 = __VLS_ctx.context) === null || _8 === void 0 ? void 0 : _8.onIconSuffixClicked,
            position: "suffix",
        }], __VLS_functionalComponentArgsRest(__VLS_22), false));
}
// @ts-ignore
[context, context, context, context, context, context, context, reference, title, hasSuffix, hasSuffixIcon,];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    props: {
        context: {
            type: Object,
            required: true,
        },
    },
});
exports.default = {};
