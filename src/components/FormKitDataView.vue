<script setup lang='ts'>
import type { FormKitSchemaDefinition } from '@formkit/core'
import type { PropType } from 'vue'
import { FormKit, FormKitSchema } from '@formkit/vue'
import { ref } from 'vue'
import FormKitDebug from './FormKitDebug.vue'

const props = defineProps({
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
  debugData: {
    type: Boolean,
    default: false,
  },
  debugSchema: {
    type: Boolean,
    default: false,
  },
})

const formSchema = ref(props.schema)

const formData = defineModel<any>()

if (props.data) {
  formData.value = props.data
}
</script>

<template>
  <FormKit
    v-model="formData"
    :actions="false"
    :form-class="`p-formkit-data-view ${formClass}`"
    class="p-formkit-data-view"
    type="form"
  >
    <FormKitSchema v-if="schema" :schema="formSchema" :data="formData" />
    <slot />
    <FormKitDebug v-if="debugData" :data="formData" header="Debug Mode - Data" />
    <FormKitDebug v-if="debugSchema" :data="formSchema as object" header="Debug Mode - Schema" />
  </FormKit>
</template>

<style scoped>

</style>
