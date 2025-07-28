<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  suffix: String,
})
</script>

<template>
  <span class="formkit-suffix">
    {{ suffix }}
  </span>
</template>
