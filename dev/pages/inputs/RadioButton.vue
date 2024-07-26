<script setup lang='ts'>
const primeAttributes = 'options, optionLabel, optionValue'
const customAttributes = 'optionClass'

const schema
  = [
    {
      $formkit: 'primeRadioButton',
      id: 'basic',
      label: 'Select',
      name: 'basic',
      optionLabel: 'label',
      optionValue: 'value',
      options: [
        { label: 'Every page load', value: 'refresh' },
        { label: 'Every hour', value: 'hourly' },
        { label: 'Every day', value: 'daily' },
      ],
    },
    {
      $formkit: 'primeRadioButton',
      id: 'answer',
      label: 'Select Answer',
      name: 'answer',
      optionLabel: 'label',
      optionValue: 'value',
      options: [
        { label: 'A', value: 'A' },
        { label: 'B', value: 'B' },
        { label: 'C', value: 'C' },
        { label: 'D', value: 'D' },
        { label: 'E', value: 'E' },

      ],
    },
  ]

const data = { basic: 'refresh' }
</script>

<template>
  <div>
    <PrimeInput
      class="space-x-2 items-center"
      header="PrimeRadioButton" :schema="schema" :data="data"
      :prime-attributes="primeAttributes" :custom-attributes="customAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
