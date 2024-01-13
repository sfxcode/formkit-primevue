<script setup lang='ts'>
import PrimeInput from '@/components/demo/PrimeInput.vue'

const primeAttributes = 'placeholder, options, showClear, filter, optionLabel (default: label), optionValue (default: value)'

const options = [
  { label: 'Every page load', value: 'refresh' },
  { label: 'Every hour', value: 'hourly' },
  { label: 'Every day', value: 'daily' },
]

const schema
  = [
    {
      $formkit: 'primeDropdown',
      name: 'cookie_notice',
      label: 'Cookie notice Dropdown',
      value: 'hourly',
      optionLabel: 'label',
      optionValue: 'value',
      options,
      help: 'Cookie notice frequency ?',
    },
    {
      $formkit: 'primeDropdown',
      name: 'styled',
      label: 'Styled',
      value: 'hourly',
      style: 'background:gray;',
      class: 'customClass',
      optionLabel: 'label',
      optionValue: 'value',
      options: [
        { label: 'Every page load', value: 'refresh' },
        { label: 'Every hour', value: 'hourly' },
        { label: 'Every day', value: 'daily' },
      ],
      _disabled: true,
    },
    {
      $formkit: 'primeDropdown',
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
      header="PrimeDropdown" :schema="schema" :data="data"
      :prime-attributes="primeAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
