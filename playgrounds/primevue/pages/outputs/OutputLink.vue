<script setup lang='ts'>
const primeAttributes = ''
const customAttributes = 'iconPrefix, prefix, suffix, iconSuffix'

const schema
  = [
    {
      $formkit: 'primeOutputLink',
      name: 'link1',
      label: 'External Link',
    },
    {
      $formkit: 'primeOutputLink',
      name: 'link2',
      label: 'Ensure protocol and use custom title',
      title: 'Click me',
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
