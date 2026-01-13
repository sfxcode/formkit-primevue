<script setup lang='ts'>
defineProps({
  data: {
    type: Object,
    default: null,
  },
  header: {
    type: String,
    default: 'Debug',
  },
})
</script>

<template>
  <Fieldset class="p-formkit-data-debug" :legend="header" :toggleable="true" :collapsed="true">
    <pre v-if="data">{{ data }}</pre>
    <span v-else>No Data available</span>
  </Fieldset>
</template>

<style scoped>

</style>
