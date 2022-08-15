<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context

const hasLeftIcon = () => {
  return context?.iconLeft && context?.iconLeft.length > 0
}

const hasRightIcon = () => {
  return context?.iconRight && context?.iconRight.length > 0
}

const spanClass = () => {
  let result = ''
  if (hasLeftIcon())
    result = `${result}p-input-icon-left `
  if (hasRightIcon())
    result = `${result}p-input-icon-right `
  return result
}

function handleBlur(e: any) {
  context?.handlers.blur(e.target.value)
}

function handleInput(e: any) {
  context?.node.input(e.target.value)
}
</script>

<template>
  <span :class="spanClass()">
    <i v-if="hasLeftIcon()" :class="context.iconLeft" />

    <InputText
      v-model="context._value"
      :id="context.id"
      :name="context.name"
      :class="context.attrs.class"
      :placeholder="context.attrs.placeholder"
      @input="handleInput"
      @blur="handleBlur"
    />
    <i v-if="hasRightIcon" :class="context.iconRight" />
  </span>
</template>
