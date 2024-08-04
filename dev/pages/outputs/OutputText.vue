<script setup lang='ts'>
const primeAttributes = ''
const customAttributes = 'iconPrefix, prefix, suffix, iconSuffix'

const schema
  = [
    {
      $formkit: 'primeOutputText',
      name: 'name',
      label: 'Basic',
    },
    {
      $formkit: 'primeOutputText',
      name: 'html',
      label: 'HTML as Text (Default)',
    },
    {
      $formkit: 'primeOutputText',
      name: 'html',
      html: true,
      label: 'HTML Output (v-html)',
      help: 'Only use on trusted content or sanitize after input !',
    },
    {
      $formkit: 'primeOutputText',
      id: 'icon',
      name: 'iconLeft',
      label: 'Icon Left',
      help: '',
      iconPrefix: 'pi pi-check',
    },
    {
      $formkit: 'primeOutputText',
      name: 'iconRight',
      label: 'Icon Right',
      help: 'Right Icon Demo',
      iconSuffix: 'pi pi-check text-yellow-500',
    },

  ]

const data = { name: 'Harry Potter', iconLeft: 'Some Text ...', iconRight: 'Another Text ...', html: '<b style="color: gold">Bold Hello World</b>' }
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
