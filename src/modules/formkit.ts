import type { UserModule } from '@/types';
import { plugin, defaultConfig, createInput } from '@formkit/vue';
import PrimeInputText from '@/components/PrimeInputText.vue';
import { de, en } from '@formkit/i18n'

// import '@formkit/themes/genesis/theme.css'
import './formkit.scss'


export const install: UserModule = ({ app, router, isClient }) => {
  app.use(plugin, defaultConfig({
    locales: { de, en },
    // Define the active locale
    locale: 'de',
    inputs: {
      primeInputText: createInput(PrimeInputText, {
        props: ['iconRight', 'iconLeft'],
      }),
    },
  }));
};
