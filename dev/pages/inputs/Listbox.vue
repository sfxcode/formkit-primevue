<script setup lang='ts'>
import PrimeInput from '@/components/demo/PrimeInput.vue'

const primeAttributes = 'placeholder, options, filter, optionLabel, optionValue, multiple, displayMode, transferLeftHeaderText, transferRightHeaderText, transferAll'

const options = [
  { label: 'Every page load', value: 'refresh' },
  { label: 'Every hour', value: 'hourly' },
  { label: 'Every day', value: 'daily' },
]

const cityOptions = [
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
  { name: 'Berlin', code: 'BER' },
  { name: 'Tokyo', code: 'TKY' },
  { name: 'Madrid', code: 'MAD' },
]

const schema
  = [
    {
      $formkit: 'primeListbox',
      name: 'cookie_notice',
      label: 'Cookie notice',
      value: 'hourly',
      optionLabel: 'label',
      optionValue: 'value',
      options,
      help: 'Cookie notice frequency ?',
    },
    {
      $formkit: 'primeListbox',
      name: 'styled',
      label: 'Styled and Disabled',
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
    {
      $formkit: 'primeListbox',
      name: 'selectedCities',
      label: 'Transfer List - Select Your Cities',
      help: 'Move cities between lists using the buttons',
      displayMode: 'transfer',
      transferLeftHeaderText: 'Available Cities',
      transferRightHeaderText: 'Selected Cities',
      transferHeaderClass: 'text-base font-semibold',
      transferAll: true,
      optionLabel: 'name',
      optionValue: 'code',
      options: cityOptions,
      filter: true,
      filterPlaceholder: 'Search cities...',
    },
  ]

const data = { selectedCities: [{ name: 'Paris', code: 'PRS' }] }
</script>

<template>
  <div>
    <PrimeInput
      header="Listbox" :schema="schema" :data="data"
      :prime-attributes="primeAttributes"
    />
  </div>
</template>
