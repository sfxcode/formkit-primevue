<script setup lang='ts'>
import PrimeInput from '@/components/demo/PrimeInput.vue'

const primeAttributes = 'options, optionLabel (default: label), optionValue (default: value), optionDisabled, multiple, unselectable, dataKey'

const selectOptions = [
  { label: 'yes', value: 'YES' },
  { label: 'no', value: 'NO' },
  { label: 'maybe', value: 'MAYBE' },
]

const selectOptions2 = [
  { label: 'Email', value: 'mail' },
  { label: 'Phone', value: 'phone' },
  { label: 'Chat', value: 'chat' },
]

const schema
  = [
    {
      $formkit: 'primeSelectButton',
      label: 'SelectButton',
      name: 'selectButton',
      options: selectOptions,
      optionLabel: 'label',
      optionValue: 'value',
      value: 'MAYBE',
      unselectable: false,
    },
    {
      $formkit: 'primeSelectButton',
      label: 'Contact options',
      name: 'selectButtonMultiple',
      optionLabel: 'label',
      optionValue: 'value',
      options: selectOptions2,
      multiple: true,
    },
  ]

const data = { }
</script>

<template>
  <div>
    <PrimeInput
      header="SelectButton" :schema="schema" :data="data"
      :prime-attributes="primeAttributes"
    />
  </div>
</template>

