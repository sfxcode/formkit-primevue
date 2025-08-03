# PrimeListbox

A FormKit wrapper for PrimeVue's Listbox component.

[Live Example on Website](https://formkit-primevue.netlify.app/inputs/listbox)

## Usage
```vue
<FormKit type="primelistbox" :options="options" option-label="label" option-value="value" v-model="selected" />
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
  { $formkit: 'primeListbox', name: 'cookie_notice', label: 'Cookie notice', value: 'hourly', optionLabel: 'label', optionValue: 'value', options, help: 'Cookie notice frequency ?' },
  { $formkit: 'primeListbox', name: 'styled', label: 'Styled and Diabled', value: 'hourly', style: { background: 'gray' }, class: 'customClass', optionLabel: 'label', optionValue: 'value', options, disabled: true },
  { $formkit: 'primeListbox', name: 'custom', label: 'With Multiple Select and Filter', multiple: true, filter: true, placeholder: 'Please select', optionLabel: 'label', optionValue: 'value', options, validation: 'required' },
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
| options      | array     | List of options |
| optionLabel  | string    | Field for label |
| optionValue  | string    | Field for value |
| multiple     | boolean   | Enable multiple selection |
| filter       | boolean   | Enable filtering |
| filterIcon   | string    | Icon for filter |
| filterPlaceholder | string | Placeholder for filter |
| filterLocale | string    | Locale for filter |
| filterMatchMode | string | Filter match mode |
| autoOptionFocus | boolean | Auto focus option |
| selectOnFocus | boolean  | Select on focus |

See [PrimeVue Listbox docs](https://www.primefaces.org/primevue/listbox/) for more details.
