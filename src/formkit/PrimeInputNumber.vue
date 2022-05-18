<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context

function handleInput(e: any) {
  context?.node.input(e.target.value)
}
</script>

<template>
  <InputNumber
    :id="context.id" v-model="context._value" :rows="context.rows ?? 3"
    :placeholder="context.attrs.placeholder" :class="context.attrs.class"
    @input="handleInput"
  />
</template>
