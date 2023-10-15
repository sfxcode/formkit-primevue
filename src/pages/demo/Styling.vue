<script setup lang='ts'>
const primeAttributes = 'placeholder'
const customAttributes = 'iconLeft, iconRight'

const schema
  = [
    {
      $formkit: 'primeInputText',
      name: 'name',
      label: 'Styling by class',
      help: 'Required.',
      validation: 'required',
      class: 'stylingSampleClass',
    },
  {
    $formkit: 'primeInputText',
    name: 'name2',
    label: 'Styling by class',
    help: 'Required.',
    validation: 'required',
    style: 'color: gray;font-weight: 700;',
  },

  ]

const data = { name: 'Some Text in Green', name2: 'Some bold Text in Gray' }
</script>

<template>
  <div class="">
    <PrimeInput
      header="Styling" :schema="schema" :data="data"
      :prime-attributes="primeAttributes" :custom-attributes="customAttributes"
    >
     <div class="pb-8">
       <span>Use Custom classes for better styling. <br/>To be specific you can use use the parent div class: p-formkit.
       <br/>
         Direct styling by the style attribute.
        <br/>
       In this demo elements with the  p-formkit class use only 60% of the parent width.
       </span>
     </div>
    </PrimeInput>
  </div>
</template>

<style lang='scss'>

.p-formkit {
  .stylingSampleClass {
    color: green;
  }
}
</style>
