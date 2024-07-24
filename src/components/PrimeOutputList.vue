<script setup lang='ts'>
import { useFormKitSection } from '../composables'

const props = defineProps({
  context: Object,
})
const { hasPrefix, hasPrefixIcon, hasSuffix, hasSuffixIcon } = useFormKitSection(props.context)

function listValue(index: number, value: string): string {
  const divider = props.context?.attrs?.divider || ', '
  if (index === 0)
    return value
  else
    return `${divider}${value}`
}
</script>

<template>
  <div class="p-formkit p-output-list">
    <i v-if="hasPrefixIcon" class="formkit-prefix-icon" :class="context?.prefixIcon" />
    <span v-if="hasPrefix" class="formkit-prefix">
      {{ context?.attrs?.prefix }}
    </span>
    <span :id="context?.id" :style="context?.attrs?.style" :class="context?.attrs?.class">
      <template v-for="(value, index) of context?._value" :key="index">
        <span class="p-output-list-item">{{ listValue(index, value) }}</span>
      </template>
    </span>
    <span v-if="hasSuffix" class="formkit-suffix">
      {{ context?.attrs?.suffix }}
    </span>
    <i v-if="hasSuffixIcon" class="formkit-suffix-icon" :class="context?.suffixIcon" />
  </div>
</template>
