<script setup lang='ts'>
import type { FormKitFrameworkContext } from '@formkit/core'
import type { PropType } from 'vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useFormKitSection } from '../composables'

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext>,
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
    <i v-if="hasPrefixIcon" class="formkit-prefix-icon" :class="context?.iconPrefix" />
    <span v-if="hasPrefix" class="formkit-prefix">
      {{ context?.prefix }}
    </span>
    <span v-if="context?.html" :id="context?.id" :class="context?.attrs?.class" :style="context?.attrs?.style" v-html="textValue" />
    <span v-else :id="context?.id" :class="context?.attrs?.class" :style="context?.attrs?.style" v-text="textValue" />
    <span v-if="hasSuffix" class="formkit-suffix">
      {{ context?.suffix }}
    </span>
    <i v-if="hasSuffixIcon" class="formkit-suffix-icon" :class="context?.iconSuffix" />
  </div>
</template>
