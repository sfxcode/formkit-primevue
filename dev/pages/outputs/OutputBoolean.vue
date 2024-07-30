<script setup lang='ts'>
const primeAttributes = ''
const customAttributes = 'iconPrefix, prefix, suffix, iconSuffix'

const schema
  = [
    {
      $formkit: 'primeOutputBoolean',
      name: 'trueValue',
      label: 'True Example',
      prefix: 'MyValue',
      iconPrefix: 'pi pi-check',

    },
    {
      $formkit: 'primeOutputBoolean',
      name: 'falseValue',
      label: 'False',
      suffix: 'MyValue',
      iconSuffix: 'pi pi-check',
    },
    {
      $formkit: 'primeOutputBoolean',
      name: 'falseValue',
      label: 'False',
      prefix: 'prefix',
      iconPrefix: 'pi pi-check',
      suffix: 'suffix',
      iconSuffix: 'pi pi-times',
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
