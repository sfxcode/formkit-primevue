# PrimeSelectButton

A FormKit wrapper for PrimeVue's SelectButton component.

[Live Example on Website](https://formkit-primevue.netlify.app/inputs/selectbutton)

## Usage
```vue
<FormKit type="primeselectbutton" :options="options" option-label="label" option-value="value" v-model="selected" />
```

### Object-based Example
```vue
<script setup>
const selectOptions = [
  { label: 'yes', value: 'YES' },
  { label: 'no', value: 'NO' },
  { label: 'maybe', value: 'MAYBE' },
]
const selectOptions2 = [
  { label: 'Email', value: 'mail' },
  { label: 'Phone', value: 'phone' },
  { label: 'Chat', value: 'chat' },
]
const schema = [
  { $formkit: 'primeSelectButton', label: 'SelectButton', name: 'selectButton', options: selectOptions, optionLabel: 'label', optionValue: 'value', value: 'MAYBE', unselectable: false },
  { $formkit: 'primeSelectButton', label: 'Contact options', name: 'selectButtonMultiple', optionLabel: 'label', optionValue: 'value', options: selectOptions2, multiple: true },
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
| optionDisabled | boolean | Disable option |
| multiple     | boolean   | Enable multiple selection |
| dataKey      | string    | Unique key for options |
| pt           | object    | Pass-through options |
| ptOptions    | object    | Pass-through options |
| unstyled     | boolean   | Disable default styles |
| size         | string    | Input size |
| ...          | ...       | See PrimeVue docs for all props |

See [PrimeVue SelectButton docs](https://primevue.org/selectbutton/) for more details.
