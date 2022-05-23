<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context

function handleInput(e: any) {
  context?.node.input(e.value)
}
</script>

<template>
  <Dropdown
    :id="context.id" v-model="context._value"
    :class="context.attrs.class"
    :options="context?.attrs?.options"
    option-label="label"
    option-value="value"
    :placeholder="context.attrs.placeholder"
    :filter="context.attrs.filter ?? false"
    :show-clear="context.attrs.showClear ?? false"
    @change="handleInput"
  />
</template>
