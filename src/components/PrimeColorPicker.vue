<script setup lang='ts'>
import type { FormKitFrameworkContext } from '@formkit/core'
import type { ColorPickerProps } from 'primevue/colorpicker'

import type { PropType } from 'vue'
import { useFormKitInput } from '../composables'

export interface FormKitPrimeColorPickerProps {
  defaultColor?: ColorPickerProps['defaultColor']
  inline?: ColorPickerProps['inline']
  format?: ColorPickerProps['format']
  pt?: ColorPickerProps['pt']
  ptOptions?: ColorPickerProps['ptOptions']
  unstyled?: ColorPickerProps['unstyled']
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeColorPickerProps>,
    required: true,
  },
})

const { unstyled, handleChange } = useFormKitInput(props.context)
</script>

<template>
  <div class="p-formkit">
    <ColorPicker
      v-model="context._value"
      v-bind="context?.attrs"
      :disabled="!!context?.disabled"
      :readonly="context?.attrs.readonly ?? false"
      :style="context?.attrs.style"
      :panel-class="context?.attrs.class"
      :tabindex="context?.attrs.tabindex"
      :aria-label="context?.attrs.ariaLabel"
      :aria-labelledby="context?.attrs.ariaLabelledby"
      :default-color="context.defaultColor ?? 'ff0000'"
      :inline="context.inline ?? false"
      :format="context.format"
      :pt="context.pt"
      :pt-options="context.ptOptions"
      :unstyled="unstyled"
      @change="handleChange"
    />
  </div>
</template>
