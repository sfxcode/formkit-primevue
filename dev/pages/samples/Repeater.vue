<script setup lang='ts'>
const data = ref()

function createDefaultValue(): object {
  return { name: 'Bow', damage: '1D6+4' }
}

onMounted(() => {
  data.value = { name: 'Fighter', attacks: [{ name: 'Sword', damage: '2D6' }, { name: 'Dagger', damage: '1D6' }, { name: 'Spear', damage: '1D6+2' }] }
})

const schema
  = [
    {
      $formkit: 'primeInputText',
      label: 'Name',
      name: 'name',
      outerClass: 'col-6 mb-2',
    },
    {
      $formkit: 'primeRepeater',
      name: 'attacks',
      label: 'Attacks',
      help: 'Attacks List Demo - Use Buttons to clone, move and delete',
      listClass: '',
      listItemClass: 'flex gap-2',
      minItems: 1,
      maxItems: 4,
      buttonGroupClass: 'formkit-outer buttonGroupClass mt-6 flex gap-1',
      buttonGroupItemClass: 'buttonGroupItemClass',
      itemClass: '',
      hideButtonGroup: false,
      hideMoveButtons: false,
      draggable: true,
      displayDragHandle: true,
      dragHandleClass: 'mt-3 me-2 cursor-move text-surface-500',
      dragHandleIconClass: 'pi pi-bars',
      displayCloneButton: true,
      displayAddButton: true,
      displayDeleteButton: true,
      insertButtonLabel: 'Add Attack',
      insertButtonClass: 'mb-2',
      insertButtonSize: '',
      buttonSize: '',
      alwaysDisplayInsertButton: true,
      newItem: createDefaultValue(),
      children: [
        {
          $formkit: 'primeInputText',
          label: 'Name',
          name: 'name',
          outerClass: 'col-span-5',
          validation: 'required',
        },
        {
          $formkit: 'primeInputText',
          label: 'Damage',
          name: 'damage',
          outerClass: 'col-span-3 col-start-6',
        },
      ],
    },
  ]
</script>

<template>
  <div v-if="data" class="mt-1">
    <PrimeInput
      header="Repeater" :schema="schema" :data="data"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
