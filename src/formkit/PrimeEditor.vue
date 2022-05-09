<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

function handleInput(e: any) {
  props.context?.node.input(e.htmlValue)
}
</script>

<template>
  <Editor
    :id="props.context.id" v-model="props.context._value" :placeholder="props.context.attrs.placeholder"
    @text-change="handleInput"
  />
</template>
