<script setup lang='ts'>
import type { FormKitFrameworkContext } from '@formkit/core'
import type { PropType } from 'vue'
import type { FormKitIconProps } from './FormKitIcon.vue'
import { computed } from 'vue'
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
    <FormKitIcon v-if="hasPrefixIcon" :icon-class="context?.iconPrefix as string" :on-click="context?.onIconPrefixClicked as (() => void)" position="prefix" />
    <FormKitPrefix v-if="hasPrefix" :prefix="context?.prefix as string" />
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
    <FormKitSuffix v-if="hasSuffix" :suffix="context?.suffix as string" />
    <FormKitIcon v-if="hasSuffixIcon" :icon-class="context?.iconSuffix as string" :on-click="context?.onIconSuffixClicked as (() => void)" position="suffix" />
  </div>
</template>
