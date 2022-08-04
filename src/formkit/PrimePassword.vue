<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context

function handleBlur(e: any) {
  context?.handlers.blur(e.target.value)
}

function handleInput(e: any) {
  context?.node.input(e.target.value)
}
</script>

<template>
  <Password
    :id="context.id" v-model="context._value"
    :class="context.attrs.class"
    :placeholder="context.attrs.placeholder"
    :feedback="context?.feedback ?? true"
    :toggle-mask="context?.toggleMask ?? false"
    @input="handleInput"
    @blur="handleBlur"
  />
</template>
