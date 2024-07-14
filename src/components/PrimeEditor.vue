<script setup lang="ts">
import type { PropType } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'

import type { EditorProps, EditorSelectionChangeEvent } from 'primevue/editor'
import { useFormKitInput } from '../composables'

export interface FormKitPrimeEditorProps {
  placeholder?: EditorProps['placeholder']
  formats?: EditorProps['formats']
  modules?: EditorProps['modules']
  pt?: EditorProps['pt']
  ptOptions?: EditorProps['ptOptions']
  unstyled?: EditorProps['unstyled']
  wrapperClass?: string
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeEditorProps>,
    required: true,
  },
})

const { styleClass, wrapperClass, handleInput } = useFormKitInput(props.context)

function handleSelection(e: EditorSelectionChangeEvent) {
  if (e.range === null)
    props.context?.handlers.blur(e.htmlValue)
}
</script>

<template>
  <div :class="wrapperClass">
    <Editor
      :id="context.id"
      v-model="context._value"
      v-bind="context?.attrs"
      :disabled="!!context?.disabled"
      :readonly="context?.attrs.readonly ?? false"
      :editor-style="context?.attrs.style"
      :class="styleClass"
      :tabindex="context?.attrs.tabindex"
      :aria-label="context?.attrs.ariaLabel"
      :aria-labelledby="context?.attrs.ariaLabelledby"
      :placeholder="context.placeholder"
      :formats="context.formats"
      :modules="context.modules"
      :pt="context.pt"
      :pt-options="context.ptOptions"
      :unstyled="context.unstyled ?? false"
      @text-change="handleInput"
      @selection-change="handleSelection"
    />
  </div>
</template>
