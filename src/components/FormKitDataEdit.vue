<script setup lang='ts'>
import type { FormKitSchemaDefinition } from '@formkit/core'
import type { PropType } from 'vue'
import { reset } from '@formkit/core'
import { FormKit, FormKitMessages, FormKitSchema } from '@formkit/vue'
import { ref } from 'vue'

import FormKitDebug from './FormKitDebug.vue'

const props = defineProps({
  id: {
    type: String,
    default: 'formkit_form',
  },
  data: {
    type: Object,
    default: null,
  },
  schema: {
    type: Object as PropType<FormKitSchemaDefinition>,
    default: null,
  },
  formClass: {
    type: String,
    default: '',
  },
  actionsClass: {
    type: String,
    default: '',
  },
  submitSeverity: {
    type: String,
    default: '',
  },
  submitClass: {
    type: String,
    default: '',
  },
  submitLabel: {
    type: String,
    default: 'Save',
  },
  submitIcon: {
    type: String,
    default: '',
  },
  showReset: {
    type: Boolean,
    default: false,
  },
  resetSeverity: {
    type: String,
    default: 'danger',
  },
  resetLabel: {
    type: String,
    default: 'Reset',
  },
  resetClass: {
    type: String,
    default: '',
  },
  resetIcon: {
    type: String,
    default: '',
  },
  debugData: {
    type: Boolean,
    default: false,
  },
  debugSchema: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['dataSaved'])

const formData = defineModel<any>()

if (props.data) {
  formData.value = props.data
}

const formSchema = ref(props.schema)

function handleSave() {
  emit('dataSaved', formSchema.value)
}

function handleReset() {
  reset(props.id)
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
          <Button :icon="submitIcon" type="submit" :label="submitLabel" :class="submitClass" :severity="submitSeverity" @submit="handleSave" />
          <Button v-if="showReset" type="reset" :icon="resetIcon" :label="resetLabel" :class="resetClass" :severity="resetSeverity" @click="handleReset" />
        </slot>
      </template>
    </FormKit>
    <FormKitDebug v-if="debugData" :data="formData" header="Data" />
    <FormKitDebug v-if="debugSchema" :data="formSchema as object" header="Schema" />
  </div>
</template>

<style scoped>

</style>
