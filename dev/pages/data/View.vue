<script setup lang="ts">
import { FormKitDataView, useFormKitSchema } from 'my-library'

const { addElement } = useFormKitSchema()
const horizontal = ref(false)
const outputSchema = ref(
  [
    addElement('div', [
      {
        $formkit: 'primeOutputText',
        name: 'name',
        label: 'Name',
        class: 'text-[var(--p-primary-color)]',
      },
      {
        $formkit: 'primeOutputNumber',
        name: 'number',
        label: 'Number',
        format: 'short',
      },
      {
        $formkit: 'primeOutputDate',
        name: 'date',
        label: 'Date',
        format: 'rangeYear',
      },
      {
        $formkit: 'primeOutputText',
        name: 'text1',
        label: 'Text',
      },
      {
        $formkit: 'primeOutputText',
        name: 'text2',
        label: 'Text',
        validation: 'required',
        class: 'bg-[var(--p-primary-color)]',
      },

    ], { class: 'grid grid-cols-1 md:grid-cols-2 : xl:grid-cols-3 gap-1' }),
  ],
)
const data = ref({ name: 'Tom', date: new Date(), number: 2222.33, text1: 'Ein Text', text2: 'Lorem Ipsum' })
</script>

<template>
  <PrimeData header="FormKitDataView Demo">
    <div class="flex gap-2 mb-4">
      Horizontal  <ToggleSwitch v-model="horizontal" />
    </div>
    <FormKitDataView :data="data" :schema="outputSchema" :debug-mode="true" :form-class="horizontal ? 'form-horizontal' : ''" />
  </PrimeData>
</template>
