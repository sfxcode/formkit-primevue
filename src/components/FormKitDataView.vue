<script setup lang='ts'>
import { FormKit, FormKitSchema } from '@formkit/vue'
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
const formData = ref(props.data)
</script>

<template>
  <div class="p-formkit-data-view">
    <FormKit
      v-model="formData"
      type="form"
      :form-class="formClass"
      :actions="false"
    >
      <FormKitSchema v-if="formSchema" :schema="formSchema" :data="formData" />
      <slot />
    </FormKit>
    <FormKitDebug v-if="debugData" :data="formData" header="Data" />
    <FormKitDebug v-if="debugSchema" :data="formSchema" header="Schema" />
  </div>
</template>

<style scoped>

</style>
