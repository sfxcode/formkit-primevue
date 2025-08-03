# PrimeOutputList

A FormKit wrapper for PrimeVue's OutputList component.

[Live Example on Website](https://formkit-primevue.netlify.app/outputs/outputlist)

## Usage
```vue
<FormKit type="primeoutputlist" v-model="list" />
```

### Object-based Example
```vue
<script setup>
function convertValues(value) {
  return value.map(item => item.toUpperCase())
}
function convertValuesCharCount(value) {
  return value.map(item => `${item} (${item.length})`)
}
function convertValuesSortedReverse(value) {
  return value.sort((a, b) => a.localeCompare(b)).reverse()
}
const schema = [
  { $formkit: 'primeOutputList', name: 'list1', label: 'Default Divider' },
  { $formkit: 'primeOutputList', name: 'list1', label: 'Custom Divider', divider: ' ' },
  { $formkit: 'primeOutputList', name: 'list2', label: 'Custom Divider with Prefix Icon', iconPrefix: 'pi pi-list', divider: ' - ' },
  { $formkit: 'primeOutputList', name: 'list1', label: 'Converter Function', convertValue: convertValues, divider: ' - ' },
  { $formkit: 'primeOutputList', name: 'list2', label: 'Converter Function - Char Count', convertValue: convertValuesCharCount },
  { $formkit: 'primeOutputList', name: 'list2', label: 'Converter Function - Sorted Reverse', convertValue: convertValuesSortedReverse },
  { $formkit: 'primeOutputList', name: 'list2', label: 'Use Chip Item Class', itemClass: 'p-chip-item', divider: ' ' },
  { $formkit: 'primeOutputList', name: 'list1', label: 'Use listStyle: span', listStyle: 'span' },
  { $formkit: 'primeOutputList', name: 'list2', label: 'Use listStyle: div', listStyle: 'div' },
  { $formkit: 'primeOutputList', name: 'list2', label: 'Use listStyle: ul', listStyle: 'ul' },
  { $formkit: 'primeOutputList', name: 'list2', label: 'Use listStyle: ol', listStyle: 'ol' },
]
const data = { list1: ['Hello', 'World'], list2: ['FormKit', 'meets', 'PrimeVue'] }
</script>

<template>
  <FormKit :schema="schema" :data="data" />
</template>
```

## Props
| Name         | Type      | Description |
|--------------|-----------|-------------|
| divider      | string    | Divider between items |
| convertValue | function  | Function to convert values |
| listStyle    | string    | List style (span, div, ul, ol) |
| itemClass    | string    | Class for list items |
| iconPrefix   | string    | Icon for prefix |
| iconSuffix   | string    | Icon for suffix |
| prefix       | string    | Prefix text |
| suffix       | string    | Suffix text |
| ...          | ...       | See PrimeOutputList source for all props |

See [PrimeOutputList source](https://github.com/sfxcode/formkit-primevue/tree/main/src/components/PrimeOutputList.vue) for more details.
