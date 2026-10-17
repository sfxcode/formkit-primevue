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

`primeInputs` and `primeOutputs` contain both names, so the configuration above registers them without any change, and every `prime` name works as before.
`formInputs` and `formOutputs` contain only the `form` names, for the case that you register them on their own.

```ts
const schema = [
  { $formkit: 'formInputText', name: 'name', label: 'Name', validation: 'required' },
  { $formkit: 'formSelect', name: 'role', label: 'Role', options: [] },
]
```

If you register only a subset of the inputs yourself, add the `form` names of those inputs as well, or filter the `prime` names out of `primeInputs`:

```ts
const primeOnly = Object.fromEntries(Object.entries(primeInputs).filter(([name]) => name.startsWith('prime')))
```

The [plugins](../advanced/plugins.md) and the TypeScript types treat the `form` names like the `prime` names.
Only the registered `form` names are recognized: your own `formSomething` input types and FormKit's own `form` type are not affected.
If an input of your own has the same name as one of the `form` names, register it after `primeInputs` so it takes precedence.

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
