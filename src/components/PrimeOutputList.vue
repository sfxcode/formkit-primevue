<script setup lang="ts">
import type { FormKitFrameworkContext } from '@formkit/core'
import type { SelectProps } from 'primevue/select'
import type { PropType } from 'vue'
import type { FormKitIconProps } from './FormKitIcon.vue'
import { computed } from 'vue'
import { useFormKitSection } from '../composables'
import FormKitIcon from './FormKitIcon.vue'
import FormKitPrefix from './FormKitPrefix.vue'
import FormKitSuffix from './FormKitSuffix.vue'

export interface PrimeOutputListProps {
  options?: SelectProps['options']
  optionLabel?: SelectProps['optionLabel']
  optionValue?: SelectProps['optionValue']
  convertValue?: (array: []) => []
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext> & FormKitIconProps & PrimeOutputListProps,
    required: true,
  },
})

const listStyle = computed(() => {
  return props.context?.listStyle || 'span'
})

const { hasPrefix, hasPrefixIcon, hasSuffix, hasSuffixIcon } = useFormKitSection(props.context)

const getListValues = computed(() => {
  const values = Array.isArray(props.context?._value) ? props.context._value : []
  if (props.context?.options && props.context?.optionValue) {
    const key: string = `${props.context.optionValue}`
    return values.map((value) => {
      const foundOption = props.context?.options?.find(option => option[key] === value)
      return foundOption ? foundOption[props.context?.optionLabel as string] : value
    })
  }
  else if (typeof props.context?.convertValue === 'function') {
    return props.context.convertValue([...values])
  }
  return values
})

const dividerClass = computed(() => props.context?.dividerClass || '')
const itemClass = computed(() => props.context?.itemClass || '')
const listItemsClass = computed(() => props.context?.attrs?.class || '')
</script>

<template>
  <div class="p-formkit p-output-list">
    <FormKitIcon
      v-if="hasPrefixIcon"
      :icon-class="context?.iconPrefix as string"
      :on-click="context?.onIconPrefixClicked as () => void"
      position="prefix"
    />
    <FormKitPrefix v-if="hasPrefix && listStyle === 'span'" :prefix="context?.prefix as string" />
    <span
      v-if="listStyle === 'span'"
      :id="context?.id"
      :style="context?.attrs?.style"
      class="p-output-list-items"
      :class="listItemsClass"
    >
      <template v-for="(value, index) of getListValues" :key="index">
        <span v-if="index !== 0" class="p-output-list-divider" :class="dividerClass">{{
          context?.divider ?? ", "
        }}</span>
        <span class="p-output-list-item" :class="itemClass">{{ value }}</span>
      </template>
    </span>
    <div
      v-if="listStyle === 'div'"
      :id="context?.id"
      :style="context?.attrs?.style"
      class="p-output-list-items"
      :class="listItemsClass"
    >
      <template v-for="(value, index) of getListValues" :key="index">
        <div class="p-output-list-item" :class="itemClass">
          {{ value }}
        </div>
      </template>
    </div>
    <ul
      v-if="listStyle === 'ul'"
      :id="context?.id"
      :style="context?.attrs?.style"
      class="p-output-list-items"
      :class="listItemsClass"
    >
      <li v-for="(value, index) of getListValues" :key="index">
        <span class="p-output-list-item" :class="itemClass">
          {{ value }}
        </span>
      </li>
    </ul>
    <ol
      v-if="listStyle === 'ol'"
      :id="context?.id"
      :style="context?.attrs?.style"
      class="p-output-list-items"
      :class="listItemsClass"
    >
      <li v-for="(value, index) of getListValues" :key="index">
        <span class="p-output-list-item" :class="itemClass">
          {{ value }}
        </span>
      </li>
    </ol>
    <FormKitSuffix v-if="hasSuffix && listStyle === 'span'" :suffix="context?.suffix as string" />
    <FormKitIcon
      v-if="hasSuffixIcon"
      :icon-class="context?.iconSuffix as string"
      :on-click="context?.onIconSuffixClicked as () => void"
      position="suffix"
    />
  </div>
</template>
