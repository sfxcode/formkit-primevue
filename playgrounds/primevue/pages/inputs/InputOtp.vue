<script setup lang='ts'>
const primeAttributes = 'length, integerOnly, mask, variant'
const schema
  = [
    {
      $formkit: 'primeInputOtp',
      name: 'firstInput',
      label: 'Input OTP',
      length: 6,
      integerOnly: true,
      mask: true,
      variant: 'outlined',
    },
    {
      $formkit: 'primeInputOtp',
      name: 'secondInput',
      label: 'Input OTP',
      length: 3,
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
