<script setup lang='ts'>
const version = import.meta.env.VITE_APP_VERSION
const formkitVersion = import.meta.env.VITE_APP_FORMKIT_VERSION
const primevueVersion = import.meta.env.VITE_APP_PRIMEVUE_VERSION
const year = new Date().getFullYear()
</script>

<template>
  <footer class="mt-8 layout-footer text-center">
    <span class="font-medium">FormKit {{ formkitVersion }} - PrimeVue {{ primevueVersion }} - FormKit-PrimeVue {{ version }} - sfxcode {{ year }}</span>
  </footer>
</template>

<style scoped>
.layout-footer {
  color: var(--p-text-muted-color);
}
</style>
