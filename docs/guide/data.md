# Data

For the simple usage with schema and data values FormKitDataEdit and FormKitDataView (and FormkitDebug) components ars available. 

## Usage

To use the components there must be an import or global registration.

### FormKitDataEdit

```vue

<script setup lang='ts'>

  import { FormKitDataEdit } from '@sfxcode/formkit-primevue/components'
 
  const formSchema = ref({})  // some schema should be provided
  const formData = ref({})    // some data

  async function submitHandler(data: any) {
    // some action on form submit
  }
</script>

<template>
  <div>
    <FormKitDataEdit  :schema="formSchema" :data="formData" 
                      :debug-schema="false" :debug-data="true" 
                      @data-saved="submitHandler" />
  </div>
</template>

```

### FormKitDataView

Same as FormKitDataEdit but without Submit button and action.