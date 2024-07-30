<script setup lang='ts'>
import { ref } from 'vue'
import { FormKit, FormKitSchema } from '@formkit/vue'
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
  inputClass: {
    type: String,
    default: 'p-button p-component p-formkit-button',
  },
  submitLabel: {
    type: String,
    default: 'Save',
  },
  actionsClass: {
    type: String,
    default: '',
  },
  formClass: {
    type: String,
    default: '',
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
      :form-class="formClass"
      :actions-class="actionsClass"
      type="form"
      :submit-label="submitLabel"
      :submit-attrs="{
        inputClass,
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
