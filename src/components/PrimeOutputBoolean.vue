<script setup lang='ts'>
import { useFormKitIcon, useFormKitOutput } from '../composables'

const props = defineProps({
  context: Object,
})
const { wrapperClass } = useFormKitOutput(props.context, 'p-output-boolean')
const { hasIcon, icon, iconPosition } = useFormKitIcon(props.context)

const { t } = useI18n()

const translated = computed(() => {
  if (props.context?._value)
    return t('formkit.prime.true', 'true')
  else
    return t('formkit.prime.false', 'false')
})
</script>

<template>
  <div :class="wrapperClass">
    <i v-if="hasIcon && iconPosition === 'left'" :class="icon" class="p-formkit-icon-left" />
    <span :id="context?.id" :style="context?.attrs?.style" :class="context?.attrs?.class">
      {{ translated }}
    </span>
    <i v-if="hasIcon && iconPosition === 'right'" :class="icon" class="p-formkit-icon-right" />
  </div>
</template>
