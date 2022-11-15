<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context
const attrs = context?.attrs

function handleInput(e: any) {
  context?.node.input(e)
  context?.handlers.blur(e)
}
</script>

<template>
  <Slider
    :id="context.id"
    v-model="context._value"
    :disabled="attrs._disabled ?? false"
    :readonly="attrs._readonly ?? false"
    :style="attrs.style"
    :class="attrs.class"
    :tabindex="attrs.tabindex"
    :aria-label="attrs.ariaLabel"
    :aria-labelledby="attrs.ariaLabelledby"
    :min="attrs.min ?? 0"
    :max="attrs.max ?? 100"
    :step="attrs.step ?? undefined"
    :range="attrs.range ?? false"
    :orientation="attrs.orientation ?? 'horizontal'"
    @change="handleInput"
  />
</template>
