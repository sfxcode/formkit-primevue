<script setup lang='ts'>
import { useInputEditorSchema } from 'my-library'

const { editorSchema, schemaToEditorData } = useInputEditorSchema()

const data1 = reactive(schemaToEditorData({
  $formkit: 'primeInputText',
  name: 'field',
  label: 'Some Label',
  help: 'Help Text.',
}))

const data = JSON.parse('{"$formkit":"primeInputText","name":"field2","label":"Some Label","help":"Help Text."}')
</script>

<template>
  <div>
    <PrimeSchemaEditor
      header="Prime Input Editor" :schema="editorSchema" :data="data"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
