<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context

function handleChange(e: any) {
  context?.node.input(props.context?._value)
}
</script>

<template>
  <SelectButton
    :id="context.id"
    v-model="context._value"
    :input-class="context.attrs.inputClass"
    :input-style="context.attrs.inputStyle"
    :options="context?.attrs?.options"
    :option-label="context?.attrs?.optionLabel ?? 'label'"
    :option-value="context?.attrs?.optionValue ?? 'value'"
    :multiple="context.attrs.multiple ?? false"
    @change="handleChange"
  />
</template>
