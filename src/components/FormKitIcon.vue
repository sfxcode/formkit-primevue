<script setup lang="ts">
import type { PropType } from 'vue'

export interface FormKitIconProps {
  onIconPrefixClicked?: () => void
  onIconSuffixClicked?: () => void
  iconPrefix?: string
  iconSuffix?: string
  prefix?: string
  suffix?: string
  iconPrefixTooltip?: string
  iconSuffixTooltip?: string
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
  tooltip: {
    type: String,
  },
})
</script>

<template>
  <i v-if="tooltip && tooltip?.length > 0" v-tooltip.bottom="tooltip" :class="[`formkit-${position}-icon`, iconClass]" @click="onClick" />
  <i v-else :class="[`formkit-${position}-icon`, iconClass]" @click="onClick" />
</template>
