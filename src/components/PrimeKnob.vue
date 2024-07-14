<script setup lang='ts'>
import type { PropType } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'

import type { KnobProps } from 'primevue/knob'
import { useFormKitInput } from '../composables'

export interface FormKitPrimeKnobProps {
  pt?: KnobProps['pt']
  ptOptions?: KnobProps['ptOptions']
  unstyled?: KnobProps['unstyled']
  min?: KnobProps['min']
  max?: KnobProps['max']
  step?: KnobProps['step']
  size?: KnobProps['size']
  strokeWidth?: KnobProps['strokeWidth']
  showValue?: KnobProps['showValue']
  valueColor?: KnobProps['valueColor']
  rangeColor?: KnobProps['rangeColor']
  textColor?: KnobProps['textColor']
  valueTemplate?: KnobProps['valueTemplate']
  wrapperClass?: string
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeKnobProps>,
    required: true,
  },
})

const { styleClass, wrapperClass } = useFormKitInput(props.context)

function handleInput(e: any) {
  props.context?.node.input(e)
  props.context?.handlers.blur(e)
}

function updateValue(n: number) {
  props.context?.node.input(n)
}
</script>

<template>
  <div :class="wrapperClass">
    <Knob
      :id="context.id"
      v-model="context._value"
      v-bind="context?.attrs"
      :disabled="!!context?.disabled"
      :readonly="context?.attrs.readonly ?? false"
      :style="context?.attrs.style"
      :class="styleClass"
      :tabindex="context?.attrs.tabindex"
      :aria-label="context?.attrs.ariaLabel"
      :aria-labelledby="context?.attrs.ariaLabelledby"
      :min="context.min ?? 0"
      :max="context.max ?? 100"
      :step="context.step ?? undefined"
      :size="context.size ?? 100"
      :stroke-width="context.strokeWidth ?? 14"
      :show-value="context.showValue ?? true"
      :value-color="context.valueColor ?? undefined"
      :range-color="context.rangeColor ?? undefined"
      :text-color="context.textColor ?? undefined"
      :value-template="context.valueTemplate ?? undefined"
      :pt="context.pt"
      :pt-options="context.ptOptions"
      :unstyled="context.unstyled ?? false"
      @change="handleInput"
      @update:model-value="updateValue"
    />
  </div>
</template>
