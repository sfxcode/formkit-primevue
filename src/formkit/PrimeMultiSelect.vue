<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

function handleInput(e: any) {
  props.context?.node.input(props.context?._value)
}
</script>

<template>
  <MultiSelect
    :id="props.context.id" v-model="props.context._value" :options="props.context?.attrs?.options"
    option-label="label"
    option-value="value" :placeholder="props.context.attrs.placeholder" :filter="props.context.attrs.filter ?? false"
    :class="props.context.attrs.class"
    @change="handleInput"
  />
</template>
