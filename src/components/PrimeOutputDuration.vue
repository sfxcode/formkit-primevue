<script setup lang='ts'>
import { useFormKitIcon, useOutputDuration } from '../composables'

const props = defineProps({
  context: Object,
})

const { hasIcon, icon, iconPosition } = useFormKitIcon(props.context)

const { formattedDuration } = useOutputDuration()
</script>

<template>
  <div class="p-formkit p-output-duration">
    <i v-if="hasIcon && iconPosition === 'left'" :class="icon" class="p-formkit-icon-left" />
    <span :id="context?.id" :style="context?.attrs?.style" :class="context?.attrs?.class">
      {{ formattedDuration(context?._value) }}
    </span>
    <i v-if="hasIcon && iconPosition === 'right'" :class="icon" class="p-formkit-icon-right" />
  </div>
</template>
