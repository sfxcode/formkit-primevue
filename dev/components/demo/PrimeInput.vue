<script setup lang='ts'>
import type { FormKitSchemaDefinition } from '@formkit/core'
import { FormKitDataEdit } from 'my-library'
import { useMessages } from '../../composables/messages'

const props = defineProps<{
  header: string
  schema: FormKitSchemaDefinition
  data: object
  primeAttributes?: string
  customAttributes?: string
  formClass?: string
  hideTabs?: boolean
}>()

const { showSuccessMessage } = useMessages()

const formSchema = ref(props.schema)
const formData = ref(props.data)

const documentationLink = `https://primevue.org/${props.header.replace('Prime', '').toLowerCase()}`

async function submitHandler() {
  showSuccessMessage('Form Submitted ...', `${props.header} submitted successfully`)
}
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
          <FormKitDataEdit :data="formData" :schema="formSchema" debug-data @data-saved="submitHandler" />
        </div>
      </div>
      <div class="demo-editor">
        <Tabs v-if="!hideTabs" value="0">
          <TabList>
            <Tab value="0">
              Schema Editor
            </Tab>
            <Tab value="1">
              Data Editor
            </Tab>
            <Tab v-if="primeAttributes || customAttributes" value="2">
              Supported Attributes
            </Tab>
          </TabList>
          <TabPanels class="">
            <TabPanel value="0" class="w-full max-w-200">
              <JsonEditor v-model="formSchema" :initial="schema" label="schema" />
            </TabPanel>
            <TabPanel value="1">
              <JsonEditor v-model="formData" :initial="data" label="data" />
            </TabPanel>
            <TabPanel v-if="primeAttributes || customAttributes" value="2">
              <h4>Base Attributes</h4>
              <div>
                <span>disabled, readonly, style, class, tabindex, ariaLabel, ariaLabelledby, pt, ptOptions, unstyled</span>
              </div>
              <h4>PrimeVue Attributes</h4>
              <div>
                <a :href="documentationLink" target="_blank" class="text-xl">Open Documentation</a>
              </div>
              <div class="mt-2">
                <span>{{ primeAttributes }}</span>
              </div>
              <h4 v-if="customAttributes">
                Custom Attributes
              </h4>
              <div>
                <span v-if="customAttributes">{{ customAttributes }}</span>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>

</style>
