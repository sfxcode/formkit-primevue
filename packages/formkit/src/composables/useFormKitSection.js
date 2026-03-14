"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFormKitSection = useFormKitSection;
var vue_1 = require("vue");
function useFormKitSection(context) {
    var hasPrefix = (0, vue_1.computed)(function () {
        var _a;
        return Boolean(((_a = context === null || context === void 0 ? void 0 : context.prefix) === null || _a === void 0 ? void 0 : _a.length) > 0);
    });
    var hasPrefixIcon = (0, vue_1.computed)(function () {
        var _a;
        return Boolean(((_a = context === null || context === void 0 ? void 0 : context.iconPrefix) === null || _a === void 0 ? void 0 : _a.length) > 0);
    });
    var hasSuffixIcon = (0, vue_1.computed)(function () {
        var _a;
        return Boolean(((_a = context === null || context === void 0 ? void 0 : context.iconSuffix) === null || _a === void 0 ? void 0 : _a.length) > 0);
    });
    var hasSuffix = (0, vue_1.computed)(function () {
        var _a;
        return Boolean(((_a = context === null || context === void 0 ? void 0 : context.suffix) === null || _a === void 0 ? void 0 : _a.length) > 0);
    });
    function generateId() {
        return typeof crypto !== "undefined" && crypto.randomUUID
            ? crypto.randomUUID()
            : Math.random().toString(36).slice(2);
    }
    return { generateId: generateId, hasPrefix: hasPrefix, hasPrefixIcon: hasPrefixIcon, hasSuffix: hasSuffix, hasSuffixIcon: hasSuffixIcon };
}
