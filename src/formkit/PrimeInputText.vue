<script setup lang='ts'>
import { type PropType, computed } from 'vue';
import { type FormKitFrameworkContext } from '@formkit/core';
import { InputTextProps } from 'primevue/inputtext'

export type FormKitPrimeInputTextProps = {
  pt?: InputTextProps['pt'];
  ptOptions?: InputTextProps['ptOptions'];
  unstyled?: InputTextProps['unstyled'];
  placeholder?: InputTextProps['placeholder'];
  iconLeft?: string;
  iconRight?: string;
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeInputTextProps>,
    required: true,
  },
})

const context = props.context

function hasLeftIcon() {
  return context?.iconLeft && context?.iconLeft.length > 0
}

function hasRightIcon() {
  return context?.iconRight && context?.iconRight.length > 0
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
  context?.handlers.blur(e)
}

function handleInput(e: any) {
  context?.node.input(e.target.value)
}

const styleClass = computed(() => (context?.state.validationVisible && !context?.state.valid) ? `${context?.attrs?.class} p-invalid` : context?.attrs?.class)
</script>

<template>
  <div class="p-formkit">
    <span :class="spanClass()">
      <i v-if="hasLeftIcon()" :class="context?.iconLeft" />

      <InputText
        :id="context.id"
        v-model="context._value"
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
