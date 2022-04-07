<template>

  <Dropdown :id='props.context.id' @change='handleInput' v-model='props.context._value'
            :options="props.context?.attrs?.options"
            optionLabel="label" optionValue="value" :placeholder='props.context.attrs.placeholder'
            :filter="props.context.attrs.filter ?? false" :showClear="props.context.attrs.showClear ?? false"/>
</template>

<script setup lang='ts'>
const props = defineProps({
  context: Object,
});

function handleInput(e: any) {
  props.context?.node.input(e.value);
}
</script>
