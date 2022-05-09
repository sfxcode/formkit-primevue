<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

function handleInput(e: any) {
  props.context?.node.input(props.context?._value)
}
</script>

<template>
  <span v-if="props.context.attrs.labelLeft" class="formkit-prime-left">{{ props.context.attrs.labelLeft }}</span>

  <InputSwitch
    :id="props.context.id" v-model="props.context._value" :true-value="props.context.attrs.trueValue ?? undefined"
    :false-value="props.context.attrs.falseValue ?? undefined"
    :class="props.context.attrs.class"
    @input="handleInput"
  />
  <span v-if="props.context.attrs.labelRight" class="formkit-prime-right">{{ props.context.attrs.labelRight }}</span>
</template>
