import type { UserModule } from '@/types'
import Aura from '@primeuix/themes/aura'
import { usePrimeInputs } from 'my-library'
import { Fieldset } from 'primevue'
import PrimeVue from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice'

import MegaMenu from 'primevue/megamenu'
import Ripple from 'primevue/ripple'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'

import TabPanels from 'primevue/tabpanels'

import Tabs from 'primevue/tabs'

// services

import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Toolbar from 'primevue/toolbar'
import Tooltip from 'primevue/tooltip'
import PrimeLabel from '../components/demo/PrimeLabel.vue'
import 'primeicons/primeicons.css'

export const install: UserModule = ({ app }) => {
  // directives
  app.directive('ripple', Ripple)
  app.directive('tooltip', Tooltip)

  // input components
  const { registerInputs } = usePrimeInputs()
  registerInputs(app)

  // other components
  app.component('MegaMenu', MegaMenu)
  app.component('Fieldset', Fieldset)
  app.component('Tabs', Tabs)
  app.component('TabList', TabList)
  app.component('TabPanels', TabPanels)
  app.component('TabPanel', TabPanel)
  app.component('Toast', Toast)
  app.component('Toolbar', Toolbar)

  app.component('PrimeLabel', PrimeLabel)

  app.use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        darkModeSelector: '.p-dark',
      },
    },
    ripple: false,
  })

  // services
  app.use(ConfirmationService)
  app.use(ToastService)
}
