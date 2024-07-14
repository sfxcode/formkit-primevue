<script setup lang='ts'>
import type { PropType } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'

import type { TreeSelectProps } from 'primevue/treeselect'
import { useFormKitInput } from '../composables'

export interface FormKitPrimeTreeSelectProps {
  options?: TreeSelectProps['options']
  placeholder?: TreeSelectProps['placeholder']
  selectionMode?: TreeSelectProps['selectionMode']
  pt?: TreeSelectProps['pt']
  ptOptions?: TreeSelectProps['ptOptions']
  unstyled?: TreeSelectProps['unstyled']
  emptyMessage?: TreeSelectProps['emptyMessage']
  display?: TreeSelectProps['display']
  metaKeySelection?: TreeSelectProps['metaKeySelection']
  appendTo?: TreeSelectProps['appendTo']
  scrollHeight?: TreeSelectProps['scrollHeight']
  panelClass?: TreeSelectProps['panelClass']
  variant?: TreeSelectProps['variant']
  wrapperClass?: string
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeTreeSelectProps>,
    required: true,
  },
})

const { styleClass, wrapperClass, handleInput, handleBlur } = useFormKitInput(props.context)
</script>

<template>
  <div :class="wrapperClass">
    <TreeSelect
      v-model="context._value"
      v-bind="context?.attrs"
      :input-id="context.id"
      :disabled="!!context?.disabled"
      :readonly="context?.attrs.readonly ?? false"
      :input-style="context?.attrs.style"
      :input-class="styleClass"
      :tabindex="context?.attrs.tabindex"
      :aria-label="context?.attrs.ariaLabel"
      :aria-labelledby="context?.attrs.ariaLabelledby"
      :options="context?.options"
      :placeholder="context.placeholder"
      :selection-mode="context.selectionMode"
      :pt="context.pt"
      :empty-message="context.emptyMessage"
      :display="context.display"
      :meta-key-selection="context.metaKeySelection"
      :append-to="context.appendTo"
      :scroll-height="context.scrollHeight"
      :panel-class="context.panelClass"
      :variant="context.variant"
      :pt-options="context.ptOptions"
      :unstyled="context.unstyled ?? false"
      @change="handleInput"
      @blur="handleBlur"
    />
  </div>
</template>
