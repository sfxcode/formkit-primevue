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
var vue_1 = require("@formkit/vue");
var vue_2 = require("vue");
var FormKitDataDebug_vue_1 = require("./FormKitDataDebug.vue");
var props = defineProps({
    data: {
        type: Object,
        default: null,
    },
    schema: {
        type: Object,
        default: null,
    },
    formClass: {
        type: String,
        default: "",
    },
    debugData: {
        type: Boolean,
        default: false,
    },
    debugSchema: {
        type: Boolean,
        default: false,
    },
});
var formSchema = (0, vue_2.ref)(props.schema);
var formData = defineModel();
if (props.data) {
    formData.value = props.data;
}
var __VLS_modelEmit;
var __VLS_ctx = __assign(__assign(__assign(__assign(__assign({}, {}), {}), {}), {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
var __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.FormKit | typeof __VLS_components.FormKit} */
vue_1.FormKit;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0(__assign(__assign({ modelValue: (__VLS_ctx.formData), actions: (false), formClass: ("p-formkit-data-view ".concat(__VLS_ctx.formClass)) }, { class: "p-formkit-data-view" }), { type: "form" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign({ modelValue: (__VLS_ctx.formData), actions: (false), formClass: ("p-formkit-data-view ".concat(__VLS_ctx.formClass)) }, { class: "p-formkit-data-view" }), { type: "form" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_5 = {};
/** @type {__VLS_StyleScopedClasses['p-formkit-data-view']} */ ;
var __VLS_6 = __VLS_3.slots.default;
if (__VLS_ctx.schema) {
    var __VLS_7 = void 0;
    /** @ts-ignore @type {typeof __VLS_components.FormKitSchema} */
    vue_1.FormKitSchema;
    // @ts-ignore
    var __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
        schema: (__VLS_ctx.formSchema),
        data: (__VLS_ctx.formData),
    }));
    var __VLS_9 = __VLS_8.apply(void 0, __spreadArray([{
            schema: (__VLS_ctx.formSchema),
            data: (__VLS_ctx.formData),
        }], __VLS_functionalComponentArgsRest(__VLS_8), false));
}
var __VLS_12 = {};
if (__VLS_ctx.debugData) {
    var __VLS_14 = FormKitDataDebug_vue_1.default;
    // @ts-ignore
    var __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
        data: (__VLS_ctx.formData),
        header: "Debug Mode - Data",
    }));
    var __VLS_16 = __VLS_15.apply(void 0, __spreadArray([{
            data: (__VLS_ctx.formData),
            header: "Debug Mode - Data",
        }], __VLS_functionalComponentArgsRest(__VLS_15), false));
}
if (__VLS_ctx.debugSchema) {
    var __VLS_19 = FormKitDataDebug_vue_1.default;
    // @ts-ignore
    var __VLS_20 = __VLS_asFunctionalComponent1(__VLS_19, new __VLS_19({
        data: __VLS_ctx.formSchema,
        header: "Debug Mode - Schema",
    }));
    var __VLS_21 = __VLS_20.apply(void 0, __spreadArray([{
            data: __VLS_ctx.formSchema,
            header: "Debug Mode - Schema",
        }], __VLS_functionalComponentArgsRest(__VLS_20), false));
}
// @ts-ignore
[formData, formData, formData, formClass, schema, formSchema, formSchema, debugData, debugSchema,];
var __VLS_3;
// @ts-ignore
var __VLS_13 = __VLS_12;
// @ts-ignore
[];
var __VLS_base = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    __typeEmits: {},
    props: __assign(__assign({}, {}), {
        data: {
            type: Object,
            default: null,
        },
        schema: {
            type: Object,
            default: null,
        },
        formClass: {
            type: String,
            default: "",
        },
        debugData: {
            type: Boolean,
            default: false,
        },
        debugSchema: {
            type: Boolean,
            default: false,
        },
    }),
});
var __VLS_export = {};
exports.default = {};
