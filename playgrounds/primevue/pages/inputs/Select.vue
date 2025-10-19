<script setup lang='ts'>
import PrimeInput from '@/components/demo/PrimeInput.vue'

const primeAttributes = 'placeholder, options, showClear, filter, optionLabel, optionValue'

const options = [
  { label: 'Every page load', value: 'refresh' },
  { label: 'Every hour', value: 'hourly' },
  { label: 'Every day', value: 'daily' },
]

const cities = [
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
]

const stringArray = ['refresh', 'hourly', 'daily']

const schema
  = [
    {
      $formkit: 'primeSelect',
      name: 'selectValue',
      label: 'Cookie notice Select',
      value: 'hourly',
      optionLabel: 'label',
      optionValue: 'value',
      options,
      help: 'Cookie notice frequency ?',
    },
    {
      $formkit: 'primeSelect',
      name: 'selectObjectByLabel',
      label: 'Select Object',
      optionLabel: 'name',
      options: cities,
    },
    {
      $formkit: 'primeSelect',
      name: 'selectString',
      label: 'Simple String Array Select',
      options: stringArray,
    },
    {
      $formkit: 'primeSelect',
      name: 'styled',
      label: 'Styled',
      value: 'hourly',
      style: { background: 'gray' },
      class: 'customClass',
      optionLabel: 'label',
      optionValue: 'value',
      options: [
        { label: 'Every page load', value: 'refresh' },
        { label: 'Every hour', value: 'hourly' },
        { label: 'Every day', value: 'daily' },
      ],
      disabled: true,
    },
    {
      $formkit: 'primeSelect',
      name: 'custom',
      label: 'With Clear and Filter',
      showClear: true,
      filter: true,
      placeholder: 'Please select',
      optionLabel: 'label',
      optionValue: 'value',
      options,
      validation: 'required',
    },
  ]

const data = { }
</script>

<template>
  <div>
    <PrimeInput
      header="PrimeSelect" :schema="schema" :data="data"
      :prime-attributes="primeAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
