<script setup lang='ts'>
const primeAttributes = 'placeholder'
const customAttributes = 'icon, icon'

const schema
  = [
    {
      $formkit: 'primeInputText',
      name: 'name',
      label: 'Basic',
      help: 'Required.',
      validation: 'required',
    },
    {
      $formkit: 'primeInputText',
      id: 'icon',
      name: 'iconLeft',
      label: 'Icon Left',
      help: '',
      placeholder: 'icon',
      icon: 'pi pi-check',
      iconPosition: 'left',
    },
    {
      $formkit: 'primeInputText',
      name: 'iconRight',
      label: 'Icon Right (Disabled)',
      help: 'Right Icon Demo',
      icon: 'pi pi-check',
      _disabled: true,
    },

  ]

const data = { name: 'Harry Potter', iconLeft: 'Some Text ...', iconRight: 'Another Text ...' }
</script>

<template>
  <div class="">
    <PrimeInput
      header="PrimeInputText" :schema="schema" :data="data"
      :prime-attributes="primeAttributes" :custom-attributes="customAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
