<template>
  <h1>Basic Form</h1>

  <FormKit
    id="form"
    v-model="data"
    type="form"
    @submit="submitHandler"
    :submit-attrs="{
      inputClass: 'p-button p-component',
    }"
  >
    <FormKit
      type="primeInputText"
      iconLeft="pi pi-search"
      test="10"
      name="email"
      label="Email Adresse"
      placeholder="jon@foo.com"
      validation="required|email|length:16,9"
      validation-visibility="live"
    />
    <FormKit
      type="primeInputText"
      test="10"
      name="email2"
      label="Email Adresse 2"
      placeholder="jon@foo.com"
      validation="required|email|length:16,9"
      validation-visibility="live"
    />

  </FormKit>
  <pre>{{ data }}</pre>
</template>

<script setup lang="ts">
import { setErrors } from '@formkit/vue';
import { ref } from 'vue'


const data = ref({email:"tom@sfxcode.com"})

const date = new Date()
const month = date.getMonth() + 1
const day = date.getDate()
const year = date.getFullYear()
const addYear = month > 6 ? 1 : (month === 6 ? (day > 21 ? 1 : 0) : 0)
const summerStart = new Date(`${year + addYear}-6-21`)
const summerEnd = new Date(`${year + addYear}-9-22`)

const countries = [
  {
    label: 'Italy',
    value: 'it',
    // help: 'This is the best one'
  },
  {
    label: 'France',
    value: 'fr',
    attrs: { disabled: true },
    // help: 'This is smelliest one'
  },
  {
    label: 'Germany',
    value: 'de',
    help: 'This is the cleanest one',
  },
]

const submitHandler = async function () {
  await new Promise(r => setTimeout(r, 2000))
  setErrors('form', ['This isn’t setup to actually do anything.'])
}
</script>
