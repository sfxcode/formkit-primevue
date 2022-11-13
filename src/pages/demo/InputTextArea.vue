<script setup lang='ts'>
const primeAttributes = 'style, class, placeholder'
const customAttributes = 'iconLeft, iconRight'
const schema
  = [
    {
      $formkit: 'primeInputTextArea',
      id: 'basic',
      name: 'name',
      label: 'Basic',
      help: 'Required.',
      validation: 'required',
    },
    {
      $formkit: 'primeInputTextArea',
      name: 'name',
      label: '5 Rows',
      rows: 5,
    },
    {
      $formkit: 'primeInputTextArea',
      name: 'name',
      placeholder: 'Styled',
      style: 'background:gray;',
      class: 'customClass',
    },
    {
      $formkit: 'primeInputTextArea',
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
      header="PrimeInputText" :schema="schema" :data="data"
      :prime-attributes="primeAttributes" :custom-attributes="customAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
