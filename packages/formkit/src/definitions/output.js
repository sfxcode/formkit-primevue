"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.primeOutputListDefinition = exports.primeOutputDurationDefinition = exports.primeOutputBooleanDefinition = exports.primeOutputReferenceDefinition = exports.primeOutputLinkDefinition = exports.primeOutputNumberDefinition = exports.primeOutputDateDefinition = exports.primeOutputTextDefinition = void 0;
var vue_1 = require("@formkit/vue");
var PrimeOutputBoolean_vue_1 = require("../components/PrimeOutputBoolean.vue");
var PrimeOutputDate_vue_1 = require("../components/PrimeOutputDate.vue");
var PrimeOutputDuration_vue_1 = require("../components/PrimeOutputDuration.vue");
var PrimeOutputLink_vue_1 = require("../components/PrimeOutputLink.vue");
var PrimeOutputList_vue_1 = require("../components/PrimeOutputList.vue");
var PrimeOutputNumber_vue_1 = require("../components/PrimeOutputNumber.vue");
var PrimeOutputReference_vue_1 = require("../components/PrimeOutputReference.vue");
var PrimeOutputText_vue_1 = require("../components/PrimeOutputText.vue");
exports.primeOutputTextDefinition = (0, vue_1.createInput)(PrimeOutputText_vue_1.default, {
    props: [
        "prefix",
        "suffix",
        "iconPrefix",
        "iconSuffix",
        "isTranslationKey",
        "html",
        "onIconPrefixClicked",
        "onIconSuffixClicked",
        "convertValue",
        "maxLength",
    ],
});
exports.primeOutputDateDefinition = (0, vue_1.createInput)(PrimeOutputDate_vue_1.default, {
    props: [
        "prefix",
        "suffix",
        "iconPrefix",
        "iconSuffix",
        "onIconPrefixClicked",
        "onIconSuffixClicked",
    ],
});
exports.primeOutputNumberDefinition = (0, vue_1.createInput)(PrimeOutputNumber_vue_1.default, {
    props: [
        "prefix",
        "suffix",
        "iconPrefix",
        "iconSuffix",
        "onIconPrefixClicked",
        "onIconSuffixClicked",
    ],
    family: "PrimeOutput",
});
exports.primeOutputLinkDefinition = (0, vue_1.createInput)(PrimeOutputLink_vue_1.default, {
    props: [
        "prefix",
        "suffix",
        "iconPrefix",
        "iconSuffix",
        "title",
        "onIconPrefixClicked",
        "onIconSuffixClicked",
    ],
    family: "PrimeOutput",
});
exports.primeOutputReferenceDefinition = (0, vue_1.createInput)(PrimeOutputReference_vue_1.default, {
    props: [
        "prefix",
        "suffix",
        "iconPrefix",
        "iconSuffix",
        "reference",
        "internal",
        "linkComponentName",
        "title",
        "onIconPrefixClicked",
        "onIconSuffixClicked",
    ],
    family: "PrimeOutput",
});
exports.primeOutputBooleanDefinition = (0, vue_1.createInput)(PrimeOutputBoolean_vue_1.default, {
    props: [
        "prefix",
        "suffix",
        "iconPrefix",
        "iconSuffix",
        "trueValue",
        "falseValue",
        "onIconPrefixClicked",
        "onIconSuffixClicked",
    ],
    family: "PrimeOutput",
});
exports.primeOutputDurationDefinition = (0, vue_1.createInput)(PrimeOutputDuration_vue_1.default, {
    props: [
        "prefix",
        "suffix",
        "iconPrefix",
        "iconSuffix",
        "onIconPrefixClicked",
        "onIconSuffixClicked",
    ],
    family: "PrimeOutput",
});
exports.primeOutputListDefinition = (0, vue_1.createInput)(PrimeOutputList_vue_1.default, {
    props: [
        "prefix",
        "suffix",
        "iconPrefix",
        "iconSuffix",
        "divider",
        "itemClass",
        "dividerClass",
        "listStyle",
        "onIconPrefixClicked",
        "onIconSuffixClicked",
        "convertValue",
    ],
    family: "PrimeOutput",
});
