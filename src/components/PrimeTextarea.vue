<script setup lang='ts'>
import type { PropType } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'

import type { TextareaProps } from 'primevue/textarea'
import { useFormKitInput } from '../composables'

export interface FormKitPrimeTextareaProps {
  pt?: TextareaProps['pt']
  ptOptions?: TextareaProps['ptOptions']
  unstyled?: TextareaProps['unstyled']
  autoResize?: TextareaProps['autoResize']
  rows?: TextareaProps['rows']
  placeholder?: TextareaProps['placeholder']
  wrapperClass?: string
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeTextareaProps>,
    required: true,
  },
})

const { styleClass, wrapperClass, handleInput, handleBlur } = useFormKitInput(props.context)
</script>

<template>
  <div :class="wrapperClass">
    <Textarea
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
      :placeholder="context.placeholder"
      :rows="context.rows ?? 3"
      :auto-resize="context.autoResize ?? false"
      :pt="context.pt"
      :pt-options="context.ptOptions"
      :unstyled="context.unstyled ?? false"
      @input="handleInput"
      @blur="handleBlur"
    />
  </div>
</template>
