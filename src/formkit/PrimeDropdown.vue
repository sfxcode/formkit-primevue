<script setup lang="ts">
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
  <Dropdown
    v-model="context._value"
    :input-id="context.id"
    :disabled="attrs._disabled ?? false"
    :readonly="attrs._readonly ?? false"
    :input-style="attrs.style"
    :input-class="attrs.class"
    :options="attrs.options"
    :option-label="attrs.optionLabel ?? 'label'"
    :option-value="attrs.optionValue ?? 'value'"
    :placeholder="attrs.placeholder"
    :filter="attrs.filter ?? false"
    :show-clear="attrs.showClear ?? false"
    @change="handleInput"
    @blur="handleBlur"
  />
</template>
