<script setup lang='ts'>
import { useFormKitSchema } from 'my-library'

const { addElement, addList, addListGroup, addComponent, addListGroupFunctions } = useFormKitSchema()
function addFlexElement(children: any[]) {
  return addElement('div', children, { class: 'min-w-40rem flex gap-4' })
}

function addGroupButtons() {
  const addButtonComponent = (onClick: string = '', label: string = '', icon: string = '', severity: string = '', render: string = 'true', styleClass: string = 'p-button-sm ml-2'): object => {
    return addComponent('Button', { onClick, label, icon, class: styleClass, severity }, render)
  }

  return addElement('div', [
    addButtonComponent('$removeNode($node, $index)', '', 'pi pi-times', 'danger'),
    addButtonComponent('$copyNode($node, $index)', '', 'pi pi-plus'),
    addButtonComponent('$moveNodeUp($node, $index)', '', 'pi pi-arrow-up', 'secondary', '$index != 0'),
    addElement('span', [], { class: 'ml-2 mr-10' }, '$index == 0'),
    addButtonComponent('$moveNodeDown($node, $index)', '', 'pi pi-arrow-down', 'secondary', '$index < $node.value.length -1'),
    addElement('span', [], { class: 'ml-2 mr-10' }, '$index == $node.value.length -1'),
  ], { class: 'pt-6' })
}

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
    },
    addElement('hr', [], { class: 'mt-4 mb-4' }),
    addList('attacks', [
      addFlexElement([
        addElement('div', ['Attacks'], { class: 'text-xl mb-2' }),
        addComponent('Button', { onClick: '$addNode($node)', label: 'Add', class: 'p-button-sm', icon: 'pi pi-plus' }, '$node.value.length == 0'),
      ]),
      addListGroup(
        [
          addFlexElement([
            {
              $formkit: 'primeInputText',
              label: 'Name',
              name: 'name',
            },
            {
              $formkit: 'primeInputText',
              label: 'Damage',
              name: 'damage',
              style: { width: '70px' },
            },
            addGroupButtons(),
          ]),
        ],
      ),
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
