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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _60, _61, _62, _63, _64, _65, _66, _67, _68, _69, _70, _71, _72, _73, _74, _75, _76, _77, _78, _79, _80, _81, _82, _83, _84, _85, _86, _87, _88, _89, _90, _91, _92, _93, _94, _95, _96, _97, _98, _99, _100, _101, _102, _103, _104, _105, _106, _107, _108, _109, _110, _111, _112, _113, _114, _115, _116, _117, _118, _119, _120, _121, _122, _123, _124, _125, _126, _127, _128, _129, _130, _131, _132, _133, _134, _135, _136, _137, _138;
Object.defineProperty(exports, "__esModule", { value: true });
var index_ts_1 = require("../composables/index.ts");
var props = defineProps({
    context: {
        type: Object,
        required: true,
    },
});
var _139 = (0, index_ts_1.useFormKitInput)(props.context), validSlotNames = _139.validSlotNames, unstyled = _139.unstyled, isInvalid = _139.isInvalid, handleInput = _139.handleInput, modelValue = _139.modelValue;
function handleBlur(e) {
    var _a;
    (_a = props.context) === null || _a === void 0 ? void 0 : _a.handlers.blur(e.originalEvent);
}
function handleClearClick() {
    var _a;
    (_a = props.context) === null || _a === void 0 ? void 0 : _a.node.input(null);
}
function handleSelect(e) {
    var _a, _b, _c, _d;
    if (((_a = props.context) === null || _a === void 0 ? void 0 : _a.selectionMode) === "range" || ((_b = props.context) === null || _b === void 0 ? void 0 : _b.selectionMode) === "multiple") {
        (_c = props.context) === null || _c === void 0 ? void 0 : _c.node.input(props.context._value);
    }
    else {
        (_d = props.context) === null || _d === void 0 ? void 0 : _d.node.input(e);
    }
}
var __VLS_ctx = __assign(__assign(__assign(__assign({}, {}), {}), {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "p-formkit" }));
/** @type {__VLS_StyleScopedClasses['p-formkit']} */ ;
var __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.DatePicker | typeof __VLS_components.DatePicker} */
DatePicker;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0(__assign(__assign(__assign(__assign(__assign(__assign({ 'onDateSelect': {} }, { 'onBlur': {} }), { 'onClearClick': {} }), { 'onValueChange': {} }), { modelValue: (__VLS_ctx.modelValue) }), ((_a = __VLS_ctx.context) === null || _a === void 0 ? void 0 : _a.attrs)), { inputId: (__VLS_ctx.context.id), disabled: (!!((_b = __VLS_ctx.context) === null || _b === void 0 ? void 0 : _b.disabled)), readonly: ((_d = (_c = __VLS_ctx.context) === null || _c === void 0 ? void 0 : _c.attrs.readonly) !== null && _d !== void 0 ? _d : false), inputStyle: ((_e = __VLS_ctx.context) === null || _e === void 0 ? void 0 : _e.attrs.style), inputClass: ((_g = (_f = __VLS_ctx.context) === null || _f === void 0 ? void 0 : _f.attrs) === null || _g === void 0 ? void 0 : _g.class), invalid: (__VLS_ctx.isInvalid), tabindex: ((_h = __VLS_ctx.context) === null || _h === void 0 ? void 0 : _h.attrs.tabindex), 'aria-label': ((_j = __VLS_ctx.context) === null || _j === void 0 ? void 0 : _j.attrs.ariaLabel), 'aria-labelledby': ((_k = __VLS_ctx.context) === null || _k === void 0 ? void 0 : _k.attrs.ariaLabelledby), size: ((_m = (_l = __VLS_ctx.context) === null || _l === void 0 ? void 0 : _l.size) !== null && _m !== void 0 ? _m : undefined), dateFormat: ((_o = __VLS_ctx.context) === null || _o === void 0 ? void 0 : _o.dateFormat), placeholder: ((_p = __VLS_ctx.context) === null || _p === void 0 ? void 0 : _p.placeholder), selectionMode: ((_r = (_q = __VLS_ctx.context) === null || _q === void 0 ? void 0 : _q.selectionMode) !== null && _r !== void 0 ? _r : 'single'), inline: ((_t = (_s = __VLS_ctx.context) === null || _s === void 0 ? void 0 : _s.inline) !== null && _t !== void 0 ? _t : false), showOtherMonths: ((_v = (_u = __VLS_ctx.context) === null || _u === void 0 ? void 0 : _u.showOtherMonths) !== null && _v !== void 0 ? _v : true), selectOtherMonths: ((_x = (_w = __VLS_ctx.context) === null || _w === void 0 ? void 0 : _w.selectOtherMonths) !== null && _x !== void 0 ? _x : false), icon: ((_y = __VLS_ctx.context) === null || _y === void 0 ? void 0 : _y.icon), showIcon: (__VLS_ctx.context.showIcon), previousIcon: ((_z = __VLS_ctx.context) === null || _z === void 0 ? void 0 : _z.previousIcon), nextIcon: ((_0 = __VLS_ctx.context) === null || _0 === void 0 ? void 0 : _0.nextIcon), incrementIcon: ((_1 = __VLS_ctx.context) === null || _1 === void 0 ? void 0 : _1.incrementIcon), decrementIcon: ((_2 = __VLS_ctx.context) === null || _2 === void 0 ? void 0 : _2.decrementIcon), numberOfMonths: ((_4 = (_3 = __VLS_ctx.context) === null || _3 === void 0 ? void 0 : _3.numberOfMonths) !== null && _4 !== void 0 ? _4 : 1), responsiveOptions: ((_5 = __VLS_ctx.context) === null || _5 === void 0 ? void 0 : _5.responsiveOptions), view: ((_7 = (_6 = __VLS_ctx.context) === null || _6 === void 0 ? void 0 : _6.view) !== null && _7 !== void 0 ? _7 : 'date'), touchUI: ((_9 = (_8 = __VLS_ctx.context) === null || _8 === void 0 ? void 0 : _8.touchUI) !== null && _9 !== void 0 ? _9 : false), minDate: ((_10 = __VLS_ctx.context) === null || _10 === void 0 ? void 0 : _10.minDate), maxDate: ((_11 = __VLS_ctx.context) === null || _11 === void 0 ? void 0 : _11.maxDate), disabledDates: ((_12 = __VLS_ctx.context) === null || _12 === void 0 ? void 0 : _12.disabledDates), disabledDays: ((_13 = __VLS_ctx.context) === null || _13 === void 0 ? void 0 : _13.disabledDays), maxDateCount: ((_14 = __VLS_ctx.context) === null || _14 === void 0 ? void 0 : _14.maxDateCount), showOnFocus: ((_16 = (_15 = __VLS_ctx.context) === null || _15 === void 0 ? void 0 : _15.showOnFocus) !== null && _16 !== void 0 ? _16 : true), autoZIndex: ((_18 = (_17 = __VLS_ctx.context) === null || _17 === void 0 ? void 0 : _17.autoZIndex) !== null && _18 !== void 0 ? _18 : true), baseZIndex: ((_20 = (_19 = __VLS_ctx.context) === null || _19 === void 0 ? void 0 : _19.baseZIndex) !== null && _20 !== void 0 ? _20 : 0), showButtonBar: ((_22 = (_21 = __VLS_ctx.context) === null || _21 === void 0 ? void 0 : _21.showButtonBar) !== null && _22 !== void 0 ? _22 : false), showTime: ((_24 = (_23 = __VLS_ctx.context) === null || _23 === void 0 ? void 0 : _23.showTime) !== null && _24 !== void 0 ? _24 : false), timeOnly: ((_26 = (_25 = __VLS_ctx.context) === null || _25 === void 0 ? void 0 : _25.timeOnly) !== null && _26 !== void 0 ? _26 : false), shortYearCutoff: ((_28 = (_27 = __VLS_ctx.context) === null || _27 === void 0 ? void 0 : _27.shortYearCutoff) !== null && _28 !== void 0 ? _28 : '+10'), hourFormat: ((_30 = (_29 = __VLS_ctx.context) === null || _29 === void 0 ? void 0 : _29.hourFormat) !== null && _30 !== void 0 ? _30 : '24'), stepHour: ((_32 = (_31 = __VLS_ctx.context) === null || _31 === void 0 ? void 0 : _31.stepHour) !== null && _32 !== void 0 ? _32 : 1), stepMinute: ((_34 = (_33 = __VLS_ctx.context) === null || _33 === void 0 ? void 0 : _33.stepMinute) !== null && _34 !== void 0 ? _34 : 1), stepSecond: ((_36 = (_35 = __VLS_ctx.context) === null || _35 === void 0 ? void 0 : _35.stepSecond) !== null && _36 !== void 0 ? _36 : 1), showSeconds: ((_38 = (_37 = __VLS_ctx.context) === null || _37 === void 0 ? void 0 : _37.showSeconds) !== null && _38 !== void 0 ? _38 : false), hideOnDateTimeSelect: ((_40 = (_39 = __VLS_ctx.context) === null || _39 === void 0 ? void 0 : _39.hideOnDateTimeSelect) !== null && _40 !== void 0 ? _40 : false), hideOnRangeSelection: ((_42 = (_41 = __VLS_ctx.context) === null || _41 === void 0 ? void 0 : _41.hideOnRangeSelection) !== null && _42 !== void 0 ? _42 : false), timeSeparator: ((_44 = (_43 = __VLS_ctx.context) === null || _43 === void 0 ? void 0 : _43.timeSeparator) !== null && _44 !== void 0 ? _44 : ':'), showWeek: ((_46 = (_45 = __VLS_ctx.context) === null || _45 === void 0 ? void 0 : _45.showWeek) !== null && _46 !== void 0 ? _46 : false), manualInput: ((_48 = (_47 = __VLS_ctx.context) === null || _47 === void 0 ? void 0 : _47.manualInput) !== null && _48 !== void 0 ? _48 : true), appendTo: ((_50 = (_49 = __VLS_ctx.context) === null || _49 === void 0 ? void 0 : _49.appendTo) !== null && _50 !== void 0 ? _50 : 'body'), panelStyle: ((_51 = __VLS_ctx.context) === null || _51 === void 0 ? void 0 : _51.panelStyle), panelClass: ((_52 = __VLS_ctx.context) === null || _52 === void 0 ? void 0 : _52.panelClass), pt: ((_53 = __VLS_ctx.context) === null || _53 === void 0 ? void 0 : _53.pt), ptOptions: ((_54 = __VLS_ctx.context) === null || _54 === void 0 ? void 0 : _54.ptOptions), unstyled: (__VLS_ctx.unstyled), updateModelType: ((_56 = (_55 = __VLS_ctx.context) === null || _55 === void 0 ? void 0 : _55.updateModelType) !== null && _56 !== void 0 ? _56 : 'date') })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign(__assign(__assign(__assign(__assign({ 'onDateSelect': {} }, { 'onBlur': {} }), { 'onClearClick': {} }), { 'onValueChange': {} }), { modelValue: (__VLS_ctx.modelValue) }), ((_57 = __VLS_ctx.context) === null || _57 === void 0 ? void 0 : _57.attrs)), { inputId: (__VLS_ctx.context.id), disabled: (!!((_58 = __VLS_ctx.context) === null || _58 === void 0 ? void 0 : _58.disabled)), readonly: ((_60 = (_59 = __VLS_ctx.context) === null || _59 === void 0 ? void 0 : _59.attrs.readonly) !== null && _60 !== void 0 ? _60 : false), inputStyle: ((_61 = __VLS_ctx.context) === null || _61 === void 0 ? void 0 : _61.attrs.style), inputClass: ((_63 = (_62 = __VLS_ctx.context) === null || _62 === void 0 ? void 0 : _62.attrs) === null || _63 === void 0 ? void 0 : _63.class), invalid: (__VLS_ctx.isInvalid), tabindex: ((_64 = __VLS_ctx.context) === null || _64 === void 0 ? void 0 : _64.attrs.tabindex), 'aria-label': ((_65 = __VLS_ctx.context) === null || _65 === void 0 ? void 0 : _65.attrs.ariaLabel), 'aria-labelledby': ((_66 = __VLS_ctx.context) === null || _66 === void 0 ? void 0 : _66.attrs.ariaLabelledby), size: ((_68 = (_67 = __VLS_ctx.context) === null || _67 === void 0 ? void 0 : _67.size) !== null && _68 !== void 0 ? _68 : undefined), dateFormat: ((_69 = __VLS_ctx.context) === null || _69 === void 0 ? void 0 : _69.dateFormat), placeholder: ((_70 = __VLS_ctx.context) === null || _70 === void 0 ? void 0 : _70.placeholder), selectionMode: ((_72 = (_71 = __VLS_ctx.context) === null || _71 === void 0 ? void 0 : _71.selectionMode) !== null && _72 !== void 0 ? _72 : 'single'), inline: ((_74 = (_73 = __VLS_ctx.context) === null || _73 === void 0 ? void 0 : _73.inline) !== null && _74 !== void 0 ? _74 : false), showOtherMonths: ((_76 = (_75 = __VLS_ctx.context) === null || _75 === void 0 ? void 0 : _75.showOtherMonths) !== null && _76 !== void 0 ? _76 : true), selectOtherMonths: ((_78 = (_77 = __VLS_ctx.context) === null || _77 === void 0 ? void 0 : _77.selectOtherMonths) !== null && _78 !== void 0 ? _78 : false), icon: ((_79 = __VLS_ctx.context) === null || _79 === void 0 ? void 0 : _79.icon), showIcon: (__VLS_ctx.context.showIcon), previousIcon: ((_80 = __VLS_ctx.context) === null || _80 === void 0 ? void 0 : _80.previousIcon), nextIcon: ((_81 = __VLS_ctx.context) === null || _81 === void 0 ? void 0 : _81.nextIcon), incrementIcon: ((_82 = __VLS_ctx.context) === null || _82 === void 0 ? void 0 : _82.incrementIcon), decrementIcon: ((_83 = __VLS_ctx.context) === null || _83 === void 0 ? void 0 : _83.decrementIcon), numberOfMonths: ((_85 = (_84 = __VLS_ctx.context) === null || _84 === void 0 ? void 0 : _84.numberOfMonths) !== null && _85 !== void 0 ? _85 : 1), responsiveOptions: ((_86 = __VLS_ctx.context) === null || _86 === void 0 ? void 0 : _86.responsiveOptions), view: ((_88 = (_87 = __VLS_ctx.context) === null || _87 === void 0 ? void 0 : _87.view) !== null && _88 !== void 0 ? _88 : 'date'), touchUI: ((_90 = (_89 = __VLS_ctx.context) === null || _89 === void 0 ? void 0 : _89.touchUI) !== null && _90 !== void 0 ? _90 : false), minDate: ((_91 = __VLS_ctx.context) === null || _91 === void 0 ? void 0 : _91.minDate), maxDate: ((_92 = __VLS_ctx.context) === null || _92 === void 0 ? void 0 : _92.maxDate), disabledDates: ((_93 = __VLS_ctx.context) === null || _93 === void 0 ? void 0 : _93.disabledDates), disabledDays: ((_94 = __VLS_ctx.context) === null || _94 === void 0 ? void 0 : _94.disabledDays), maxDateCount: ((_95 = __VLS_ctx.context) === null || _95 === void 0 ? void 0 : _95.maxDateCount), showOnFocus: ((_97 = (_96 = __VLS_ctx.context) === null || _96 === void 0 ? void 0 : _96.showOnFocus) !== null && _97 !== void 0 ? _97 : true), autoZIndex: ((_99 = (_98 = __VLS_ctx.context) === null || _98 === void 0 ? void 0 : _98.autoZIndex) !== null && _99 !== void 0 ? _99 : true), baseZIndex: ((_101 = (_100 = __VLS_ctx.context) === null || _100 === void 0 ? void 0 : _100.baseZIndex) !== null && _101 !== void 0 ? _101 : 0), showButtonBar: ((_103 = (_102 = __VLS_ctx.context) === null || _102 === void 0 ? void 0 : _102.showButtonBar) !== null && _103 !== void 0 ? _103 : false), showTime: ((_105 = (_104 = __VLS_ctx.context) === null || _104 === void 0 ? void 0 : _104.showTime) !== null && _105 !== void 0 ? _105 : false), timeOnly: ((_107 = (_106 = __VLS_ctx.context) === null || _106 === void 0 ? void 0 : _106.timeOnly) !== null && _107 !== void 0 ? _107 : false), shortYearCutoff: ((_109 = (_108 = __VLS_ctx.context) === null || _108 === void 0 ? void 0 : _108.shortYearCutoff) !== null && _109 !== void 0 ? _109 : '+10'), hourFormat: ((_111 = (_110 = __VLS_ctx.context) === null || _110 === void 0 ? void 0 : _110.hourFormat) !== null && _111 !== void 0 ? _111 : '24'), stepHour: ((_113 = (_112 = __VLS_ctx.context) === null || _112 === void 0 ? void 0 : _112.stepHour) !== null && _113 !== void 0 ? _113 : 1), stepMinute: ((_115 = (_114 = __VLS_ctx.context) === null || _114 === void 0 ? void 0 : _114.stepMinute) !== null && _115 !== void 0 ? _115 : 1), stepSecond: ((_117 = (_116 = __VLS_ctx.context) === null || _116 === void 0 ? void 0 : _116.stepSecond) !== null && _117 !== void 0 ? _117 : 1), showSeconds: ((_119 = (_118 = __VLS_ctx.context) === null || _118 === void 0 ? void 0 : _118.showSeconds) !== null && _119 !== void 0 ? _119 : false), hideOnDateTimeSelect: ((_121 = (_120 = __VLS_ctx.context) === null || _120 === void 0 ? void 0 : _120.hideOnDateTimeSelect) !== null && _121 !== void 0 ? _121 : false), hideOnRangeSelection: ((_123 = (_122 = __VLS_ctx.context) === null || _122 === void 0 ? void 0 : _122.hideOnRangeSelection) !== null && _123 !== void 0 ? _123 : false), timeSeparator: ((_125 = (_124 = __VLS_ctx.context) === null || _124 === void 0 ? void 0 : _124.timeSeparator) !== null && _125 !== void 0 ? _125 : ':'), showWeek: ((_127 = (_126 = __VLS_ctx.context) === null || _126 === void 0 ? void 0 : _126.showWeek) !== null && _127 !== void 0 ? _127 : false), manualInput: ((_129 = (_128 = __VLS_ctx.context) === null || _128 === void 0 ? void 0 : _128.manualInput) !== null && _129 !== void 0 ? _129 : true), appendTo: ((_131 = (_130 = __VLS_ctx.context) === null || _130 === void 0 ? void 0 : _130.appendTo) !== null && _131 !== void 0 ? _131 : 'body'), panelStyle: ((_132 = __VLS_ctx.context) === null || _132 === void 0 ? void 0 : _132.panelStyle), panelClass: ((_133 = __VLS_ctx.context) === null || _133 === void 0 ? void 0 : _133.panelClass), pt: ((_134 = __VLS_ctx.context) === null || _134 === void 0 ? void 0 : _134.pt), ptOptions: ((_135 = __VLS_ctx.context) === null || _135 === void 0 ? void 0 : _135.ptOptions), unstyled: (__VLS_ctx.unstyled), updateModelType: ((_137 = (_136 = __VLS_ctx.context) === null || _136 === void 0 ? void 0 : _136.updateModelType) !== null && _137 !== void 0 ? _137 : 'date') })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_5;
var __VLS_6 = ({ dateSelect: {} },
    { onDateSelect: (__VLS_ctx.handleSelect) });
