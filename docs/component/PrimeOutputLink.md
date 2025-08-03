# PrimeOutputLink

A FormKit wrapper for PrimeVue's OutputLink component.

[Live Example on Website](https://formkit-primevue.netlify.app/outputs/outputlink)

## Usage
```vue
<FormKit type="primeoutputlink" v-model="link" />
```

### Object-based Example
```vue
<script setup>
const schema = [
  { $formkit: 'primeOutputLink', name: 'link1', label: 'External Link' },
  { $formkit: 'primeOutputLink', name: 'link2', label: 'Ensure protocol and use custom title', title: 'Click me' },
]
const data = { link1: 'https://github.com/sfxcode', link2: 'sfxcode.github.io/formkit-primevue' }
</script>

<template>
  <FormKit :schema="schema" :data="data" />
</template>
```

## Props
| Name         | Type      | Description |
|--------------|-----------|-------------|
| title        | string    | Link title |
| iconPrefix   | string    | Icon for prefix |
| iconSuffix   | string    | Icon for suffix |
| prefix       | string    | Prefix text |
| suffix       | string    | Suffix text |
| ...          | ...       | See PrimeOutputLink source for all props |

See [PrimeOutputLink source](https://github.com/sfxcode/formkit-primevue/tree/main/src/components/PrimeOutputLink.vue) for more details.
