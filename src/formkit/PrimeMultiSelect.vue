<script setup lang='ts'>
import consola from 'consola'

const props = defineProps({
  context: Object,
})

const context = props.context

function handleInput(e: any) {
  context?.node.input(props.context?._value)
}
</script>

<template>
  <MultiSelect
    v-model="context._value"
    :id="context.id"
    :name="context.name"
    :class="context.attrs.class"
    :options="context?.attrs?.options"
    option-label="label"
    option-value="value"
    :placeholder="context.attrs.placeholder"
    :filter="context.attrs.filter ?? false"
    @change="handleInput"
  />
</template>
