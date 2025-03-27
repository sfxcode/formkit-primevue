<script setup lang='ts'>
const primeAttributes = 'placeholder'
const customAttributes = 'iconPrefix, iconSuffix'

const schema
  = [
    {
      $formkit: 'primeInputText',
      name: 'name',
      label: 'Basic',
      validation: 'required',

    },
    {
      $formkit: 'primeInputText',
      name: 'telephone',
      placeholder: 'telephone',
      help: 'Input Type: tel',
      label: 'Telephone',
      inputType: 'tel',
    },
    {
      $formkit: 'primeInputText',
      id: 'icon',
      name: 'iconLeft',
      label: 'Icon Left',
      help: '',
      placeholder: 'icon',
      iconPrefix: 'pi pi-check',
    },
    {
      $formkit: 'primeInputText',
      name: 'iconRight',
      label: 'Icon Right (Disabled) - smize: small',
      help: 'Right Icon Demo',
      iconSuffix: 'pi pi-check',
      disabled: true,
      size: 'small',
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
