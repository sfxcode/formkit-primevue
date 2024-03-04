<script setup lang='ts'>
import { type PropType, computed } from 'vue';
import { type FormKitFrameworkContext } from '@formkit/core';
import { type TextareaProps } from 'primevue/textarea'

export type FormKitPrimeTextareaProps = {
  pt?: TextareaProps['pt'];
  ptOptions?: TextareaProps['ptOptions'];
  unstyled?: TextareaProps['unstyled'];
  autoResize?: TextareaProps['autoResize'];
  rows?: TextareaProps['rows'];
  placeholder?: TextareaProps['placeholder'];
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeTextareaProps>,
    required: true,
  },
})

const context = props.context
const attrs = computed(() => context?.attrs)

function handleBlur(e: Event) {
  context?.handlers.blur(e)
}

function handleInput(e: any) {
  context?.node.input(e.target.value)
}
const styleClass = computed(() => (context?.state.validationVisible && !context?.state.valid) ? `${attrs.value?.class} p-invalid` : attrs.value?.class)
</script>

<template>
  <div class="p-formkit">
    <Textarea
      :id="context.id"
      v-model="context._value"
      :disabled="!!context?.disabled"
      :readonly="attrs._readonly ?? false"
      :style="attrs.style"
      :class="styleClass"
      :tabindex="attrs.tabindex"
      :aria-label="attrs.ariaLabel"
      :aria-labelledby="attrs.ariaLabelledby"
      :placeholder="context.placeholder"
      :rows="context.rows ?? 3"
      :auto-resize="attrs.autoResize ?? false"
      :pt="context.pt"
      :pt-options="context.ptOptions"
      :unstyled="context.unstyled ?? false"
      @input="handleInput"
      @blur="handleBlur"
    />
  </div>
</template>
