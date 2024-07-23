<script setup lang='ts'>
const primeAttributes = ''
const customAttributes = 'icon, iconPosition (left, right)'

const schema
  = [
    {
      $formkit: 'primeOutputBoolean',
      name: 'trueValue',
      label: 'True',
    },
    {
      $formkit: 'primeOutputBoolean',
      name: 'falseValue',
      label: 'False',
    },

  ]

const data = { trueValue: true, falseValue: false }
</script>

<template>
  <div class="">
    <PrimeOutput
      header="PrimeOutputBoolean" :schema="schema" :data="data"
      :prime-attributes="primeAttributes" :custom-attributes="customAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
