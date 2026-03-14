<script setup lang="ts">
defineProps({
  label: {
    type: String,
  },
  help: {
    type: String,
  },
  required: {
    type: Boolean,
    default: false,
  },
  requiredSymbol: {
    type: String,
    default: '*',
  },
})
</script>

<template>
  <span v-if="help" v-tooltip="help" class="p-formkit-label">{{ label }}</span>
  <span v-else class="p-formkit-label">{{ label }}</span>
  <span class="p-formkit-required">{{ requiredSymbol }}</span>
</template>

<style scoped lang="scss">

</style>
