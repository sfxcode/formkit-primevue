<script setup lang='ts'>
const primeAttributes = ''
const customAttributes = 'icon, iconPosition (left, right)'

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
      icon: 'pi pi-check',
      iconPosition: 'left',
    },
    {
      $formkit: 'primeOutputDate',
      name: 'date3',
      label: 'Icon Right',
      help: 'Right Icon Demo',
      icon: 'pi pi-check text-yellow-500',
      iconPosition: 'right',
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
