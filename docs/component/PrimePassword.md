# PrimePassword

A FormKit wrapper for PrimeVue's Password component.

[Live Example on Website](https://formkit-primevue.netlify.app/inputs/password)

## Usage
```vue
<FormKit type="primepassword" v-model="password" />
```

### Object-based Example
```vue
<script setup>
const schema = [
  { $formkit: 'primePassword', name: 'password', label: 'Password', help: 'Enter your new password', feedback: true },
  { $formkit: 'primePassword', name: 'password_confirm', label: 'Confirm password', help: 'Enter your new password again.', validation: 'required|confirm', toggleMask: true, validationLabel: 'password confirmation' },
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
| feedback     | boolean   | Show password strength feedback |
| mediumRegex  | string    | Regex for medium strength |
| strongRegex  | string    | Regex for strong strength |
| promptLabel  | string    | Prompt label |
| weakLabel    | string    | Weak label |
| mediumLabel  | string    | Medium label |
| strongLabel  | string    | Strong label |
| maskIcon     | string    | Icon for mask |
| unmaskIcon   | string    | Icon for unmask |
| pt           | object    | Pass-through options |
| ptOptions    | object    | Pass-through options |
| unstyled     | boolean   | Disable default styles |
| placeholder  | string    | Placeholder text |
| toggleMask   | boolean   | Show toggle mask button |
| size         | string    | Input size |

See [PrimeVue Password docs](https://primevue.org/password/) for more details.
