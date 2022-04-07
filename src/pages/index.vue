<template>
  <h1>Basic Form</h1>

  <FormKit
      id='form'
      v-model='data'
      type='form'
      @submit='submitHandler'
      :submit-attrs="{
      inputClass: 'p-button p-component',
    }"
  >
    <FormKitSchema :schema='schema' :data="data"></FormKitSchema>
  </FormKit>
  <pre>{{ data }}</pre>
</template>

<script setup lang='ts'>
import { FormKitSchema } from '@formkit/vue';
import { ref } from 'vue';

const schema = reactive(
    [
      {
        $el: 'h1',
        children: ['Register ','$email'],
      },
      {
        $el: 'h3',
        children: 'Header Text H3',
      },
      {
        $formkit: 'primeInputText',
        name: 'email',
        label: 'Email',
        help: 'This will be used for your account.',
        validation: 'required|email',
      },
      {
        $formkit: 'primeInputTextArea',
        name: 'myText',
        label: 'Text',
        validation: '',
        rows: '5',
      },
      {
        $formkit: 'primeEditor',
        name: 'myEditor',
        label: 'Editor',
        validation: '',
      },
      {
        $formkit: 'primeInputText',
        name: 'password',
        label: 'Password',
        help: 'Enter your new password.',
        validation: 'required|length:5,16',
        validationVisibility: "live"

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
      },
      {
        $formkit: 'primeCheckBox',
        name: 'eu_citizen',
        id: 'eu',
        label: 'Are you a european citizen?',
      },
      {
        $formkit: 'select',
        if: '$eu_citizen', // 👀 Oooo, conditionals!
        name: 'cookie_notice',
        label: 'Cookie notice frequency',
        options: {
          refresh: 'Every page load',
          hourly: 'Ever hour',
          daily: 'Every day',
        },
        help: 'How often should we display a cookie notice?',
      },
    ],
);

const data = ref({ email: 'tom@sfxcode.com' });

const submitHandler = async () => {
  // Lets pretend this is an ajax request:
  await new Promise((r) => setTimeout(r, 1000))
}
</script>

<style lang='scss'>

.p-inputtext {
  width: 400px;
}

.p-editor-container  {
  width: 400px;
  height: 250px;
  margin-bottom: 60px;
}
</style>
