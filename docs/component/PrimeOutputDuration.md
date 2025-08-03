# PrimeOutputDuration

A FormKit wrapper for PrimeVue's OutputDuration component.

[Live Example on Website](https://formkit-primevue.netlify.app/outputs/outputduration)

## Usage
```vue
<FormKit type="primeoutputduration" v-model="duration" />
```

### Object-based Example
```vue
<script setup>
function prefixClicked() {
  console.error('Prefix Icon Clicked')
}
const schema = [
  { $formkit: 'primeOutputDuration', name: 'duration1', label: 'Duration' },
  { $formkit: 'primeOutputDuration', name: 'duration2', label: 'Another Duration' },
  { $formkit: 'primeOutputDuration', name: 'duration3', label: 'Another Duration', iconPrefix: 'pi pi-check', onIconPrefixClicked: prefixClicked },
]
const data = { duration1: '142', duration2: '4h35m', duration3: '3:47' }
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
| ...          | ...       | See PrimeOutputDuration source for all props |

See [PrimeOutputDuration source](https://github.com/sfxcode/formkit-primevue/tree/main/src/components/PrimeOutputDuration.vue) for more details.
