<script setup lang='ts'>
const primeAttributes = 'dateFormat, showIcon, icon, .... (see documentation)'

const schema
  = [
    {
      $formkit: 'primeCalendar',
      id: 'basic',
      name: 'basic',
      label: 'Basic',
      placeholder: 'MM/DD/YYYY'
    },
    {
      $formkit: 'primeCalendar',
      name: 'styled',
      label: 'Styled',
      style: 'background:gray;',
      class: 'customClass',
      showIcon: true,
    },
    {
      $formkit: 'primeCalendar',
      name: 'icon',
      label: 'Custom Icon',
      dateFormat: 'yy-mm',
      showIcon: true,
      icon: 'pi pi-question',
    },
  ]

const data = { }
</script>

<template>
  <div>
    <PrimeInput
      header="PrimeCalendar" :schema="schema" :data="data"
      :prime-attributes="primeAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
