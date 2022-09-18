<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context

function handleChange(e: any) {
  context?.node.input(props.context?._value)
}
</script>

<template>
  <ColorPicker
    :id="context.id"
    v-model="context._value"
    :name="context.name"
    :class="context.attrs.class"
    :inline="false"
    :default-color="context.attrs.defaultColor"
    @change="handleChange"
  />
</template>
