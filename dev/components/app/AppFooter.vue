<script setup lang='ts'>
const version = ref(import.meta.env.VITE_APP_VERSION)
</script>

<template>
  <div class="mt-8 layout-footer text-center text-gray-700">
    <span class="font-medium ml-2">Formkit (1.6) - PrimeVue (4.4.x) - FormKit-PrimeVue-Version {{ version }} - sfxcode 2025</span>
  </div>
</template>

<style scoped>

</style>
