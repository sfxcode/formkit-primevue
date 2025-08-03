# PrimeSelect

A FormKit wrapper for PrimeVue's Select component.

[Live Example on Website](https://formkit-primevue.netlify.app/inputs/select)

## Usage
```vue
<FormKit type="primeselect" :options="options" option-label="label" option-value="value" v-model="selected" />
```

### Object-based Example
```vue
<script setup>
const options = [
  { label: 'Every page load', value: 'refresh' },
  { label: 'Every hour', value: 'hourly' },
  { label: 'Every day', value: 'daily' },
]
const cities = [
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
]
const stringArray = ['refresh', 'hourly', 'daily']
const schema = [
  { $formkit: 'primeSelect', name: 'selectValue', label: 'Cookie notice Select', value: 'hourly', optionLabel: 'label', optionValue: 'value', options, help: 'Cookie notice frequency ?' },
  { $formkit: 'primeSelect', name: 'selectObjectByLabel', label: 'Select Object', optionLabel: 'name', options: cities },
  { $formkit: 'primeSelect', name: 'selectString', label: 'Simple String Array Select', options: stringArray },
  { $formkit: 'primeSelect', name: 'styled', label: 'Styled', value: 'hourly', style: { background: 'gray' }, class: 'customClass', optionLabel: 'label', optionValue: 'value', options, disabled: true },
  { $formkit: 'primeSelect', name: 'custom', label: 'With Clear and Filter', showClear: true, filter: true, placeholder: 'Please select', optionLabel: 'label', optionValue: 'value', options, validation: 'required' },
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
| showClear    | boolean   | Show clear button |
| filter       | boolean   | Enable filtering |
| placeholder  | string    | Placeholder text |
| pt           | object    | Pass-through options |
| ptOptions    | object    | Pass-through options |
| unstyled     | boolean   | Disable default styles |
| size         | string    | Input size |
| ...          | ...       | See PrimeVue docs for all props |

See [PrimeVue Select docs](https://www.primefaces.org/primevue/select/) for more details.
