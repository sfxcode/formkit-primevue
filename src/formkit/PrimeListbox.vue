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
  <Listbox
    :id="context.id"
    v-model="context._value"
    :name="context.name"
    :class="context.attrs.class"
    :style="context.attrs.style"
    :list-style="context.attrs.listStyle"
    :options="context?.attrs?.options"
    :option-label="context?.attrs?.optionLabel ?? 'label'"
    :option-value="context?.attrs?.optionValue ?? 'value'"
    :filter-placeholder="context.attrs.filterPlaceholder"
    :filter="context.attrs.filter ?? false"
    :multiple="context.attrs.multiple ?? false"
    @change="handleInput"
  />
</template>
