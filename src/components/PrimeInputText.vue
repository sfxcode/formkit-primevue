<script setup lang='ts'>
import { type PropType, computed } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'
import type { InputTextProps } from 'primevue/inputtext'

export interface FormKitPrimeInputTextProps {
  pt?: InputTextProps['pt']
  ptOptions?: InputTextProps['ptOptions']
  unstyled?: InputTextProps['unstyled']
  placeholder?: InputTextProps['placeholder']
  iconLeft?: string
  iconRight?: string
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeInputTextProps>,
    required: true,
  },
})

function hasLeftIcon() {
  return props.context?.iconLeft && props.context?.iconLeft.length > 0
}

function hasRightIcon() {
  return props.context?.iconRight && props.context?.iconRight.length > 0
}

function spanClass() {
  let result = ''
  if (hasLeftIcon())
    result = `p-formkit-icon ${result}p-input-icon-left `
  if (hasRightIcon())
    result = `p-formkit-icon ${result}p-input-icon-right `
  return result
}

function handleBlur(e: Event) {
  props.context?.handlers.blur(e)
}

function handleInput(e: any) {
  props.context?.node.input(e.target.value)
}

const styleClass = computed(() => (props.context?.state.validationVisible && !props.context?.state.valid) ? `${props.context?.attrs?.class} p-invalid` : props.context?.attrs?.class)
</script>

<template>
  <div class="p-formkit">
    <span :class="spanClass()">
      <i v-if="hasLeftIcon()" :class="context?.iconLeft" />

      <InputText
        :id="context.id"
        :value="context._value"
        v-bind="context.attrs"
        :disabled="!!context?.disabled"
        :readonly="context?.attrs._readonly ?? false"
        :style="context?.attrs.style"
        :class="styleClass"
        :tabindex="context?.attrs.tabindex"
        :aria-label="context?.attrs.ariaLabel"
        :aria-labelledby="context?.attrs.ariaLabelledby"
        :placeholder="context.placeholder"
        :pt="context.pt"
        :pt-options="context.ptOptions"
        :unstyled="context.unstyled ?? false"
        @input="handleInput"
        @blur="handleBlur"
      />
      <i v-if="hasRightIcon()" :class="context?.iconRight" />
    </span>
  </div>
</template>
