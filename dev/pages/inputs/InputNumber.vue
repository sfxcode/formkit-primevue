<script setup lang='ts'>
const primeAttributes = 'placeholder, useGrouping, minFractionDigits, maxFractionDigits, locale, mode, currency, prefix, suffix, showButtons, buttonLayout, step'
const schema
  = [
    {
      $formkit: 'primeInputNumber',
      name: 'firstNumber',
      label: 'Input Number',
      value: 1234,
      validation: 'max:10000',
      useGrouping: true,
      minFractionDigits: 2,
    },
    {
      $formkit: 'primeInputNumber',
      name: 'secondNumber',
      label: 'Input Number',
      value: 999,
      validation: 'min:900',
      useGrouping: false,
      minFractionDigits: 0,
    },
    {
      $formkit: 'primeInputNumber',
      name: 'fixedNumber',
      label: 'Input Number',
      value: 1234,
      class: 'customClass',
      style: { background: 'gray' },
      readonly: true,
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
