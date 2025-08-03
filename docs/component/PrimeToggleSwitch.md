# PrimeToggleSwitch

A FormKit wrapper for PrimeVue's ToggleSwitch component.

[Live Example on Website](https://formkit-primevue.netlify.app/inputs/toggleswitch)

## Usage
```vue
<FormKit type="primetoggleswitch" v-model="value" />
```

### Object-based Example
```vue
<script setup>
const schema = [
  { $formkit: 'primeToggleSwitch', id: 'basic', name: 'basic', label: 'Basic' },
  { $formkit: 'primeToggleSwitch', name: 'eu_citizen', id: 'eu', suffix: 'Are you a european citizen: ' },
  { $formkit: 'primeToggleSwitch', name: 'confirmation', id: 'confirm', prefix: 'Are you sure ?', wrapperClass: 'flex items-center' },
  { $formkit: 'primeToggleSwitch', name: 'readonly', label: 'readonly', readonly: true },
  { $formkit: 'primeToggleSwitch', name: 'custom', label: 'custom values', trueValue: 'A', falseValue: 'B' },
]
const data = { readonly: true }
</script>

<template>
  <FormKit :schema="schema" :data="data" />
</template>
```

## Props
| Name         | Type      | Description |
|--------------|-----------|-------------|
| trueValue    | any       | Value for ON state |
| falseValue   | any       | Value for OFF state |
| pt           | object    | Pass-through options |
| ptOptions    | object    | Pass-through options |
| unstyled     | boolean   | Disable default styles |

See [PrimeVue ToggleSwitch docs](https://www.primefaces.org/primevue/toggleswitch/) for more details.
