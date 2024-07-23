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
  <div class="p-formkit-data-debug">
    <h3>{{ header }}</h3>
    <slot />
    <pre v-if="data" class="text-xs">{{ data }}</pre>
    <span v-else class="text-xs">No Data available</span>
  </div>
</template>

<style scoped>

</style>
