<template>

  <MultiSelect :id='props.context.id' @change='handleInput' v-model='props.context._value'
            :options="props.context?.attrs?.options"
            optionLabel="label" optionValue="value" :placeholder='props.context.attrs.placeholder'
            :filter="props.context.attrs.filter ?? false"
            :class="props.context.attrs.class"/>
</template>

<script setup lang='ts'>
const props = defineProps({
  context: Object,
});

function handleInput(e: any) {
  props.context?.node.input(props.context?._value);
}
</script>
