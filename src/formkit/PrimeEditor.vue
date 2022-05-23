<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context

function handleInput(e: any) {
  context?.node.input(e.htmlValue)
}
</script>

<template>
  <Editor
    :id="context.id" v-model="context._value"
    :placeholder="context.attrs.placeholder"
    @text-change="handleInput"
  />
</template>
