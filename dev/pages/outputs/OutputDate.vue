<script setup lang='ts'>
const primeAttributes = ''
const customAttributes = 'iconPrefix, prefix, suffix, iconSuffix'

const schema
  = [
    {
      $formkit: 'primeOutputDate',
      name: 'date1',
      label: 'Basic',
    },
    {
      $formkit: 'primeOutputDate',
      id: 'date2',
      name: 'date2',
      label: 'Icon Left',
      help: '',
      iconPrefix: 'pi pi-check',
    },
    {
      $formkit: 'primeOutputDate',
      name: 'date3',
      label: 'Icon Right',
      help: 'Right Icon Demo',
      iconSuffix: 'pi pi-check text-yellow-500',
    },

  ]

const data = { date1: new Date(), date2: new Date(), date3: new Date() }
</script>

<template>
  <div class="">
    <PrimeOutput
      header="PrimeOutputDate" :schema="schema" :data="data"
      :prime-attributes="primeAttributes" :custom-attributes="customAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
