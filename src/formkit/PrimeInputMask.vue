<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context
const attrs = context?.attrs

function handleInput(e: any) {
  context?.node.input(props.context?._value)
  context?.handlers.blur(props.context?._value)
}
</script>

<template>
  <InputMask
    :id="context.id"
    v-model="context._value"
    :disabled="attrs._disabled ?? false"
    :readonly="attrs._readonly ?? false"
    :editor-style="attrs.style"
    :class="attrs.class"
    :tabindex="attrs.tabindex"
    :aria-label="attrs.ariaLabel"
    :aria-labelledby="attrs.ariaLabelledby"
    :placeholder="attrs.placeholder"
    :mask="attrs.mask ?? undefined"
    :slot-char="attrs.slotChar ?? '_'"
    :auto-clear="attrs.autoClear ?? true"
    :unmask="attrs.unmask ?? false"
    @blur="handleInput"
  />
</template>
