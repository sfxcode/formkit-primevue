<script setup lang='ts'>
const primeAttributes = 'placeholder'
const schema
  = [
    {
      $formkit: 'primePassword',
      name: 'password_confirm',
      label: 'Confirm password',
      placeholder: 'password',

    },
  ]

const data = { }
</script>

<template>
  <div>
    <PrimeInput
      header="PrimePassword" :schema="schema" :data="data"
      :prime-attributes="primeAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
