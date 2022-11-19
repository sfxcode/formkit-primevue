<script setup lang='ts'>
const version = ref(import.meta.env.VITE_APP_VERSION)
</script>

<template>
  <div class="mt-4 layout-footer">
    <span class="font-medium ml-2">Formkit (1.0.0-beta.12) - PrimeVue (3.20.0) - Version {{ version }}</span>
  </div>
</template>

<style scoped>

</style>
