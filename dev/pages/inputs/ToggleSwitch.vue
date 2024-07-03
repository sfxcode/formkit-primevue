<script setup lang='ts'>
const primeAttributes = 'trueValue, falseValue'
const customAttributes = 'labelLeft, labelRight, option_class'

const schema
  = [
    {
      $formkit: 'primeToggleSwitch',
      id: 'basic',
      name: 'basic',
      label: 'Basic',
    },
    {
      $formkit: 'primeToggleSwitch',
      name: 'eu_citizen',
      id: 'eu',
      labelRight: 'Are you a european citizen: ',
      option_class: 'flex items-center',
    },
    {
      $formkit: 'primeToggleSwitch',
      name: 'confirmation',
      id: 'confirm',
      labelLeft: 'Are you sure ?',
      option_class: 'flex items-center',
    },
    {
      $formkit: 'primeToggleSwitch',
      name: 'readonly',
      label: 'readonly',
      readonly: true,
    },
    {
      $formkit: 'primeToggleSwitch',
      name: 'custom',
      label: 'custom values',
      trueValue: 'A',
      falseValue: 'B',
    },
  ]

const data = { readonly: true }
</script>

<template>
  <div>
    <PrimeInput
      header="PrimeToggleSwitch" :schema="schema" :data="data"
      :prime-attributes="primeAttributes" :custom-attributes="customAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
