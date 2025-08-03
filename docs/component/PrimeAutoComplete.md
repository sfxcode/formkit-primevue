# PrimeAutoComplete

A FormKit wrapper for PrimeVue's AutoComplete component.

[Live Example on Website](https://formkit-primevue.netlify.app/inputs/autocomplete)

## Usage
```vue
<FormKit type="primeautocomplete" :options="userList" option-label="name" v-model="selectedUser" />
```

### Object-based Example
```vue
<script setup>
const userList = [
  { id: '1', name: 'Tom', value: '123' },
  { id: '2', name: 'Tim', value: '124' },
]
const selectedUser = ref()
</script>

<FormKit
  type="primeautocomplete"
  label="Object AutoComplete - Use [t]om"
  :options="userList"
  option-label="name"
  v-model="selectedUser"
/>
```

## Schema-based Example
```js
const schema = [
  {
    $formkit: 'primeAutoComplete',
    label: 'Object AutoComplete - Use [t]om',
    options: [
      { id: '1', name: 'Tom', value: '123' },
      { id: '2', name: 'Tim', value: '124' },
    ],
    optionLabel: 'name',
    name: 'selectedUser',
  },
]
```

## Props
| Name         | Type      | Description |
|--------------|-----------|-------------|
| pt           | object    | Pass-through options |
| ptOptions    | object    | Pass-through options |
| unstyled     | boolean   | Disable default styles |
| dropdown     | boolean   | Show dropdown button |
| multiple     | boolean   | Enable multiple selection |
| typeahead    | number    | Delay for suggestions |
| optionLabel  | string    | Field for label |
| options      | array     | Suggestions list |
| size         | string    | Input size |
| minLength    | number    | Minimum input length |
| placeholder  | string    | Placeholder text |
| fluid        | boolean   | Full width input |
| separators   | array     | Separators for multiple values |

See [PrimeVue AutoComplete docs](https://primevue.org/autocomplete/) for more details.

