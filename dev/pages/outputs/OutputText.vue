<script setup lang='ts'>
const primeAttributes = ''
const customAttributes = 'prefixIcon, prefix, suffix, suffixIcon'

const schema
  = [
    {
      $formkit: 'primeOutputText',
      name: 'name',
      label: 'Basic',
    },
    {
      $formkit: 'primeOutputText',
      id: 'icon',
      name: 'iconLeft',
      label: 'Icon Left',
      help: '',
      prefixIcon: 'pi pi-check',
    },
    {
      $formkit: 'primeOutputText',
      name: 'iconRight',
      label: 'Icon Right',
      help: 'Right Icon Demo',
      suffixIcon: 'pi pi-check text-yellow-500',
    },

  ]

const data = { name: 'Harry Potter', iconLeft: 'Some Text ...', iconRight: 'Another Text ...' }
</script>

<template>
  <div class="">
    <PrimeOutput
      header="PrimeOutputText" :schema="schema" :data="data"
      :prime-attributes="primeAttributes" :custom-attributes="customAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
