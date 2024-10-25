<script setup lang='ts'>
import type { FormKitSchemaDefinition } from '@formkit/core'
import type { PropType } from 'vue'
import { FormKit, FormKitMessages, FormKitSchema } from '@formkit/vue'
import { ref } from 'vue'
import FormKitDebug from './FormKitDebug.vue'

const props = defineProps({
  id: {
    type: String,
    default: 'form',
  },
  data: {
    type: Object,
    default: null,
  },
  schema: {
    type: Object as PropType<FormKitSchemaDefinition>,
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
  cancelLabel: {
    type: String,
    default: 'Cancel',
  },
  formClass: {
    type: String,
    default: '',
  },
  actionsClass: {
    type: String,
    default: '',
  },
  buttonClass: {
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
      :id="id"
      v-model="formData"
      :form-class="formClass"
      :actions-class="actionsClass"
      type="form"
      @submit="handleSave"
    >
      <template #default>
        <FormKitSchema v-if="formSchema" :schema="formSchema" :data="formData" />
        <slot />
      </template>
      <template #messages>
        <slot name="messages">
          <FormKitMessages class="p-formkit-data-edit-messages" />
        </slot>
      </template>
      <template #submit>
        <slot name="submit">
          <Button type="submit" :label="submitLabel" :class="buttonClass" @submit="handleSave" />
        </slot>
      </template>
    </FormKit>
    <FormKitDebug v-if="debugData" :data="formData" header="Data" />
    <FormKitDebug v-if="debugSchema" :data="formSchema as object" header="Schema" />
  </div>
</template>

<style scoped>

</style>
