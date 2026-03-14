<script setup lang='ts'>
const primeAttributes = 'placeholder, multiple, typeahead, optionLabel, size, minLength, fluid'

const list = ['Hello', 'Hero', 'House', 'World']

function search(query: string) {
  return [...list.filter(i => i.toLowerCase().includes(query.toLowerCase())), query]
}

async function asyncSearch(query: string) {
  await new Promise(resolve => setTimeout(resolve, 1000))
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
      id: 'async',
      name: 'async',
      complete: asyncSearch,
      dropdown: true,
      label: 'Async AutoComplete - Use [he]llo',
      minLength: 2,
      placeholder: 'Type at least 2 characters',
      fluid: true,
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
    {
      $formkit: 'primeAutoComplete',
      id: 'chips2',
      name: 'chips2',
      multiple: true,
      typeahead: false,
      label: 'Chips - Paste separated values by comma or semicolon',
      separators: [',', ';'],
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
