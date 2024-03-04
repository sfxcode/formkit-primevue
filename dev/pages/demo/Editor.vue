<script setup lang='ts'>
const primeAttributes = 'placeholder'
const schema
  = [
    {
      $formkit: 'primeEditor',
      name: 'myEditor',
      label: 'Editor',
      validation: 'required',
      class: 'test',
    },
    {
      $formkit: 'primeEditor',
      name: 'custom',
      label: 'Editor',
      style: 'height: 160px;margin-bottom:80px;',
      placeholder: 'Some placeholder',
    },

  ]

const data = { }
</script>

<template>
  <div>
    <PrimeInput
      header="PrimeEditor" :schema="schema" :data="data"
      :prime-attributes="primeAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
