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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var index_ts_1 = require("../composables/index.ts");
var props = defineProps({
    context: {
        type: Object,
        required: true,
    },
});
var _25 = (0, index_ts_1.useFormKitInput)(props.context), validSlotNames = _25.validSlotNames, unstyled = _25.unstyled, isInvalid = _25.isInvalid, handleInput = _25.handleInput, handleBlur = _25.handleBlur, modelValue = _25.modelValue;
var suggestions = (0, vue_1.ref)(["", {}]);
suggestions.value = [];
var loading = (0, vue_1.ref)(false);
/**
 * Searches for suggestions based on the input query.
 */
function search(event) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, error_1;
        var _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    if (!(((_b = props.context) === null || _b === void 0 ? void 0 : _b.options) && ((_c = props.context) === null || _c === void 0 ? void 0 : _c.optionLabel))) return [3 /*break*/, 1];
                    suggestions.value = props.context.options.filter(function (option) {
                        return option["".concat(props.context.optionLabel)]
                            .toString()
                            .toLowerCase()
                            .includes(event.query.toLowerCase());
                    });
                    return [3 /*break*/, 6];
                case 1:
                    loading.value = true;
                    _e.label = 2;
                case 2:
                    _e.trys.push([2, 4, 5, 6]);
                    _a = suggestions;
                    return [4 /*yield*/, ((_d = props.context) === null || _d === void 0 ? void 0 : _d.attrs.complete(event.query))];
                case 3:
                    _a.value = _e.sent();
                    return [3 /*break*/, 6];
                case 4:
                    error_1 = _e.sent();
                    console.error("Error fetching suggestions:", error_1);
                    suggestions.value = [];
                    return [3 /*break*/, 6];
                case 5:
                    loading.value = false;
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    });
}
/**
 * Handles paste event to transform a string separated by any of the provided separators into multiple items.
 */
