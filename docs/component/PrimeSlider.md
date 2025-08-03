# PrimeSlider

A FormKit wrapper for PrimeVue's Slider component.

[Live Example on Website](https://formkit-primevue.netlify.app/inputs/slider)

## Usage
```vue
<FormKit type="primeslider" v-model="value" />
```

### Object-based Example
```vue
<script setup>
const schema = [
  { $formkit: 'primeSlider', name: 'slider', label: 'Use Slider', class: 'mt-2 w-72', min: 5, max: 100, step: 5, value: 10, validation: 'min:20|max:80' },
  { $formkit: 'primeSlider', name: 'sliderVertical', label: 'Use Slider', min: 1, max: 10, value: 4, orientation: 'vertical' },
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
| min          | number    | Minimum value |
| max          | number    | Maximum value |
| step         | number    | Step increment |
| range        | boolean   | Enable range selection |
| orientation  | string    | Orientation (horizontal/vertical) |
| pt           | object    | Pass-through options |
| ptOptions    | object    | Pass-through options |
| unstyled     | boolean   | Disable default styles |

See [PrimeVue Slider docs](https://www.primefaces.org/primevue/slider/) for more details.
