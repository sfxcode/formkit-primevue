<script setup lang="ts">
defineProps({
  prefix: String,
})
</script>

<template>
  <span class="formkit-prefix">
    {{ prefix }}
  </span>
</template>
