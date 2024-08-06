<script setup lang='ts'>
import { useDragAndDrop } from '@formkit/drag-and-drop/vue'
import { FormKitSchema } from '@formkit/vue'
import { ref } from 'vue'
import { useFormKitRepeater, useInputEditor, useInputEditorSchema } from 'my-library'
import { blueprint, formkitPreset } from '../../utils/presets'
import { useFormKitSection } from '../../../src/composables'

const { editorSchema } = useInputEditorSchema()
const { schemaToEditorData, editorDataToSchema } = useInputEditor()
const { addListGroupFunctions } = useFormKitRepeater()
const { generateId } = useFormKitSection()

const formSchema = ref(editorSchema)
const formData = ref(null)

function enhanceValuesForInputList(values: any[]): any[] {
  const result = []
  values.forEach((value) => {
    result.push({ ...value, editableItemId: generateId(), selectButton: 'showBasic' })
  })
  return result
}

const [formInputRef, formInputList] = useDragAndDrop(enhanceValuesForInputList(formkitPreset), { dragHandle: '.p-drag-handle', plugins: [] })

function actionDelete(schema: any) {
  formInputList.value = formInputList.value.filter(input => input !== schema)
}

function actionEdit(schema: any) {
  const data = schemaToEditorData({ ...schema })
  addListGroupFunctions(data)
  formData.value = data
}

function actionInsert(schema: any) {
  const index = formInputList.value.indexOf(schema) + 1
  const schemaToInsert = { ...blueprint, editableItemId: generateId(), selectButton: 'showBasic' }
  formInputList.value.splice(index, 0, schemaToInsert)
}

function actionCopy(schema: any) {
  const index = formInputList.value.indexOf(schema) + 1
  const copyOfSchema = { ...schema, editableItemId: generateId() }
  formInputList.value.splice(index, 0, copyOfSchema)
}

function actionUpdateInputs() {
  const schema = formInputList.value.find(input => input.editableItemId === formData.value.editableItemId)
  const index = formInputList.value.indexOf(schema)
  formInputList.value.splice(index, 1, editorDataToSchema(formData.value))
  formData.value = null
}

const schemaResult = computed(() => editorDataToSchema(formData.value))
</script>

<template>
  <div cl>
    <Toolbar class="mt-6 mb-4">
      <template #start>
        <Button v-if="false" icon="pi pi-plus" class="mr-2" severity="secondary" text />
        <Button v-if="false" icon="pi pi-print" class="mr-2" severity="secondary" text />
        <Button v-if="false" icon="pi pi-upload" severity="secondary" text />
      </template>  <template #center>
        Form Editor
      </template>
      <template #end />
    </Toolbar>
    <div class="grid grid-cols-2 xl:grid-cols-3 gap-10">
      <div>
        <ul ref="formInputRef" class="list-none">
          <li v-for="formInput in formInputList" :key="formInput" class="mt-4">
            <div class="" style="box-sizing: border-box;">
              <div class="min-w-100 mr-4 flex gap-2">
                <span class="block  p-drag-handle"><i class="pi pi-bars text-[color:var(--p-primary-color)]" /></span>
                <i class="pi pi-file-edit text-[color:var(--p-primary-color)] mb-2" @click="actionEdit(formInput)" />
                <i class="pi pi-copy text-[color:var(--p-primary-color)] mb-2" @click="actionCopy(formInput)" />
                <i class="pi pi-plus text-[color:var(--p-primary-color)] mb-2" @click="actionInsert(formInput)" />
                <i class="pi pi-trash text-[color:var(--p-primary-color)]" @click="actionDelete(formInput)" />
                <span class="text-gray-700">|</span>
                <i
                  v-if="formInput.if && formInput.if.length > 0" v-tooltip="`condition: ${formInput.if}`"
                  class="pi pi-question-circle text-yellow-700"
                />
                <span class="text-xs text-[color:var(--p-primary-color)]">{{ formInput.$formkit }}</span>
                <span class="text-gray-700">|</span>
                <span class="text-xs text-yellow-500">{{ formInput.name }}</span>
              </div>
              <div class="formkit-form min-w-100">
                <FormKitSchema :schema="formInput" :data="{}" />
              </div>
            </div>
          </li>
        </ul>
        <div>
          <pre class="text-xs color-gray-400">{{ formInputList }}</pre>
        </div>
      </div>
      <div v-if="formData" class="mt-4">
        <FormKit
          v-model="formData"
          type="form"
          :submit-attrs="{
            inputClass: 'p-button p-component',
          }"
          submit-label="Update Generated Input"
          @submit="actionUpdateInputs"
        >
          <FormKitSchema :schema="formSchema()" :data="formData" />
        </FormKit>
        <div>
          <pre class="text-xs color-gray-400">{{ schemaResult }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
ul {
  display: block;
  padding-inline-start: 1em;
}
</style>
