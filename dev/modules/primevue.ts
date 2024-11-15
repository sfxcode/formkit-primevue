import Aura from '@primevue/themes/aura'
import PrimeVue from 'primevue/config'
import MegaMenu from 'primevue/megamenu'
import Ripple from 'primevue/ripple'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'
import Toast from 'primevue/toast'

import Toolbar from 'primevue/toolbar'

import Tooltip from 'primevue/tooltip'
import 'primeicons/primeicons.css'

// services

import type { UserModule } from '@/types'
import { usePrimeInputs } from 'my-library'
import ConfirmationService from 'primevue/confirmationservice'
import ToastService from 'primevue/toastservice'

export const install: UserModule = ({ app }) => {
  // directives
  app.directive('ripple', Ripple)
  app.directive('tooltip', Tooltip)

  // input components
  const { registerInputs } = usePrimeInputs()
  registerInputs(app)

  // other components
  app.component('MegaMenu', MegaMenu)
  app.component('Tab', Tab)
  app.component('Tabs', Tabs)
  app.component('TabList', TabList)
  app.component('TabPanels', TabPanels)
  app.component('TabPanel', TabPanel)
  app.component('Toast', Toast)
  app.component('Toolbar', Toolbar)

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
