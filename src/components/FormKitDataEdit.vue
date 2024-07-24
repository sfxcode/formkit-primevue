<script setup lang='ts'>
import { ref } from 'vue'
import FormKitDebug from './FormKitDebug.vue'

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
  schema: {
    type: Object,
    default: null,
  },
  debugData: {
    type: Boolean,
    default: false,
  },
  debugSchema: {
    type: Boolean,
    default: false,
  },
  submitLabel: {
    type: String,
    default: 'Save',
  },
})

const emit = defineEmits(['dataSaved'])

const formSchema = ref(props.schema)
const formData = ref(props.data)

function handleSave() {
  emit('dataSaved', props.data)
}
</script>

<template>
  <div class="p-formkit-data-edit">
    <FormKit
      id="form"
      v-model="formData"
      type="form"
      :submit-label="submitLabel"
      :submit-attrs="{
        inputClass: 'p-button p-component p-formkit-button',
      }"
      @submit="handleSave"
    >
      <FormKitSchema :schema="formSchema" :data="formData" />
    </FormKit>
    <FormKitDebug v-if="debugData" :data="formData" header="Data" />
    <FormKitDebug v-if="debugSchema" :data="formSchema" header="Schema" />
  </div>
</template>

<style scoped>

</style>
