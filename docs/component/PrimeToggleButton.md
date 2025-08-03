# PrimeToggleButton

A FormKit wrapper for PrimeVue's ToggleButton component.

[Live Example on Website](https://formkit-primevue.netlify.app/inputs/togglebutton)

## Usage
```vue
<FormKit type="primetogglebutton" v-model="value" />
```

### Object-based Example
```vue
<script setup>
const schema = [
  { $formkit: 'primeToggleButton', label: 'ToggleButton', name: 'toggleButton' },
  { $formkit: 'primeToggleButton', label: 'Second ToggleButton', name: 'toggleButtonRight', iconPos: 'right' },
  { $formkit: 'primeToggleButton', label: 'Custom ToggleButton', name: 'toggleButtonCustom', iconPos: 'right', onIcon: 'pi pi-plus', offIcon: 'pi pi-minus', onLabel: 'plus', offLabel: 'minus' },
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
| onLabel      | string    | Label for ON state |
| offLabel     | string    | Label for OFF state |
| onIcon       | string    | Icon for ON state |
| offIcon      | string    | Icon for OFF state |
| iconPos      | string    | Icon position |
| size         | string    | Input size |

See [PrimeVue ToggleButton docs](https://primevue.org/togglebutton/) for more details.
