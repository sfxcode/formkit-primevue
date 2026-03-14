import { usePrimeInputs } from "@sfxcode/formkit-primevue";

import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((_nuxtApp) => {
  // const runtimeConfig = useRuntimeConfig()

  const app = _nuxtApp.vueApp;

  const { registerInputs } = usePrimeInputs();
  registerInputs(app);
});
