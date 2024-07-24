<script setup lang='ts'>
import type { PropType } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'

import type { ListboxProps } from 'primevue/listbox'
import { useFormKitInput } from '../composables'

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

const { styleClass, handleInput, handleBlur } = useFormKitInput(props.context)
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
