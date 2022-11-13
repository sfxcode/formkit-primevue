<script setup lang='ts'>
const primeAttributes = 'style, class, placeholder, useGrouping, minFractionDigits, maxFractionDigits, locale, mode, currency, prefix, suffix, showButtons, buttonLayout, step'
const customAttributes = ''
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
      header="PrimeInputText" :schema="schema" :data="data"
      :prime-attributes="primeAttributes" :custom-attributes="customAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
