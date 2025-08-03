# PrimeOutputBoolean

A FormKit wrapper for PrimeVue's OutputBoolean component.

[Live Example on Website](https://formkit-primevue.netlify.app/outputs/outputboolean)

## Usage
```vue
<FormKit type="primeoutputboolean" v-model="value" />
```

### Object-based Example
```vue
<script setup>
const schema = [
  { $formkit: 'primeOutputBoolean', name: 'trueValue', label: 'Default' },
  { $formkit: 'primeOutputBoolean', name: 'trueValue', prefix: 'Boolean Value:' },
  { $formkit: 'primeOutputBoolean', name: 'falseValue', label: 'False Example' },
  { $formkit: 'primeOutputBoolean', name: 'trueValue', label: 'True with custom Text', trueValue: 'Sure' },
  { $formkit: 'primeOutputBoolean', name: 'falseValue', label: 'False with custom Text', falseValue: 'Never' },
  { $formkit: 'primeOutputBoolean', name: 'trueValue', label: 'Conditional true - only Icon', if: '$trueValue', trueValue: '', iconSuffix: 'pi pi-check' },
  { $formkit: 'primeOutputBoolean', name: 'falseValue', label: 'Conditional false - only Icon', if: '!$falseValue', falseValue: '', iconSuffix: 'pi pi-minus' },
]
const data = { trueValue: true, falseValue: false }
</script>

<template>
  <FormKit :schema="schema" :data="data" />
</template>
```

## Props
| Name         | Type      | Description |
|--------------|-----------|-------------|
| trueValue    | any       | Value for true state |
| falseValue   | any       | Value for false state |
| prefix       | string    | Prefix text |
| suffix       | string    | Suffix text |
| iconPrefix   | string    | Icon for prefix |
| iconSuffix   | string    | Icon for suffix |

See [PrimeOutputBoolean source](https://github.com/sfxcode/formkit-primevue/tree/main/src/components/PrimeOutputBoolean.vue) for more details.
