<script setup lang='ts'>
import { FormKit } from '@formkit/vue'
import { FormKitDataEdit } from 'my-library'
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
    </FormKitDataEdit>
  </PrimeData>
</template>

<style lang='scss' scoped>

</style>
