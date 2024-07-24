<script setup lang='ts'>
import { useFormKitIcon } from '../composables'

const props = defineProps({
  context: Object,
})
const { hasIcon, icon, iconPosition } = useFormKitIcon(props.context)
</script>

<template>
  <div class="p-formkit p-output-text">
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
