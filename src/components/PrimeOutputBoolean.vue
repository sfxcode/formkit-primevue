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

const { t } = useI18n()

const translated = computed(() => {
  if (props.context?._value)
    return props.context?.trueValue ?? t('formkit.prime.true', 'true')
  else
    return props.context?.falseValue ?? t('formkit.prime.false', 'false')
})
</script>

<template>
  <div class="p-formkit p-output-boolean">
    <FormKitIcon v-if="hasPrefixIcon" :icon-class="context?.iconPrefix" :on-click="context?.onIconPrefixClicked" position="prefix" />
    <FormKitPrefix v-if="hasPrefix" :prefix="context?.prefix" />
    <span :id="context?.id" :style="context?.attrs?.style" :class="context?.attrs?.class">
      {{ translated }}
    </span>
    <FormKitSuffix v-if="hasSuffix" :suffix="context?.suffix" />
    <FormKitIcon v-if="hasSuffixIcon" :icon-class="context?.iconSuffix" :on-click="context?.onIconSuffixClicked" position="suffix" />
  </div>
</template>
