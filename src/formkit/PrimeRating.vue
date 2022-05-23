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
  <Rating
    :id="context.id" v-model="context._value"
    :disabled="context.attrs.disabled ?? false"
    :readonly="context.attrs.readonly ?? false"
    :stars="context.attrs.stars ?? 5"
    :cancel="context.attrs.cancel ?? false"
    @change="handleInput"
  />
</template>
