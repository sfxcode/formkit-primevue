<script setup lang='ts'>
import { FormKitSchema } from '@formkit/vue'
import { useClipboard } from '@vueuse/core'
import { useInputEditor } from 'my-library'

import { ref } from 'vue'
import { useMessages } from '../../composables/messages'

const props = defineProps<{
  header: string
  schema: object
  data: object
}>()

// key is used for reflecting changes to the output - editorDataToSchema will remove schemaResultFormKey from generated schema output
const schemaResultFormKey = ref(0)

const { editorDataToSchema, editorDataToJson, editorDataToCode } = useInputEditor()

const { showSuccessMessage } = useMessages()

const formSchema = ref(props.schema)
const formData = reactive(props.data)

const data = ref({})

async function submitHandler() {
  showSuccessMessage(`Form Input (${formData._dollar_formkit}) updated`, 'Input creation completed successfully ...')

  data.value = { }
  schemaResultFormKey.value += 1
  Object.assign(formData, { ...formData, schemaResultFormKey: schemaResultFormKey.value })
}

async function submitHandler2() {
  showSuccessMessage(`Data submitted`, data.value.toString())
}

const schemaResult = computed(() => editorDataToSchema(formData))

const { copy, isSupported } = useClipboard({})

function copyJson() {
  copy(editorDataToJson(formData))
}

function copyObject() {
  copy(editorDataToCode(formData))
}
</script>

<template>
  <div>
    <h2 class="text-color-[var(--p-primary-color)] pb-2">
      {{ header }}
    </h2>
    <slot />
    <div class="flex gap-12 flex-wrap">
      <div class="w-40rem">
        <h3>Create Formkit Input</h3>
        <FormKit
          v-model="formData"
          type="form"
          :submit-attrs="{
            inputClass: 'p-button p-component',
          }"
          submit-label="Update Generated Input"
          @submit="submitHandler"
        >
          <FormKitSchema :schema="formSchema" :data="formData" />
        </FormKit>
        <pre v-if="false">{{ formSchema }}</pre>
      </div>
      <div>
        <h3>Generated Formkit Input Preview</h3>
        <div class="mb-4">
          Some changes require to trigger the update of generated input
        </div>
        <div :key="schemaResultFormKey">
          <div class="max-w-100">
            <FormKit
              v-model="data"
              type="form"
              :submit-attrs="{
                inputClass: 'p-button p-component',
              }"
              @submit="submitHandler2"
            >
              <FormKitSchema :schema="schemaResult" :data="data" />
            </FormKit>
          </div>
          <h3>Generated Formkit Schema</h3>
          <pre>{{ schemaResult }}</pre>
          <Button v-if="isSupported" label="Copy as JSON" class="mr-4" @click="copyJson" />
          <Button v-if="isSupported" label="Copy as Object" @click="copyObject" />
          <h3>Generated Formkit Data</h3>
          <pre>{{ data }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>

</style>
