<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context

function handleInput(e: any) {
  context?.node.input(props.context?._value)
}
</script>

<template>
  <MultiSelect
    :id="context.id" v-model="context._value" :options="context?.attrs?.options"
    option-label="label"
    option-value="value" :placeholder="context.attrs.placeholder" :filter="context.attrs.filter ?? false"
    :class="context.attrs.class"
    @change="handleInput"
  />
</template>
