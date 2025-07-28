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
    <FormKitIcon v-if="hasPrefixIcon" :icon-class="context?.iconPrefix" :on-click="context?.onIconPrefixClicked" position="prefix" />
    <FormKitPrefix v-if="hasPrefix" :prefix="context?.prefix" />
    <component
      :is="context?.linkComponentName ? context?.linkComponentName : 'RouterLink'"
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
    <FormKitSuffix v-if="hasSuffix" :suffix="context?.suffix" />
    <FormKitIcon v-if="hasSuffixIcon" :icon-class="context?.iconSuffix" :on-click="context?.onIconSuffixClicked" position="suffix" />
  </div>
</template>
