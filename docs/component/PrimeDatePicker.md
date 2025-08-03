# PrimeDatePicker

A FormKit wrapper for PrimeVue's DatePicker component.

[Live Example on Website](https://formkit-primevue.netlify.app/inputs/datepicker)

## Usage
```vue
<FormKit type="primedatepicker" v-model="date" />
```

### Object-based Example
```vue
<script setup>
const schema = [
  { $formkit: 'primeDatePicker', id: 'basic', name: 'basic', label: 'Basic', placeholder: 'MM/DD/YYYY', validation: 'required' },
  { $formkit: 'primeDatePicker', name: 'styled', label: 'Styled', style: { background: 'gray' }, class: 'customClass', showIcon: true },
  { $formkit: 'primeDatePicker', name: 'icon', label: 'Custom Icon', dateFormat: 'yy-mm', showIcon: true, icon: 'pi pi-question' },
  { $formkit: 'primeDatePicker', name: 'range', label: 'Date Range', selectionMode: 'range', manualInput: false },
  { $formkit: 'primeDatePicker', name: 'multiple', label: 'Multiple Dates', selectionMode: 'multiple', manualInput: false },
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
| dateFormat   | string    | Date format |
| placeholder  | string    | Placeholder text |
| selectionMode| string    | Selection mode (single, range, multiple) |
| inline       | boolean   | Inline display |
| icon         | string    | Custom icon |
| showIcon     | boolean   | Show calendar icon |
| manualInput  | boolean   | Allow manual input |
| ...          | ...       | See PrimeVue docs for all props |

See [PrimeVue DatePicker docs](https://primevue.org/datepicker/) for more details.
