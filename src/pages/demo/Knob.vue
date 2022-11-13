<script setup lang='ts'>
import PrimeInput from '@/components/demo/PrimeInput.vue'

const primeAttributes = 'min, max, step, size, strokeWidth, showValue, valueColor, rangeColor, textColor, valueTemplate'

const schema
  = [
    {
      $formkit: 'primeKnob',
      name: 'knob',
      label: 'Use Knob',
      value: 50,
      validation: 'min:20|max:80',
    },
    {
      $formkit: 'primeKnob',
      name: 'custom',
      label: 'Customized Knob',
      min: 42,
      max: 98,
      step: 4,
      value: 58,
      showValue: false,
    },
  ]

const data = { }
</script>

<template>
  <div>
    <PrimeInput
      header="PrimeKnob" :schema="schema" :data="data"
      :prime-attributes="primeAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
