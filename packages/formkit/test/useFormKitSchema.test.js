"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var composables_1 = require("../src/composables");
(0, vitest_1.it)('add list group', function () {
    var addListGroup = (0, composables_1.useFormKitSchema)().addListGroup;
    var listGroup = addListGroup();
    (0, vitest_1.expect)(listGroup === null || listGroup === void 0 ? void 0 : listGroup.$formkit).toBe('group');
    (0, vitest_1.expect)(listGroup === null || listGroup === void 0 ? void 0 : listGroup.if).toBe('true');
    (0, vitest_1.expect)(listGroup === null || listGroup === void 0 ? void 0 : listGroup.for).toEqual(['item', 'index', '$items']);
    (0, vitest_1.expect)(listGroup === null || listGroup === void 0 ? void 0 : listGroup.key).toBe('$item');
    (0, vitest_1.expect)(listGroup === null || listGroup === void 0 ? void 0 : listGroup.index).toBe('$index');
});
(0, vitest_1.it)('add element with non-boolean render value', function () {
    var addElement = (0, composables_1.useFormKitSchema)().addElement;
    var element = addElement('div', [], {}, '$context.visible');
    (0, vitest_1.expect)(element === null || element === void 0 ? void 0 : element.if).toBe('$context.visible');
});
(0, vitest_1.it)('add component with props', function () {
    var addComponent = (0, composables_1.useFormKitSchema)().addComponent;
    var props = { label: 'Save', severity: 'primary' };
    var component = addComponent('Button', props);
    (0, vitest_1.expect)(component === null || component === void 0 ? void 0 : component.props).toEqual(props);
});
(0, vitest_1.describe)('addElementsInOuterDiv', function () {
    (0, vitest_1.it)('creates default structure with minimal params', function () {
        var _a, _b, _c, _d, _e, _f;
        var addElementsInOuterDiv = (0, composables_1.useFormKitSchema)().addElementsInOuterDiv;
        var outerDiv = addElementsInOuterDiv();
        (0, vitest_1.expect)(outerDiv === null || outerDiv === void 0 ? void 0 : outerDiv.$el).toBe('div');
        (0, vitest_1.expect)((_a = outerDiv === null || outerDiv === void 0 ? void 0 : outerDiv.attrs) === null || _a === void 0 ? void 0 : _a.class).toBe('formkit-outer ');
        var wrapperDiv = (_b = outerDiv === null || outerDiv === void 0 ? void 0 : outerDiv.children) === null || _b === void 0 ? void 0 : _b[0];
        (0, vitest_1.expect)(wrapperDiv === null || wrapperDiv === void 0 ? void 0 : wrapperDiv.$el).toBe('div');
        (0, vitest_1.expect)((_c = wrapperDiv === null || wrapperDiv === void 0 ? void 0 : wrapperDiv.attrs) === null || _c === void 0 ? void 0 : _c.class).toBe('formkit-wrapper');
        var labelDiv = (_d = wrapperDiv === null || wrapperDiv === void 0 ? void 0 : wrapperDiv.children) === null || _d === void 0 ? void 0 : _d[0];
        (0, vitest_1.expect)(labelDiv === null || labelDiv === void 0 ? void 0 : labelDiv.$el).toBe('label');
        (0, vitest_1.expect)(labelDiv === null || labelDiv === void 0 ? void 0 : labelDiv.children).toEqual(['']);
        var innerDiv = (_e = wrapperDiv === null || wrapperDiv === void 0 ? void 0 : wrapperDiv.children) === null || _e === void 0 ? void 0 : _e[1];
        (0, vitest_1.expect)(innerDiv === null || innerDiv === void 0 ? void 0 : innerDiv.$el).toBe('div');
        (0, vitest_1.expect)((_f = innerDiv === null || innerDiv === void 0 ? void 0 : innerDiv.attrs) === null || _f === void 0 ? void 0 : _f.class).toBe('formkit-inner ');
    });
    (0, vitest_1.it)('applies custom classes', function () {
        var _a, _b, _c, _d, _e;
        var addElementsInOuterDiv = (0, composables_1.useFormKitSchema)().addElementsInOuterDiv;
        var outerDiv = addElementsInOuterDiv([], 'custom-inner', 'custom-outer');
        (0, vitest_1.expect)((_a = outerDiv === null || outerDiv === void 0 ? void 0 : outerDiv.attrs) === null || _a === void 0 ? void 0 : _a.class).toBe('formkit-outer custom-outer');
        var innerDiv = (_d = (_c = (_b = outerDiv === null || outerDiv === void 0 ? void 0 : outerDiv.children) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.children) === null || _d === void 0 ? void 0 : _d[1];
        (0, vitest_1.expect)((_e = innerDiv === null || innerDiv === void 0 ? void 0 : innerDiv.attrs) === null || _e === void 0 ? void 0 : _e.class).toBe('formkit-inner custom-inner');
    });
});
(0, vitest_1.it)('combines formKitAttrs with element properties', function () {
    var addElement = (0, composables_1.useFormKitSchema)().addElement;
    var formKitAttrs = { validation: 'required', validationVisibility: 'dirty' };
    var element = addElement('div', [], {}, true, formKitAttrs);
    (0, vitest_1.expect)(element === null || element === void 0 ? void 0 : element.$el).toBe('div');
    (0, vitest_1.expect)(element === null || element === void 0 ? void 0 : element.validation).toBe('required');
    (0, vitest_1.expect)(element === null || element === void 0 ? void 0 : element.validationVisibility).toBe('dirty');
});
(0, vitest_1.it)('combines formKitAttrs with component properties', function () {
    var addComponent = (0, composables_1.useFormKitSchema)().addComponent;
    var formKitAttrs = { validation: 'required', validationLabel: 'Button' };
    var component = addComponent('Button', {}, true, formKitAttrs);
    (0, vitest_1.expect)(component === null || component === void 0 ? void 0 : component.$cmp).toBe('Button');
    (0, vitest_1.expect)(component === null || component === void 0 ? void 0 : component.validation).toBe('required');
    (0, vitest_1.expect)(component === null || component === void 0 ? void 0 : component.validationLabel).toBe('Button');
});
