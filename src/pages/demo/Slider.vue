<script setup lang='ts'>
import PrimeInput from '@/components/demo/PrimeInput.vue'

const primeAttributes = 'min, max, step, range, orientation'

const schema
  = [
    {
      $formkit: 'primeSlider',
      name: 'slider',
      label: 'Use Slider',
      min: 5,
      max: 100,
      step: 5,
      value: 10,
      validation: 'min:20|max:80',
    },
    {
      $formkit: 'primeSlider',
      name: 'sliderVertical',
      label: 'Use Slider',
      min: 1,
      max: 10,
      value: 4,
      orientation: 'vertical',
    },
  ]

const data = { }
</script>

<template>
  <div>
    <PrimeInput
      header="PrimeSlider" :schema="schema" :data="data"
      :prime-attributes="primeAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
