<script setup lang='ts'>
const primeAttributes = 'placeholder'
const customAttributes = 'iconLeft, iconRight'

const pt_content = {
  root: { style: 'font-weight: 600;color: green;' },
}

const schema
  = [
    {
      $formkit: 'primeInputText',
      name: 'name',
      label: 'Basic',
      help: 'Required.',
      validation: 'required',
      pt: pt_content
    },

  ]

const data = { name: 'Some Text in Green' }
</script>

<template>
  <div class="">
    <PrimeInput
      header="Pass Through" :schema="schema" :data="data"
      :prime-attributes="primeAttributes" :custom-attributes="customAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
