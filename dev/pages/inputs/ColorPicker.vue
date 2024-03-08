<script setup lang='ts'>
import PrimeInput from '@/components/demo/PrimeInput.vue'

const primeAttributes = 'placeholder, separator, allowDuplicate, max, addOnBlur'

const schema
  = [
    {
      $formkit: 'primeColorPicker',
      label: 'Select Color',
      name: 'color',
    },
    {
      $formkit: 'primeColorPicker',
      name: 'styled',
      label: 'Styled + Disabled',
      style: 'background:gray;',
      class: 'customClass',
      _disabled: true,
    },
    {
      $formkit: 'primeColorPicker',
      name: 'inline',
      label: 'Inline - Format RGB',
      inline: true,
      format: 'rgb',
    },
  ]

const data = { }
</script>

<template>
  <div>
    <PrimeInput
      header="PrimeColorPicker" :schema="schema" :data="data"
      :prime-attributes="primeAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
