<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

function handleInput(e: any) {
  props.context?.node.input(e.value)
}
</script>

<template>
  <Dropdown
    :id="props.context.id" v-model="props.context._value" :options="props.context?.attrs?.options"
    option-label="label"
    option-value="value" :placeholder="props.context.attrs.placeholder" :filter="props.context.attrs.filter ?? false"
    :show-clear="props.context.attrs.showClear ?? false" :class="props.context.attrs.class"
    @change="handleInput"
  />
</template>
