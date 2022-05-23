<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context

function handleInput(e: any) {
  context?.node.input(e)
}
</script>

<template>
  <span v-if="context.attrs.labelLeft" class="formkit-prime-left">{{ context.attrs.labelLeft }}</span>
  <Checkbox
    :id="context.id" v-model="context._value"
    :class="context.attrs.class"
    :placeholder="context.attrs.placeholder"
    :binary="true"
    @input="handleInput"
  />
  <span v-if="context.attrs.labelRight" class="formkit-prime-right">{{ context.attrs.labelRight }}</span>
</template>
