import type { UserModule } from '@/types'
import Aura from '@primeuix/themes/aura'
import { usePrimeInputs } from 'my-library'
import PrimeVue from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice'
import MegaMenu from 'primevue/megamenu'
import Ripple from 'primevue/ripple'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'

import TabPanels from 'primevue/tabpanels'

import Tabs from 'primevue/tabs'
import Toast from 'primevue/toast'

// services

import ToastService from 'primevue/toastservice'
import Toolbar from 'primevue/toolbar'
import Tooltip from 'primevue/tooltip'
import 'primeicons/primeicons.css'

export const install: UserModule = ({ app }) => {
  // directives
  app.directive('ripple', Ripple)
  app.directive('tooltip', Tooltip)

  // input components
  const { registerInputs, registerEditorInputs } = usePrimeInputs()
  registerInputs(app)
  registerEditorInputs(app)

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
