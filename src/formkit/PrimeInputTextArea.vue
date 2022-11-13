<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context
const attrs = context?.attrs

function handleBlur(e: any) {
  context?.handlers.blur(e.target.value)
}

function handleInput(e: any) {
  context?.node.input(e.target.value)
}

onMounted(() => {
  console.log(context.rows)
})
</script>

<template>
  <Textarea
    :id="context.id"
    v-model="context._value"
    :disabled="attrs._disabled ?? false"
    :readonly="attrs._readonly ?? false"
    :style="attrs.style"
    :class="attrs.class"
    :placeholder="attrs.placeholder"
    :rows="context.rows ?? 3"
    @input="handleInput"
    @blur="handleBlur"
  />
</template>
