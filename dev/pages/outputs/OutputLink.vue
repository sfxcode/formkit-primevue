<script setup lang='ts'>
const primeAttributes = ''
const customAttributes = 'prefixIcon, prefix, suffix, suffixIcon'

const schema
  = [
    {
      $formkit: 'primeOutputLink',
      name: 'link1',
      label: 'Link',
    },
    {
      $formkit: 'primeOutputLink',
      name: 'link2',
      label: 'No prefix',
    },

  ]

const data = { link1: 'https://github.com/sfxcode', link2: 'sfxcode.github.io/formkit-primevue' }
</script>

<template>
  <div class="">
    <PrimeOutput
      header="PrimeOutputLink" :schema="schema" :data="data"
      :prime-attributes="primeAttributes" :custom-attributes="customAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