function handlePaste(event) {
    var _a, _b;
    if (!((_a = props.context) === null || _a === void 0 ? void 0 : _a.multiple))
        return;
    var clipboardData = event.clipboardData;
    if (!clipboardData)
        return;
    var pastedText = clipboardData.getData("text");
    var separators = Array.isArray((_b = props.context) === null || _b === void 0 ? void 0 : _b.separators) && props.context.separators.length > 0
        ? props.context.separators
        : [","];
    var regex = new RegExp("[".concat(separators.map(function (s) { return s.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"); }).join(""), "]"));
    // If separators are provided, split the pasted text by them
    if (pastedText && regex.test(pastedText)) {
        event.preventDefault();
        var items = pastedText
            .split(regex)
            .map(function (item) { return item.trim(); })
            .filter(function (item) { return item.length > 0; });
        // Use a local ref, never mutate context._value directly
        if (Array.isArray(modelValue.value)) {
            modelValue.value = __spreadArray(__spreadArray([], modelValue.value, true), items, true);
        }
        else {
            modelValue.value = items;
        }
    }
    // If no separators, just set the value directly
    else if (pastedText) {
        event.preventDefault();
        // If no separators, just set the value directly
        if (Array.isArray(modelValue.value)) {
            modelValue.value = __spreadArray(__spreadArray([], modelValue.value, true), [pastedText.trim()], false);
        }
        else {
            modelValue.value = [pastedText.trim()];
        }
    }
}
var __VLS_ctx = __assign(__assign(__assign(__assign({}, {}), {}), {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "p-formkit" }));
/** @type {__VLS_StyleScopedClasses['p-formkit']} */ ;
var __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.AutoComplete | typeof __VLS_components.AutoComplete} */
AutoComplete;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ 'onKeydown': {} }, { 'onComplete': {} }), { 'onChange': {} }), { 'onBlur': {} }), { 'onPaste': {} }), { id: (__VLS_ctx.context.id), modelValue: (__VLS_ctx.modelValue) }), ((_a = __VLS_ctx.context) === null || _a === void 0 ? void 0 : _a.attrs)), { disabled: (!!((_b = __VLS_ctx.context) === null || _b === void 0 ? void 0 : _b.disabled)) }), { class: ((_d = (_c = __VLS_ctx.context) === null || _c === void 0 ? void 0 : _c.attrs) === null || _d === void 0 ? void 0 : _d.class) }), { invalid: (__VLS_ctx.isInvalid), tabindex: ((_e = __VLS_ctx.context) === null || _e === void 0 ? void 0 : _e.attrs.tabindex), 'aria-label': ((_f = __VLS_ctx.context) === null || _f === void 0 ? void 0 : _f.attrs.ariaLabel), 'aria-labelledby': ((_g = __VLS_ctx.context) === null || _g === void 0 ? void 0 : _g.attrs.ariaLabelledby), size: ((_j = (_h = __VLS_ctx.context) === null || _h === void 0 ? void 0 : _h.size) !== null && _j !== void 0 ? _j : undefined), suggestions: (__VLS_ctx.suggestions), optionLabel: ((_k = __VLS_ctx.context) === null || _k === void 0 ? void 0 : _k.optionLabel), dropdown: ((_m = (_l = __VLS_ctx.context) === null || _l === void 0 ? void 0 : _l.dropdown) !== null && _m !== void 0 ? _m : false), multiple: ((_p = (_o = __VLS_ctx.context) === null || _o === void 0 ? void 0 : _o.multiple) !== null && _p !== void 0 ? _p : false), typeahead: ((_r = (_q = __VLS_ctx.context) === null || _q === void 0 ? void 0 : _q.typeahead) !== null && _r !== void 0 ? _r : true), minLength: ((_t = (_s = __VLS_ctx.context) === null || _s === void 0 ? void 0 : _s.minLength) !== null && _t !== void 0 ? _t : undefined), placeholder: ((_v = (_u = __VLS_ctx.context) === null || _u === void 0 ? void 0 : _u.placeholder) !== null && _v !== void 0 ? _v : undefined), fluid: ((_x = (_w = __VLS_ctx.context) === null || _w === void 0 ? void 0 : _w.fluid) !== null && _x !== void 0 ? _x : undefined), pt: ((_y = __VLS_ctx.context) === null || _y === void 0 ? void 0 : _y.pt), ptOptions: ((_z = __VLS_ctx.context) === null || _z === void 0 ? void 0 : _z.ptOptions), unstyled: (__VLS_ctx.unstyled), loading: (__VLS_ctx.loading) })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ 'onKeydown': {} }, { 'onComplete': {} }), { 'onChange': {} }), { 'onBlur': {} }), { 'onPaste': {} }), { id: (__VLS_ctx.context.id), modelValue: (__VLS_ctx.modelValue) }), ((_0 = __VLS_ctx.context) === null || _0 === void 0 ? void 0 : _0.attrs)), { disabled: (!!((_1 = __VLS_ctx.context) === null || _1 === void 0 ? void 0 : _1.disabled)) }), { class: ((_3 = (_2 = __VLS_ctx.context) === null || _2 === void 0 ? void 0 : _2.attrs) === null || _3 === void 0 ? void 0 : _3.class) }), { invalid: (__VLS_ctx.isInvalid), tabindex: ((_4 = __VLS_ctx.context) === null || _4 === void 0 ? void 0 : _4.attrs.tabindex), 'aria-label': ((_5 = __VLS_ctx.context) === null || _5 === void 0 ? void 0 : _5.attrs.ariaLabel), 'aria-labelledby': ((_6 = __VLS_ctx.context) === null || _6 === void 0 ? void 0 : _6.attrs.ariaLabelledby), size: ((_8 = (_7 = __VLS_ctx.context) === null || _7 === void 0 ? void 0 : _7.size) !== null && _8 !== void 0 ? _8 : undefined), suggestions: (__VLS_ctx.suggestions), optionLabel: ((_9 = __VLS_ctx.context) === null || _9 === void 0 ? void 0 : _9.optionLabel), dropdown: ((_11 = (_10 = __VLS_ctx.context) === null || _10 === void 0 ? void 0 : _10.dropdown) !== null && _11 !== void 0 ? _11 : false), multiple: ((_13 = (_12 = __VLS_ctx.context) === null || _12 === void 0 ? void 0 : _12.multiple) !== null && _13 !== void 0 ? _13 : false), typeahead: ((_15 = (_14 = __VLS_ctx.context) === null || _14 === void 0 ? void 0 : _14.typeahead) !== null && _15 !== void 0 ? _15 : true), minLength: ((_17 = (_16 = __VLS_ctx.context) === null || _16 === void 0 ? void 0 : _16.minLength) !== null && _17 !== void 0 ? _17 : undefined), placeholder: ((_19 = (_18 = __VLS_ctx.context) === null || _18 === void 0 ? void 0 : _18.placeholder) !== null && _19 !== void 0 ? _19 : undefined), fluid: ((_21 = (_20 = __VLS_ctx.context) === null || _20 === void 0 ? void 0 : _20.fluid) !== null && _21 !== void 0 ? _21 : undefined), pt: ((_22 = __VLS_ctx.context) === null || _22 === void 0 ? void 0 : _22.pt), ptOptions: ((_23 = __VLS_ctx.context) === null || _23 === void 0 ? void 0 : _23.ptOptions), unstyled: (__VLS_ctx.unstyled), loading: (__VLS_ctx.loading) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_5;
var __VLS_6 = ({ keydown: {} },
    { onKeydown: function () { } });
var __VLS_7 = ({ complete: {} },
    { onComplete: (__VLS_ctx.search) });
var __VLS_8 = ({ change: {} },
    { onChange: (__VLS_ctx.handleInput) });
var __VLS_9 = ({ blur: {} },
    { onBlur: (__VLS_ctx.handleBlur) });
var __VLS_10 = ({ paste: {} },
    { onPaste: (__VLS_ctx.handlePaste) });
var __VLS_11 = __VLS_3.slots.default;
for (var _i = 0, _26 = __VLS_vFor((__VLS_ctx.validSlotNames)); _i < _26.length; _i++) {
    var slotName = _26[_i][0];
    {
        var _27 = __VLS_3.slots, _28 = __VLS_tryAsConstant(slotName), __VLS_12 = _27[_28];
        var slotProps = __VLS_vSlot(__VLS_12)[0];
        var __VLS_13 = ((_24 = __VLS_ctx.context) === null || _24 === void 0 ? void 0 : _24.slots[slotName]);
        // @ts-ignore
        var __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13(__assign({}, (__assign(__assign({}, __VLS_ctx.context), slotProps)))));
        var __VLS_15 = __VLS_14.apply(void 0, __spreadArray([__assign({}, (__assign(__assign({}, __VLS_ctx.context), slotProps)))], __VLS_functionalComponentArgsRest(__VLS_14), false));
        // @ts-ignore
        [context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, modelValue, isInvalid, suggestions, unstyled, loading, search, handleInput, handleBlur, handlePaste, validSlotNames,];
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
