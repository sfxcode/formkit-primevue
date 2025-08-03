# PrimeCheckbox

A FormKit wrapper for PrimeVue's Checkbox component.

[Live Example on Website](https://formkit-primevue.netlify.app/inputs/checkbox)

## Usage
```vue
<FormKit type="primecheckbox" v-model="value" />
```

### Object-based Example
```vue
<script setup>
const schema = [
  { $formkit: 'primeCheckbox', id: 'basic', name: 'basic', label: 'Basic' },
  { $formkit: 'primeCheckbox', id: 'eu', prefix: 'Are you a european citizen: ' },
  { $formkit: 'primeCheckbox', id: 'taxes', suffix: 'Taxes includes ' },
  { $formkit: 'primeCheckbox', name: 'readonly', label: 'readonly', readonly: true },
  { $formkit: 'primeCheckbox', name: 'indeterminate', label: 'indeterminate', indeterminate: true },
  { $formkit: 'primeCheckbox', name: 'custom', label: 'custom values', trueValue: 'A', falseValue: 'B' },
]
const data = { readonly: true }
</script>

<template>
  <FormKit :schema="schema" :data="data" />
</template>
```

## Props
// ...existing code...
See [PrimeVue Checkbox docs](https://primevue.org/checkbox/) for more details.
