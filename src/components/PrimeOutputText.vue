<script setup lang='ts'>
import { useFormKitIcon, useFormKitOutput } from '../composables'

const props = defineProps({
  context: Object,
})
const { wrapperClass } = useFormKitOutput(props.context, 'p-output-text')
const { hasIcon, icon, iconPosition } = useFormKitIcon(props.context)
</script>

<template>
  <div :class="wrapperClass">
    <i v-if="hasIcon && iconPosition === 'left'" :class="icon" class="p-formkit-icon-left" />
    <span
      :id="context?.id"
      :style="context?.attrs?.style"
      :class="context?.attrs?.class"
    >
      {{ context?._value }}
    </span>
    <i v-if="hasIcon && iconPosition === 'right'" :class="icon" class="p-formkit-icon-right" />
  </div>
</template>
