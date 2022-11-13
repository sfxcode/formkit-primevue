<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context
const attrs = context?.attrs

function handleBlur(e: any) {
  context?.handlers.blur(e.value)
}

function handleInput(e: any) {
  context?.node.input(e.value)
}
</script>

<template>
  <InputNumber
    v-model="context._value"
    :input-id="context.id"
    :disabled="attrs._disabled ?? false"
    :readonly="attrs._readonly ?? false"
    :placeholder="attrs.placeholder"
    :input-style="attrs.style"
    :input-class="attrs.class"
    :use-grouping="attrs.useGrouping ?? true"
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
    @input="handleInput"
    @blur="handleBlur"
  />
</template>
