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
  <PrimeData header="Slot Demo">
    <FormKitDataEdit :data="data" :debug-data="true" @data-saved="submitHandler">
      <FormKit
        type="primeSelect"
        name="option"
        validation="required"
        label="Option"
        option-label="label"
        option-value="value"
        :options="options"
      >
        <template #option="slotProps">
          <div class="flex items-center">
            <div>Option: {{ slotProps.option.label }}</div>
          </div>
        </template>
        <template #header>
          <div class="p-4">
            Select Option:
          </div>
        </template>
        <template #footer>
          <div class="p-4 color-gray-400">
            More Options to come soon ...
          </div>
        </template>
      </FormKit>
    </FormKitDataEdit>
  </PrimeData>
</template>

<style lang='scss' scoped>

</style>
