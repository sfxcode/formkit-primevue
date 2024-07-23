<script setup lang='ts'>
import { useFormKitIcon, useFormKitOutput } from '../composables'

const props = defineProps({
  context: Object,
})
const { wrapperClass } = useFormKitOutput(props.context, 'p-output-number')
const { hasIcon, icon, iconPosition } = useFormKitIcon(props.context)

const { n } = useI18n()

const converted = computed(() => {
  if (props?.context?._value) {
    let result = ''
    const format = props?.context?.attrs?.format ? props?.context?.attrs?.format : 'short'
    try {
      result = n(props?.context?._value, format)
    }
    // eslint-disable-next-line unused-imports/no-unused-vars
    catch (e) {
    }
    return result
  }
  else {
    return ''
  }
})
</script>

<template>
  <div :class="wrapperClass">
    <i v-if="hasIcon && iconPosition === 'left'" :class="icon" class="p-formkit-icon-left" />
    <span :id="context?.id" :style="context?.attrs?.style" :class="context?.attrs?.class">
      {{ converted }}
    </span>
    <i v-if="hasIcon && iconPosition === 'right'" :class="icon" class="p-formkit-icon-right" />
  </div>
</template>
