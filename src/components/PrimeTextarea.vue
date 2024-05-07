<script setup lang='ts'>
import { type PropType, computed } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'
import type { TextareaProps } from 'primevue/textarea'

export interface FormKitPrimeTextareaProps {
  pt?: TextareaProps['pt']
  ptOptions?: TextareaProps['ptOptions']
  unstyled?: TextareaProps['unstyled']
  autoResize?: TextareaProps['autoResize']
  rows?: TextareaProps['rows']
  placeholder?: TextareaProps['placeholder']
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeTextareaProps>,
    required: true,
  },
})

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
