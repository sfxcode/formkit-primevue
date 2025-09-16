<script setup lang='ts'>
import PrimeInput from '@/components/demo/PrimeInput.vue'

const primeAttributes = 'onLabel, offLabel, onIcon, offIcon'

const schema
  = [
    {
      $formkit: 'primeToggleButton',
      label: 'ToggleButton',
      name: 'toggleButton',
    },
    {
      $formkit: 'primeToggleButton',
      label: 'Second ToggleButton',
      name: 'toggleButtonRight',
      iconPos: 'right',
    },
    {
      $formkit: 'primeToggleButton',
      label: 'Custom ToggleButton',
      name: 'toggleButtonCustom',
      iconPos: 'right',
      onIcon: 'pi pi-plus',
      offIcon: 'pi pi-minus',
      onLabel: 'plus',
      offLabel: 'minus',
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
