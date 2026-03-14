<script setup lang="ts">
/*  *
 * A simple component to display the data of a FormKit node for debugging purposes.
 * It uses PrimeVue's Fieldset component to create a collapsible section.
 * The data is displayed in a <pre> tag for better readability.
 */
defineProps({
  data: {
    type: Object,
    default: null,
  },
  header: {
    type: String,
    default: "Debug",
  },
});
</script>

<template>
  <Fieldset class="p-formkit-data-debug" :legend="header" :toggleable="true" :collapsed="true">
    <pre v-if="data">{{ data }}</pre>
    <span v-else>No Data available</span>
  </Fieldset>
</template>

<style scoped></style>
