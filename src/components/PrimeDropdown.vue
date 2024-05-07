<script setup lang="ts">
import { type PropType, computed } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'
import type { DropdownProps } from 'primevue/dropdown'

export interface FormKitPrimeDropdownProps {
  options?: DropdownProps['options']
  optionLabel?: DropdownProps['optionLabel']
  optionValue?: DropdownProps['optionValue']
  optionDisabled?: DropdownProps['optionDisabled']
  optionGroupLabel?: DropdownProps['optionGroupLabel']
  optionGroupChildren?: DropdownProps['optionGroupChildren']
  scrollHeight?: DropdownProps['scrollHeight']
  filter?: DropdownProps['filter']
  filterPlaceholder?: DropdownProps['filterPlaceholder']
  filterLocale?: DropdownProps['filterLocale']
  filterMatchMode?: DropdownProps['filterMatchMode']
  filterFields?: DropdownProps['filterFields']
  filterInputProps?: DropdownProps['filterInputProps']
  editable?: DropdownProps['editable']
  placeholder?: DropdownProps['placeholder']
  dataKey?: DropdownProps['dataKey']
  showClear?: DropdownProps['showClear']
  panelStyle?: DropdownProps['panelStyle']
  panelClass?: DropdownProps['panelClass']
  panelProps?: DropdownProps['panelProps']
  appendTo?: DropdownProps['appendTo']
  resetFilterOnHide?: DropdownProps['resetFilterOnHide']
  virtualScrollerOptions?: DropdownProps['virtualScrollerOptions']
  autoOptionFocus?: DropdownProps['autoOptionFocus']
  selectOnFocus?: DropdownProps['selectOnFocus']
  filterMessage?: DropdownProps['filterMessage']
  selectionMessage?: DropdownProps['selectionMessage']
  emptySelectionMessage?: DropdownProps['emptySelectionMessage']
  emptyFilterMessage?: DropdownProps['emptyFilterMessage']
  emptyMessage?: DropdownProps['emptyMessage']
  pt?: DropdownProps['pt']
  ptOptions?: DropdownProps['ptOptions']
  unstyled?: DropdownProps['unstyled']
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeDropdownProps>,
    required: true,
  },
})

function handleBlur(e: Event) {
  props.context?.handlers.blur(e)
}
function handleInput(e: any) {
  props.context?.node.input(e.value)
}
const styleClass = computed(() => (props.context?.state.validationVisible && !props.context?.state.valid) ? `${props.context?.attrs?.class} p-invalid` : props.context?.attrs?.class)
</script>

<template>
  <div class="p-formkit">
    <Dropdown
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
