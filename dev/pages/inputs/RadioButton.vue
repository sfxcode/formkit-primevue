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
      wrapperClass: 'mt-1 flex flex-col space-y-2',
      optionClass: 'flex space-x-2',
      labelClass: 'font-bold',
      optionLabel: 'label',
      optionValue: 'value',
      options: [
        { label: 'Every page load', value: 'refresh' },
        { label: 'Every hour', value: 'hourly' },
        { label: 'Every day', value: 'daily' },
      ],
    },
  ]

const data = { basic: 'refresh' }
</script>

<template>
  <div>
    <PrimeInput
      header="PrimeRadioButton" :schema="schema" :data="data"
      :prime-attributes="primeAttributes" :custom-attributes="customAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
