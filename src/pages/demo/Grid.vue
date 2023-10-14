<script setup lang='ts'>
const primeAttributes = 'placeholder'
const customAttributes = 'iconLeft, iconRight'

const schema
  = [
  {
    $el: 'div', // try an h1!
    attrs: {
      'class': 'flex gap-4',
    },
    children: [
      {
        $formkit: 'primeInputText',
        name: 'name',
        label: 'Col 1',
        help: 'Required.',
        validation: 'required',
      },
      {
        $formkit: 'primeInputText',
        name: 'name2',
        label: 'Col 2',

      },
    ],
  },
  ]

const data = { name: 'Name', name2: 'Name 2' }
</script>

<template>
  <div class="">
    <PrimeInput
      header="Grid" :schema="schema" :data="data"
      :prime-attributes="primeAttributes" :custom-attributes="customAttributes"
    >

    </PrimeInput>
  </div>
</template>

<style lang='scss' scoped>

</style>
