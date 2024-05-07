<script setup lang='ts'>
import { type PropType, computed } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'
import type { ListboxProps } from 'primevue/listbox'

export interface FormKitPrimeListboxProps {
  pt?: ListboxProps['pt']
  ptOptions?: ListboxProps['ptOptions']
  unstyled?: ListboxProps['unstyled']
  options?: ListboxProps['options']
  optionLabel?: ListboxProps['optionLabel']
  optionValue?: ListboxProps['optionValue']
  multiple?: ListboxProps['multiple']
  filter?: ListboxProps['filter']
  filterIcon?: ListboxProps['filterIcon']
  filterPlaceholder?: ListboxProps['filterPlaceholder']
  filterLocale?: ListboxProps['filterLocale']
  filterMatchMode?: ListboxProps['filterMatchMode']
  autoOptionFocus?: ListboxProps['autoOptionFocus']
  selectOnFocus?: ListboxProps['selectOnFocus']
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeListboxProps>,
    required: true,
  },
})

function handleInput(_: any) {
  props.context?.node.input(props.context?._value)
}

function handleBlur(e: Event) {
  props.context?.handlers.blur(e)
}

const styleClass = computed(() => (props.context?.state.validationVisible && !props.context?.state.valid) ? `${props.context?.attrs?.class} p-invalid` : props.context?.attrs?.class)
</script>

<template>
  <div class="p-formkit">
    <Listbox
      :id="context.id"
      v-model="context._value"
      v-bind="context?.attrs"
      :disabled="!!context?.disabled"
      :readonly="context?.attrs.readonly ?? false"
      :list-style="context?.attrs.style"
      :class="styleClass"
      :tabindex="context?.attrs.tabindex"
      :aria-label="context?.attrs.ariaLabel"
      :aria-labelledby="context?.attrs.ariaLabelledby"
      :options="context?.options"
      :option-label="context.optionLabel"
      :option-value="context.optionValue"
      :multiple="context.multiple ?? false"
      :filter="context.filter ?? false"
      :filter-icon="context.filterIcon"
      :filter-placeholder="context.filterPlaceholder"
      :filter-locale="context.filterLocale"
      :filter-match-mode="context.filterMatchMode"
      :auto-option-focus="context.autoOptionFocus ?? true"
      :select-on-focus="context.selectOnFocus ?? false"
      :pt="context.pt"
      :pt-options="context.ptOptions"
      :unstyled="context.unstyled ?? false"
      @change="handleInput"
      @blur="handleBlur"
    />
  </div>
</template>
