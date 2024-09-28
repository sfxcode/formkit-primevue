<script setup lang='ts'>
defineProps<{
  header: string
}>()
</script>

<template>
  <div class="pt-8 max-w-120">
    <h2 class="text-color-[var(--p-primary-color)] pb-2">
      {{ header }}
    </h2>
    <slot />
  </div>
</template>
