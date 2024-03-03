<script setup lang='ts'>
import { useFormKitSchema } from '@/formkit/useFormKitSchema'

const { addElement } = useFormKitSchema()

const schema
  = [
    addElement('div', [
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
    ], { class: 'flex gap-4' }),
  ]

const data = { name: 'Name', name2: 'Name 2' }
</script>

<template>
  <div class="">
    <PrimeInput
      header="Grid" :schema="schema" :data="data"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
