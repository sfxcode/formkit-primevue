# PrimeTextarea

A FormKit wrapper for PrimeVue's Textarea component.

[Live Example on Website](https://formkit-primevue.netlify.app/inputs/textarea)

## Usage
```vue
<FormKit type="primetextarea" v-model="text" />
```

### Object-based Example
```vue
<script setup>
const schema = [
  { $formkit: 'primeTextarea', id: 'basic', name: 'name', placeholder: 'Basic', label: 'Basic', help: 'Required.', validation: 'required' },
  { $formkit: 'primeTextarea', name: 'name', label: '5 Rows', rows: 5, autoResize: true },
  { $formkit: 'primeTextarea', name: 'name', placeholder: 'Styled', style: { background: 'gray' }, class: 'customClass' },
  { $formkit: 'primeTextarea', name: 'name', placeholder: 'Read Only', readonly: true },
]
const data = {}
</script>

<template>
  <FormKit :schema="schema" :data="data" />
</template>
```

## Props
| Name         | Type      | Description |
|--------------|-----------|-------------|
| pt           | object    | Pass-through options |
| ptOptions    | object    | Pass-through options |
| unstyled     | boolean   | Disable default styles |
| autoResize   | boolean   | Auto-resize textarea |
| size         | string    | Input size |
| placeholder  | string    | Placeholder text |
| rows         | number    | Number of rows |

See [PrimeVue Textarea docs](https://primevue.org/textarea/) for more details.
