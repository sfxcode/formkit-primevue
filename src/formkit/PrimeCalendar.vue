<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context

function handleInput(e: any) {
  context?.node.input(context?._value)
}

function handleSelect(e: any) {
  context?.node.input(e)
}
</script>

<template>
  <Calendar
    :id="props.context.id" v-model="context._value" :class="context.attrs.class" :date-format="context.attrs.dateFormat"
    :show-icon="context.attrs.showIcon"
    :icon="context.attrs.icon"
    @date-select="handleSelect" @input="handleInput"
  />
</template>
