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

const textValue = computed(() => {
  const value = props.context?._value
  const { t } = useI18n()
  if (value) {
    if (props.context?.isTranslationKey)
      return t(value)
    else
      return value
  }
  else {
    return ''
  }
})

const { hasPrefix, hasPrefixIcon, hasSuffix, hasSuffixIcon } = useFormKitSection(props.context)
</script>

<template>
  <div class="p-formkit p-output-text">
    <FormKitIcon v-if="hasPrefixIcon" :icon-class="context?.iconPrefix" :on-click="context?.onIconPrefixClicked" position="prefix" />
    <FormKitPrefix v-if="hasPrefix" :prefix="context?.prefix" />
    <span v-if="context?.html" :id="context?.id" :class="context?.attrs?.class" :style="context?.attrs?.style" v-html="textValue" />
    <span v-else :id="context?.id" :class="context?.attrs?.class" :style="context?.attrs?.style" v-text="textValue" />
    <FormKitSuffix v-if="hasSuffix" :suffix="context?.suffix" />
    <FormKitIcon v-if="hasSuffixIcon" :icon-class="context?.iconSuffix" :on-click="context?.onIconSuffixClicked" position="suffix" />
  </div>
</template>
