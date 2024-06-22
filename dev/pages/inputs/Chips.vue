<script setup lang='ts'>
import PrimeInput from '@/components/demo/PrimeInput.vue'

const primeAttributes = 'placeholder, separator, allowDuplicate, max, addOnBlur'

const schema
  = [
    {
      $formkit: 'primeChips',
      id: 'basic',
      name: 'basic',
      label: 'Basic',
      separator: ',',
      placeholder: 'Some values ...',
    },
    {
      $formkit: 'primeChips',
      name: 'styled',
      label: 'Styled',
      style: { background: 'gray' },
      class: 'customClass',
    },
    {
      $formkit: 'primeChips',
      name: 'max',
      label: 'Max 3 - no duplicates - add on blur',
      max: 3,
      allowDuplicate: false,
      separator: ',',
      addOnBlur: true,
    },
  ]

const data = { }
</script>

<template>
  <div>
    <PrimeInput
      header="PrimeChips (Deprecated in PrimeVue 4)" :schema="schema" :data="data"
      :prime-attributes="primeAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
