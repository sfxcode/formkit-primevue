<script setup lang='ts'>
defineProps<{
  header: string
}>()
</script>

<template>
  <div class="pt-8 max-w-120">
    <h1 class="page-title">
      {{ header }}
    </h1>
    <slot />
  </div>
</template>
