<script setup lang='ts'>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { useFormKitSection } from '../composables'

const props = defineProps({
  context: Object,
})
const { hasPrefix, hasPrefixIcon, hasSuffix, hasSuffixIcon } = useFormKitSection(props.context)

const { d } = useI18n()

const converted = computed(() => {
  if (props?.context?._value) {
    let result = ''
    const format = props?.context?.attrs?.value?.format ? props?.context?.attrs.value.format : 'short'
    try {
      result = d(props?.context?._value, format)
    }
    // eslint-disable-next-line unused-imports/no-unused-vars
    catch (e) {
    }
    return result
  }
  else {
    return ''
  }
})
</script>

<template>
  <div class="p-formkit p-output-date">
    <i v-if="hasPrefixIcon" class="formkit-prefix-icon" :class="context?.prefixIcon" />
    <span v-if="hasPrefix" class="formkit-prefix">
      {{ context?.attrs?.prefix }}
    </span>
    <span :id="context?.id" :style="context?.attrs?.style" :class="context?.attrs?.class">
      {{ converted }}
    </span>
    <span v-if="hasSuffix" class="formkit-suffix">
      {{ context?.attrs?.suffix }}
    </span>
    <i v-if="hasSuffixIcon" class="formkit-suffix-icon" :class="context?.suffixIcon" />
  </div>
</template>
