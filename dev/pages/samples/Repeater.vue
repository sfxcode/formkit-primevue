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
    itemListClass: '',
    itemClass: 'grid grid-cols-12 gap-4',
    buttonsOuterClass: 'col-span-4 col-start-9',
    buttonsInnerClass: 'flex gap-1 pt-1',
    buttonsLabel: 'Actions',
    addButtonLabel: 'Add Attack',
    addButtonClass: 'mb-4',
    newItem: createDefaultValue(),
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
