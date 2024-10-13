<script setup lang='ts'>
const primeAttributes = 'dateFormat, showIcon, icon, .... (see documentation)'

const schema
    = [
      {
        $formkit: 'primeDatePicker',
        id: 'basic',
        name: 'basic',
        label: 'Basic',
        placeholder: 'MM/DD/YYYY',
        validation: 'required',
      },
      {
        $formkit: 'primeDatePicker',
        name: 'styled',
        label: 'Styled',
        style: { background: 'gray' },
        class: 'customClass',
        showIcon: true,
      },
      {
        $formkit: 'primeDatePicker',
        name: 'icon',
        label: 'Custom Icon',
        dateFormat: 'yy-mm',
        showIcon: true,
        icon: 'pi pi-question',
      },
      {
        $formkit: 'primeDatePicker',
        name: 'range',
        label: 'Date Range',
        selectionMode: 'range',
        manualInput: false,
      },
      {
        $formkit: 'primeDatePicker',
        name: 'multiple',
        label: 'Multiple Dates',
        selectionMode: 'multiple',
        manualInput: false,
      },

    ]

const data = {}
</script>

<template>
  <div>
    <PrimeInput
      header="PrimeDatePicker" :schema="schema" :data="data"
      :prime-attributes="primeAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
