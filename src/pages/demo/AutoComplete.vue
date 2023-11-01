<script setup lang='ts'>
import PrimeInput from '@/components/demo/PrimeInput.vue'

const primeAttributes = 'placeholder, separator, allowDuplicate, max, addOnBlur'

const list = ['Hello', 'Hero', 'House', 'World']

function search(query: string) {
  return list.filter(i => i.toLowerCase().includes(query.toLowerCase()))
}

const schema
  = [
    {
      $formkit: 'primeAutoComplete',
      id: 'basic',
      name: 'basic',
      complete: search,
      label: 'Basic AutoComplete - Use [h]ello',
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
