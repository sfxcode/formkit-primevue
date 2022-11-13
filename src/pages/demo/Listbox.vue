<script setup lang='ts'>
import PrimeInput from '@/components/demo/PrimeInput.vue'

const primeAttributes = 'placeholder, options, filter, optionLabel (default: label), optionValue (default: value), multiple'

const options = [
  { label: 'Every page load', value: 'refresh' },
  { label: 'Ever hour', value: 'hourly' },
  { label: 'Every day', value: 'daily' },
]

const schema
  = [
    {
      $formkit: 'primeListbox',
      name: 'cookie_notice',
      label: 'Cookie notice Dropdown',
      value: 'hourly',
      options,
      help: 'Cookie notice frequency ?',
    },
    {
      $formkit: 'primeListbox',
      name: 'styled',
      label: 'Styled',
      value: 'hourly',
      style: 'background:gray;',
      class: 'customClass',
      options: [
        { label: 'Every page load', value: 'refresh' },
        { label: 'Ever hour', value: 'hourly' },
        { label: 'Every day', value: 'daily' },
      ],
      _disabled: 'true',
    },
    {
      $formkit: 'primeListbox',
      name: 'custom',
      label: 'With Multiple Select and Filter',
      multiple: true,
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
      header="Listbox" :schema="schema" :data="data"
      :prime-attributes="primeAttributes"
    />
  </div>
</template>

