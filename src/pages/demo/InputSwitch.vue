<script setup lang='ts'>
const primeAttributes = 'trueValue, falseValue'
const customAttributes = 'labelLeft, labelRight'

const schema
  = [
    {
      $formkit: 'primeInputSwitch',
      id: 'basic',
      name: 'basic',
      label: 'Basic',
    },
    {
      $formkit: 'primeInputSwitch',
      name: 'eu_citizen',
      id: 'eu',
      labelLeft: 'Are you a european citizen: ',
    },
    {
      $formkit: 'primeInputSwitch',
      name: 'readonly',
      label: 'readonly does not work atn',
      _readonly: true,
    },
    {
      $formkit: 'primeInputSwitch',
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
      header="PrimeInputSwitch" :schema="schema" :data="data"
      :prime-attributes="primeAttributes" :custom-attributes="customAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
