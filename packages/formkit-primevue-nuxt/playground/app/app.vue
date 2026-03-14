<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div style="padding: 1rem">
    <div class="">
      <h2>{{ t("app_name") }}</h2>
      <div>
        <h4>GitHub</h4>
        <a href="https://github.com/sfxcode/formkit-primevue">formkit-primevue</a>
        <h4>More examples</h4>
        <a href="https://formkit-primevue.netlify.app/">Formkit PrimeVue Demo</a>
      </div>
    </div>
    <FormkitComponent />
  </div>
</template>

<style lang="scss" scoped></style>
