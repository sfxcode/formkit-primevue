<script setup lang='ts'>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { useFormKitSection } from '../composables'

const props = defineProps({
  context: Object,
})
const { hasPrefix, hasPrefixIcon, hasSuffix, hasSuffixIcon } = useFormKitSection(props.context)

const { t } = useI18n()

const translated = computed(() => {
  if (props.context?._value)
    return t('formkit.prime.true', 'true')
  else
    return t('formkit.prime.false', 'false')
})
</script>

<template>
  <div class="p-formkit p-output-boolean">
    <i v-if="hasPrefixIcon" class="formkit-prefix-icon" :class="context?.prefixIcon" />
    <span v-if="hasPrefix" class="formkit-prefix">
      {{ context?.attrs?.prefix }}
    </span>
    <span :id="context?.id" :style="context?.attrs?.style" :class="context?.attrs?.class">
      {{ translated }}
    </span>
    <span v-if="hasSuffix" class="formkit-suffix">
      {{ context?.attrs?.suffix }}
    </span>
    <i v-if="hasSuffixIcon" class="formkit-suffix-icon" :class="context?.suffixIcon" />
  </div>
</template>
