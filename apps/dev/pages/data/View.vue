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

function updateData() {
  if (data.value.name === 'Tom')
    data.value = { name: 'Tim', date: new Date(), number: 42, text1: 'Some Text', text2: 'Lorem Ipsum' }
  else
    data.value = { name: 'Tom', date: new Date(), number: 2222.33, text1: 'Hello', text2: 'World' }
}
</script>

<template>
  <PrimeData header="FormKitDataView Demo">
    <Button label="changeData (using v-model)" size="small" class="mb-4" @click="updateData" />
    <div class="flex gap-2 mb-4">
      Horizontal  <ToggleSwitch v-model="horizontal" />
    </div>
    <FormKitDataView id="FormKitDataViewId" v-model="data" :schema="outputSchema" debug-data debug-schema :form-class="horizontal ? 'form-horizontal' : ''" />
  </PrimeData>
</template>
