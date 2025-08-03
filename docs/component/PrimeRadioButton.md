# PrimeRadioButton

A FormKit wrapper for PrimeVue's RadioButton component.

[Live Example on Website](https://formkit-primevue.netlify.app/inputs/radiobutton)

## Usage
```vue
<FormKit type="primeradiobutton" :options="options" option-label="label" option-value="value" v-model="selected" />
```

### Object-based Example
```vue
<script setup>
const schema = [
  { $formkit: 'primeRadioButton', id: 'basic', label: 'Select', name: 'basic', optionLabel: 'label', optionValue: 'value', options: [
    { label: 'Every page load', value: 'refresh' },
    { label: 'Every hour', value: 'hourly' },
    { label: 'Every day', value: 'daily' },
  ] },
  { $formkit: 'primeRadioButton', id: 'answer', label: 'Select Answer', name: 'answer', optionLabel: 'label', optionValue: 'value', options: [
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B' },
    { label: 'C', value: 'C' },
    { label: 'D', value: 'D' },
    { label: 'E', value: 'E' },
  ] },
]
const data = { basic: 'refresh' }
</script>

<template>
  <FormKit :schema="schema" :data="data" />
</template>
```

## Props
| Name         | Type      | Description |
|--------------|-----------|-------------|
| options      | array     | List of options |
| optionLabel  | string    | Field for label |
| optionValue  | string    | Field for value |
| pt           | object    | Pass-through options |
| ptOptions    | object    | Pass-through options |
| unstyled     | boolean   | Disable default styles |
| size         | string    | Input size |
| ...          | ...       | See PrimeVue docs for all props |

See [PrimeVue RadioButton docs](https://www.primefaces.org/primevue/radiobutton/) for more details.
