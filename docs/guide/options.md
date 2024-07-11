# Options

In some inputs options are needed. There are several ways to deal with the options.

## Option based Inputs

- Listbox
- MultiSelect
- RadioButton
- Select
- SelectButton

## Ways of Usage

### Simple Array

```vue
const stringArray = ['refresh', 'hourly', 'daily']

const schema
= [
    {
    $formkit: 'primeDropdown',
    name: 'selectString',
    label: 'Simple String Array Dropdown',
    options: stringArray,
    },
]
```

### Object Array / Select Object by key

Here you have to select a property name for **optionLabel** as key.

```vue
const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
]

const schema = [
    {
    $formkit: 'primeDropdown',
    name: 'selectObjectByLabel',
    label: 'Select Object Dropdown',
    optionLabel: 'name',
    options: cities,
    },
]
```

### Object Array / Select Object by key and value by key

Here you have to select a property name for **optionLabel** as key and a property name for **optionValue** as key.

```vue
const options = [
    { label: 'Every page load', value: 'refresh' },
    { label: 'Every hour', value: 'hourly' },
    { label: 'Every day', value: 'daily' },
]

const schema = [
    {
    $formkit: 'primeDropdown',
    name: 'selectValue',
    label: 'Cookie notice Dropdown',
    value: 'hourly',
    optionLabel: 'label',
    optionValue: 'value',
    options,
    help: 'Cookie notice frequency ?',
    },
]
```
