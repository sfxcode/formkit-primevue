import AutoComplete from 'primevue/autocomplete'
import Button from 'primevue/button'
import Card from 'primevue/card'
import CascadeSelect from 'primevue/cascadeselect'
import Checkbox from 'primevue/checkbox'
import Chip from 'primevue/chip'
import ColorPicker from 'primevue/colorpicker'
import DatePicker from 'primevue/datepicker'
import Editor from 'primevue/editor'
import Fieldset from 'primevue/fieldset'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputMask from 'primevue/inputmask'
import InputNumber from 'primevue/inputnumber'
import InputOtp from 'primevue/inputotp'
import InputText from 'primevue/inputtext'
import Knob from 'primevue/knob'
import Listbox from 'primevue/listbox'
import MegaMenu from 'primevue/megamenu'
import Message from 'primevue/message'
import MultiSelect from 'primevue/multiselect'
import Password from 'primevue/password'
import Rating from 'primevue/rating'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'
import SelectButton from 'primevue/selectbutton'
import Slider from 'primevue/slider'
import SplitButton from 'primevue/splitbutton'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import Tabs from 'primevue/tabs'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import Tag from 'primevue/tag'
import Textarea from 'primevue/textarea'
import Toast from 'primevue/toast'
import ToggleButton from 'primevue/togglebutton'
import ToggleSwitch from 'primevue/toggleswitch'
import Toolbar from 'primevue/toolbar'

import 'primeicons/primeicons.css'
import Aura from '@primevue/themes/aura'

import PrimeVue from 'primevue/config'

// directives
import BadgeDirective from 'primevue/badgedirective'
import Ripple from 'primevue/ripple'
import StyleClass from 'primevue/styleclass'
import Tooltip from 'primevue/tooltip'

// services
import ConfirmationService from 'primevue/confirmationservice'
import ToastService from 'primevue/toastservice'

import type { UserModule } from '@/types'

export const install: UserModule = ({ app }) => {
  // directives

  app.directive('badge', BadgeDirective)
  app.directive('ripple', Ripple)
  app.directive('tooltip', Tooltip)
  app.directive('style-class', StyleClass)

  // components
  app.component('AutoComplete', AutoComplete)
  app.component('Button', Button)
  app.component('Card', Card)
  app.component('CascadeSelect', CascadeSelect)
  app.component('Checkbox', Checkbox)
  app.component('Chip', Chip)
  app.component('ColorPicker', ColorPicker)
  app.component('DataView', DataView)
  app.component('DatePicker', DatePicker)
  app.component('Editor', Editor)
  app.component('Fieldset', Fieldset)
  app.component('IconField', IconField)
  app.component('InputIcon', InputIcon)
  app.component('InputMask', InputMask)
  app.component('InputNumber', InputNumber)
  app.component('InputOtp', InputOtp)
  app.component('InputText', InputText)
  app.component('Knob', Knob)
  app.component('Listbox', Listbox)
  app.component('MegaMenu', MegaMenu)
  app.component('Message', Message)
  app.component('MultiSelect', MultiSelect)
  app.component('Password', Password)
  app.component('RadioButton', RadioButton)
  app.component('Rating', Rating)
  app.component('Select', Select)
  app.component('SelectButton', SelectButton)
  app.component('Slider', Slider)
  app.component('SplitButton', SplitButton)
  app.component('Tag', Tag)
  app.component('Tab', Tab)
  app.component('Tabs', Tabs)
  app.component('TabList', TabList)
  app.component('TabPanels', TabPanels)
  app.component('TabPanel', TabPanel)
  app.component('Textarea', Textarea)
  app.component('Toast', Toast)
  app.component('ToggleButton', ToggleButton)
  app.component('ToggleSwitch', ToggleSwitch)
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
