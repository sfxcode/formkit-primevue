<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  prefix: String,
})
</script>

<template>
  <span class="formkit-prefix">
    {{ prefix }}
  </span>
</template>
