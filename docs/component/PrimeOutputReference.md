# PrimeOutputReference

A FormKit wrapper for PrimeVue's OutputReference component.

[Live Example on Website](https://formkit-primevue.netlify.app/outputs/outputreference)

## Usage
```vue
<FormKit type="primeoutputreference" v-model="reference" />
```

### Object-based Example
```vue
<script setup>
const schema = [
  { $formkit: 'primeOutputReference', name: 'externalId', label: 'External Link', reference: 'https://github.com/sfxcode/{{value}}' },
  { $formkit: 'primeOutputReference', name: 'externalValue', label: 'External Link with custom title', title: 'Show on GitHub', reference: 'https://github.com/sfxcode/{{valueNameNotImportant}}' },
  { $formkit: 'primeOutputReference', name: 'internalLink', label: 'Internal Link', internal: true, reference: '/outputs/{{value}}' },
  { $formkit: 'primeOutputReference', name: 'internalLink', label: 'Internal Link with custom title', internal: true, title: 'Show: {{value}}', reference: '/outputs/{{value}}' },
]
const data = { externalId: 42, externalValue: 'formkit-primevue', internalLink: 'outputLink' }
</script>

<template>
  <FormKit :schema="schema" :data="data" />
</template>
```

## Props
| Name         | Type      | Description |
|--------------|-----------|-------------|
| reference    | string    | Reference URL or path |
| title        | string    | Link title |
| internal     | boolean   | Use internal router link |
| iconPrefix   | string    | Icon for prefix |
| iconSuffix   | string    | Icon for suffix |
| prefix       | string    | Prefix text |
| suffix       | string    | Suffix text |
| ...          | ...       | See PrimeOutputReference source for all props |

See [PrimeOutputReference source](https://github.com/sfxcode/formkit-primevue/tree/main/src/components/PrimeOutputReference.vue) for more details.
