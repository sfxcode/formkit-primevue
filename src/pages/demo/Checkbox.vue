<script setup lang='ts'>
const primeAttributes = 'binary (dfault = true), trueValue, falseValue'
const customAttributes = 'labelLeft, labelRight'

const schema
  = [
    {
      $formkit: 'primeCheckbox',
      id: 'basic',
      name: 'basic',
      label: 'Basic',
    },
    {
      $formkit: 'primeCheckbox',
      name: 'eu_citizen',
      id: 'eu',
      labelLeft: 'Are you a european citizen: ',
    },
    {
      $formkit: 'primeCheckbox',
      name: 'readonly',
      label: 'readonly does not work atn',
      _readonly: true,
    },
    {
      $formkit: 'primeCheckbox',
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
      header="PrimeCheckbox" :schema="schema" :data="data"
      :prime-attributes="primeAttributes" :custom-attributes="customAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
