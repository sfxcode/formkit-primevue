# PrimeOutputNumber

A FormKit wrapper for PrimeVue's OutputNumber component.

[Live Example on Website](https://formkit-primevue.netlify.app/outputs/outputnumber)

## Usage
```vue
<FormKit type="primeoutputnumber" v-model="number" />
```

### Object-based Example
```vue
<script setup>
const schema = [
  { $formkit: 'primeOutputNumber', name: 'mumber1', format: 'decimal', label: 'Basic' },
  { $formkit: 'primeOutputNumber', name: 'number2', label: 'Icon Left', iconPrefix: 'pi pi-check' },
  { $formkit: 'primeOutputNumber', name: 'number3', format: 'currency', label: 'Icon Right', help: 'Right Icon Demo', iconSuffix: 'pi pi-check' },
]
const data = { mumber1: 12.2, number2: 42.0, number3: 20000 }
</script>

<template>
  <FormKit :schema="schema" :data="data" />
</template>
```

## Props
| Name         | Type      | Description |
|--------------|-----------|-------------|
| format       | string    | Number format (decimal, currency, etc.) |
| iconPrefix   | string    | Icon for prefix |
| iconSuffix   | string    | Icon for suffix |
| prefix       | string    | Prefix text |
| suffix       | string    | Suffix text |
| ...          | ...       | See PrimeOutputNumber source for all props |

See [PrimeOutputNumber source](../../src/components/PrimeOutputNumber.vue) for more details.
