<script setup lang='ts'>
import { type PropType, computed } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'
import type { MultiSelectProps } from 'primevue/multiselect'

export interface FormKitPrimeMultiSelectProps {
  options?: MultiSelectProps['options']
  optionLabel?: MultiSelectProps['optionLabel']
  optionValue?: MultiSelectProps['optionValue']
  optionDisabled?: MultiSelectProps['optionDisabled']
  optionGroupLabel?: MultiSelectProps['optionGroupLabel']
  optionGroupChildren?: MultiSelectProps['optionGroupChildren']
  scrollHeight?: MultiSelectProps['scrollHeight']
  inputProps?: MultiSelectProps['inputProps']
  closeButtonProps?: MultiSelectProps['closeButtonProps']
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
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeMultiSelectProps>,
    required: true,
  },
})

function handleChange(_: any) {
  props.context?.node.input(props.context?._value)
}

function handleBlur(e: Event) {
  props.context?.handlers.blur(e)
}

const styleClass = computed(() => (props.context?.state.validationVisible && !props.context?.state.valid) ? `${props.context?.attrs?.class} p-invalid` : props.context?.attrs?.class)
</script>

<template>
  <div class="p-formkit">
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
      :input-props="context.inputProps"
      :close-button-props="context.closeButtonProps"
      :data-key="context.dataKey"
      :filter="context.filter ?? false"
      :filter-placeholder="context.filterPlaceholder"
      :filter-locale="context.filterLocale"
      :filter-match-mode="context.filterMatchMode"
      :fitler-fields="context.filterFields"
      :append-to="context.appendTo"
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
