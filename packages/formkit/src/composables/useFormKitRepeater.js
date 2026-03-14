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
exports.useFormKitRepeater = useFormKitRepeater;
var useFormKitSchema_ts_1 = require("./useFormKitSchema.ts");
function useFormKitRepeater() {
    var _a = (0, useFormKitSchema_ts_1.useFormKitSchema)(), addElement = _a.addElement, addComponent = _a.addComponent, addElementsInOuterDiv = _a.addElementsInOuterDiv;
    function addInsertButton(label, innerClass, outerClass, buttonClass, iconClass) {
        if (label === void 0) { label = "Add"; }
        if (innerClass === void 0) { innerClass = ""; }
        if (outerClass === void 0) { outerClass = ""; }
        if (buttonClass === void 0) { buttonClass = "p-button-sm"; }
        if (iconClass === void 0) { iconClass = "pi pi-plus"; }
        return addElementsInOuterDiv([
            addComponent("Button", { onClick: "$addNode($node)", label: label, class: buttonClass, icon: iconClass }, "$node.children.length == 0"),
        ], innerClass, outerClass);
    }
    function addListGroupFunctions(data, addNodeDefaultObject) {
        if (addNodeDefaultObject === void 0) { addNodeDefaultObject = {}; }
        // Swap elements immutably
        var swapElements = function (array, index1, index2) {
            var newArray = __spreadArray([], array, true);
            var temp = newArray[index1];
            newArray[index1] = newArray[index2];
            newArray[index2] = temp;
            return newArray;
        };
        data.addNode = function (parentNode) { return function () {
            var newArray = __spreadArray(__spreadArray([], parentNode.value, true), [addNodeDefaultObject], false);
            parentNode.input(newArray, false);
        }; };
        data.removeNode = function (parentNode, index) { return function () {
            parentNode.input(parentNode._value.filter(function (_, i) { return i !== index; }), false);
        }; };
        data.moveNodeUp = function (parentNode, index) { return function () {
            var array = __spreadArray([], parentNode.value, true);
            if (index > 0)
                parentNode.input(swapElements(array, index - 1, index), false);
        }; };
        data.moveNodeDown = function (parentNode, index) { return function () {
            var array = __spreadArray([], parentNode.value, true);
            if (index < array.length - 1)
                parentNode.input(swapElements(array, index, index + 1), false);
        }; };
        data.copyNode = function (parentNode, index) { return function () {
            var obj = parentNode.value[index];
            var newArray = __spreadArray(__spreadArray([], parentNode.value, true), [__assign({}, obj)], false);
            parentNode.input(newArray, false);
        }; };
    }
    function addGroupButtons(innerClass, outerClass, label, help, render) {
        if (innerClass === void 0) { innerClass = ""; }
        if (outerClass === void 0) { outerClass = "col-4"; }
        if (label === void 0) { label = "Actions"; }
        if (help === void 0) { help = ""; }
        if (render === void 0) { render = "true"; }
        var addButtonComponent = function (onClick, label, icon, severity, render, styleClass) {
            if (onClick === void 0) { onClick = ""; }
            if (label === void 0) { label = ""; }
            if (icon === void 0) { icon = ""; }
            if (severity === void 0) { severity = ""; }
            if (render === void 0) { render = "true"; }
            if (styleClass === void 0) { styleClass = "p-button-sm"; }
            return addComponent("Button", { onClick: onClick, label: label, icon: icon, class: styleClass, severity: severity }, render);
        };
        return addElementsInOuterDiv([
            addButtonComponent("$removeNode($node.parent, $index)", "", "pi pi-times", "danger"),
            addButtonComponent("$copyNode($node.parent, $index)", "", "pi pi-plus"),
            addButtonComponent("$moveNodeUp($node.parent, $index)", "", "pi pi-arrow-up", "secondary", "$index != 0"),
            addElement("span", [], { class: "p-space" }, "$index == 0"),
            addButtonComponent("$moveNodeDown($node.parent, $index)", "", "pi pi-arrow-down", "secondary", "$index < $node.parent.value.length -1"),
            addElement("span", [], { class: "p-space" }, "$index == $node.parent.value.length -1"),
        ], "p-action-buttons ".concat(innerClass), outerClass, label, help, render);
    }
    return { addInsertButton: addInsertButton, addGroupButtons: addGroupButtons, addListGroupFunctions: addListGroupFunctions };
}
