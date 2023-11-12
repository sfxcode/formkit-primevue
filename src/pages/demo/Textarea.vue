<script setup lang='ts'>
const primeAttributes = 'placeholder, rows'
const schema
  = [
    {
      $formkit: 'primeTextarea',
      id: 'basic',
      name: 'name',
      label: 'Basic',
      help: 'Required.',
      validation: 'required',
    },
    {
      $formkit: 'primeTextarea',
      name: 'name',
      label: '5 Rows',
      rows: 5,
    },
    {
      $formkit: 'primeTextarea',
      name: 'name',
      placeholder: 'Styled',
      style: 'background:gray;',
      class: 'customClass',
    },
    {
      $formkit: 'primeTextarea',
      name: 'name',
      placeholder: 'Read Only',
      _readonly: true,
    },

  ]

const data = { }
</script>

<template>
  <div>
    <PrimeInput
      header="PrimeInputTextarea" :schema="schema" :data="data"
      :prime-attributes="primeAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
