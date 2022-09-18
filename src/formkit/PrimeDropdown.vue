<script setup lang="ts">
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
  <Dropdown
    :id="context.id"
    v-model="context._value"
    :name="context.name"
    :class="context.attrs.class"
    :options="context?.attrs?.options"
    :option-label="context?.attrs?.optionLabel ?? 'label'"
    :option-value="context?.attrs?.optionValue ?? 'value'"
    :placeholder="context.attrs.placeholder"
    :filter="context.attrs.filter ?? false"
    :show-clear="context.attrs.showClear ?? false"
    @change="handleInput"
    @blur="handleBlur"
  />
</template>
