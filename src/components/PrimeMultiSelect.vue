<script setup lang='ts'>
import type { PropType } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'

import type { MultiSelectProps } from 'primevue/multiselect'
import { useFormKitInput } from '../composables'

export interface FormKitPrimeMultiSelectProps {
  options?: MultiSelectProps['options']
  optionLabel?: MultiSelectProps['optionLabel']
  optionValue?: MultiSelectProps['optionValue']
  optionDisabled?: MultiSelectProps['optionDisabled']
  optionGroupLabel?: MultiSelectProps['optionGroupLabel']
  optionGroupChildren?: MultiSelectProps['optionGroupChildren']
  scrollHeight?: MultiSelectProps['scrollHeight']
  closeIcon?: MultiSelectProps['closeIcon']
  dataKey?: MultiSelectProps['dataKey']
  filter?: MultiSelectProps['filter']
  filterPlaceholder?: MultiSelectProps['filterPlaceholder']
  filterLocale?: MultiSelectProps['filterLocale']
  filterMatchMode?: MultiSelectProps['filterMatchMode']
  filterFields?: MultiSelectProps['filterFields']
  appendTo?: MultiSelectProps['appendTo']
  display?: MultiSelectProps['display']
  maxSelectedLabels?: MultiSelectProps['maxSelectedLabels']
  selectedItemsLabel?: MultiSelectProps['selectedItemsLabel']
  selectionLimit?: MultiSelectProps['selectionLimit']
  showToggleAll?: MultiSelectProps['showToggleAll']
  loading?: MultiSelectProps['loading']
  selectAll?: MultiSelectProps['selectAll']
  resetFilterOnHide?: MultiSelectProps['resetFilterOnHide']
  virtualScrollerOptions?: MultiSelectProps['virtualScrollerOptions']
  autoOptionFocus?: MultiSelectProps['autoOptionFocus']
  autoFilterFocus?: MultiSelectProps['autoFilterFocus']
  filterMessage?: MultiSelectProps['filterMessage']
  selectionMessage?: MultiSelectProps['selectionMessage']
  emptySelectionMessage?: MultiSelectProps['emptySelectionMessage']
  emptyFilterMessage?: MultiSelectProps['emptyFilterMessage']
  emptyMessage?: MultiSelectProps['emptyMessage']
  pt?: MultiSelectProps['pt']
  placeholder?: MultiSelectProps['placeholder']
  ptOptions?: MultiSelectProps['ptOptions']
  unstyled?: MultiSelectProps['unstyled']
  wrapperClass?: string
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeMultiSelectProps>,
    required: true,
  },
})

const { styleClass, wrapperClass, handleBlur, handleChange } = useFormKitInput(props.context)
</script>

<template>
  <div :class="wrapperClass">
    <MultiSelect
      v-model="context._value"
      v-bind="context?.attrs"
      :input-id="context.id"
      :disabled="!!context?.disabled"
      :readonly="context?.attrs.readonly ?? false"
      :list-style="context?.attrs.style"
      :class="styleClass"
      :tabindex="context?.attrs.tabindex"
      :aria-label="context?.attrs.ariaLabel"
      :aria-labelledby="context?.attrs.ariaLabelledby"
      :placeholder="context.placeholder"
      :options="context.options"
      :option-label="context.optionLabel"
      :option-value="context.optionValue"
      :option-disabled="context.optionDisabled"
      :option-group-label="context.optionGroupLabel"
      :option-group-children="context.optionGroupChildren"
      :scroll-height="context.scrollHeight"
      :data-key="context.dataKey"
      :filter="context.filter ?? false"
      :filter-placeholder="context.filterPlaceholder"
      :filter-locale="context.filterLocale"
      :filter-match-mode="context.filterMatchMode"
      :fitler-fields="context.filterFields"
      :append-to="context.appendTo"
      :close-icon="context.closeIcon"
      :display="context.display"
      :max-selected-labels="context.maxSelectedLabels"
      :selected-items-label="context.selectedItemsLabel"
      :selection-limit="context.selectionLimit"
      :show-toggle-all="context.showToggleAll"
      :loading="context.loading"
      :select-all="context.selectAll"
      :reset-filter-on-hide="context.resetFilterOnHide"
      :virtual-scroller-options="context.virtualScrollerOptions"
      :auto-option-focus="context.autoOptionFocus"
      :auto-filter-focus="context.autoFilterFocus"
      :filter-message="context.filterMessage"
      :selection-message="context.selectionMessage"
      :empty-selection-message="context.emptySelectionMessage"
      :empty-filter-message="context.emptyFilterMessage"
      :empty-message="context.emptyMessage"
      :pt="context.pt"
      :pt-options="context.ptOptions"
      :unstyled="context.unstyled ?? false"
      @change="handleChange"
      @blur="handleBlur"
    />
  </div>
</template>
