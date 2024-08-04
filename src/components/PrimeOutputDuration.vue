<script setup lang='ts'>
import type { PropType } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'
import { useFormKitSection, useOutputDuration } from '../composables'

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext>,
    required: true,
  },
})
const { hasPrefix, hasPrefixIcon, hasSuffix, hasSuffixIcon } = useFormKitSection(props.context)

const { formattedDuration } = useOutputDuration()
</script>

<template>
  <div class="p-formkit p-output-duration">
    <i v-if="hasPrefixIcon" class="formkit-prefix-icon" :class="context?.iconPrefix" />
    <span v-if="hasPrefix" class="formkit-prefix">
      {{ context?.prefix }}
    </span>
    <span :id="context?.id" :style="context?.attrs?.style" :class="context?.attrs?.class">
      {{ formattedDuration(context?._value) }}
    </span>
    <span v-if="hasSuffix" class="formkit-suffix">
      {{ context?.suffix }}
    </span>
    <i v-if="hasSuffixIcon" class="formkit-suffix-icon" :class="context?.iconSuffix" />
  </div>
</template>
