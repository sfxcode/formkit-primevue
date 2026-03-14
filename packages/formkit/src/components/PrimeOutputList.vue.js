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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
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
var listStyle = (0, vue_1.computed)(function () {
    var _a;
    return ((_a = props.context) === null || _a === void 0 ? void 0 : _a.listStyle) || "span";
});
var _2 = (0, index_ts_1.useFormKitSection)(props.context), hasPrefix = _2.hasPrefix, hasPrefixIcon = _2.hasPrefixIcon, hasSuffix = _2.hasSuffix, hasSuffixIcon = _2.hasSuffixIcon;
var getListValues = (0, vue_1.computed)(function () {
    var _a, _b;
    var values = Array.isArray((_a = props.context) === null || _a === void 0 ? void 0 : _a._value) ? props.context._value : [];
    if (typeof ((_b = props.context) === null || _b === void 0 ? void 0 : _b.convertValue) === "function") {
        return props.context.convertValue(__spreadArray([], values, true));
    }
    return values;
});
var dividerClass = (0, vue_1.computed)(function () { var _a; return ((_a = props.context) === null || _a === void 0 ? void 0 : _a.dividerClass) || ""; });
var itemClass = (0, vue_1.computed)(function () { var _a; return ((_a = props.context) === null || _a === void 0 ? void 0 : _a.itemClass) || ""; });
var listItemsClass = (0, vue_1.computed)(function () { var _a, _b; return ((_b = (_a = props.context) === null || _a === void 0 ? void 0 : _a.attrs) === null || _b === void 0 ? void 0 : _b.class) || ""; });
var __VLS_ctx = __assign(__assign(__assign(__assign({}, {}), {}), {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "p-formkit p-output-list" }));
/** @type {__VLS_StyleScopedClasses['p-formkit']} */ ;
/** @type {__VLS_StyleScopedClasses['p-output-list']} */ ;
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
if (__VLS_ctx.hasPrefix && __VLS_ctx.listStyle === 'span') {
    var __VLS_5 = FormKitPrefix_vue_1.default;
    // @ts-ignore
    var __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
        prefix: (_e = __VLS_ctx.context) === null || _e === void 0 ? void 0 : _e.prefix,
    }));
    var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([{
            prefix: (_f = __VLS_ctx.context) === null || _f === void 0 ? void 0 : _f.prefix,
        }], __VLS_functionalComponentArgsRest(__VLS_6), false));
}
if (__VLS_ctx.listStyle === 'span') {
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign(__assign(__assign({ id: ((_g = __VLS_ctx.context) === null || _g === void 0 ? void 0 : _g.id) }, { style: ((_j = (_h = __VLS_ctx.context) === null || _h === void 0 ? void 0 : _h.attrs) === null || _j === void 0 ? void 0 : _j.style) }), { class: "p-output-list-items" }), { class: (__VLS_ctx.listItemsClass) }));
    /** @type {__VLS_StyleScopedClasses['p-output-list-items']} */ ;
    for (var _i = 0, _3 = __VLS_vFor((__VLS_ctx.getListValues)); _i < _3.length; _i++) {
        var _4 = _3[_i], value = _4[0], index = _4[1];
        (index);
        if (index !== 0) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign({ class: "p-output-list-divider" }, { class: (__VLS_ctx.dividerClass) }));
            /** @type {__VLS_StyleScopedClasses['p-output-list-divider']} */ ;
            ((_l = (_k = __VLS_ctx.context) === null || _k === void 0 ? void 0 : _k.divider) !== null && _l !== void 0 ? _l : ", ");
        }
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign({ class: "p-output-list-item" }, { class: (__VLS_ctx.itemClass) }));
        /** @type {__VLS_StyleScopedClasses['p-output-list-item']} */ ;
        (value);
        // @ts-ignore
        [hasPrefixIcon, context, context, context, context, context, context, hasPrefix, listStyle, listStyle, listItemsClass, getListValues, dividerClass, itemClass,];
    }
}
if (__VLS_ctx.listStyle === 'div') {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign(__assign(__assign({ id: ((_m = __VLS_ctx.context) === null || _m === void 0 ? void 0 : _m.id) }, { style: ((_p = (_o = __VLS_ctx.context) === null || _o === void 0 ? void 0 : _o.attrs) === null || _p === void 0 ? void 0 : _p.style) }), { class: "p-output-list-items" }), { class: (__VLS_ctx.listItemsClass) }));
    /** @type {__VLS_StyleScopedClasses['p-output-list-items']} */ ;
    for (var _5 = 0, _6 = __VLS_vFor((__VLS_ctx.getListValues)); _5 < _6.length; _5++) {
        var _7 = _6[_5], value = _7[0], index = _7[1];
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign(__assign({ class: "p-output-list-item" }, { class: (__VLS_ctx.itemClass) }), { key: (index) }));
        /** @type {__VLS_StyleScopedClasses['p-output-list-item']} */ ;
        (value);
        // @ts-ignore
        [context, context, listStyle, listItemsClass, getListValues, itemClass,];
    }
}
if (__VLS_ctx.listStyle === 'ul') {
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)(__assign(__assign(__assign({ id: ((_q = __VLS_ctx.context) === null || _q === void 0 ? void 0 : _q.id) }, { style: ((_s = (_r = __VLS_ctx.context) === null || _r === void 0 ? void 0 : _r.attrs) === null || _s === void 0 ? void 0 : _s.style) }), { class: "p-output-list-items" }), { class: (__VLS_ctx.listItemsClass) }));
    /** @type {__VLS_StyleScopedClasses['p-output-list-items']} */ ;
    for (var _8 = 0, _9 = __VLS_vFor((__VLS_ctx.getListValues)); _8 < _9.length; _8++) {
        var _10 = _9[_8], value = _10[0], index = _10[1];
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            key: (index),
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign({ class: "p-output-list-item" }, { class: (__VLS_ctx.itemClass) }));
        /** @type {__VLS_StyleScopedClasses['p-output-list-item']} */ ;
        (value);
        // @ts-ignore
        [context, context, listStyle, listItemsClass, getListValues, itemClass,];
    }
}
if (__VLS_ctx.listStyle === 'ol') {
    __VLS_asFunctionalElement1(__VLS_intrinsics.ol, __VLS_intrinsics.ol)(__assign(__assign(__assign({ id: ((_t = __VLS_ctx.context) === null || _t === void 0 ? void 0 : _t.id) }, { style: ((_v = (_u = __VLS_ctx.context) === null || _u === void 0 ? void 0 : _u.attrs) === null || _v === void 0 ? void 0 : _v.style) }), { class: "p-output-list-items" }), { class: (__VLS_ctx.listItemsClass) }));
    /** @type {__VLS_StyleScopedClasses['p-output-list-items']} */ ;
    for (var _11 = 0, _12 = __VLS_vFor((__VLS_ctx.getListValues)); _11 < _12.length; _11++) {
        var _13 = _12[_11], value = _13[0], index = _13[1];
        __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            key: (index),
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign({ class: "p-output-list-item" }, { class: (__VLS_ctx.itemClass) }));
        /** @type {__VLS_StyleScopedClasses['p-output-list-item']} */ ;
        (value);
        // @ts-ignore
        [context, context, listStyle, listItemsClass, getListValues, itemClass,];
    }
}
if (__VLS_ctx.hasSuffix && __VLS_ctx.listStyle === 'span') {
    var __VLS_10 = FormKitSuffix_vue_1.default;
    // @ts-ignore
    var __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
        suffix: (_w = __VLS_ctx.context) === null || _w === void 0 ? void 0 : _w.suffix,
    }));
    var __VLS_12 = __VLS_11.apply(void 0, __spreadArray([{
            suffix: (_x = __VLS_ctx.context) === null || _x === void 0 ? void 0 : _x.suffix,
        }], __VLS_functionalComponentArgsRest(__VLS_11), false));
}
if (__VLS_ctx.hasSuffixIcon) {
    var __VLS_15 = FormKitIcon_vue_1.default;
    // @ts-ignore
    var __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({
        iconClass: (_y = __VLS_ctx.context) === null || _y === void 0 ? void 0 : _y.iconSuffix,
        onClick: (_z = __VLS_ctx.context) === null || _z === void 0 ? void 0 : _z.onIconSuffixClicked,
        position: "suffix",
    }));
    var __VLS_17 = __VLS_16.apply(void 0, __spreadArray([{
            iconClass: (_0 = __VLS_ctx.context) === null || _0 === void 0 ? void 0 : _0.iconSuffix,
            onClick: (_1 = __VLS_ctx.context) === null || _1 === void 0 ? void 0 : _1.onIconSuffixClicked,
            position: "suffix",
        }], __VLS_functionalComponentArgsRest(__VLS_16), false));
}
// @ts-ignore
[context, context, context, listStyle, hasSuffix, hasSuffixIcon,];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    props: {
        context: {
            type: Object,
            required: true,
        },
    },
});
exports.default = {};
