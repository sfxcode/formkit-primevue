<script setup lang='ts'>
import type { FormKitFrameworkContext } from '@formkit/core'
import { computed, type PropType } from 'vue'
import { useFormKitSection } from '../composables'

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext>,
    required: true,
  },
})

const { hasPrefix, hasPrefixIcon, hasSuffix, hasSuffixIcon } = useFormKitSection(props.context)

const url = computed(() => {
  if (props.context?._value)
    return props.context?._value.indexOf('http') > -1 ? props.context?._value : `https://${props.context?._value}`
  else
    return ''
})

const title = computed(() => {
  const value = props.context?._value ?? ''
  return props.context?.title ?? value
})
</script>

<template>
  <div class="p-formkit p-output-link">
    <i v-if="hasPrefixIcon" class="formkit-prefix-icon" :class="context?.iconPrefix" />
    <span v-if="hasPrefix" class="formkit-prefix">
      {{ context?.prefix }}
    </span>
    <a
      v-if="context?.value"
      :id="context?.id"
      :style="context?.attrs?.style"
      :class="context?.attrs?.class"
      :href="url"
      :target="context?.attrs?.target ?? '_new'"
    >
      <span>{{ title }}</span>
    </a>
    <span v-if="hasSuffix" class="formkit-suffix">
      {{ context?.suffix }}
    </span>
    <i v-if="hasSuffixIcon" class="formkit-suffix-icon" :class="context?.iconSuffix" />
  </div>
</template>
