<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context
const attrs = context?.attrs

function handleChange(e: any) {
  context?.node.input(props.context?._value)
}
</script>

<template>
  <MultiSelect
    v-model="context._value"
    :input-id="context.id"
    :disabled="attrs._disabled ?? false"
    :readonly="attrs._readonly ?? false"
    :list-style="attrs.style"
    :class="attrs.class"
    :tabindex="attrs.tabindex"
    :aria-label="attrs.ariaLabel"
    :aria-labelledby="attrs.ariaLabelledby"
    :options="attrs.options"
    :option-label="attrs.optionLabel ?? 'label'"
    :option-value="attrs.optionValue ?? 'value'"
    :filter="attrs.filter ?? false"
    @change="handleChange"
  />
</template>
