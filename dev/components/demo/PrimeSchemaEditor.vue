<script setup lang='ts'>
import { FormKitSchema } from '@formkit/vue'
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'
import type { ToastMessageOptions } from 'primevue/toast'
import { useClipboard } from '@vueuse/core'

import { useInputEditor } from 'my-library'

const props = defineProps<{
  header: string
  schema: object
  data: object
}>()

// key is used for reflecting changes to the output - editorDataToSchema will remove schemaResultFormKey from generated schema output
const schemaResultFormKey = ref(0)

const { editorDataToSchema, editorDataToJson, editorDataToCode } = useInputEditor()

const toast = useToast()

function showMessage(severity: ToastMessageOptions['severity'], summary: string, detail: string) {
  toast.add({ severity, summary, detail, life: 2000 })
}

const formSchema = ref(props.schema)
const formData = reactive(props.data)

const data = ref({})

async function submitHandler() {
  showMessage('success', `Form Input (${formData._dollar_formkit}) updated`, 'Input creation completed successfully ...')

  data.value = { }
  schemaResultFormKey.value += 1
  Object.assign(formData, { ...formData, schemaResultFormKey: schemaResultFormKey.value })
}

async function submitHandler2() {
  showMessage('success', `Data submitted`, data.value)
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
    <Toast position="bottom-right" />
    <h2 class="text-color-[var(--primary-color)] pb-2">
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
