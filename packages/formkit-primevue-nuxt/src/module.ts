import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  installModule,
  addImports,
  addComponent,
} from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {
  includePrimeIcons: boolean;
  includeStyles: boolean;
  installFormKit: boolean;
  installI18N: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "formkit-primevue-nuxt",
    configKey: "formkitPrimevue",
    compatibility: {
      nuxt: ">=3.16.0",
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {
    includePrimeIcons: true,
    includeStyles: true,
    installFormKit: true,
    installI18N: true,
  },
  async setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url);
    await installModule("@primevue/nuxt-module");
    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve("./runtime/plugin"));

    if (_options.installFormKit) await installModule("@formkit/nuxt");

    if (_options.installI18N) await installModule("@nuxtjs/i18n");

    const css: string[] = _nuxt.options.css ?? [];
    if (_options.includePrimeIcons) {
      css.push("primeicons/primeicons.css");
    }
    if (_options.includeStyles) {
      css.push("@sfxcode/formkit-primevue/dist/style.css");
    }
    _nuxt.options.css = css;

    const NPM_PCK_FORMKIT_PRIMEVUE = "@sfxcode/formkit-primevue";

    const composableNames = [
      "useFormKitSchema",
      "useFormKitRepeater",
      "useInputEditor",
      "useInputEditorSchema",
    ];
    composableNames.forEach((name) =>
      addImports({ name, as: name, from: NPM_PCK_FORMKIT_PRIMEVUE }),
    );

    const componentNames = ["FormKitDataEdit", "FormKitDataView"];
    componentNames.forEach((name) =>
      addComponent({
        name,
        export: name,
        filePath: NPM_PCK_FORMKIT_PRIMEVUE,
        chunkName: NPM_PCK_FORMKIT_PRIMEVUE,
      }),
    );
  },
});
