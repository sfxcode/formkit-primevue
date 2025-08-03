# PrimeCascadeSelect

A FormKit wrapper for PrimeVue's CascadeSelect component.

[Live Example on Website](https://formkit-primevue.netlify.app/inputs/cascadeselect)

## Usage
```vue
<FormKit type="primecascadeselect" :options="options" option-label="cname" option-group-label="name" :option-group-children="['states','cities']" v-model="selectedCity" />
```

### Object-based Example
```vue
<script setup>
const options = [
  {
    name: 'Australia',
    code: 'AU',
    states: [
      { name: 'New South Wales', cities: [ { cname: 'Sydney', code: 'A-SY' } ] },
    ],
  },
  // ...more countries
]
const selectedCity = ref()
</script>

<FormKit
  type="primecascadeselect"
  label="Cascade Select"
  :options="options"
  option-label="cname"
  option-group-label="name"
  :option-group-children="['states', 'cities']"
  placeholder="Select a City"
  v-model="selectedCity"
/>
```

## Schema-based Example
```js
const schema = [
  {
    $formkit: 'primeCascadeSelect',
    label: 'Cascade Select',
    options: [
      {
        name: 'Australia',
        code: 'AU',
        states: [
          { name: 'New South Wales', cities: [ { cname: 'Sydney', code: 'A-SY' } ] },
        ],
      },
      // ...more countries
    ],
    optionLabel: 'cname',
    optionGroupLabel: 'name',
    optionGroupChildren: ['states', 'cities'],
    placeholder: 'Select a City',
    name: 'selectedCity',
  },
]
```

## Props
| Name              | Type    | Description |
|-------------------|---------|-------------|
| options           | array   | Options for selection |
| optionLabel       | string  | Field for label |
| optionValue       | string  | Field for value |
| optionGroupLabel  | string  | Field for group label |
| optionGroupChildren | array | Field for group children |
| placeholder       | string  | Placeholder text |
| pt                | object  | Pass-through options |
| ptOptions         | object  | Pass-through options |
| unstyled          | boolean | Disable default styles |
| size              | string  | Input size |

See [PrimeVue CascadeSelect docs](https://www.primefaces.org/primevue/cascadeselect/) for more details.

