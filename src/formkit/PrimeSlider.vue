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
  <Slider
    v-model="context._value"
    :id="context.id"
    :name="context.name"
    :min="context.attrs.min ?? 0"
    :max="context.attrs.max ?? 100"
    :step="context.attrs.step ?? undefined"
    :range="context.attrs.range ?? false"
    @change="handleInput"
  />
</template>
