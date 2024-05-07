<script setup lang='ts'>
import { type PropType, computed } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'
import type { InputMaskProps } from 'primevue/inputmask'

export interface FormKitPrimeInputMaskProps {
  mask?: InputMaskProps['mask']
  slotChar?: InputMaskProps['slotChar']
  autoClear?: InputMaskProps['autoClear']
  unmask?: InputMaskProps['unmask']
  pt?: InputMaskProps['pt']
  ptOptions?: InputMaskProps['ptOptions']
  unstyled?: InputMaskProps['unstyled']
  invalid?: InputMaskProps['invalid']
  variant?: InputMaskProps['variant']
  iconLeft?: string
  iconRight?: string
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeInputMaskProps>,
    required: true,
  },
})

function handleInput(e: FocusEvent) {
  props.context?.node.input(props.context?._value)
  props.context?.handlers.blur(e)
}

function hasLeftIcon() {
  return props.context?.iconLeft && props.context?.iconLeft.length > 0
}

function hasRightIcon() {
  return props.context?.iconRight && props.context?.iconRight.length > 0
}

function spanClass() {
  let result = ''
  if (hasLeftIcon())
    result = `${result}p-input-icon-left `
  if (hasRightIcon())
    result = `${result}p-input-icon-right `
  return result
}

const styleClass = computed(() => (props.context?.state.validationVisible && !props.context?.state.valid) ? `${props.context?.attrs?.class} p-invalid` : props.context?.attrs?.class)
</script>

<template>
  <div class="p-formkit">
    <span :class="spanClass()">
      <i v-if="hasLeftIcon()" :class="context.iconLeft" />

      <InputMask
        :id="context.id"
        v-model="context._value"
        v-bind="context?.attrs"
        :disabled="!!context?.disabled"
        :readonly="context?.attrs.readonly ?? false"
        :class="styleClass"
        :tabindex="context?.attrs.tabindex"
        :aria-label="context?.attrs.ariaLabel"
        :aria-labelledby="context?.attrs.ariaLabelledby"
        :mask="context.mask ?? undefined"
        :slot-char="context.slotChar ?? '_'"
        :auto-clear="context.autoClear ?? true"
        :unmask="context.unmask ?? false"
        :pt="context.pt"
        :invalid="context.invalid"
        :variant="context.variant"
        :pt-options="context.ptOptions"
        :unstyled="context.unstyled ?? false"
        @blur="handleInput"
      />

      <i v-if="hasRightIcon" :class="context.iconRight" />
    </span>
  </div>
</template>
