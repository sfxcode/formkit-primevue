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
  <Textarea
    v-model="context._value"
    :id="context.id"
    :name="context.name"
    :class="context.attrs.class"
    :placeholder="context.attrs.placeholder"
    :rows="context.rows ?? 3"
    @input="handleInput"
    @blur="handleBlur"
  />
</template>
