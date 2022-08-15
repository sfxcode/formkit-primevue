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
  <Chips
    v-model="context._value"
    :id="context.id"
    :name="context.name"
    :class="context.attrs.class"
    :allow-duplicate="context.attrs.allowDuplicate ?? true"
    :add-on-blur="context.attrs.addOnBlur ?? false"
    :max="context.attrs.max ?? undefined"
    @add="handleInput"
    @remove="handleInput"
  />
</template>
