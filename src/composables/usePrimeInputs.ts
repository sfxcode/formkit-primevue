import AutoComplete from 'openvue/autocomplete'
import Button from 'openvue/button'
import CascadeSelect from 'openvue/cascadeselect'
import Checkbox from 'openvue/checkbox'
import Chip from 'openvue/chip'
import ColorPicker from 'openvue/colorpicker'
import DatePicker from 'openvue/datepicker'
import InputMask from 'openvue/inputmask'
import InputNumber from 'openvue/inputnumber'
import InputOtp from 'openvue/inputotp'
import InputText from 'openvue/inputtext'
import Knob from 'openvue/knob'
import Listbox from 'openvue/listbox'
import MultiSelect from 'openvue/multiselect'
import Password from 'openvue/password'
import RadioButton from 'openvue/radiobutton'
import Rating from 'openvue/rating'
import Select from 'openvue/select'
import SelectButton from 'openvue/selectbutton'
import Slider from 'openvue/slider'
import Textarea from 'openvue/textarea'
import ToggleButton from 'openvue/togglebutton'
import ToggleSwitch from 'openvue/toggleswitch'
import TreeSelect from 'openvue/treeselect'

export function usePrimeInputs() {
  function registerInputs(app: any) {
    app.component('AutoComplete', AutoComplete)
    app.component('Button', Button)
    app.component('CascadeSelect', CascadeSelect)
    app.component('Checkbox', Checkbox)
    app.component('Chip', Chip)
    app.component('ColorPicker', ColorPicker)
    app.component('DatePicker', DatePicker)
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
  }
  return { registerInputs }
}
