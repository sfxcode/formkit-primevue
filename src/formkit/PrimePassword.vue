<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context
const attrs = context?.attrs

function handleBlur(e: any) {
  context?.handlers.blur(e.target.value)
}

function handleInput(e: any) {
  context?.node.input(e.target.value)
}
</script>

<template>
  <Password
    v-model="context._value"
    :input-id="context.id"
    :disabled="attrs._disabled ?? false"
    :readonly="attrs._readonly ?? false"
    :input-style="attrs.style"
    :input-class="attrs.class"
    :placeholder="attrs.placeholder"
    :medium-regex="attrs.mediumRegex ?? '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'"
    :strong-regex="attrs.strongRegex ?? '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})'"
    :prompt-label="attrs.promptLabel"
    :weak-label="attrs.weakLabel"
    :medium-label="attrs.mediumLabel"
    :strong-label="attrs.strongLabel"
    :hide-icon="attrs.hideIcon ?? 'pi pi-eye-slash'"
    :show-icon="attrs.showIcon ?? 'pi pi-eye'"
    :feedback="context.feedback ?? false"
    :toggle-mask="context.toggleMask ?? false"
    @input="handleInput"
    @blur="handleBlur"
  />
</template>