var __VLS_7 = ({ blur: {} },
    { onBlur: (__VLS_ctx.handleBlur) });
var __VLS_8 = ({ clearClick: {} },
    { onClearClick: (__VLS_ctx.handleClearClick) });
var __VLS_9 = ({ valueChange: {} },
    { onValueChange: (__VLS_ctx.handleInput) });
var __VLS_10 = __VLS_3.slots.default;
for (var _i = 0, _140 = __VLS_vFor((__VLS_ctx.validSlotNames)); _i < _140.length; _i++) {
    var slotName = _140[_i][0];
    {
        var _141 = __VLS_3.slots, _142 = __VLS_tryAsConstant(slotName), __VLS_11 = _141[_142];
        var slotProps = __VLS_vSlot(__VLS_11)[0];
        var __VLS_12 = ((_138 = __VLS_ctx.context) === null || _138 === void 0 ? void 0 : _138.slots[slotName]);
        // @ts-ignore
        var __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12(__assign({}, (__assign(__assign({}, __VLS_ctx.context), slotProps)))));
        var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([__assign({}, (__assign(__assign({}, __VLS_ctx.context), slotProps)))], __VLS_functionalComponentArgsRest(__VLS_13), false));
        // @ts-ignore
        [modelValue, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, context, isInvalid, unstyled, handleSelect, handleBlur, handleClearClick, handleInput, validSlotNames,];
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
