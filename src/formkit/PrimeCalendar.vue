<template>

  <Calendar :id='props.context.id' @date-select='handleSelect' @input='handleInput' v-model='props.context._value'
            :class="props.context.attrs.class"
            :dateFormat="props.context.attrs.dateFormat"
            :showIcon="props.context.attrs.showIcon"  :icon="props.context.attrs.icon"/>
</template>

<script setup lang='ts'>
const props = defineProps({
  context: Object,
});

function handleInput(e: any) {
  props.context?.node.input(props.context?._value);
}

function handleSelect(e: any) {
  props.context?.node.input(e);
}
</script>
