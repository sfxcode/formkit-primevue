<script setup lang='ts'>
import { FormKitDataEdit, FormKitDataView } from 'my-library-components'

const schema
    = [
      {
        $formkit: 'primeInputText',
        name: 'name',
        label: 'col-8',
        help: 'Required.',
        validation: 'required',
        outerClass: 'col-8',
      },
      {
        $formkit: 'primeInputText',
        name: 'name2',
        label: 'col-4',
        outerClass: 'col-4',
      },
      {
        $formkit: 'primeInputNumber',
        name: 'name3',
        label: 'col-4',
        outerClass: 'col-4',

      },

    ]

const outputSchema
    = [
      {
        $formkit: 'primeOutputText',
        name: 'name',
        label: 'col-9',
        help: 'Required.',
        validation: 'required',
        outerClass: 'col-9',
      },
      {
        $formkit: 'primeOutputText',
        name: 'name2',
        label: 'col-4',
        outerClass: 'col-4',
      },
      {
        $formkit: 'primeOutputNumber',
        name: 'name3',
        label: 'col-4',
        outerClass: 'col-4',

      },

    ]

const data = { name: 'Hey Some Value', name2: 'Another value !', name3: 42 }
</script>

<template>
  <h2 class="text-color-[var(--p-primary-color)]">
    Grid in Data Edit
  </h2>
  <h4>12 Column Grid used</h4>
  <div class="w-1/3">
    <FormKitDataEdit :schema="schema" :data="data" :debug-schema="false" :debug-data="false" />
  </div>
  <h2 class="text-color-[var(--p-primary-color)]">
    Grid in Data View
  </h2>
  <div class="w-1/3">
    <FormKitDataView :schema="outputSchema" :data="data" :debug-schema="false" :debug-data="false" />
  </div>
</template>

<style lang='scss'>

</style>
