<template>
  <Slider :id='props.context.id' @change='handleInput' v-model='props.context._value'
          :min="props.context.attrs.min ?? 0"
          :max="props.context.attrs.max ?? 100"
          :step="props.context.attrs.step ?? undefined"
          :range="props.context.attrs.range ?? false"/>
</template>

<script setup lang='ts'>
const props = defineProps({
  context: Object,
});


function handleInput(e: any) {
  props.context?.node.input(props.context?._value);
}
</script>
