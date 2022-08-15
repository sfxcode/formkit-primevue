<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context

function handleInput(e: any) {
  context?.node.input(e)
  context?.handlers.blur(e)
}
</script>

<template>
  <Knob
    v-model="context._value"
    :id="context.id"
    :name="context.name"
    :min="context.attrs.min ?? 0"
    :max="context.attrs.max ?? 100"
    :step="context.attrs.step ?? undefined"
    :size="context.attrs.max ?? 100"
    :stroke-width="context.attrs.strokeWidth ?? 14"
    :show-value="context.attrs.showValue ?? true"
    :value-color="context.attrs.valueColor ?? undefined"
    :range-color="context.attrs.rangeColor ?? undefined"
    :text-color="context.attrs.textColor ?? undefined"
    :value-template="context.attrs.valueTemplate ?? undefined"
    @change="handleInput"
  />
</template>
