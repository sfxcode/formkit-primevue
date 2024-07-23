<script setup lang='ts'>
const primeAttributes = ''
const customAttributes = 'icon, iconPosition (left, right)'

const schema
  = [
    {
      $formkit: 'primeOutputNumber',
      name: 'mumber1',
      format: 'decimal',
      label: 'Basic',
      wrapperClass: 'myClass',
    },

    {
      $formkit: 'primeOutputNumber',
      name: 'number2',
      label: 'Icon Left',
      help: '',
      icon: 'pi pi-check',
      iconPosition: 'left',
    },
    {
      $formkit: 'primeOutputNumber',
      name: 'number3',
      format: 'currency',
      label: 'Icon Right',
      help: 'Right Icon Demo',
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
