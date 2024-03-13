<script setup lang='ts'>
const primeAttributes = 'length, integerOnly, mask, variant'
const schema
  = [
    {
      $formkit: 'primeInputOtp',
      name: 'myInput',
      label: 'Input OTP',
      length: 6,
      integerOnly: true,
      mask: true,
      variant: 'outlined',
    },
  ]

const data = { }
</script>

<template>
  <div>
    <PrimeInput
      header="PrimeInputNumber" :schema="schema" :data="data"
      :prime-attributes="primeAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
