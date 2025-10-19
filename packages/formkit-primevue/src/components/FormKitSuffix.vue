<script setup lang="ts">
defineProps({
  suffix: String,
})
</script>

<template>
  <span class="formkit-suffix">
    {{ suffix }}
  </span>
</template>
