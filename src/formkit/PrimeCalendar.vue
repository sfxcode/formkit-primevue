<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

function handleInput(e: any) {
  props.context?.node.input(props.context?._value)
}

function handleSelect(e: any) {
  props.context?.node.input(e)
}
</script>

<template>
  <Calendar
    :id="props.context.id" v-model="props.context._value" :class="props.context.attrs.class" :date-format="props.context.attrs.dateFormat"
    :show-icon="props.context.attrs.showIcon"
    :icon="props.context.attrs.icon"
    @date-select="handleSelect" @input="handleInput"
  />
</template>
