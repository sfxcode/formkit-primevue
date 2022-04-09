<template>

  <Editor :id='props.context.id' @text-change='handleInput' v-model='props.context._value'
          :placeholder='props.context.attrs.placeholder'/>
</template>

<script setup lang='ts'>
const props = defineProps({
  context: Object,
});


function handleInput(e: any) {
  props.context?.node.input(e.htmlValue);
}
</script>
