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
  <span v-if="context.attrs.labelLeft" class="formkit-prime-left">{{ context.attrs.labelLeft }}</span>

  <InputSwitch
    :id="context.id" v-model="context._value"
    :class="context.attrs.class"
    :true-value="context.attrs.trueValue ?? undefined"
    :false-value="context.attrs.falseValue ?? undefined"
    @input="handleInput"
  />
  <span v-if="context.attrs.labelRight" class="formkit-prime-right">{{ context.attrs.labelRight }}</span>
</template>
