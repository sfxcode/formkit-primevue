Getting Started

## Installation steps

### Install depenendencies

```sh
$ pnpm add -D @sfxcode/formkit-primevue
```

### PrimeVue

Make sure all components of PrimeVue you want to use are enabled in your configuration.

### Formkit Config

Add a formkit.config.ts to your root dir and register primeInputs for FormKit.

Sample:

```ts
// formkit.config.ts
import type { DefaultConfigOptions } from '@formkit/vue'
import { primeInputs } from '@sfxcode/formkit-primevue'

const config: DefaultConfigOptions = {
  inputs: primeInputs
}

export default config
```

### The `form` prefix

Every input and output is also available under the library-neutral `form` prefix: `formInputText` next to `primeInputText`, `formSelect` next to `primeSelect`, `formRepeater` next to `primeRepeater`, `formOutputText` next to `primeOutputText`, and so on.
The `form` names are the same definitions, so both names behave identically. Use them when a schema should keep its type names across UI libraries that offer the same prefix.

The `prime` names are unchanged. `primeInputs` and `primeOutputs` still contain only the `prime` names, so existing configurations keep working without any change.
To use the `form` names, register `formInputs` and `formOutputs` as well. Both prefixes can be used at the same time.

```ts
// formkit.config.ts
import type { DefaultConfigOptions } from '@formkit/vue'
import { formInputs, formOutputs, primeInputs, primeOutputs } from '@sfxcode/formkit-primevue'

const config: DefaultConfigOptions = {
  inputs: { ...primeInputs, ...primeOutputs, ...formInputs, ...formOutputs },
}

export default config
```

```ts
const schema = [
  { $formkit: 'formInputText', name: 'name', label: 'Name', validation: 'required' },
  { $formkit: 'formSelect', name: 'role', label: 'Role', options: [] },
]
```

The [plugins](../advanced/plugins.md) and the TypeScript types treat the `form` names like the `prime` names.
Only the registered `form` names are recognized: your own `formSomething` input types and FormKit's own `form` type are not affected.

## Usage

### Example

This example takes parts of the FormKit validation demo and replace the formkit library elements with the one found in this framework.

The working version can be found at the [formkit-primevue-demo](https://formkit-primevue.netlify.app/). There are also some samples for all wrapped PrimeVue form elements.

```vue
<script setup lang='ts'>
import { reactive, ref } from 'vue'

const options = [
  { label: 'Every page load', value: 'refresh' },
  { label: 'Ever hour', value: 'hourly' },
  { label: 'Every day', value: 'daily' },
]

const schema = reactive(
  [
    {
      $el: 'h2',
      children: ['Register ', '$email'],
    },
    {
      $el: 'h3',
      children: 'Header Text H3',
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
      name: 'myText',
      label: 'Text',
      validation: '',
      rows: '3',
    },
    {
      $formkit: 'primeInputText',
      name: 'password',
      label: 'Password',
      help: 'Enter your new password.',
      validation: 'required|length:5,16',
    },
    {
      $formkit: 'primeInputText',
      name: 'password_confirm',
      label: 'Confirm password',
      help: 'Enter your new password again.',
      validation: 'required|confirm',
      validationLabel: 'password confirmation',
    },
    {
      $formkit: 'primeCheckbox',
      name: 'eu_citizen',
      id: 'eu',
      label: 'Are you a european citizen?',
    },
    {
      $formkit: 'primeDropdown',
      if: '$get(eu).value', // 👀 Oooo, conditionals!
      name: 'cookie_notice',
      label: 'Cookie notice frequency',
      optionLabel: 'label',
      optionValue: 'value',
      options,
      help: 'How often should we display a cookie notice?',
    },
  ],
)

const data = ref({ email: 'tom@sfxcode.com' })

async function submitHandler() {
  await new Promise(resolve => setTimeout(resolve, 1000))
}
</script>

<template>
  <div class="max-w-xl">
    <div class="myFormkit">
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
    </div>
    <h4>Data</h4>
    <pre>{{ data }}</pre>
  </div>
</template>
```
