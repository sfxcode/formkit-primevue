<script setup lang='ts'>
const primeAttributes = ' '
const customAttributes = 'labelLeft, labelRight'

const schema
  = [
    {
      $formkit: 'primeTriStateCheckbox',
      label: 'TriStateCheckbox',
      name: 'triStateCheckbox',
      value: true,
    },
    {
      $formkit: 'primeTriStateCheckbox',
      name: 'triStateCheckboxDisabled',
      labelLeft: 'TriStateCheckbox',
      _disabled: true,
      value: false,
    },
  ]

const data = { readonly: true }
</script>

<template>
  <div>
    <PrimeInput
      header="PrimeTriStateCheckbox" :schema="schema" :data="data"
      :prime-attributes="primeAttributes" :custom-attributes="customAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
