<script setup lang='ts'>
import { FormKit, FormKitMessages } from '@formkit/vue'
import { FormKitDataEdit } from '../../../../packages/formkit-primevue/src'
import { useMessages } from '../../composables/messages'

const data = ref({ option: 'hourly' })

const options = [
  { label: 'Every page load', value: 'refresh' },
  { label: 'Every hour', value: 'hourly' },
  { label: 'Every day', value: 'daily' },
]

const { showSuccessMessage } = useMessages()
async function submitHandler() {
  showSuccessMessage('Form Submitted ...', 'Form submitted successfully')
}
</script>

<template>
  <PrimeData header="FormKitDataEdit without Schema Demo">
    <FormKitDataEdit :data="data" :debug-data="true" @data-saved="submitHandler">
      <FormKit
        type="primeInputText"
        name="name"
        validation="required"
        label="Name"
      />
      <FormKit
        type="primeSelect"
        name="option"
        validation="required"
        label="Option"
        option-label="label"
        option-value="value"
        :options="options"
      />
      <template #messages>
        <div class="inline-flex items-center justify-center w-full">
          <hr class="w-full h-px my-8 bg-[color:var(--p-primary-color)] border-0">
        </div>
        <FormKitMessages class="p-formkit-data-edit-messages" />
      </template>
      <template #submit>
        <Button type="submit" label="Save" icon="pi pi-check" icon-pos="right" @submit="submitHandler" />
      </template>
    </FormKitDataEdit>
  </PrimeData>
</template>

<style lang='scss' scoped>

</style>
