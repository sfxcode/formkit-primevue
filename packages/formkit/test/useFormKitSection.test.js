"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var useFormKitSection_1 = require("../src/composables/useFormKitSection");
(0, vitest_1.it)('returns true for hasPrefix when context has a non-empty prefix', function () {
    var context = { prefix: 'test-prefix' };
    var hasPrefix = (0, useFormKitSection_1.useFormKitSection)(context).hasPrefix;
    (0, vitest_1.expect)(hasPrefix.value).toBe(true);
});
(0, vitest_1.it)('returns false for hasPrefix when context has an empty prefix', function () {
    var context = { prefix: '' };
    var hasPrefix = (0, useFormKitSection_1.useFormKitSection)(context).hasPrefix;
    (0, vitest_1.expect)(hasPrefix.value).toBe(false);
});
(0, vitest_1.it)('returns false for hasPrefix when context is null', function () {
    var context = null;
    var hasPrefix = (0, useFormKitSection_1.useFormKitSection)(context).hasPrefix;
    (0, vitest_1.expect)(hasPrefix.value).toBe(false);
});
(0, vitest_1.it)('returns false for hasPrefix when context.prefix is null', function () {
    var context = { prefix: null };
    var hasPrefix = (0, useFormKitSection_1.useFormKitSection)(context).hasPrefix;
    (0, vitest_1.expect)(hasPrefix.value).toBe(false);
});
(0, vitest_1.it)('returns true for hasPrefixIcon when context has a non-empty iconPrefix', function () {
    var context = { iconPrefix: 'test-icon' };
    var hasPrefixIcon = (0, useFormKitSection_1.useFormKitSection)(context).hasPrefixIcon;
    (0, vitest_1.expect)(hasPrefixIcon.value).toBe(true);
});
(0, vitest_1.it)('returns false for hasPrefixIcon when context has an empty iconPrefix', function () {
    var context = { iconPrefix: '' };
    var hasPrefixIcon = (0, useFormKitSection_1.useFormKitSection)(context).hasPrefixIcon;
    (0, vitest_1.expect)(hasPrefixIcon.value).toBe(false);
});
(0, vitest_1.it)('returns false for hasPrefixIcon when context is null', function () {
    var context = null;
    var hasPrefixIcon = (0, useFormKitSection_1.useFormKitSection)(context).hasPrefixIcon;
    (0, vitest_1.expect)(hasPrefixIcon.value).toBe(false);
});
(0, vitest_1.it)('returns false for hasPrefixIcon when context.iconPrefix is null', function () {
    var context = { iconPrefix: null };
    var hasPrefixIcon = (0, useFormKitSection_1.useFormKitSection)(context).hasPrefixIcon;
    (0, vitest_1.expect)(hasPrefixIcon.value).toBe(false);
});
(0, vitest_1.it)('returns true for hasSuffixIcon when context has a non-empty iconSuffix', function () {
    var context = { iconSuffix: 'test-icon' };
    var hasSuffixIcon = (0, useFormKitSection_1.useFormKitSection)(context).hasSuffixIcon;
    (0, vitest_1.expect)(hasSuffixIcon.value).toBe(true);
});
(0, vitest_1.it)('returns false for hasSuffixIcon when context has an empty iconSuffix', function () {
    var context = { iconSuffix: '' };
    var hasSuffixIcon = (0, useFormKitSection_1.useFormKitSection)(context).hasSuffixIcon;
    (0, vitest_1.expect)(hasSuffixIcon.value).toBe(false);
});
(0, vitest_1.it)('returns false for hasSuffixIcon when context is null', function () {
    var context = null;
    var hasSuffixIcon = (0, useFormKitSection_1.useFormKitSection)(context).hasSuffixIcon;
    (0, vitest_1.expect)(hasSuffixIcon.value).toBe(false);
});
(0, vitest_1.it)('returns false for hasSuffixIcon when context.iconSuffix is null', function () {
    var context = { iconSuffix: null };
    var hasSuffixIcon = (0, useFormKitSection_1.useFormKitSection)(context).hasSuffixIcon;
    (0, vitest_1.expect)(hasSuffixIcon.value).toBe(false);
});
(0, vitest_1.it)('returns true for hasSuffix when context has a non-empty suffix', function () {
    var context = { suffix: 'test-suffix' };
    var hasSuffix = (0, useFormKitSection_1.useFormKitSection)(context).hasSuffix;
    (0, vitest_1.expect)(hasSuffix.value).toBe(true);
});
(0, vitest_1.it)('returns false for hasSuffix when context has an empty suffix', function () {
    var context = { suffix: '' };
    var hasSuffix = (0, useFormKitSection_1.useFormKitSection)(context).hasSuffix;
    (0, vitest_1.expect)(hasSuffix.value).toBe(false);
});
(0, vitest_1.it)('returns false for hasSuffix when context is null', function () {
    var context = null;
    var hasSuffix = (0, useFormKitSection_1.useFormKitSection)(context).hasSuffix;
    (0, vitest_1.expect)(hasSuffix.value).toBe(false);
});
(0, vitest_1.it)('returns false for hasSuffix when context.suffix is null', function () {
    var context = { suffix: null };
    var hasSuffix = (0, useFormKitSection_1.useFormKitSection)(context).hasSuffix;
    (0, vitest_1.expect)(hasSuffix.value).toBe(false);
});
(0, vitest_1.it)('generates a unique id using generateId', function () {
    var generateId = (0, useFormKitSection_1.useFormKitSection)({}).generateId;
    var id1 = generateId();
    var id2 = generateId();
    (0, vitest_1.expect)(id1).not.toBe(id2);
    (0, vitest_1.expect)(id1).toMatch(/^[0-9a-f-]{36}$/i);
    (0, vitest_1.expect)(id2).toMatch(/^[0-9a-f-]{36}$/i);
});
(0, vitest_1.it)('works with empty context when generating id', function () {
    var generateId = (0, useFormKitSection_1.useFormKitSection)(null).generateId;
    var id = generateId();
    (0, vitest_1.expect)(id).toMatch(/^[0-9a-f-]{36}$/i);
});
