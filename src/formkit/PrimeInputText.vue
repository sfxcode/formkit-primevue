<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context
const attrs = context?.attrs

function hasLeftIcon() {
  return context?.iconLeft && context?.iconLeft.length > 0
}

function hasRightIcon() {
  return context?.iconRight && context?.iconRight.length > 0
}

function spanClass() {
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

const styleClass = computed(() => (context?.state.validationVisible && !context?.state.valid) ? `${attrs?.class} p-invalid` : attrs?.class)
</script>

<template>
  <div>
    <span :class="spanClass()">
      <i v-if="hasLeftIcon()" :class="context.iconLeft" />

      <InputText
        :id="context.id"
        v-model="context._value"
        :disabled="attrs._disabled ?? false"
        :readonly="attrs._readonly ?? false"
        :style="attrs.style"
        :class="styleClass"
        :tabindex="attrs.tabindex"
        :aria-label="attrs.ariaLabel"
        :aria-labelledby="attrs.ariaLabelledby"
        :placeholder="attrs.placeholder"
        :pt="attrs.pt"
        :pt-options="attrs.ptOptions"
        :unstyled="attrs.unstyled ?? false"
        @input="handleInput"
        @blur="handleBlur"
      />
      <i v-if="hasRightIcon" :class="context.iconRight" />
    </span>
  </div>
</template>
