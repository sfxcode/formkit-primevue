<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context
const attrs = computed(() => context?.attrs)

function handleInput(e: any) {
  context?.node.input(props.context?._value)
}

const styleClass = computed(() => (context?.state.validationVisible && !context?.state.valid) ? `${attrs.value?.class} p-invalid` : attrs.value?.class)
</script>

<template>
  <div class="p-formkit">
    <Listbox
      :id="context.id"
      v-model="context._value"
      :disabled="attrs._disabled ?? false"
      :readonly="attrs._readonly ?? false"
      :list-style="attrs.style"
      :class="styleClass"
      :tabindex="attrs.tabindex"
      :aria-label="attrs.ariaLabel"
      :aria-labelledby="attrs.ariaLabelledby"
      :options="attrs?.options"
      :option-label="attrs.optionLabel ?? 'label'"
      :option-value="attrs.optionValue ?? 'value'"
      :multiple="attrs.multiple ?? false"
      :filter="attrs.filter ?? false"
      :filter-icon="attrs.filterIcon"
      :filter-placeholder="attrs.filterPlaceholder"
      :filter-locale="attrs.filterLocale"
      :filter-match-mode="attrs.filterMatchMode"
      :auto-option-focus="attrs.autoOptionFocus ?? true"
      :select-on-focus="attrs.selectOnFocus ?? false"
      :pt="attrs.pt"
      :pt-options="attrs.ptOptions"
      :unstyled="attrs.unstyled ?? false"
      @change="handleInput"
    />
  </div>
</template>
