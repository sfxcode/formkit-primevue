# Usage

To build a form a schema is required and some kind of data. 

More information can be found in the  [Formkit Schema](https://formkit.com/essentials/schema) documentation.

## Example

```ts

const schema = reactive(
    [
        {
            $el: 'h2',
            children: 'Registration Form',
        },
        {
            $el: 'h3',
            children: ['Register ', '$email'],
        },
        {
            $formkit: 'primeInputText',
            name: 'email',
            label: 'Email',
            help: 'This will be used for your account.',
            validation: 'required|email',
        },
        {
            $formkit: 'primeTextarea',
            name: 'comment',
            label: 'Text',
            validation: '',
            rows: '3',
        }
    ])

const data = ref({ email: 'tom@sfxcode.com' })

async function submitHandler() {
    await new Promise(resolve => setTimeout(resolve, 1000))
}
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
