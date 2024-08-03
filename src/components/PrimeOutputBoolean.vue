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
    <i v-if="hasPrefixIcon" class="formkit-prefix-icon" :class="context?.iconPrefix" />
    <span v-if="hasPrefix" class="formkit-prefix">
      {{ context?.prefix }}
    </span>
    <span :id="context?.id" :style="context?.attrs?.style" :class="context?.attrs?.class">
      {{ translated }}
    </span>
    <span v-if="hasSuffix" class="formkit-suffix">
      {{ context?.suffix }}
    </span>
    <i v-if="hasSuffixIcon" class="formkit-suffix-icon" :class="context?.iconSuffix" />
  </div>
</template>
