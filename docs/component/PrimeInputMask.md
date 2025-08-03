# PrimeInputMask

A FormKit wrapper for PrimeVue's InputMask component.

[Live Example on Website](https://formkit-primevue.netlify.app/inputs/inputmask)

## Usage
```vue
<FormKit type="primeinputmask" v-model="value" mask="99-999999" />
```

### Object-based Example
```vue
<script setup>
const schema = [
  { $formkit: 'primeInputMask', name: 'myInputMask', label: 'Input Mask', validation: 'required', validationVisibility: 'live', mask: '99-999999', placeholder: '##-######' },
  { $formkit: 'primeInputMask', name: 'custom', label: 'Input Mask', mask: '(999) 999-9999', iconPrefix: 'pi pi-check', iconSuffix: 'pi pi-check' },
  { $formkit: 'primeInputMask', name: 'phone', label: 'Phone', mask: '+1 (999) 999-9999', placeholder: '+1 (###) ###-####', validation: 'required', validationVisibility: 'live' },
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
| mask         | string    | Input mask pattern |
| slotChar     | string    | Slot character |
| autoClear    | boolean   | Auto clear input |
| unmask       | boolean   | Return unmasked value |
| pt           | object    | Pass-through options |
| ptOptions    | object    | Pass-through options |
| unstyled     | boolean   | Disable default styles |
| invalid      | boolean   | Mark as invalid |
| variant      | string    | Visual variant |
| size         | string    | Input size |

See [PrimeVue InputMask docs](https://www.primefaces.org/primevue/inputmask/) for more details.
