<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

function handleInput(e: any) {
  props.context?.node.input(e)
}
</script>

<template>
  <span v-if="props.context.attrs.labelLeft" class="formkit-prime-left">{{ props.context.attrs.labelLeft }}</span>
  <Checkbox
    :id="props.context.id" v-model="props.context._value" :placeholder="props.context.attrs.placeholder"
    :binary="true" :class="props.context.attrs.class"
    @input="handleInput"
  />
  <span v-if="props.context.attrs.labelRight" class="formkit-prime-right">{{ props.context.attrs.labelRight }}</span>
</template>
