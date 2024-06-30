import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import Tabs from 'primevue/tabs'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import MegaMenu from 'primevue/megamenu'
import Ripple from 'primevue/ripple'
import Toolbar from 'primevue/toolbar'

import 'primeicons/primeicons.css'
import Aura from '@primevue/themes/aura'

import PrimeVue from 'primevue/config'
// directives

// services
import ConfirmationService from 'primevue/confirmationservice'

import ToastService from 'primevue/toastservice'
import Button from 'primevue/button'
import Toast from 'primevue/toast'
import type { UserModule } from '@/types'

export const install: UserModule = ({ app }) => {
  // directives
  app.directive('ripple', Ripple)
  app.component('Button', Button)

  // components
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
