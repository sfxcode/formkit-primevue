<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context

function handleInput(e: any) {
  context?.node.input(props.context?._value)
  context?.handlers.blur(props.context?._value)
}
</script>

<template>
  <InputMask
    v-model="context._value"
    :id="context.id"
    :name="context.name"
    :class="context.attrs.class"
    :placeholder="context.attrs.placeholder"
    :mask="context.attrs.mask ?? undefined"
    :slot-char="context.attrs.slotChar ?? '_'"
    :auto-clear="context.attrs.autoClear ?? true"
    :unmask="context.attrs.unmask ?? false"
    @blur="handleInput"
  />
</template>
