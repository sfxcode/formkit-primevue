<script setup lang='ts'>
// The same inputs as the prime-prefixed samples, addressed through the library-neutral `form` prefix.
const data = {
  name: 'Fighter',
  role: 'tank',
  attacks: [
    { name: 'Sword', damage: '2D6' },
    { name: 'Dagger', damage: '1D6' },
  ],
}

const schema = [
  {
    $formkit: 'formInputText',
    label: 'Name',
    name: 'name',
    outerClass: 'col-6 mb-2',
    validation: 'required',
  },
  {
    $formkit: 'formSelect',
    label: 'Role',
    name: 'role',
    options: [{ label: 'Tank', value: 'tank' }, { label: 'Healer', value: 'healer' }],
    optionLabel: 'label',
    optionValue: 'value',
  },
  {
    $formkit: 'formRepeater',
    name: 'attacks',
    label: 'Attacks',
    minItems: 1,
    maxItems: 4,
    listItemClass: 'flex flex-wrap sm:flex-nowrap gap-2',
    buttonGroupClass: 'mb-4 sm:mb-0 sm:mt-6 flex gap-1',
    displayCloneButton: true,
    displayAddButton: true,
    displayDeleteButton: true,
    draggable: true,
    displayDragHandle: true,
    insertButtonLabel: 'Add Attack',
    insertButtonClass: 'mb-2',
    alwaysDisplayInsertButton: true,
    newItem: { name: '', damage: '' },
    children: [
      { $formkit: 'formInputText', label: 'Name', name: 'name', validation: 'required' },
      { $formkit: 'formInputText', label: 'Damage', name: 'damage' },
    ],
  },
  {
    $formkit: 'formOutputText',
    label: 'Output',
    name: 'name',
  },
]
</script>

<template>
  <div class="mt-1">
    <PrimeInput header="Form Prefix" :schema="schema" :data="data" />
  </div>
</template>
