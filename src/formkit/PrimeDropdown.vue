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
    v-model="context._value"
    :id="context.id"
    :name="context.name"
    :class="context.attrs.class"
    :options="context?.attrs?.options"
    option-label="label"
    option-value="value"
    :placeholder="context.attrs.placeholder"
    :filter="context.attrs.filter ?? false"
    :show-clear="context.attrs.showClear ?? false"
    @change="handleInput"
    @blur="handleBlur"
  />
</template>
