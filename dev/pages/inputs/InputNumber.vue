<script setup lang='ts'>
const primeAttributes = 'placeholder, useGrouping, minFractionDigits, maxFractionDigits, locale, mode, currency, prefix, suffix, showButtons, buttonLayout, step'
const schema
  = [
    {
      $formkit: 'primeInputNumber',
      name: 'myInputNumber',
      label: 'Input Number',
      value: 1234,
      validation: 'max:10000',
      useGrouping: true,
      minFractionDigits: 2,
    },
    {
      $formkit: 'primeInputNumber',
      name: 'myInputNumber',
      label: 'Input Number',
      value: 1234,
      class: 'customClass',
      style: 'background:gray;',
      _readonly: true,
    },
  ]

const data = { }
</script>

<template>
  <div>
    <PrimeInput
      header="PrimeInputNumber" :schema="schema" :data="data"
      :prime-attributes="primeAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
