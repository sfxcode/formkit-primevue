<script setup lang='ts'>
import type { PropType } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'

import type { SliderProps } from 'primevue/slider'
import { useFormKitInput } from '../composables'

export interface FormKitPrimeSliderProps {
  pt?: SliderProps['pt']
  ptOptions?: SliderProps['ptOptions']
  unstyled?: SliderProps['unstyled']
  min?: SliderProps['min']
  max?: SliderProps['max']
  step?: SliderProps['step']
  range?: SliderProps['range']
  orientation?: SliderProps['orientation']

}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeSliderProps>,
    required: true,
  },
})

const { styleClass, handleBlur } = useFormKitInput(props.context)

function handleInput(e: any) {
  props.context?.node.input(e)
  props.context?.handlers.blur(e)
}
</script>

<template>
  <div class="p-formkit">
    <Slider
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
      :range="context.range ?? false"
      :orientation="context.orientation ?? 'horizontal'"
      :pt="context.pt"
      :pt-options="context.ptOptions"
      :unstyled="context.unstyled ?? false"
      @change="handleInput"
      @blur="handleBlur"
    />
  </div>
</template>
