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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFormKitSchema = useFormKitSchema;
function useFormKitSchema() {
    var addComponent = function (component, props, render, formKitAttrs) {
        if (component === void 0) { component = "Button"; }
        if (props === void 0) { props = {}; }
        if (render === void 0) { render = true; }
        if (formKitAttrs === void 0) { formKitAttrs = {}; }
        return __assign({ $cmp: component, if: render.toString(), props: props }, formKitAttrs);
    };
    var addElement = function (element, children, attrs, render, formKitAttrs) {
        if (element === void 0) { element = "div"; }
        if (children === void 0) { children = []; }
        if (attrs === void 0) { attrs = {}; }
        if (render === void 0) { render = true; }
        if (formKitAttrs === void 0) { formKitAttrs = {}; }
        return __assign({ $el: element, if: render.toString(), attrs: attrs, children: children }, formKitAttrs);
    };
    var addGroup = function (name, children, render, formKitAttrs) {
        if (children === void 0) { children = []; }
        if (render === void 0) { render = true; }
        if (formKitAttrs === void 0) { formKitAttrs = {}; }
        return __assign({ $formkit: "group", if: render.toString(), name: name, children: children }, formKitAttrs);
    };
    var addList = function (name, children, dynamic, render, formKitAttrs) {
        if (children === void 0) { children = []; }
        if (dynamic === void 0) { dynamic = true; }
        if (render === void 0) { render = true; }
        if (formKitAttrs === void 0) { formKitAttrs = {}; }
        return __assign({ $formkit: "list", if: render.toString(), name: name, dynamic: dynamic, children: children }, formKitAttrs);
    };
    var addListGroup = function (children, render, formKitAttrs) {
        if (children === void 0) { children = []; }
        if (render === void 0) { render = true; }
        if (formKitAttrs === void 0) { formKitAttrs = {}; }
        return __assign({ $formkit: "group", if: render.toString(), for: ["item", "index", "$items"], key: "$item", index: "$index", children: children }, formKitAttrs);
    };
    var addElementsInOuterDiv = function (children, innerClass, outerClass, label, help, render) {
        if (children === void 0) { children = []; }
        if (innerClass === void 0) { innerClass = ""; }
        if (outerClass === void 0) { outerClass = ""; }
        if (label === void 0) { label = ""; }
        if (help === void 0) { help = ""; }
        if (render === void 0) { render = true; }
        var inner = addElement("div", children, {
            class: "formkit-inner ".concat(innerClass),
            style: "position: relative;",
        });
        var labelDiv = addElement("label", [label], { class: "formkit-label" });
        var wrapperDiv = addElement("div", [labelDiv, inner], { class: "formkit-wrapper" });
        var helpDiv = addElement("div", [help], { class: "formkit-help" });
        return addElement("div", [wrapperDiv, helpDiv], { class: "formkit-outer ".concat(outerClass), style: "position: relative;" }, render);
    };
    return { addComponent: addComponent, addElement: addElement, addGroup: addGroup, addList: addList, addListGroup: addListGroup, addElementsInOuterDiv: addElementsInOuterDiv };
}
