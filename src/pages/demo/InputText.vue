<script setup lang='ts'>
const primeAttributes = 'placeholder'
const customAttributes = 'iconLeft, iconRight'

const schema
  = [
    {
      $formkit: 'primeInputText',
      name: 'name',
      label: 'Basic',
      help: 'Required.',
      validation: 'required',
      _readonly: true,
    },
    {
      $formkit: 'primeInputText',
      id: 'iconLeft',
      name: 'iconLeft',
      label: 'Icon Left eee',
      help: '',
      placeholder: 'iconLeft',
      iconLeft: 'pi pi-check',
    },
    {
      $formkit: 'primeInputText',
      name: 'iconRight',
      label: 'Icon Right (Disabled)',
      help: 'Right Icon Demo',
      iconRight: 'pi pi-check',
      _disabled: true,
    },
    {
      $formkit: 'primeInputText',
      name: 'iconBoth',
      label: 'Icon Both Sides',
      help: '',
      style: 'background:gray;',
      class: 'customClass w-64',
      iconLeft: 'pi pi-plus',
      iconRight: 'pi pi-check',
    },

  ]

const data = { name: 'tom', iconRight: 'Some Text ...' }
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
