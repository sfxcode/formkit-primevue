<script setup lang='ts'>
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
    <InputNumber
      v-model="context._value"
      :input-id="context.id"
      :disabled="attrs._disabled ?? !!context?.disabled"
      :readonly="attrs._readonly ?? false"
      :input-style="attrs.style"
      :input-class="styleClass"
      :tabindex="attrs.tabindex"
      :aria-label="attrs.ariaLabel"
      :aria-labelledby="attrs.ariaLabelledby"
      :placeholder="attrs.placeholder"
      :use-grouping="attrs.useGrouping ?? true"
      :min="attrs.min ?? undefined"
      :max="attrs.max ?? undefined"
      :min-fraction-digits="attrs.minFractionDigits ?? undefined"
      :max-fraction-digits="attrs.maxFractionDigits ?? undefined"
      :locale="attrs.locale ?? undefined"
      :mode="attrs.mode ?? undefined"
      :currency="attrs.currency ?? undefined"
      :prefix="attrs.prefix ?? undefined"
      :suffix="attrs.suffix ?? undefined"
      :show-buttons="attrs.showButtons ?? undefined"
      :button-layout="attrs.buttonLayout ?? 'stacked'"
      :step="attrs.step ?? undefined"
      :pt="attrs.pt"
      :pt-options="attrs.ptOptions"
      :unstyled="attrs.unstyled ?? false"
      @input="handleInput"
      @blur="handleBlur"
    />
  </div>
</template>
