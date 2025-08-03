# PrimeInputNumber

A FormKit wrapper for PrimeVue's InputNumber component.

[Live Example on Website](https://formkit-primevue.netlify.app/inputs/inputnumber)

## Usage
```vue
<FormKit type="primeinputnumber" v-model="value" />
```

### Object-based Example
```vue
<script setup>
const schema = [
  { $formkit: 'primeInputNumber', name: 'firstNumber', label: 'Input Number', value: 1234, validation: 'max:10000', useGrouping: true, minFractionDigits: 2 },
  { $formkit: 'primeInputNumber', name: 'secondNumber', label: 'Input Number', value: 999, validation: 'min:900', useGrouping: false, minFractionDigits: 0 },
  { $formkit: 'primeInputNumber', name: 'fixedNumber', label: 'Input Number', value: 1234, class: 'customClass', style: { background: 'gray' }, readonly: true },
  { $formkit: 'primeInputNumber', name: 'numberInputWithMinNumber', label: 'Number Input with Min Value', min: 10 },
  { $formkit: 'primeInputNumber', name: 'customizedInputNumber', label: 'Customized Input Number', placeholder: 'Enter currency', useGrouping: true, minFractionDigits: 2, maxFractionDigits: 4, mode: 'currency', currency: 'USD', locale: 'en-US', showButtons: true, buttonLayout: 'horizontal', step: 0.01 },
]
const data = {}
</script>

<template>
  <FormKit :schema="schema" :data="data" />
</template>
```

## Props
| Name              | Type      | Description |
|-------------------|-----------|-------------|
| useGrouping       | boolean   | Use grouping separators |
| min               | number    | Minimum value |
| max               | number    | Maximum value |
| minFractionDigits | number    | Minimum fraction digits |
| maxFractionDigits | number    | Maximum fraction digits |
| locale            | string    | Locale for formatting |
| mode              | string    | Input mode (decimal, currency) |
| currency          | string    | Currency code |
| prefix            | string    | Prefix text |
| suffix            | string    | Suffix text |
| showButtons       | boolean   | Show increment/decrement buttons |
| buttonLayout      | string    | Button layout |
| step              | number    | Step increment |
| pt                | object    | Pass-through options |
| ptOptions         | object    | Pass-through options |
| unstyled          | boolean   | Disable default styles |
| placeholder       | string    | Placeholder text |
| size              | string    | Input size |

See [PrimeVue InputNumber docs](https://www.primefaces.org/primevue/inputnumber/) for more details.
