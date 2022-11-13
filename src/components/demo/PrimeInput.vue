<script setup lang='ts'>
import { FormKitSchema } from '@formkit/vue'
import { ref } from 'vue'

const props = defineProps<{
  header: string
  schema: object
  data: object
  primeAttributes?: string
  customAttributes?: string
}>()

const formSchema = reactive(props.schema)
const formData = ref(props.data)
</script>

<template>
  <div>
    <h1>{{ header }}</h1>

    <div class="flex flex-wrap">
      <div class="min-w-lg mb-6">
        <h3>Sample Form</h3>
        <FormKit
          id="form"
          v-model="formData"
          type="form"
          :submit-attrs="{
            inputClass: 'p-button p-component',
          }"
        >
          <FormKitSchema :schema="formSchema" :data="formData" />
        </FormKit>
        <h3>Data</h3>
        <pre>{{ formData }}</pre>
      </div>
      <div class="max-w-lg">
        <TabView>
          <TabPanel header="Schema">
            <pre>{{ formSchema }}</pre>
          </TabPanel>
          <TabPanel v-if="primeAttributes" header="Supported Attributes">
            <h4>Base Attributes</h4>
            <span>_disabled, _readonly, style, class</span>
            <h4>PrimeVue Attributes</h4>
            <span>{{ primeAttributes }}</span>
            <h4 v-if="customAttributes">
              Custom Attributes
            </h4>
            <span v-if="customAttributes">{{ customAttributes }}</span>
          </TabPanel>
          <TabPanel header="Editor" />
        </TabView>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>

</style>
