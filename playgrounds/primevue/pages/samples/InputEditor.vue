<script setup lang='ts'>
import { useFormKitRepeater, useInputEditor, useInputEditorSchema } from '../../../../packages/formkit-primevue/src'

const { schemaToEditorData } = useInputEditor()
const { editorSchema } = useInputEditorSchema()
const { addListGroupFunctions } = useFormKitRepeater()

const data = reactive(schemaToEditorData(
  {
    $formkit: 'primeInputText',
    name: 'field',
    options: [{ label: 'Option 1', value: 'option1' }, { label: 'Option 2', value: 'option2' }],
  },
))

addListGroupFunctions(data)
</script>

<template>
  <div class="ml-2">
    <PrimeSchemaEditor
      header="Prime Input Editor" :schema="editorSchema()" :data="data"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
