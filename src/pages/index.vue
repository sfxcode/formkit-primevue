<script setup lang='ts'>
import { FormKitSchema } from '@formkit/vue'
import { ref } from 'vue'

const options = [
  { label: 'Every page load', value: 'refresh' },
  { label: 'Ever hour', value: 'hourly' },
  { label: 'Every day', value: 'daily' },
]

const schema = reactive(
  [
    {
      $el: 'h1',
      children: ['Register ', '$email'],
    },
    {
      $el: 'h3',
      children: 'Header Text H3',
    },
    {
      $formkit: 'group',
      name: 'myGroup',
      children: [{
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
        validation: '',
        rows: '5',
        class: 'test',

      }]
      ,
    },

    {
      $formkit: 'primeEditor',
      name: 'myEditor',
      label: 'Editor',
      validation: '',
      class: 'test',

    },
    {
      $formkit: 'primeCalendar',
      name: 'myCalendar',
      label: 'Calendar',
      validation: '',
      class: 'test',
      dateFormat: 'dd.mm.yy',
      showIcon: 'true',

    },
    {
      $el: 'div',
      attrs: {
        class: 'double',
      },
      children: [{
        $formkit: 'primeInputText',
        name: 'password',
        label: 'Password',
        help: 'Enter your new password.',
        validation: 'required|length:5,16',
        validationVisibility: 'live',
        class: 'test',

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

      }],
    },
    {
      $formkit: 'primeCheckBox',
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
      step: 5,
    },
    {
      $formkit: 'primeDropdown',
      if: '$eu_citizen', // 👀 Oooo, conditionals!
      name: 'cookie_notice',
      label: 'Cookie notice frequency',
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
      label: 'Cookie notice frequency',
      value: ['hourly'],
      showClear: true,
      filter: true,
      options,
      help: 'How often should we display a cookie notice?',
      class: 'test',

    },
  ],
)

const data = ref({ email: 'tom@sfxcode.com' })

const submitHandler = async() => {
  // Lets pretend this is an ajax request:
  await new Promise(r => setTimeout(r, 1000))
}
</script>

<template>
  <h1>Basic Form</h1>

  <div>
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
  <pre>{{ data }}</pre>
</template>

<style lang='scss'>

</style>
