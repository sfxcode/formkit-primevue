<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context

function handleInput(e: any) {
  context?.node.input(props.context?._value)
}
</script>

<template>
  <Slider
    :id="context.id" v-model="context._value" :min="context.attrs.min ?? 0"
    :max="context.attrs.max ?? 100"
    :step="context.attrs.step ?? undefined"
    :range="context.attrs.range ?? false"
    @change="handleInput"
  />
</template>
