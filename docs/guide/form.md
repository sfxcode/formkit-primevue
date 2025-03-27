# Form Components

For the simple usage with schema and data values FormKitDataEdit and FormKitDataView (and FormkitDebug) components are available.

<DisplayFormComponents />

## Usage

To use the components there must be an import or global registration.

```vue
    <FormKitDataEdit v-model="formData" :schema="formSchema"
                     @data-saved="submitHandler"
/>
```

### Debug

Use properties **:debug-schema="true"** and / or **:debug-data="true"** for debugging of schema / data.

## FormKitDataEdit

### Main Properties

| Property      | Type      | Description
|:--------------| :-------- |:--------------------------------------------------------|
| v-model       | Object    | The data object to be edited with 2-Way-Binding         |
| data          | Object    | The data object to be edited                            |
| :schema       | Object    | The schema object to be used                            |
| :debug-schema | Boolean   | Display the schema                                      |
| :debug-data   | Boolean   | Display the data                                        |
| :show-reset   | Boolean   | Display some Button for resetting data to initial state |
### Style Properties

| Property       | Type    | Description
|:---------------|:--------|:--------------------------------------------|
| formClass      | String  | Add additional classes to the form          |
| actionsClass   | String  | Add additional classes to the action div    |
| submitClass    | String  | Add additional classes to the submit button |
| submitSeverity | String  | PrimeVue Button severity                    |
| submitLabel    | String  | Default: Save                               |
| submitIcon     | String  | PrimeVue Button icon                        |
| resetClass     | String  | Add additional classes to the reset button  |
| resetSeverity  | String  | PrimeVue Button severity                    |
| resetLabel    | String  | Default: Reset                              |
| resetIcon     | String  | PrimeVue Button icon                        |

### Example

```vue
<script setup lang='ts'>
import { FormKitDataEdit } from '@sfxcode/formkit-primevue/components'

const formSchema = ref({}) // some schema should be provided
const formData = ref({}) // some data

async function submitHandler(data: any) {
  // some action on form submit
}
</script>

<template>
  <div>
    <FormKitDataEdit
      v-model="formData" :schema="formSchema"
      :debug-schema="false" :debug-data="true"
      @data-saved="submitHandler"
    />
  </div>
</template>
```

## FormKitDataView

Same as FormKitDataEdit but without Action Buttons.
