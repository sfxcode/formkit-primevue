<script setup lang='ts'>
import type { FormKitFrameworkContext } from '@formkit/core'
import type { PropType } from 'vue'
import type { FormKitIconProps } from './FormKitIcon.vue'

import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useFormKitSection } from '../composables'
import FormKitIcon from './FormKitIcon.vue'
import FormKitPrefix from './FormKitPrefix.vue'
import FormKitSuffix from './FormKitSuffix.vue'

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext> & FormKitIconProps,
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
    <FormKitIcon v-if="hasPrefixIcon" :icon-class="context?.iconPrefix as string" :on-click="context?.onIconPrefixClicked as (() => void)" position="prefix" />
    <FormKitPrefix v-if="hasPrefix" :prefix="context?.prefix as string" />
    <span :id="context?.id" :style="context?.attrs?.style" :class="context?.attrs?.class">
      {{ converted }}
    </span>
    <FormKitSuffix v-if="hasSuffix" :suffix="context?.suffix as string" />
    <FormKitIcon v-if="hasSuffixIcon" :icon-class="context?.iconSuffix as string" :on-click="context?.onIconSuffixClicked as (() => void)" position="suffix" />
  </div>
</template>
