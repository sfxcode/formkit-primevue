<script setup lang="ts">
import { defineProps } from 'vue'

export interface FormKitIconProps {
  onIconPrefixClicked?: () => void
  onIconSuffixClicked?: () => void
}

defineProps({
  iconClass: String,
  onClick: Function,
  position: {
    type: String,
    required: true,
    validator: (val: string) => ['prefix', 'suffix'].includes(val),
  },
})
</script>

<template>
  <i :class="[`formkit-${position}-icon`, iconClass]" @click="onClick" />
</template>
