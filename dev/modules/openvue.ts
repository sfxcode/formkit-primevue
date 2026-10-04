import type { UserModule } from '@/types'
import Aura from '@openvue/themes/aura'
import { usePrimeInputs } from 'my-library'
import { Fieldset } from 'openvue'
import PrimeVue from 'openvue/config'
import ConfirmationService from 'openvue/confirmationservice'

import MegaMenu from 'openvue/megamenu'
import Ripple from 'openvue/ripple'
import Tab from 'openvue/tab'
import TabList from 'openvue/tablist'
import TabPanel from 'openvue/tabpanel'

import TabPanels from 'openvue/tabpanels'

import Tabs from 'openvue/tabs'

// services

import Toast from 'openvue/toast'
import ToastService from 'openvue/toastservice'
import Toolbar from 'openvue/toolbar'
import Tooltip from 'openvue/tooltip'
import PrimeLabel from '../components/demo/PrimeLabel.vue'
import '@openvue/openicons/openicons.css'

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
  app.component('Tab', Tab)
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
