<script setup lang='ts'>
import { FormKitSchema } from '@formkit/vue'
import { ref } from 'vue'

const schema = reactive(
  [
    {
      $formkit: 'primeInputText',
      name: 'name',
      label: 'Basic',
      help: 'Required.',
      validation: 'required',
    },
    {
      $formkit: 'primeInputText',
      name: 'iconLeft',
      label: 'Icon Left',
      iconLeft: 'pi pi-check',
      help: '',
    },
    {
      $formkit: 'primeInputText',
      name: 'iconRight',
      label: 'Icon Right',
      iconRight: 'pi pi-check',
      help: '',
    },
    {
      $formkit: 'primeInputText',
      name: 'iconBoth',
      label: 'Icon Both Sides',
      iconLeft: 'pi pi-plus',
      iconRight: 'pi pi-check',
      help: '',
    },

  ],
)

const data = ref({ name: 'tom' })
</script>

<template>
  <h1>TextInput</h1>

  <FormKit
    id="form"
    v-model="data"
    type="form"
    :submit-attrs="{
      inputClass: 'p-button p-component',
    }"
  >
    <FormKitSchema :schema="schema" :data="data" />
  </FormKit>
  <pre>{{ data }}</pre>
</template>

<style lang='scss' scoped>
.p-inputtext {
  width: 400px;
}
</style>
