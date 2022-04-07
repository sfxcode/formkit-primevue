<template>

  <Textarea :id='props.context.id' @input='handleInput' v-model='props.context._value'
                      :rows="props.context.rows ?? 3" :placeholder='props.context.attrs.placeholder'/>
</template>

<script setup lang='ts'>
const props = defineProps({
  context: Object,
});

function handleInput(e: any) {
  props.context?.node.input(e.target.value);
}
</script>
