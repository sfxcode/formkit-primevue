<script setup lang="ts">
import type { PropType } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'

import type { SelectProps } from 'primevue/select'
import { useFormKitInput } from '../composables'

export interface FormKitPrimeSelectProps {
  options?: SelectProps['options']
  optionLabel?: SelectProps['optionLabel']
  optionValue?: SelectProps['optionValue']
  optionDisabled?: SelectProps['optionDisabled']
  optionGroupLabel?: SelectProps['optionGroupLabel']
  optionGroupChildren?: SelectProps['optionGroupChildren']
  scrollHeight?: SelectProps['scrollHeight']
  filter?: SelectProps['filter']
  filterPlaceholder?: SelectProps['filterPlaceholder']
  filterLocale?: SelectProps['filterLocale']
  filterMatchMode?: SelectProps['filterMatchMode']
  filterFields?: SelectProps['filterFields']
  editable?: SelectProps['editable']
  placeholder?: SelectProps['placeholder']
  dataKey?: SelectProps['dataKey']
  showClear?: SelectProps['showClear']
  panelStyle?: SelectProps['panelStyle']
  panelClass?: SelectProps['panelClass']
  appendTo?: SelectProps['appendTo']
  resetFilterOnHide?: SelectProps['resetFilterOnHide']
  virtualScrollerOptions?: SelectProps['virtualScrollerOptions']
  autoOptionFocus?: SelectProps['autoOptionFocus']
  selectOnFocus?: SelectProps['selectOnFocus']
  filterMessage?: SelectProps['filterMessage']
  selectionMessage?: SelectProps['selectionMessage']
  emptySelectionMessage?: SelectProps['emptySelectionMessage']
  emptyFilterMessage?: SelectProps['emptyFilterMessage']
  emptyMessage?: SelectProps['emptyMessage']
  pt?: SelectProps['pt']
  ptOptions?: SelectProps['ptOptions']
  unstyled?: SelectProps['unstyled']
  wrapperClass?: string
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeSelectProps>,
    required: true,
  },
})

const { styleClass, wrapperClass, handleInput, handleBlur } = useFormKitInput(props.context)
</script>

<template>
  <div :class="wrapperClass">
    <Select
      v-model="context._value"
      v-bind="context?.attrs"
      :input-id="context.id"
      :disabled="!!context?.disabled"
      :readonly="context?.attrs.readonly ?? false"
      :style="context?.attrs.style"
      :class="styleClass"
      :input-style="context?.attrs.style"
      :input-class="styleClass"
      :input-props="context?.attrs.inputProps"
      :tabindex="context?.attrs.tabindex"
      :aria-label="context?.attrs.ariaLabel"
      :aria-labelledby="context?.attrs.ariaLabelledby"
      :options="context.options"
      :option-label="context.optionLabel"
      :option-value="context.optionValue"
      :option-disabled="context.optionDisabled"
      :option-group-label="context.optionGroupLabel"
      :option-group-children="context.optionGroupChildren"
      :scroll-height="context.scrollHeight"
      :filter="context.filter ?? false"
      :filter-placeholder="context.filterPlaceholder"
      :filter-locale="context.filterLocale"
      :filter-match-mode="context.filterMatchMode"
      :fitler-fields="context.filterFields"
      :filter-input-props="context.filterInputProps"
      :editable="context.editable"
      :placeholder="context.placeholder"
      :data-key="context.dataKey"
      :show-clear="context.showClear ?? false"
      :panel-style="context.panelStyle"
      :panel-class="context.panelClass"
      :panel-props="context.panelProps"
      :append-to="context.appendTo"
      :reset-filter-on-hide="context.resetFilterOnHide"
      :virtual-scroller-options="context.virtualScrollerOptions"
      :auto-option-focus="context.autoOptionFocus"
      :select-on-focus="context.selectOnFocus"
      :filter-message="context.filterMessage"
      :selection-message="context.selectionMessage"
      :empty-selection-message="context.emptySelectionMessage"
      :empty-filter-message="context.emptyFilterMessage"
      :empty-message="context.emptyMessage"
      :pt="context.pt"
      :pt-options="context.ptOptions"
      :unstyled="context.unstyled ?? false"
      @change="handleInput"
      @blur="handleBlur"
    />
  </div>
</template>
