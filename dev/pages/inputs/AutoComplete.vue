<script setup lang='ts'>
const primeAttributes = 'placeholder, separator, allowDuplicate, max, addOnBlur'

const list = ['Hello', 'Hero', 'House', 'World']

function search(query: string) {
  return [...list.filter(i => i.toLowerCase().includes(query.toLowerCase())), query]
}

const schema
  = [
    {
      $formkit: 'primeAutoComplete',
      id: 'basic',
      name: 'basic',
      complete: search,
      dropdown: true,
      label: 'Basic AutoComplete - Use [h]ello',
    },
    {
      $formkit: 'primeAutoComplete',
      id: 'chips',
      name: 'chips',
      multiple: true,
      typeahead: false,
      label: 'Chips Replacement',
    },
  ]

const data = { }
</script>

<template>
  <div>
    <PrimeInput
      header="AutoComplete" :schema="schema" :data="data"
      :prime-attributes="primeAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
