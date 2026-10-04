<script setup lang='ts'>
const primeAttributes = ''
const customAttributes = 'iconPrefix, prefix, suffix, iconSuffix, iconPrefixTooltip, iconSuffixTooltip'

const schema
  = [
    {
      $formkit: 'primeOutputLink',
      name: 'link1',
      label: 'External Link',
    },
    {
      $formkit: 'primeOutputLink',
      name: 'link2',
      label: 'Ensure protocol and use custom title',
      title: 'Click me',
    },
    {
      $formkit: 'primeOutputLink',
      name: 'link1',
      label: 'Icon Tooltips',
      help: 'Hover the icons to see the tooltips',
      iconPrefix: 'oi oi-external-link',
      iconPrefixTooltip: 'Opens in a new tab',
      iconSuffix: 'oi oi-info-circle',
      iconSuffixTooltip: 'External resource',
    },

  ]

const data = { link1: 'https://github.com/sfxcode', link2: 'sfxcode.github.io/formkit-primevue' }
</script>

<template>
  <div class="">
    <PrimeOutput
      header="PrimeOutputLink" :schema="schema" :data="data"
      :prime-attributes="primeAttributes" :custom-attributes="customAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
