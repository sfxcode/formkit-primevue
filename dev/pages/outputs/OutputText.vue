<script setup lang='ts'>
const primeAttributes = ''
const customAttributes = 'iconPrefix, prefix, suffix, iconSuffix, maxLength'

function prefixClicked() {
  console.error('Prefix Icon Clicked')
}

function suffixClicked() {
  console.error('Suffix Icon Clicked')
}

function toUpper(value: string) {
  return value.toUpperCase()
}
const schema
  = [
    {
      $formkit: 'primeOutputText',
      name: 'name',
      label: 'Basic',
    },
    {
      $formkit: 'primeOutputText',
      name: 'toTranslate',
      isTranslationKey: true,
      label: 'Translated',
    },
    {
      $formkit: 'primeOutputText',
      name: 'html',
      label: 'HTML as Text (Default)',
    },
    {
      $formkit: 'primeOutputText',
      name: 'html',
      html: true,
      label: 'HTML Output (v-html)',
      help: 'Only use on trusted content or sanitize after input !',
    },
    {
      $formkit: 'primeOutputText',
      id: 'icon',
      name: 'iconLeft',
      label: 'Icon Left',
      help: '',
      iconPrefix: 'pi pi-check',
      onIconPrefixClicked: prefixClicked,
    },
    {
      $formkit: 'primeOutputText',
      name: 'iconRight',
      label: 'Icon Right',
      help: 'Right Icon Demo',
      iconSuffix: 'pi pi-check text-yellow-500',
      onIconSuffixClicked: suffixClicked,
    },
    {
      $formkit: 'primeOutputText',
      name: 'name',
      label: 'Convert to Uppercase',
      convertValue: toUpper,
    },
    {
      $formkit: 'primeOutputText',
      name: 'longText',
      label: 'Max Length (20)',
      help: 'Text will be truncated with "..." if it exceeds maxLength',
      maxLength: 20,
    },
    {
      $formkit: 'primeOutputText',
      name: 'longText',
      label: 'Max Length (50)',
      maxLength: 50,
    },
    {
      $formkit: 'primeOutputText',
      name: 'longText',
      label: 'No Max Length',
      help: 'Full text without truncation',
    },

  ]

const data = { name: 'Harry Potter', toTranslate: 'sample', iconLeft: 'Some Text ...', iconRight: 'Another Text ...', html: '<b style="color: gold">Bold Hello World</b>', longText: 'This is a very long text that will be truncated when maxLength is applied to demonstrate the functionality.' }
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
