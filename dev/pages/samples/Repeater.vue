<script setup lang='ts'>
import { useFormKitRepeater, useFormKitSchema } from 'my-library'

const { addElement, addList, addListGroup } = useFormKitSchema()
const { addInsertButton, addGroupButtons, addListGroupFunctions } = useFormKitRepeater()

const data = ref()

function createDefaultValue(): object {
  return { name: 'Bow', damage: '1D6+4' }
}

onMounted(() => {
  const defaultData = { name: 'Fighter', attacks: [{ name: 'Sword', damage: '2D20' }, { name: 'Dagger', damage: '2D6' }] }
  addListGroupFunctions(defaultData, createDefaultValue())
  data.value = defaultData
})

const schema
  = [
    {
      $formkit: 'primeInputText',
      label: 'Name',
      name: 'name',
      outerClass: 'col-6',
    },
    addElement('div', [], { class: 'mt-4' }),
    addList('attacks', [
      addElement('div', ['Attacks'], { class: 'text-xl' }),
      addInsertButton(),
      addListGroup([
        {
          $formkit: 'primeInputText',
          label: 'Name',
          name: 'name',
          outerClass: 'col-4',
        },
        {
          $formkit: 'primeInputText',
          label: 'Damage',
          name: 'damage',
          outerClass: 'col-2',
        },
        addGroupButtons(),
      ]),
    ], true, 'true'),
  ]
</script>

<template>
  <div v-if="data" class="">
    <PrimeInput
      header="Repeater" :schema="schema" :data="data"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
