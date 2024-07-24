<script setup lang='ts'>
import { useFormKitIcon } from '../composables'

const props = defineProps({
  context: Object,
})
const { hasIcon, icon, iconPosition } = useFormKitIcon(props.context)

function listValue(index: number, value: string): string {
  const divider = props.context?.attrs?.divider || ', '
  if (index === 0)
    return value
  else
    return `${divider}${value}`
}
</script>

<template>
  <div class="p-formkit p-output-list">
    <i v-if="hasIcon && iconPosition === 'left'" :class="icon" class="p-formkit-icon-left" />
    <span :id="context?.id" :style="context?.attrs?.style" :class="context?.attrs?.class">
      <template v-for="(value, index) of context?._value" :key="index">
        <span class="p-output-list-item">{{ listValue(index, value) }}</span>
      </template>
    </span>
    <i v-if="hasIcon && iconPosition === 'right'" :class="icon" class="p-formkit-icon-right" />
  </div>
</template>
