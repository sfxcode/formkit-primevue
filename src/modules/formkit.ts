import type { UserModule } from '@/types';
import { plugin, defaultConfig, createInput } from '@formkit/vue';
import PrimeInputText from '@/formkit/PrimeInputText.vue';
import PrimeInputTextArea from '@/formkit/PrimeInputTextArea.vue';
import PrimeCheckBox from '@/formkit/PrimeCheckBox.vue';
import PrimeEditor from '@/formkit/PrimeEditor.vue';
import { de, en } from '@formkit/i18n'

export const install: UserModule = ({ app, router, isClient }) => {
  app.use(plugin, defaultConfig({
    locales: { de, en },
    // Define the active locale
    locale: 'de',
    inputs: {
      primeInputText: createInput(PrimeInputText, {
        props: ['iconRight', 'iconLeft'],
      }),
      primeCheckBox: createInput(PrimeCheckBox, {
      }),
      primeInputTextArea: createInput(PrimeInputTextArea, {
        props: ['rows'],

      }),
      primeEditor: createInput(PrimeEditor, {
      }),

    },
  }));
};
