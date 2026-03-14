<script setup lang='ts'>
import { useFormKitSchema } from 'my-library'

const primeAttributes = ''
const customAttributes = 'iconPrefix, prefix, suffix, iconSuffix'
const { addElement } = useFormKitSchema()

function convertValues(value: string[]): string[] {
  return value.map(item => item.toUpperCase())
}

function convertValuesCharCount(value: string[]): string[] {
  return value.map(item => `${item} (${item.length})`)
}

function convertValuesSortedReverse(value: string[]): string[] {
  return value.sort((a, b) => a.localeCompare(b)).reverse()
}

const schema
  = [
    addElement('h3', ['Default (listStyle: span)']),

    {
      $formkit: 'primeOutputList',
      name: 'list1',
      label: 'Default Divider',
    },
    {
      $formkit: 'primeOutputList',
      name: 'list1',
      label: 'Custom Divider',
      divider: ' ',
    },
    {
      $formkit: 'primeOutputList',
      name: 'list2',
      label: 'Custom Divider with Prefix Icon',
      iconPrefix: 'pi pi-list',
      divider: ' - ',
    },
    addElement('h3', ['Converter']),

    {
      $formkit: 'primeOutputList',
      name: 'list1',
      label: 'Converter Function',
      convertValue: convertValues,
      divider: ' - ',
    },
    {
      $formkit: 'primeOutputList',
      name: 'list2',
      label: 'Converter Function - Char Count',
      convertValue: convertValuesCharCount,
    },
    {
      $formkit: 'primeOutputList',
      name: 'list2',
      label: 'Converter Function - Sorted Reverse',
      convertValue: convertValuesSortedReverse,
    },
    addElement('h3', ['Chips']),
    {
      $formkit: 'primeOutputList',
      name: 'list2',
      label: 'Use Chip Item Class',
      itemClass: 'p-chip-item',
      divider: ' ',
    },
    addElement('h3', ['List Styles']),
    {
      $formkit: 'primeOutputList',
      name: 'list1',
      label: 'Use listStyle: span',
      listStyle: 'span',
    },
    {
      $formkit: 'primeOutputList',
      name: 'list2',
      label: 'Use listStyle: div',
      listStyle: 'div',
    },
    {
      $formkit: 'primeOutputList',
      name: 'list2',
      label: 'Use listStyle: ul',
      listStyle: 'ul',
    },
    {
      $formkit: 'primeOutputList',
      name: 'list2',
      label: 'Use listStyle: ol',
      listStyle: 'ol',
    },

  ]

const data = { list1: ['Hello', 'World'], list2: ['FormKit', 'meets', 'PrimeVue'] }
</script>

<template>
  <div class="list">
    <PrimeOutput
      header="PrimeOutputList" :schema="schema" :data="data"
      :prime-attributes="primeAttributes" :custom-attributes="customAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>
.list .p-formkit-data-view .formkit-form .formkit-outer {
  padding-bottom: 1rem;
}
</style>
