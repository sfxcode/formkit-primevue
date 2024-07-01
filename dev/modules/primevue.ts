import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import Tabs from 'primevue/tabs'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import MegaMenu from 'primevue/megamenu'
import Ripple from 'primevue/ripple'
import Toolbar from 'primevue/toolbar'

import AutoComplete from 'primevue/autocomplete'
import CascadeSelect from 'primevue/cascadeselect'
import Checkbox from 'primevue/checkbox'
import ColorPicker from 'primevue/colorpicker'
import DatePicker from 'primevue/datepicker'
import Editor from 'primevue/editor'
import InputMask from 'primevue/inputmask'
import InputNumber from 'primevue/inputnumber'
import InputOtp from 'primevue/inputotp'
import InputText from 'primevue/inputtext'
import Knob from 'primevue/knob'
import Listbox from 'primevue/listbox'
import MultiSelect from 'primevue/multiselect'
import Password from 'primevue/password'
import RadioButton from 'primevue/radiobutton'
import Rating from 'primevue/rating'
import Select from 'primevue/select'
import SelectButton from 'primevue/selectbutton'
import Slider from 'primevue/slider'
import Textarea from 'primevue/textarea'
import ToggleButton from 'primevue/togglebutton'
import ToggleSwitch from 'primevue/toggleswitch'
import TreeSelect from 'primevue/treeselect'

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

  // input components
  app.component('AutoComplete', AutoComplete)
  app.component('CascadeSelect', CascadeSelect)
  app.component('Checkbox', Checkbox)
  app.component('ColorPicker', ColorPicker)
  app.component('DatePicker', DatePicker)
  app.component('Editor', Editor)
  app.component('InputMask', InputMask)
  app.component('InputNumber', InputNumber)
  app.component('InputOtp', InputOtp)
  app.component('InputText', InputText)
  app.component('Knob', Knob)
  app.component('Listbox', Listbox)
  app.component('MultiSelect', MultiSelect)
  app.component('Password', Password)
  app.component('RadioButton', RadioButton)
  app.component('Rating', Rating)
  app.component('Select', Select)
  app.component('SelectButton', SelectButton)
  app.component('Slider', Slider)
  app.component('Textarea', Textarea)
  app.component('ToggleButton', ToggleButton)
  app.component('ToggleSwitch', ToggleSwitch)
  app.component('TreeSelect', TreeSelect)

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
