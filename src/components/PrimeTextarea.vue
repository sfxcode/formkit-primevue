<script setup lang='ts'>
import type { FormKitFrameworkContext } from '@formkit/core'
import type { TextareaProps } from 'primevue/textarea'

import type { PropType } from 'vue'
import { useFormKitInput } from '../composables'

export interface FormKitPrimeTextareaProps {
  pt?: TextareaProps['pt']
  ptOptions?: TextareaProps['ptOptions']
  unstyled?: TextareaProps['unstyled']
  autoResize?: TextareaProps['autoResize']
  size?: TextareaProps['size']
  placeholder?: string
  rows?: number
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeTextareaProps>,
    required: true,
  },
})

const { unstyled, isInvalid, handleInput, handleBlur } = useFormKitInput(props.context)
</script>

<template>
  <div class="p-formkit">
    <Textarea
      :id="context.id"
      v-model="context._value"
      v-bind="context?.attrs"
      :disabled="!!context?.disabled"
      :readonly="context?.attrs.readonly ?? false"
      :style="context?.attrs.style"
      :class="context?.attrs?.class"
      :invalid="isInvalid"
      :tabindex="context?.attrs.tabindex"
      :aria-label="context?.attrs.ariaLabel"
      :aria-labelledby="context?.attrs.ariaLabelledby"
      :size="context?.size ?? undefined"
      :placeholder="context.placeholder"
      :rows="context.rows ?? 3"
      :auto-resize="context.autoResize ?? false"
      :pt="context.pt"
      :pt-options="context.ptOptions"
      :unstyled="unstyled"
      @input="handleInput"
      @blur="handleBlur"
    />
  </div>
</template>
