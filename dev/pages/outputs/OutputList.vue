<script setup lang='ts'>
const primeAttributes = ''
const customAttributes = 'iconPrefix, prefix, suffix, iconSuffix'

const schema
  = [
    {
      $formkit: 'primeOutputList',
      name: 'list1',
      label: 'list1',
    },
    {
      $formkit: 'primeOutputList',
      name: 'list2',
      divider: ' - ',
      label: 'list2',
    },

  ]

const data = { list1: ['Hello', 'World'], list2: ['FormKit', 'meets', 'PrimeVue'] }
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
