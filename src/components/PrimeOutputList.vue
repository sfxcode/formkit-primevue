<script setup lang='ts'>
import type { FormKitFrameworkContext } from '@formkit/core'
import type { PropType } from 'vue'
import { computed } from 'vue'
import { useFormKitSection } from '../composables'

export interface FormKitOutputListProps {
  listStyle?: 'div' | 'ul' | 'ol' | 'span'
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitOutputListProps>,
    required: true,
  },
})

const listStyle = computed(() => {
  return props.context?.listStyle || 'span'
})

const { hasPrefix, hasPrefixIcon, hasSuffix, hasSuffixIcon } = useFormKitSection(props.context)
</script>

<template>
  <div class="p-formkit p-output-list">
    <i v-if="hasPrefixIcon" class="formkit-prefix-icon" :class="context?.iconPrefix" />
    <span v-if="hasPrefix && listStyle === 'span'" class="formkit-prefix">
      {{ context?.prefix }}
    </span>
    <span v-if="listStyle === 'span'" :id="context?.id" :style="context?.attrs?.style" class="p-output-list-items" :class="context?.attrs?.class">
      <template v-for="(value, index) of context?._value" :key="index">
        <span v-if="index !== 0" class="p-output-list-divider" :class="context?.dividerClass">{{ context?.divider ?? ', ' }}</span>
        <span class="p-output-list-item" :class="context?.itemClass">{{ value }}</span>
      </template>
    </span>
    <div v-if="listStyle === 'div'" :id="context?.id" :style="context?.attrs?.style" class="p-output-list-items" :class="context?.attrs?.class">
      <template v-for="(value, index) of context?._value" :key="index">
        <div class="p-output-list-item" :class="context?.itemClass">
          {{ value }}
        </div>
      </template>
    </div>
    <ul v-if="listStyle === 'ul'" :id="context?.id" :style="context?.attrs?.style" class="p-output-list-items" :class="context?.attrs?.class">
      <li v-for="(value, index) of context?._value" :key="index">
        <span class="p-output-list-item" :class="context?.itemClass">
          {{ value }}
        </span>
      </li>
    </ul>
    <ol v-if="listStyle === 'ol'" :id="context?.id" :style="context?.attrs?.style" class="p-output-list-items" :class="context?.attrs?.class">
      <li v-for="(value, index) of context?._value" :key="index">
        <span class="p-output-list-item" :class="context?.itemClass">
          {{ value }}
        </span>
      </li>
    </ol>
    <span v-if="hasSuffix && listStyle === 'span'" class="formkit-suffix">
      {{ context?.suffix }}
    </span>
    <i v-if="hasSuffixIcon" class="formkit-suffix-icon" :class="context?.iconSuffix" />
  </div>
</template>
