<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context
const attrs = context?.attrs

function handleInput(e: any) {
  context?.node.input(props.context?._value)
}
</script>

<template>
  <span v-if="context.attrs.labelLeft" class="formkit-prime-left">{{ context.attrs.labelLeft }}</span>
  <Checkbox
    v-model="context._value"
    :input-id="context.id"
    :disabled="attrs._disabled ?? false"
    :readonly="attrs._readonly ?? false"
    :input-style="attrs.style"
    :input-class="attrs.class"
    :tabindex="attrs.tabindex"
    :aria-label="attrs.ariaLabel"
    :aria-labelledby="attrs.ariaLabelledby"
    :binary="attrs.binary ?? true"
    :true-value="attrs.trueValue ?? undefined"
    :false-value="attrs.falseValue ?? undefined"
    @input="handleInput"
  />
  <span v-if="context.attrs.labelRight" class="formkit-prime-right">{{ context.attrs.labelRight }}</span>
</template>
