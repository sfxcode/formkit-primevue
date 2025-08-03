# PrimeMultiSelect

A FormKit wrapper for PrimeVue's MultiSelect component.

[Live Example on Website](https://formkit-primevue.netlify.app/inputs/multiselect)

## Usage
```vue
<FormKit type="primemultiselect" :options="options" option-label="label" option-value="value" v-model="selected" />
```

### Object-based Example
```vue
<script setup>
const options = [
  { label: 'Every page load', value: 'refresh' },
  { label: 'Every hour', value: 'hourly' },
  { label: 'Every day', value: 'daily' },
]
const schema = [
  { $formkit: 'primeMultiSelect', name: 'cookie_notice', label: 'Cookie notice MultiSelect', optionLabel: 'label', optionValue: 'value', options, help: 'Cookie notice frequency ?' },
  { $formkit: 'primeMultiSelect', name: 'styled', label: 'Styled', style: { background: 'gray' }, class: 'customClass', optionLabel: 'label', optionValue: 'value', options, disabled: true },
  { $formkit: 'primeMultiSelect', name: 'custom', label: 'With Multiple Select and Filter', filter: true, placeholder: 'Please select', optionLabel: 'label', optionValue: 'value', options, validation: 'required' },
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
| options      | array     | List of options |
| optionLabel  | string    | Field for label |
| optionValue  | string    | Field for value |
| filter       | boolean   | Enable filtering |
| placeholder  | string    | Placeholder text |
| pt           | object    | Pass-through options |
| ptOptions    | object    | Pass-through options |
| unstyled     | boolean   | Disable default styles |
| size         | string    | Input size |
| ...          | ...       | See PrimeVue docs for all props |

See [PrimeVue MultiSelect docs](https://primevue.org/multiselect/) for more details.
