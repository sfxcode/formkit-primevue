# PrimeColorPicker

A FormKit wrapper for PrimeVue's ColorPicker component.

[Live Example on Website](https://formkit-primevue.netlify.app/inputs/colorpicker)

## Usage
```vue
<FormKit type="primecolorpicker" v-model="color" />
```

### Object-based Example
```vue
<script setup>
const schema = [
  { $formkit: 'primeColorPicker', label: 'Select Color', name: 'color' },
  { $formkit: 'primeColorPicker', name: 'styled', label: 'Styled + Disabled', style: { background: 'gray' }, class: 'customClass', disabled: true },
  { $formkit: 'primeColorPicker', name: 'inline', label: 'Inline - Format RGB', inline: true, format: 'rgb' },
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
| defaultColor | string    | Default color |
| inline       | boolean   | Inline display |
| format       | string    | Color format |
| pt           | object    | Pass-through options |
| ptOptions    | object    | Pass-through options |
| unstyled     | boolean   | Disable default styles |

See [PrimeVue ColorPicker docs](https://primevue.org/colorpicker/) for more details.
