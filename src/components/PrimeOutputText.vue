<script setup lang='ts'>
import type { PropType } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'
import { useFormKitSection } from '../composables'

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext>,
    required: true,
  },
})

const { hasPrefix, hasPrefixIcon, hasSuffix, hasSuffixIcon } = useFormKitSection(props.context)
</script>

<template>
  <div class="p-formkit p-output-text">
    <i v-if="hasPrefixIcon" class="formkit-prefix-icon" :class="context?.iconPrefix" />
    <span v-if="hasPrefix" class="formkit-prefix">
      {{ context?.prefix }}
    </span>
    <span
      :id="context?.id"
      :style="context?.attrs?.style"
      :class="context?.attrs?.class"
    >
      <span v-if="context?.html" v-html="context?._value" />
      <span v-else v-text="context?._value" />
    </span>
    <span v-if="hasSuffix" class="formkit-suffix">
      {{ context?.suffix }}
    </span>
    <i v-if="hasSuffixIcon" class="formkit-suffix-icon" :class="context?.iconSuffix" />
  </div>
</template>
