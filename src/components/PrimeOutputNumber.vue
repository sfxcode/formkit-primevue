<script setup lang='ts'>
import { useI18n } from 'vue-i18n'
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

const { n } = useI18n()

const converted = computed(() => {
  const value = props?.context?._value
  if (value) {
    let result = ''
    const format = props?.context?.attrs?.format ? props?.context?.attrs?.format : 'short'
    try {
      result = n(value, format)
    }
    // eslint-disable-next-line unused-imports/no-unused-vars
    catch (e) {
      try {
        result = n(+value, format)
      }
      // eslint-disable-next-line unused-imports/no-unused-vars
      catch (e) {
      }
    }
    return result
  }
  else {
    return ''
  }
})
</script>

<template>
  <div class="p-formkit p-output-number">
    <i v-if="hasPrefixIcon" class="formkit-prefix-icon" :class="context?.iconPrefix" />
    <span v-if="hasPrefix" class="formkit-prefix">
      {{ context?.prefix }}
    </span>
    <span :id="context?.id" :style="context?.attrs?.style" :class="context?.attrs?.class">
      {{ converted }}
    </span>
    <span v-if="hasSuffix" class="formkit-suffix">
      {{ context?.suffix }}
    </span>
    <i v-if="hasSuffixIcon" class="formkit-suffix-icon" :class="context?.iconSuffix" />
  </div>
</template>
