<script setup lang='ts'>
const primeAttributes = ''
const customAttributes = 'prefixIcon, prefix, suffix, suffixIcon'

const schema
  = [
    {
      $formkit: 'primeOutputBoolean',
      name: 'trueValue',
      label: 'True Example',
      prefix: 'MyValue',
      prefixIcon: 'pi pi-check',

    },
    {
      $formkit: 'primeOutputBoolean',
      name: 'falseValue',
      label: 'False',
      suffix: 'MyValue',
      suffixIcon: 'pi pi-check',
    },
    {
      $formkit: 'primeOutputBoolean',
      name: 'falseValue',
      label: 'False',
      prefix: 'prefix',
      prefixIcon: 'pi pi-check',
      suffix: 'suffix',
      suffixIcon: 'pi pi-times',
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
