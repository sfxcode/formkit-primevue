<script setup lang='ts'>
import { FormKitSchema } from '@formkit/vue'
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'
import type { ToastMessageOptions } from 'primevue/toast'

import { useInputEditorSchema } from 'my-library'

const props = defineProps<{
  header: string
  schema: object
  data: object
}>()

const form2 = ref(0)

const { editorDataToSchema, editorDataToJson, editorDataToCode } = useInputEditorSchema()

const toast = useToast()

function showMessage(severity: ToastMessageOptions['severity'], summary: string, detail: string) {
  toast.add({ severity, summary, detail, life: 2000 })
}

const formSchema = ref(props.schema)
const formData = reactive(props.data)

const data = ref({})

async function submitHandler() {
  showMessage('success', 'Form Submitted ...', 'Input creation completed successfully')
  data.value = { value: formData.value }
  form2.value += 1

  console.log(editorDataToJson(formData))
  console.log(editorDataToCode(formData))
}

async function submitHandler2() {

}

const schemaResult = computed(() => editorDataToSchema(formData))
</script>

<template>
  <div>
    <Toast position="bottom-right" />
    <h2 class="text-color-[var(--primary-color)] pb-2">
      {{ header }}
    </h2>
    <slot />
    <div class="flex flex-wrap gap-4">
      <div class="min-w-30rem basis-1/2 md:basis-1/3">
        <h3>Create Formkit Prime Input</h3>
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
      </div>
      <div class="">
        <h3>Generated Formkit Input Preview</h3>

        <div :key="form2">
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
          <h3>Generated Formkit Schema</h3>
          <pre>{{ schemaResult }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>

</style>
