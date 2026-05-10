# PrimeRepeater

A FormKit component for repeating groups of inputs with add, remove, clone, and reorder functionality.

[Live Example on Website](https://formkit-primevue.netlify.app/inputs/repeater)

## Usage
```vue
<FormKit
  type="primeRepeater"
  name="items"
  :newItem="{ name: '', value: '' }"
>
  <FormKit type="primeInputText" name="name" label="Name" />
  <FormKit type="primeInputText" name="value" label="Value" />
</FormKit>
```

### Object-based Example
```vue
<script setup>
const schema = [
  {
    $formkit: 'primeRepeater',
    name: 'attacks',
    label: 'Attacks List',
    help: 'Add, clone, move, and delete attacks using the buttons',
    listItemClass: 'flex gap-2',
    groupClass: 'grid grid-cols-8 gap-4',
    buttonGroupClass: 'mt-6 flex gap-1',
    displayCloneButton: true,
    displayAddButton: true,
    displayDeleteButton: true,
    insertButtonLabel: 'Add Attack',
    alwaysDisplayInsertButton: true,
    newItem: { name: '', damage: '' },
    children: [
      {
        $formkit: 'primeInputText',
        label: 'Name',
        name: 'name',
        outerClass: 'col-span-5',
      },
      {
        $formkit: 'primeInputText',
        label: 'Damage',
        name: 'damage',
        outerClass: 'col-span-3',
      },
    ],
  },
]

const data = {
  attacks: [
    { name: 'Sword', damage: '2D6' },
    { name: 'Dagger', damage: '1D6' },
  ],
}
</script>

<template>
  <FormKit :schema="schema" :data="data" />
</template>
```

## Props

| Name                      | Type      | Default | Description |
|---------------------------|-----------|---------|-------------|
| newItem                   | object    | {}      | Template object for new items |
| insertButtonLabel         | string    | 'Add Item' | Label for the insert button |
| insertButtonClass         | string    | ''      | CSS class for insert button |
| insertButtonSize          | string    | ''      | Size of insert button (small, large) |
| alwaysDisplayInsertButton | boolean   | false   | Always show insert button |
| listClass                 | string    | ''      | CSS class for the list container |
| listItemClass             | string    | ''      | CSS class for each list item |
| groupClass                | string    | ''      | CSS class for the input group |
| hideButtonGroup           | boolean   | false   | Hide all action buttons |
| hideMoveButtons           | boolean   | false   | Hide move up/down buttons |
| buttonGroupClass          | string    | ''      | CSS class for button group |
| buttonGroupItemClass      | string    | ''      | CSS class for each button |
| buttonSize                | string    | ''      | Size of action buttons |
| displayCloneButton        | boolean   | false   | Show clone button |
| displayAddButton          | boolean   | false   | Show add button |
| displayDeleteButton       | boolean   | true    | Show delete button |

## Features

- **Add Items**: Insert new items at the beginning or after existing items
- **Remove Items**: Delete items from the list
- **Clone Items**: Duplicate existing items
- **Reorder Items**: Move items up or down in the list
- **Customizable**: Full control over styling and button visibility

## Example with Custom Styling

```vue
<FormKit
  type="primeRepeater"
  name="inventory"
  insertButtonLabel="Add Item"
  listItemClass="flex gap-2 mb-2"
  groupClass="grid grid-cols-12 gap-4"
  buttonGroupClass="flex gap-1"
  :displayCloneButton="false"
  :displayAddButton="false"
  :alwaysDisplayInsertButton="true"
  :newItem="{ item: '', quantity: 1 }"
>
  <FormKit type="primeInputText" name="item" label="Item" outerClass="col-span-8" />
  <FormKit type="primeInputNumber" name="quantity" label="Qty" outerClass="col-span-4" />
</FormKit>
```

