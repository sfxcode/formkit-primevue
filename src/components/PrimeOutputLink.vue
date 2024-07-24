<script setup lang='ts'>
import { computed } from 'vue'
import { useFormKitIcon } from '../composables'

const props = defineProps({
  context: Object,
})
const { hasIcon, icon, iconPosition } = useFormKitIcon(props.context)

const url = computed(() => props.context?._value.indexOf('http') > -1 ? props.context?._value : `https://${props.context?._value}`)
</script>

<template>
  <div class="p-formkit p-output-link">
    <i v-if="hasIcon && iconPosition === 'left'" :class="icon" class="p-formkit-icon-left" />
    <a
      :id="context?.id"
      :style="context?.attrs?.style"
      :class="context?.attrs?.class"
      :href="url"
      :target="context?.attrs?.target ?? '_new'"
    >
      {{ context?._value }}
    </a>
    <i v-if="hasIcon && iconPosition === 'right'" :class="icon" class="p-formkit-icon-right" />
  </div>
</template>
