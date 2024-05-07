<script setup lang='ts'>
import PrimeInput from '@/components/demo/PrimeInput.vue'

const primeAttributes = 'placeholder, options, filter, optionLabel, optionValue, multiple'

const options = [
  { label: 'Every page load', value: 'refresh' },
  { label: 'Every hour', value: 'hourly' },
  { label: 'Every day', value: 'daily' },
]

const schema
  = [
    {
      $formkit: 'primeListbox',
      name: 'cookie_notice',
      label: 'Cookie notice Dropdown',
      value: 'hourly',
      optionLabel: 'label',
      optionValue: 'value',
      options,
      help: 'Cookie notice frequency ?',
    },
    {
      $formkit: 'primeListbox',
      name: 'styled',
      label: 'Styled and Diabled',
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
      disabled: true,
    },
    {
      $formkit: 'primeListbox',
      name: 'custom',
      label: 'With Multiple Select and Filter',
      multiple: true,
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
      header="Listbox" :schema="schema" :data="data"
      :prime-attributes="primeAttributes"
    />
  </div>
</template>
