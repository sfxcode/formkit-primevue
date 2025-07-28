<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps } from 'vue'

export interface FormKitIconProps {
  onIconPrefixClicked?: () => void
  onIconSuffixClicked?: () => void
}

defineProps({
  iconClass: {
    type: String,
    default: '',
  },
  onClick: { type: Function as PropType<() => void>, default: undefined },
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
