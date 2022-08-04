<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context

function handleBlur(e: any) {
  context?.handlers.blur(e.value)
}

function handleInput(e: any) {
  context?.node.input(e.value)
}
</script>

<template>
  <InputNumber
    :id="context.id" v-model="context._value"
    :placeholder="context.attrs.placeholder" :class="context.attrs.class"
    :use-grouping="context.attrs.useGrouping ?? true"
    :min-fraction-digits="context.attrs.minFractionDigits ?? undefined"
    :max-fraction-digits="context.attrs.maxFractionDigits ?? undefined"
    :locale="context.attrs.locale ?? undefined"
    :mode="context.attrs.mode ?? undefined"
    :currency="context.attrs.currency ?? undefined"
    :prefix="context.attrs.prefix ?? undefined"
    :suffix="context.attrs.suffix ?? undefined"
    :show-buttons="context.attrs.showButtons ?? undefined"
    :button-layout="context.attrs.buttonLayout ?? 'stacked'"
    :step="context.attrs.step ?? undefined"
    @input="handleInput"
    @blur="handleBlur"
  />
</template>
