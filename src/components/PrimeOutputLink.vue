<script setup lang='ts'>
import { type PropType, computed } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'
import { useFormKitSection } from '../composables'

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext>,
    required: true,
  },
})

const { hasPrefix, hasPrefixIcon, hasSuffix, hasSuffixIcon } = useFormKitSection(props.context)

const url = computed(() => props.context?._value.indexOf('http') > -1 ? props.context?._value : `https://${props.context?._value}`)
</script>

<template>
  <div class="p-formkit p-output-link">
    <i v-if="hasPrefixIcon" class="formkit-prefix-icon" :class="context?.prefixIcon" />
    <span v-if="hasPrefix" class="formkit-prefix">
      {{ context?.attrs?.prefix }}
    </span>
    <a
      :id="context?.id"
      :style="context?.attrs?.style"
      :class="context?.attrs?.class"
      :href="url"
      :target="context?.attrs?.target ?? '_new'"
    >
      {{ context?._value }}
    </a>
    <span v-if="hasSuffix" class="formkit-suffix">
      {{ context?.attrs?.suffix }}
    </span>
    <i v-if="hasSuffixIcon" class="formkit-suffix-icon" :class="context?.suffixIcon" />
  </div>
</template>
