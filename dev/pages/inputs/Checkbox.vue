<script setup lang='ts'>
const primeAttributes = 'binary (dfault = true), trueValue, falseValue'
const customAttributes = 'prefix, suffix'

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
      id: 'eu',
      prefix: 'Are you a european citizen: ',
    },
    {
      $formkit: 'primeCheckbox',
      id: 'taxes',
      suffix: 'Taxes includes ',
    },
    {
      $formkit: 'primeCheckbox',
      name: 'readonly',
      label: 'readonly',
      readonly: true,
    },
    {
      $formkit: 'primeCheckbox',
      name: 'indeterminate',
      label: 'indeterminate',
      indeterminate: true,
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
