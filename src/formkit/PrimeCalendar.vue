<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context
const attrs = context?.attrs

function handleInput(e: any) {
  context?.node.input(context?._value)
}

function handleSelect(e: any) {
  context?.node.input(e)
}
</script>

<template>
  <Calendar
    v-model="context._value"
    :input-id="props.context.id"
    :disabled="attrs._disabled ?? false"
    :readonly="attrs._readonly ?? false"
    :input-style="attrs.style"
    :input-class="attrs.class"
    :date-format="attrs.dateFormat"
    :icon="attrs.icon"
    :show-icon="context.showIcon"
    @date-select="handleSelect"
    @input="handleInput"
  />
</template>
