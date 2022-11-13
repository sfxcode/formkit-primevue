<script setup lang='ts'>
import { FormKitSchema } from '@formkit/vue'
import { ref } from 'vue'
import schema_json from '../../public/index_form.json'

const options = [
  { label: 'Every page load', value: 'refresh' },
  { label: 'Ever hour', value: 'hourly' },
  { label: 'Every day', value: 'daily' },
]

const selectOptions = [
  { label: 'yes', value: 'YES' },
  { label: 'no', value: 'NO' },
  { label: 'maybe', value: 'MAYBE' },
]

const triStateValue = ref(true)

const schemaFromJson = reactive(schema_json)

const schema = reactive([
  {
    $el: 'h1',
    children: ['Register ', '$myGroup.email'],
  },
  {
    $el: 'h3',
    children: ['Header Text H3'],
  },
  {
    $formkit: 'group',
    name: 'myGroup',
    children: [
      {
        $formkit: 'primeInputText',
        name: 'email',
        label: 'Email',
        help: 'This will be used for your account.',
        validation: 'required|email',
        class: 'test',
      },
      {
        $formkit: 'primeInputTextArea',
        name: 'myText',
        label: 'Text',
        validation: 'required',
        rows: '5',
        class: 'test',
      },
    ],
  },

  {
    $formkit: 'primeEditor',
    name: 'myEditor',
    label: 'Editor',
    validation: 'required',
    class: 'test',
  },
  {
    $formkit: 'primeCalendar',
    name: 'myCalendar',
    label: 'Calendar',
    validation: '',
    class: 'test',
    dateFormat: 'dd.mm.yy',
    showIcon: true,
  },
  {
    $el: 'div',
    attrs: {
      class: 'double',
    },
    children: [
      {
        $formkit: 'primeInputText',
        name: 'password',
        label: 'Password',
        help: 'Enter your new password.',
        validation: 'required|length:5,16',
        validationVisibility: 'live',
        class: 'p-password',
      },
      {
        $formkit: 'primePassword',
        name: 'password_confirm',
        label: 'Confirm password',
        toggleMask: true,
        feedback: false,
        help: 'Enter your new password again to confirm it.',
        validation: 'required|confirm',
        validationLabel: 'password confirmation',
        class: 'test',
      },
    ],
  },
  {
    $formkit: 'primeCheckbox',
    name: 'eu_citizen',
    id: 'eu',
    label: 'Are you a european citizen?',
    class: 'test',
    labelLeft: 'Left Label: ',
    labelRight: 'Right Label',
  },
  {
    $formkit: 'primeInputSwitch',
    name: 'primeInputSwitch',
    id: 'primeInputSwitch',
    labelLeft: 'Left Label: ',
    labelRight: 'Right Label',
  },
  {
    $formkit: 'primeSlider',
    name: 'slider',
    label: 'Use Slider',
    min: 5,
    max: 100,
    step: 5,
    value: 10,
    validation: 'min:20|max:80',
  },
  {
    $formkit: 'primeChips',
    name: 'chips',
    label: 'Use Chips',
  },
  {
    $formkit: 'primeKnob',
    name: 'knob',
    label: 'Use Knob',
    value: 50,
    validation: 'min:20|max:80',
  },
  {
    $formkit: 'primeDropdown',
    if: '$eu_citizen', // 👀 Oooo, conditionals!
    name: 'cookie_notice',
    label: 'Cookie notice Dropdown',
    value: 'hourly',
    showClear: false,
    filter: false,
    options,
    help: 'How often should we display a cookie notice?',
    class: 'test',
  },
  {
    $formkit: 'primeMultiSelect',
    name: 'cookie_notice2',
    label: 'Cookie notice MultiSelect',
    value: ['hourly'],
    showClear: true,
    filter: true,
    options,
    help: 'How often should we display a cookie notice?',
    class: 'test',
  },
  {
    $formkit: 'primeInputNumber',
    name: 'myInputNumber',
    label: 'Input Number',
    value: 1234,
    class: 'test',
    validation: 'max:10000',
    useGrouping: true,
    minFractionDigits: 2,
  },
  {
    $formkit: 'primeInputMask',
    name: 'myInputMask',
    label: 'Input Mask',
    class: 'test',
    validation: 'required',
    validationVisibility: 'live',
    mask: '99-999999',
  },
  {
    $formkit: 'primeColorPicker',
    label: 'Select Color',
    name: 'color',
  },
  {
    $formkit: 'primeRating',
    label: 'Select Rating',
    name: 'rating',
  },
  {
    $formkit: 'primeListbox',
    name: 'cookie_notice3',
    label: 'Cookie notice Listbox',
    value: ['hourly'],
    filter: false,
    multiple: true,
    options,
    help: 'How often should we display a cookie notice?',
    class: 'test',
  },
  {
    $formkit: 'primeToggleButton',
    label: 'Select ToggleButton',
    name: 'toggleButton',
  },
  {
    $formkit: 'primeSelectButton',
    label: 'SelectButton',
    name: 'selectButton',
    options: selectOptions,
  },
  {
    $formkit: 'primeTriStateCheckbox',
    label: 'TriStateCheckbox',
    name: 'triStateCheckbox',
    value: triStateValue,
  },

])

const data = ref({})

const submitHandler = async () => {
  // Lets pretend this is an ajax request:
  await new Promise(resolve => setTimeout(resolve, 1000))
}
</script>

<template>
  <h1>Basic Form</h1>

  <div class="myFormkit">
    <FormKit
      id="form"
      v-model="data"
      type="form"
      :submit-attrs="{
        inputClass: 'p-button p-component',
      }"
      @submit="submitHandler"
    >
      <FormKitSchema :schema="schema" :data="data" />
    </FormKit>
  </div>
  <h4>Data</h4>
  <pre>{{ data }}</pre>
</template>

<style lang="scss" scoped>
.p-inputtext {
  width: 500px;
}
</style>
