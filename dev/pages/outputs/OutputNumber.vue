<script setup lang='ts'>
const primeAttributes = ''
const customAttributes = 'prefixIcon, prefix, suffix, suffixIcon'

const schema
  = [
    {
      $formkit: 'primeOutputNumber',
      name: 'mumber1',
      format: 'decimal',
      label: 'Basic',
    },
    {
      $formkit: 'primeOutputNumber',
      name: 'number2',
      label: 'Icon Left',
      help: '',
      prefixIcon: 'pi pi-check',
    },
    {
      $formkit: 'primeOutputNumber',
      name: 'number3',
      format: 'currency',
      label: 'Icon Right',
      help: 'Right Icon Demo',
      suffixIcon: 'pi pi-check',

    },

  ]

const data = { mumber1: 12.2, number2: 42.0, number3: 20000 }
</script>

<template>
  <div class="">
    <PrimeOutput
      header="PrimeOutputNumber" :schema="schema" :data="data"
      :prime-attributes="primeAttributes" :custom-attributes="customAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
