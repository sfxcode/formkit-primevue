<script setup lang='ts'>
const tab = ref(true)
const key = ref(0)
const mode = computed(() => {
  if (tab.value) {
    return 'tab'
  }
  else {
    return 'progress'
  }
})

const schema = reactive([
  {
    $formkit: 'multi-step',
    tabStyle: mode,
    allowIncomplete: true,
    children: [
      {
        $formkit: 'step',
        name: 'step1',
        label: 'Step 1',
        nextAttrs: {
          'data-foo': 'bar',
        },
        children: [
          {
            $formkit: 'primeInputText',
            name: 'email',
            label: 'Email',
            help: 'This will be used for your account.',
            validation: 'required|email',
            outerClass: 'col-6',
          },
        ],
      },
      {
        $formkit: 'step',
        name: 'step2',
        label: 'Step 2',
        children: [
          {
            $formkit: 'primeTextarea',
            name: 'myText',
            label: 'Text',
            validation: '',
            rows: '3',
          },
        ],
      },
      {
        $formkit: 'step',
        name: 'step3',
        label: 'Step 3',
        children: [

          {
            $formkit: 'primeInputText',
            name: 'name',
            label: 'Basic',
            validation: 'required',

          },
          {
            $formkit: 'primeInputText',
            id: 'icon',
            name: 'todo',
            label: 'Todo',
            help: '',
            placeholder: 'todo',
            iconPrefix: 'pi pi-check',
            validation: 'required',
          },
        ],
      },
    ],
  },
])
const data = ref({ })

function update() {
  data.value = {}
  key.value++
}
</script>

<template>
  <div class="ml-2">
    <PrimeInput
      :key="key"
      header="MultiStep" :schema="schema" :data="data"
    >
      <div class="flex gap-2 mb-4">
        <div>Use Tab</div>
        <div>   <ToggleSwitch v-model="tab" @change="update" /></div>
      </div>
      <h4>Mode: {{ mode }} </h4>
    </PrimeInput>
  </div>
</template>

<style lang='scss'>

</style>
