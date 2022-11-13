<script setup lang='ts'>
const primeAttributes = 'placeholder, mask, slotChar, autoClear, unmask'
const schema
  = [
    {
      $formkit: 'primeInputMask',
      name: 'myInputMask',
      label: 'Input Mask',
      validation: 'required',
      validationVisibility: 'live',
      mask: '99-999999',
      placeholder: '99-999999',
    },
    {
      $formkit: 'primeInputMask',
      name: 'custom',
      label: 'Input Mask',
      mask: '(999) 999-9999',
      unmask: true,
    },
  ]

const data = { }
</script>

<template>
  <div>
    <PrimeInput
      header="PrimeInputMask" :schema="schema" :data="data"
      :prime-attributes="primeAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
