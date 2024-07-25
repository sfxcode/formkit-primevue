<script setup lang='ts'>
import { FormKitDataEdit, FormKitDataView } from 'my-library-components'

const schema
    = [
      {
        $formkit: 'primeInputText',
        name: 'name',
        label: 'Styling by class',
        help: 'Required.',
        validation: 'required',
        outerClass: 'col-span-full md:col-span-8',
      },
      {
        $formkit: 'primeInputText',
        name: 'name2',
        label: 'Styling by class',
        help: 'Required.',
        validation: 'required',
        outerClass: 'col-span-full md:col-span-4',

      },
      {
        $formkit: 'primeInputText',
        name: 'name3',
        label: 'Styling by class',
        help: 'Required.',
        validation: 'required',
        outerClass: 'col-span-full md:col-span-4',

      },

    ]

const data = { name: 'Some Label in Green', name2: 'Some Text in Green' }
</script>

<template>
  <h2 class="text-color-[var(--primary-color)]">
    Grid in Data Edit
  </h2>
  <div class="p-10">
    <FormKitDataEdit form-class="grid grid-cols-12 gap-4" actions-class="col-span-full" :schema="schema" :data="data" :debug-schema="false" :debug-data="false" />
  </div>
  <h2 class="text-color-[var(--primary-color)]">
    Grid in Data View
  </h2>
  <div class="p-10">
    <FormKitDataView form-class="grid grid-cols-12 gap-4" :schema="schema" :data="data" :debug-schema="false" :debug-data="false" />
  </div>
</template>

<style lang='scss'>

</style>
