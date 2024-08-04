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
  <div class="p-formkit p-output-list">
    <i v-if="hasPrefixIcon" class="formkit-prefix-icon" :class="context?.iconPrefix" />
    <span v-if="hasPrefix" class="formkit-prefix">
      {{ context?.prefix }}
    </span>
    <span :id="context?.id" :style="context?.attrs?.style" class="p-output-list-items" :class="context?.attrs?.class">
      <template v-for="(value, index) of context?._value" :key="index">
        <span v-if="index !== 0" class="p-output-list-divider" :class="context?.dividerClass">{{ context?.divider ?? ', ' }}</span>
        <span class="p-output-list-item" :class="context?.itemClass">{{ value }}</span>
      </template>
    </span>
    <span v-if="hasSuffix" class="formkit-suffix">
      {{ context?.suffix }}
    </span>
    <i v-if="hasSuffixIcon" class="formkit-suffix-icon" :class="context?.iconSuffix" />
  </div>
</template>
