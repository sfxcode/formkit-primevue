<script setup lang='ts'>
import PrimeInput from '@/components/demo/PrimeInput.vue'

const primeAttributes = 'placeholder, options, filter, optionLabel (default: label), optionValue (default: value)'

const options = [
  { label: 'Every page load', value: 'refresh' },
  { label: 'Every hour', value: 'hourly' },
  { label: 'Every day', value: 'daily' },
]

const schema
  = [
    {
      $formkit: 'primeMultiSelect',
      name: 'cookie_notice',
      label: 'Cookie notice MultiSelect',
      options,
      help: 'Cookie notice frequency ?',
    },
    {
      $formkit: 'primeMultiSelect',
      name: 'styled',
      label: 'Styled',
      style: 'background:gray;',
      class: 'customClass',
      options: [
        { label: 'Every page load', value: 'refresh' },
        { label: 'Every hour', value: 'hourly' },
        { label: 'Every day', value: 'daily' },
      ],
      _disabled: true,
    },
    {
      $formkit: 'primeMultiSelect',
      name: 'custom',
      label: 'With Multiple Select and Filter',
      filter: true,
      placeholder: 'Please select',
      options,
      validation: 'required',
    },
  ]

const data = { }
</script>

<template>
  <div>
    <PrimeInput
      header="MultiSelect" :schema="schema" :data="data"
      :prime-attributes="primeAttributes"
    />
  </div>
</template>
