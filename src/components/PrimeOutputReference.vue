<script setup lang='ts'>
import { type PropType, computed } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'
import { RouterLink } from 'vue-router'
import { useFormKitSection } from '../composables'

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext>,
    required: true,
  },
})

const { hasPrefix, hasPrefixIcon, hasSuffix, hasSuffixIcon } = useFormKitSection(props.context)

const reference = computed(() => {
  const value = props.context?._value ?? ''
  let result = props.context?.reference ? `${props.context?.reference}` : 'reference-must-be-set'
  if (!props.context?.internal && !result.includes('http'))
    result = `https://${result}`
  return result.replace(/\{\{.*\}\}/, value)
})

const title = computed(() => {
  const value = props.context?._value ?? ''
  const result = props.context?.title ?? value
  return `${result}`.replace(/\{\{.*\}\}/, value)
})
</script>

<template>
  <div class="p-formkit p-output-reference">
    <i v-if="hasPrefixIcon" class="formkit-prefix-icon" :class="context?.iconPrefix" />
    <span v-if="hasPrefix" class="formkit-prefix">
      {{ context?.prefix }}
    </span>
    <component
      :is="context?.linkComponentName ? context?.linkComponentName : RouterLink"
      v-if="context?.internal"
      :style="context?.attrs?.style"
      :class="context?.attrs?.class"
      :to="reference"
      v-bind="context?.attrs"
    >
      {{ title }}
    </component>
    <a
      v-else
      :id="context?.id"
      :style="context?.attrs?.style"
      :class="context?.attrs?.class"
      :href="reference"
      :target="context?.attrs?.target ?? '_new'"
    >
      {{ title }}
    </a>
    <span v-if="hasSuffix" class="formkit-suffix">
      {{ context?.suffix }}
    </span>
    <i v-if="hasSuffixIcon" class="formkit-suffix-icon" :class="context?.iconSuffix" />
  </div>
</template>
