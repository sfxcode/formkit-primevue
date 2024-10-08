<script setup lang='ts'>
const primeAttributes = 'placeholder, separator, allowDuplicate, max, addOnBlur'

const list = ['Hello', 'Hero', 'House', 'World']

function search(query: string) {
  return [...list.filter(i => i.toLowerCase().includes(query.toLowerCase())), query]
}

const userList = [
  { id: '1', name: 'Tom', value: '123' },
  { id: '2', name: 'Tim', value: '124' },
]

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
      id: 'basic',
      name: 'id',
      dropdown: true,
      label: 'Object AutoComplete - Use [t]om',
      options: userList,
      optionLabel: 'name',
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

const data = { id: { id: '1', name: 'Tom', value: '123' } }
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
