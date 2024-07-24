<script setup lang='ts'>
const schema
  = [
    {
      $formkit: 'primeInputText',
      name: 'name',
      label: 'Styling by class',
      help: 'Required.',
      validation: 'required',
      outerClass: 'stylingOuterClass',
    },
    {
      $formkit: 'primeInputText',
      name: 'name2',
      label: 'Styling by class',
      help: 'Required.',
      validation: 'required',
      innerClass: 'stylingSampleClass',

    },

  ]

const data = { name: 'Some Label in Green', name2: 'Some Text in Green' }
</script>

<template>
  <div class="">
    <PrimeInput
      header="Styling" :schema="schema" form-class="grid grid-cols-2 gap-4" :data="data"
    >
      <div class="pb-8" />
    </PrimeInput>
  </div>
</template>

<style lang='scss'>
  .stylingOuterClass {
    color: yellowgreen;
  }
  .stylingSampleClass {
    input {
      color: green;
  }
}
</style>
