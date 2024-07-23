<script setup lang='ts'>
const primeAttributes = ''
const customAttributes = 'icon, iconPosition (left, right)'

const schema
  = [
    {
      $formkit: 'primeOutputText',
      name: 'name',
      label: 'Basic',
      wrapperClass: 'myClass',
    },

    {
      $formkit: 'primeOutputText',
      id: 'icon',
      name: 'iconLeft',
      label: 'Icon Left',
      help: '',
      icon: 'pi pi-check',
      iconPosition: 'left',
    },
    {
      $formkit: 'primeOutputText',
      name: 'iconRight',
      label: 'Icon Right',
      help: 'Right Icon Demo',
      icon: 'pi pi-check text-yellow-500',
      iconPosition: 'right',
    },

  ]

const data = { name: 'Harry Potter', iconLeft: 'Some Text ...', iconRight: 'Another Text ...' }
</script>

<template>
  <div class="">
    <PrimeOutput
      header="PrimeOutputText" :schema="schema" :data="data"
      :prime-attributes="primeAttributes" :custom-attributes="customAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
