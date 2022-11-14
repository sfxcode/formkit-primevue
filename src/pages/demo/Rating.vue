<script setup lang='ts'>
import PrimeInput from '@/components/demo/PrimeInput.vue'

const primeAttributes = 'stars, cancel, onIcon, officon, cancelIcon'

const schema
  = [
    {
      $formkit: 'primeRating',
      label: 'Select Rating',
      name: 'rating',
    },
    {
      $formkit: 'primeRating',
      label: 'Select Rating',
      name: 'ratingDisabled',
      value: 3,
      _disabled: true,
    },
    {
      $formkit: 'primeRating',
      label: 'Select Rating',
      name: 'ratingCancel',
      value: 7,
      stars: 10,
      cancel: true,
    },
  ]

const data = { }
</script>

<template>
  <div>
    <PrimeInput
      header="PrimeRating" :schema="schema" :data="data"
      :prime-attributes="primeAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
