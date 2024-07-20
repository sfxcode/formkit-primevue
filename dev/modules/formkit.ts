import { defaultConfig, plugin } from '@formkit/vue'
import { createAutoAnimatePlugin } from '@formkit/addons'

import { de, en } from '@formkit/i18n'
import { primeInputs } from 'my-library/definitions'
import { addPrimeAsteriskPlugin } from 'my-library/plugins'
import type { UserModule } from '@/types'

export const install: UserModule = ({ app }) => {
  app.use(plugin, defaultConfig({
    locales: { de, en },
    // Define the active locale
    locale: 'en',
    inputs: primeInputs,
    plugins: [
      createAutoAnimatePlugin(
        {
          /* optional AutoAnimate config */
          // default:
          duration: 250,
          easing: 'ease-in-out',
        },
        {
          /* optional animation targets object */
          // default:
          global: ['outer', 'inner'],
          form: ['form'],
          repeater: ['items'],
        },
      ),
      addPrimeAsteriskPlugin,
    ],
  }))
}

export {}
