<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

function handleInput(e: any) {
  props.context?.node.input(e.target.value)
}
</script>

<template>
  <Textarea
    :id="props.context.id" v-model="props.context._value" :rows="props.context.rows ?? 3"
    :placeholder="props.context.attrs.placeholder" :class="props.context.attrs.class"
    @input="handleInput"
  />
</template>
