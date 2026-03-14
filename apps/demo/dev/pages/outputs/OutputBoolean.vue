<script setup lang='ts'>
const primeAttributes = ''
const customAttributes = 'iconPrefix, prefix, suffix, iconSuffix'

const schema
  = [
    {
      $formkit: 'primeOutputBoolean',
      name: 'trueValue',
      label: 'Default',
    },
    {
      $formkit: 'primeOutputBoolean',
      name: 'trueValue',
      prefix: 'Boolean Value:',
    },
    {
      $formkit: 'primeOutputBoolean',
      name: 'falseValue',
      label: 'False Example',
    },

    {
      $formkit: 'primeOutputBoolean',
      name: 'trueValue',
      label: 'True with custom Text',
      trueValue: 'Sure',
    },
    {
      $formkit: 'primeOutputBoolean',
      name: 'falseValue',
      label: 'False with custom Text',
      falseValue: 'Never',
    },
    {
      $formkit: 'primeOutputBoolean',
      name: 'trueValue',
      label: 'Conditional true - only Icon',
      if: '$trueValue',
      trueValue: '',
      iconSuffix: 'pi pi-check',
    },
    {
      $formkit: 'primeOutputBoolean',
      name: 'falseValue',
      label: 'Conditional false - only Icon',
      if: '!$falseValue',
      falseValue: '',
      iconSuffix: 'pi pi-minus',
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
