<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context
const attrs = computed(() => context?.attrs)

function handleChange(e: any) {
  context?.node.input(props.context?._value)
}

const styleClass = computed(() => (context?.state.validationVisible && !context?.state.valid) ? `${attrs.value?.class} p-invalid` : attrs.value?.class)
</script>

<template>
  <div class="p-formkit">
    <MultiSelect
      v-model="context._value"
      :input-id="context.id"
      :disabled="attrs._disabled ?? !!context?.disabled"
      :readonly="attrs._readonly ?? false"
      :list-style="attrs.style"
      :class="styleClass"
      :tabindex="attrs.tabindex"
      :aria-label="attrs.ariaLabel"
      :aria-labelledby="attrs.ariaLabelledby"
      :placeholder="attrs.placeholder"
      :options="attrs.options"
      :option-label="attrs.optionLabel"
      :option-value="attrs.optionValue"
      :option-disabled="attrs.optionDisabled"
      :option-group-label="attrs.optionGroupLabel"
      :option-group-children="attrs.optionGroupChildren"
      :scroll-height="attrs.scrollHeight"
      :input-props="attrs.inputProps"
      :close-button-props="attrs.closeButtonProps"
      :data-key="attrs.dataKey"
      :filter="attrs.filter ?? false"
      :filter-placeholder="attrs.filterPlaceholder"
      :filter-locale="attrs.filterLocale"
      :filter-match-mode="attrs.filterMatchMode"
      :fitler-fields="attrs.filterFields"
      :append-to="attrs.appendTo"
      :display="attrs.display"
      :max-selected-labels="attrs.maxSelectedLabels"
      :selected-items-label="attrs.selectedItemsLabel"
      :selection-limit="attrs.selectionLimit"
      :show-toggle-all="attrs.showToggleAll"
      :loading="attrs.loading"
      :select-all="attrs.selectAll"
      :reset-filter-on-hide="attrs.resetFilterOnHide"
      :virtual-scroller-options="attrs.virtualScrollerOptions"
      :auto-option-focus="attrs.autoOptionFocus"
      :auto-filter-focus="attrs.autoFilterFocus"
      :filter-message="attrs.filterMessage"
      :selection-message="attrs.selectionMessage"
      :empty-selection-message="attrs.emptySelectionMessage"
      :empty-filter-message="attrs.emptyFilterMessage"
      :empty-message="attrs.emptyMessage"
      :pt="attrs.pt"
      :pt-options="attrs.ptOptions"
      :unstyled="attrs.unstyled ?? false"
      @change="handleChange"
    />
  </div>
</template>
