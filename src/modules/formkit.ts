import { defaultConfig, plugin } from '@formkit/vue'

import { de, en } from '@formkit/i18n'
import type { UserModule } from '@/types'
import { primeInputs } from '@/formkit'

export const install: UserModule = ({ app, router, isClient }) => {
  app.use(plugin, defaultConfig({
    locales: { de, en },
    // Define the active locale
    locale: 'en',
    inputs: primeInputs,
  }))
}

export {}
