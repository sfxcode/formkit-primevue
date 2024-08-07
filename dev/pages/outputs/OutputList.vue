<script setup lang='ts'>
const primeAttributes = ''
const customAttributes = 'iconPrefix, prefix, suffix, iconSuffix'

const schema
  = [
    {
      $formkit: 'primeOutputList',
      name: 'list1',
      label: 'Default Divider',
    },
    {
      $formkit: 'primeOutputList',
      name: 'list1',
      label: 'Custom Divider',
      divider: ' ',
    },
    {
      $formkit: 'primeOutputList',
      name: 'list2',
      label: 'Custom Divider with Prefix Icon',
      iconPrefix: 'pi pi-list',
      divider: ' - ',
    },
    {
      $formkit: 'primeOutputList',
      name: 'list2',
      label: 'Use Chip Item Class',
      itemClass: 'p-chip-item',
      divider: ' ',
    },

  ]

const data = { list1: ['Hello', 'World'], list2: ['FormKit', 'meets', 'PrimeVue'] }
</script>

<template>
  <div class="">
    <PrimeOutput
      header="PrimeOutputList" :schema="schema" :data="data"
      :prime-attributes="primeAttributes" :custom-attributes="customAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
