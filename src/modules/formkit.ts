import type { UserModule } from '@/types';

import { plugin, defaultConfig } from '@formkit/vue';

import { de, en } from '@formkit/i18n'
import {
  primeCheckBoxDefinition,
  primeEditorDefinition,
  primeInputTextAreaDefinition,
  primeInputTextDefinition
} from "@/formkit/inputs";



export const install: UserModule = ({ app, router, isClient }) => {
  app.use(plugin, defaultConfig({
    locales: { de, en },
    // Define the active locale
    locale: 'de',
    inputs: {
      primeInputText: primeInputTextDefinition,
      primeCheckBox: primeCheckBoxDefinition,
      primeInputTextArea: primeInputTextAreaDefinition,
      primeEditor: primeEditorDefinition
    },
  }));
};
