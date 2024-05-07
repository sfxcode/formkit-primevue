<script setup lang='ts'>
import { type PropType, computed } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'
import type { TreeSelectProps } from 'primevue/treeselect'

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
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeTreeSelectProps>,
    required: true,
  },
})

function handleInput(_: any) {
  props.context?.node.input(props.context?._value)
}

function handleBlur(e: Event) {
  props.context?.handlers.blur(e)
}

const styleClass = computed(() => (props.context?.state.validationVisible && !props.context?.state.valid) ? `${props.context?.attrs?.class} p-invalid` : props.context?.attrs?.class)
</script>

<template>
  <div class="p-formkit">
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
