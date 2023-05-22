<script setup lang='ts'>
import PrimeInput from '@/components/demo/PrimeInput.vue'

const primeAttributes = 'onLabel, offLabel, onIcon, offIcon, iconPos'

const schema
  = [
    {
      $formkit: 'primeToggleButton',
      label: 'Select ToggleButton',
      name: 'toggleButton',
    },
    {
      $formkit: 'primeToggleButton',
      label: 'Select ToggleButton',
      name: 'toggleButtonRight',
      iconPos: 'right',
    },
  ]

const data = { }
</script>

<template>
  <div>
    <PrimeInput
      header="PrimeToggleButton" :schema="schema" :data="data"
      :prime-attributes="primeAttributes"
    />
  </div>
</template>
