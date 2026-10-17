<script setup lang='ts'>
import { FormKitDataView } from 'my-library'
import { ref } from 'vue'

const props = defineProps<{
  header: string
  schema: object
  data: object
  primeAttributes?: string
  customAttributes?: string
}>()

const formSchema = ref(props.schema)
const formData = ref(props.data)
</script>

<template>
  <div>
    <h1 class="page-title">
      {{ header }}
    </h1>
    <slot />
    <div class="demo-columns">
      <div>
        <div>
          <FormKitDataView :data="formData" :schema="formSchema" debug-data />
        </div>
      </div>
      <div class="demo-editor">
        <Tabs value="0">
          <TabList>
            <Tab value="0">
              Schema Editor
            </Tab>
            <Tab value="1">
              Data Editor
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0" class="w-full max-w-200">
              <JsonEditor v-model="formSchema" :initial="schema" label="schema" />
            </TabPanel>
            <TabPanel value="1">
              <JsonEditor v-model="formData" :initial="data" label="data" />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
:deep(.formkit-outer) {
  margin-bottom: 1rem;
}
</style>
