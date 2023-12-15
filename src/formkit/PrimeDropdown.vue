<script setup lang="ts">
const props = defineProps({
  context: Object,
})

const context = props.context
const attrs = computed(() => context?.attrs)

function handleBlur(e: any) {
  context?.handlers.blur(e.value)
}
function handleInput(e: any) {
  context?.node.input(e.value)
}
const styleClass = computed(() => (context?.state.validationVisible && !context?.state.valid) ? `${attrs.value?.class} p-invalid` : attrs.value?.class)
</script>

<template>
  <div class="p-formkit">
    <Dropdown
      v-model="context._value"
      :input-id="context.id"
      :disabled="attrs._disabled ?? false"
      :readonly="attrs._readonly ?? false"
      :style="attrs.style"
      :class="styleClass"
      :input-style="attrs.style"
      :input-class="styleClass"
      :input-props="attrs.inputProps"
      :tabindex="attrs.tabindex"
      :aria-label="attrs.ariaLabel"
      :aria-labelledby="attrs.ariaLabelledby"
      :options="attrs.options"
      :option-label="attrs.optionLabel ?? 'label'"
      :option-value="attrs.optionValue ?? 'value'"
      :option-disabled="attrs.optionDisabled"
      :option-group-label="attrs.optionGroupLabel"
      :option-group-children="attrs.optionGroupChildren"
      :scroll-height="attrs.scrollHeight"
      :filter="attrs.filter ?? false"
      :filter-placeholder="attrs.filterPlaceholder"
      :filter-locale="attrs.filterLocale"
      :filter-match-mode="attrs.filterMatchMode"
      :fitler-fields="attrs.filterFields"
      :filter-input-props="attrs.filterInputProps"
      :editable="attrs.editable"
      :placeholder="attrs.placeholder"
      :data-key="attrs.dataKey"
      :show-clear="attrs.showClear ?? false"
      :panel-style="attrs.panelStyle"
      :panel-class="attrs.panelClass"
      :panel-props="attrs.panelProps"
      :append-to="attrs.appendTo"
      :reset-filter-on-hide="attrs.resetFilterOnHide"
      :virtual-scroller-options="attrs.virtualScrollerOptions"
      :autoOptionFocus="attrs.autoOptionFocus"
      :selectOnFocus="attrs.selectOnFocus"
      :filter-message="attrs.filterMessage"
      :selection-message="attrs.selectionMessage"
      :empty-selection-message="attrs.emptySelectionMessage"
      :empty-filter-message="attrs.emptyFilterMessage"
      :empty-message="attrs.emptyMessage"
      :pt="attrs.pt"
      :pt-options="attrs.ptOptions"
      :unstyled="attrs.unstyled ?? false"
      @change="handleInput"
      @blur="handleBlur"
    />
  </div>
</template>
