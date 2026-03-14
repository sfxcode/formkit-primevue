"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPrimeAsteriskPlugin = addPrimeAsteriskPlugin;
exports.addLabelPlugin = addLabelPlugin;
function addPrimeAsteriskPlugin(node) {
    if (!node.props.type.startsWith("prime") || node.props.type.startsWith("primeOutput"))
        return;
    node.on("created", function () {
        var _a, _b;
        if ((_a = node.props.definition) === null || _a === void 0 ? void 0 : _a.schema) {
            var schemaFn_1 = (_b = node.props.definition) === null || _b === void 0 ? void 0 : _b.schema;
            node.props.definition.schema = function (sectionsSchema) {
                if (sectionsSchema === void 0) { sectionsSchema = {}; }
                sectionsSchema.label = {
                    children: [
                        "$label",
                        {
                            $el: "span",
                            if: "$state.required",
                            attrs: {
                                class: "p-formkit-asterisk",
                            },
                            children: ["*"],
                        },
                    ],
                };
                return schemaFn_1(sectionsSchema);
            };
        }
    });
}
function addLabelPlugin(node) {
    if (!node.props.type.startsWith("prime"))
        return;
    node.on("created", function () {
        var _a, _b;
        if ((_a = node.props.definition) === null || _a === void 0 ? void 0 : _a.schema) {
            var schemaFn_2 = (_b = node.props.definition) === null || _b === void 0 ? void 0 : _b.schema;
            node.props.definition.schema = function (sectionsSchema) {
                if (sectionsSchema === void 0) { sectionsSchema = {}; }
                sectionsSchema.label = {
                    children: [
                        {
                            $el: "span",
                            attrs: {
                                title: "$help",
                                class: "p-formkit-label",
                            },
                            children: ["$label"],
                        },
                        {
                            $el: "span",
                            if: "$state.required",
                            attrs: {
                                class: "p-formkit-required",
                                title: "$help",
                            },
                            children: ["*"],
                        },
                    ],
                };
                sectionsSchema.help = {
                    children: [],
                };
                return schemaFn_2(sectionsSchema);
            };
        }
    });
}
