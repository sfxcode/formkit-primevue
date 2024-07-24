<script setup lang='ts'>
import { useFormKitSection, useOutputDuration } from '../composables'

const props = defineProps({
  context: Object,
})

const { hasPrefix, hasPrefixIcon, hasSuffix, hasSuffixIcon } = useFormKitSection(props.context)

const { formattedDuration } = useOutputDuration()
</script>

<template>
  <div class="p-formkit p-output-duration">
    <i v-if="hasPrefixIcon" class="formkit-prefix-icon" :class="context?.prefixIcon" />
    <span v-if="hasPrefix" class="formkit-prefix">
      {{ context?.attrs?.prefix }}
    </span>
    <span :id="context?.id" :style="context?.attrs?.style" :class="context?.attrs?.class">
      {{ formattedDuration(context?._value) }}
    </span>
    <span v-if="hasSuffix" class="formkit-suffix">
      {{ context?.attrs?.suffix }}
    </span>
    <i v-if="hasSuffixIcon" class="formkit-suffix-icon" :class="context?.suffixIcon" />
  </div>
</template>
