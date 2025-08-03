# PrimeKnob

A FormKit wrapper for PrimeVue's Knob component.

[Live Example on Website](https://formkit-primevue.netlify.app/inputs/knob)

## Usage
```vue
<FormKit type="primeknob" v-model="value" />
```

### Object-based Example
```vue
<script setup>
const schema = [
  { $formkit: 'primeKnob', name: 'knob', label: 'Use Knob', value: 50, validation: 'min:20|max:80' },
  { $formkit: 'primeKnob', name: 'custom', label: 'Customized Knob', min: 42, max: 98, step: 4, value: 58, showValue: false },
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
| min          | number    | Minimum value |
| max          | number    | Maximum value |
| step         | number    | Step increment |
| size         | number    | Knob size |
| strokeWidth  | number    | Stroke width |
| showValue    | boolean   | Show value inside knob |
| valueColor   | string    | Value color |
| rangeColor   | string    | Range color |
| textColor    | string    | Text color |
| valueTemplate| string    | Value template |

See [PrimeVue Knob docs](https://www.primefaces.org/primevue/knob/) for more details.
