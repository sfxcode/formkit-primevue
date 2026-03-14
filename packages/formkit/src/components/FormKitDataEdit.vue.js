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
var core_1 = require("@formkit/core");
var vue_1 = require("@formkit/vue");
var vue_2 = require("vue");
var FormKitDataDebug_vue_1 = require("./FormKitDataDebug.vue");
var props = defineProps({
    id: {
        type: String,
        default: "formkit_form",
    },
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
    actionsClass: {
        type: String,
        default: "",
    },
    submitSeverity: {
        type: String,
        default: "",
    },
    submitClass: {
        type: String,
        default: "",
    },
    submitLabel: {
        type: String,
        default: "Save",
    },
    submitIcon: {
        type: String,
        default: "",
    },
    showReset: {
        type: Boolean,
        default: false,
    },
    resetSeverity: {
        type: String,
        default: "danger",
    },
    resetLabel: {
        type: String,
        default: "Reset",
    },
    resetClass: {
        type: String,
        default: "",
    },
    resetIcon: {
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
var emit = defineEmits(["dataSaved", "onReset"]);
var formData = defineModel();
if (props.data) {
    formData.value = props.data;
}
var formSchema = (0, vue_2.ref)(props.schema);
function handleSave() {
    emit("dataSaved", formData.value);
}
function handleReset() {
    (0, core_1.reset)(props.id);
    emit("onReset");
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
var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0(__assign({ 'onSubmit': {} }, { id: (__VLS_ctx.id), modelValue: (__VLS_ctx.formData), actionsClass: (__VLS_ctx.actionsClass), formClass: ("p-formkit-data-edit ".concat(__VLS_ctx.formClass)), type: "form" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ 'onSubmit': {} }, { id: (__VLS_ctx.id), modelValue: (__VLS_ctx.formData), actionsClass: (__VLS_ctx.actionsClass), formClass: ("p-formkit-data-edit ".concat(__VLS_ctx.formClass)), type: "form" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_5;
var __VLS_6 = ({ submit: {} },
    { onSubmit: (__VLS_ctx.handleSave) });
var __VLS_7 = {};
var __VLS_8 = __VLS_3.slots.default;
{
    var __VLS_9 = __VLS_3.slots.default;
    if (__VLS_ctx.formSchema) {
        var __VLS_10 = void 0;
        /** @ts-ignore @type {typeof __VLS_components.FormKitSchema} */
        vue_1.FormKitSchema;
        // @ts-ignore
        var __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
            schema: (__VLS_ctx.formSchema),
            data: (__VLS_ctx.formData),
        }));
        var __VLS_12 = __VLS_11.apply(void 0, __spreadArray([{
                schema: (__VLS_ctx.formSchema),
                data: (__VLS_ctx.formData),
            }], __VLS_functionalComponentArgsRest(__VLS_11), false));
    }
    var __VLS_15 = {};
    if (__VLS_ctx.debugData) {
        var __VLS_17 = FormKitDataDebug_vue_1.default;
        // @ts-ignore
        var __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
            data: (__VLS_ctx.formData),
            header: "Debug Mode - Data",
        }));
        var __VLS_19 = __VLS_18.apply(void 0, __spreadArray([{
                data: (__VLS_ctx.formData),
                header: "Debug Mode - Data",
            }], __VLS_functionalComponentArgsRest(__VLS_18), false));
    }
    if (__VLS_ctx.debugSchema) {
        var __VLS_22 = FormKitDataDebug_vue_1.default;
        // @ts-ignore
        var __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
            data: __VLS_ctx.formSchema,
            header: "Debug Mode - Schema",
        }));
        var __VLS_24 = __VLS_23.apply(void 0, __spreadArray([{
                data: __VLS_ctx.formSchema,
                header: "Debug Mode - Schema",
            }], __VLS_functionalComponentArgsRest(__VLS_23), false));
    }
    // @ts-ignore
    [id, formData, formData, formData, actionsClass, formClass, handleSave, formSchema, formSchema, formSchema, debugData, debugSchema,];
}
{
    var __VLS_27 = __VLS_3.slots.messages;
    var __VLS_28 = {};
    var __VLS_30 = void 0;
    /** @ts-ignore @type {typeof __VLS_components.FormKitMessages} */
    vue_1.FormKitMessages;
    // @ts-ignore
    var __VLS_31 = __VLS_asFunctionalComponent1(__VLS_30, new __VLS_30(__assign({ class: "p-formkit-data-edit-messages" })));
    var __VLS_32 = __VLS_31.apply(void 0, __spreadArray([__assign({ class: "p-formkit-data-edit-messages" })], __VLS_functionalComponentArgsRest(__VLS_31), false));
    /** @type {__VLS_StyleScopedClasses['p-formkit-data-edit-messages']} */ ;
    // @ts-ignore
    [];
}
{
    var __VLS_35 = __VLS_3.slots.submit;
    var __VLS_36 = {};
    var __VLS_38 = void 0;
    /** @ts-ignore @type {typeof __VLS_components.Button} */
    Button;
    // @ts-ignore
    var __VLS_39 = __VLS_asFunctionalComponent1(__VLS_38, new __VLS_38(__assign(__assign(__assign({ 'onSubmit': {} }, { icon: (__VLS_ctx.submitIcon), type: "submit", label: (__VLS_ctx.submitLabel) }), { class: (__VLS_ctx.submitClass) }), { severity: (__VLS_ctx.submitSeverity) })));
    var __VLS_40 = __VLS_39.apply(void 0, __spreadArray([__assign(__assign(__assign({ 'onSubmit': {} }, { icon: (__VLS_ctx.submitIcon), type: "submit", label: (__VLS_ctx.submitLabel) }), { class: (__VLS_ctx.submitClass) }), { severity: (__VLS_ctx.submitSeverity) })], __VLS_functionalComponentArgsRest(__VLS_39), false));
    var __VLS_43 = void 0;
    var __VLS_44 = ({ submit: {} },
        { onSubmit: (__VLS_ctx.handleSave) });
    var __VLS_41;
    var __VLS_42;
    if (__VLS_ctx.showReset) {
        var __VLS_45 = void 0;
        /** @ts-ignore @type {typeof __VLS_components.Button} */
        Button;
        // @ts-ignore
        var __VLS_46 = __VLS_asFunctionalComponent1(__VLS_45, new __VLS_45(__assign(__assign(__assign({ 'onClick': {} }, { type: "reset", icon: (__VLS_ctx.resetIcon), label: (__VLS_ctx.resetLabel) }), { class: (__VLS_ctx.resetClass) }), { severity: (__VLS_ctx.resetSeverity) })));
        var __VLS_47 = __VLS_46.apply(void 0, __spreadArray([__assign(__assign(__assign({ 'onClick': {} }, { type: "reset", icon: (__VLS_ctx.resetIcon), label: (__VLS_ctx.resetLabel) }), { class: (__VLS_ctx.resetClass) }), { severity: (__VLS_ctx.resetSeverity) })], __VLS_functionalComponentArgsRest(__VLS_46), false));
        var __VLS_50 = void 0;
        var __VLS_51 = ({ click: {} },
            { onClick: (__VLS_ctx.handleReset) });
        var __VLS_48;
        var __VLS_49;
    }
    // @ts-ignore
    [handleSave, submitIcon, submitLabel, submitClass, submitSeverity, showReset, resetIcon, resetLabel, resetClass, resetSeverity, handleReset,];
}
// @ts-ignore
[];
var __VLS_3;
var __VLS_4;
// @ts-ignore
var __VLS_16 = __VLS_15, __VLS_29 = __VLS_28, __VLS_37 = __VLS_36;
// @ts-ignore
[];
var __VLS_base = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    emits: __assign(__assign({}, {}), {}),
    props: __assign(__assign({}, {}), {
        id: {
            type: String,
            default: "formkit_form",
        },
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
        actionsClass: {
            type: String,
            default: "",
        },
        submitSeverity: {
            type: String,
            default: "",
        },
        submitClass: {
            type: String,
            default: "",
        },
        submitLabel: {
            type: String,
            default: "Save",
        },
        submitIcon: {
            type: String,
            default: "",
        },
        showReset: {
            type: Boolean,
            default: false,
        },
        resetSeverity: {
            type: String,
            default: "danger",
        },
        resetLabel: {
            type: String,
            default: "Reset",
        },
        resetClass: {
            type: String,
            default: "",
        },
        resetIcon: {
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
