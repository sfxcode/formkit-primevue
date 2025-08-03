# PrimeOutputDate

A FormKit wrapper for PrimeVue's OutputDate component.

[Live Example on Website](https://formkit-primevue.netlify.app/outputs/outputdate)

## Usage
```vue
<FormKit type="primeoutputdate" v-model="date" />
```

### Object-based Example
```vue
<script setup>
const schema = [
  { $formkit: 'primeOutputDate', name: 'date1', label: 'Basic' },
  { $formkit: 'primeOutputDate', id: 'date2', name: 'date2', label: 'Icon Left', iconPrefix: 'pi pi-check' },
  { $formkit: 'primeOutputDate', name: 'date3', label: 'Icon Right', help: 'Right Icon Demo', iconSuffix: 'pi pi-check text-yellow-500' },
]
const data = { date1: new Date(), date2: new Date(), date3: new Date() }
</script>

<template>
  <FormKit :schema="schema" :data="data" />
</template>
```

## Props
| Name         | Type      | Description |
|--------------|-----------|-------------|
| iconPrefix   | string    | Icon for prefix |
| iconSuffix   | string    | Icon for suffix |
| prefix       | string    | Prefix text |
| suffix       | string    | Suffix text |
| ...          | ...       | See PrimeOutputDate source for all props |

See [PrimeOutputDate source](../../src/components/PrimeOutputDate.vue) for more details.
