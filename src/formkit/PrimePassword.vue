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
  <Password
    :id="context.id" v-model="context._value" :placeholder="context.attrs.placeholder" :feedback="context?.feedback ?? true"
    :toggle-mask="context?.toggleMask ?? false" :class="context.attrs.class"
    @input="handleInput"
  />
</template>
