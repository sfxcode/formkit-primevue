# PrimeInputText

A FormKit wrapper for PrimeVue's InputText component.

[Live Example on Website](https://formkit-primevue.netlify.app/inputs/inputtext)

## Usage
```vue
<FormKit type="primeinputtext" v-model="text" />
```

### Object-based Example
```vue
<script setup>
const schema = [
  { $formkit: 'primeInputText', name: 'name', label: 'Basic', validation: 'required', help: 'Some Help Text' },
  { $formkit: 'primeInputText', name: 'telephone', placeholder: 'telephone', help: 'Input Type: tel', label: 'Telephone', inputType: 'tel' },
  { $formkit: 'primeInputText', id: 'icon', name: 'iconLeft', label: 'Icon Left', placeholder: 'icon', iconPrefix: 'pi pi-check' },
  { $formkit: 'primeInputText', name: 'iconRight', label: 'Icon Right (Disabled) - smize: small', help: 'Right Icon Demo', iconSuffix: 'pi pi-check', disabled: true, size: 'small' },
]
const data = { name: 'Harry Potter', iconLeft: 'Some Text ...', iconRight: 'Another Text ...' }
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
| size         | string    | Input size |
| inputType    | string    | Input type (e.g. text, tel) |
| placeholder  | string    | Placeholder text |

See [PrimeVue InputText docs](https://www.primefaces.org/primevue/inputtext/) for more details.
