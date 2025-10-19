<script setup lang='ts'>
import { computed } from 'vue'
import { useFormKitSection } from '../composables'

const listStyle = computed(() => {
  return props.context?.listStyle || 'span'
})

const { hasPrefix, hasPrefixIcon, hasSuffix, hasSuffixIcon } = useFormKitSection(props.context)

const getListValues = computed(() => {
  const values = Array.isArray(props.context?._value) ? props.context._value : []
  if (typeof props.context?.convertValue === 'function') {
    return props.context.convertValue([...values])
  }
  return values
})
</script>

<template>
  <div class="p-formkit p-output-list">
    <FormKitIcon v-if="hasPrefixIcon" :icon-class="context?.iconPrefix as string" :on-click="context?.onIconPrefixClicked as (() => void)" position="prefix" />
    <FormKitPrefix v-if="hasPrefix && listStyle === 'span'" :prefix="context?.prefix as string" />
    <span v-if="listStyle === 'span'" :id="context?.id" :style="context?.attrs?.style" class="p-output-list-items" :class="context?.attrs?.class">
      <template v-for="(value, index) of getListValues" :key="index">
        <span v-if="index !== 0" class="p-output-list-divider" :class="context?.dividerClass">{{ context?.divider ?? ', ' }}</span>
        <span class="p-output-list-item" :class="context?.itemClass">{{ value }}</span>
      </template>
    </span>
    <div v-if="listStyle === 'div'" :id="context?.id" :style="context?.attrs?.style" class="p-output-list-items" :class="context?.attrs?.class">
      <template v-for="(value, index) of getListValues" :key="index">
        <div class="p-output-list-item" :class="context?.itemClass">
          {{ value }}
        </div>
      </template>
    </div>
    <ul v-if="listStyle === 'ul'" :id="context?.id" :style="context?.attrs?.style" class="p-output-list-items" :class="context?.attrs?.class">
      <li v-for="(value, index) of getListValues" :key="index">
        <span class="p-output-list-item" :class="context?.itemClass">
          {{ value }}
        </span>
      </li>
    </ul>
    <ol v-if="listStyle === 'ol'" :id="context?.id" :style="context?.attrs?.style" class="p-output-list-items" :class="context?.attrs?.class">
      <li v-for="(value, index) of getListValues" :key="index">
        <span class="p-output-list-item" :class="context?.itemClass">
          {{ value }}
        </span>
      </li>
    </ol>
    <FormKitSuffix v-if="hasSuffix && listStyle === 'span'" :suffix="context?.suffix as string" />
    <FormKitIcon v-if="hasSuffixIcon" :icon-class="context?.iconSuffix as string" :on-click="context?.onIconSuffixClicked as (() => void)" position="suffix" />
  </div>
</template>
