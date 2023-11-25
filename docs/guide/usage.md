# Usage

formkit-primevue was designed for easy integration into FormKit schema.

## Formkit Schema 

```ts

const schema
  = [
  {
    $formkit: 'primeInputMask',
    name: 'myInputMask',
    label: 'Input Mask',
    validation: 'required',
    validationVisibility: 'live',
    mask: '99-999999',
    placeholder: '99-999999',
  },
  {
    $formkit: 'primeInputMask',
    name: 'custom',
    label: 'Input Mask',
    mask: '(999) 999-9999',
    unmask: true,
  },
]
const data = { }
```

```vue
<template>
      <FormKit
        id="form"
        v-model="data"
        type="form"
        :submit-attrs="{
          inputClass: 'p-button p-component',
        }"
        @submit="submitHandler"
      >
        <FormKitSchema :schema="schema" :data="data" />
      </FormKit>
</template>
```
