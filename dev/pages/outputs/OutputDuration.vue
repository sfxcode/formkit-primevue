<script setup lang='ts'>
const primeAttributes = ''
const customAttributes = 'prefixIcon, prefix, suffix, suffixIcon'

const schema
  = [
    {
      $formkit: 'primeOutputDuration',
      name: 'duration1',
      label: 'Duration',
    },
    {
      $formkit: 'primeOutputDuration',
      name: 'duration2',
      label: 'Another Duration',
    },
    {
      $formkit: 'primeOutputDuration',
      name: 'duration3',
      label: 'Another Duration',
    },

  ]

const data = { duration1: '142', duration2: '4h35m', duration3: '3:47' }
</script>

<template>
  <div class="">
    <PrimeOutput
      header="PrimeOutputDuration" :schema="schema" :data="data"
      :prime-attributes="primeAttributes" :custom-attributes="customAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
