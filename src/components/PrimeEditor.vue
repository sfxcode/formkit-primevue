<script setup lang="ts">
import type { FormKitFrameworkContext } from '@formkit/core'
import type { EditorProps, EditorSelectionChangeEvent } from 'primevue/editor'

import type { PropType } from 'vue'
import { useFormKitInput } from '../composables'

export interface FormKitPrimeEditorProps {
  placeholder?: EditorProps['placeholder']
  formats?: EditorProps['formats']
  modules?: EditorProps['modules']
  pt?: EditorProps['pt']
  ptOptions?: EditorProps['ptOptions']
  unstyled?: EditorProps['unstyled']
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeEditorProps>,
    required: true,
  },
})

const { unstyled, isInvalid, handleInput } = useFormKitInput(props.context)

function handleSelection(e: EditorSelectionChangeEvent) {
  if (e.range === null)
    props.context?.node.input(props.context?._value)
}
</script>

<template>
  <div class="p-formkit">
    <Editor
      :id="context.id"
      v-model="context._value"
      v-bind="context?.attrs"
      :disabled="!!context?.disabled"
      :readonly="context?.attrs.readonly ?? false"
      :editor-style="context?.attrs.style"
      :class="context?.attrs?.class"
      :invalid="isInvalid"
      :tabindex="context?.attrs.tabindex"
      :aria-label="context?.attrs.ariaLabel"
      :aria-labelledby="context?.attrs.ariaLabelledby"
      :placeholder="context.placeholder"
      :formats="context.formats"
      :modules="context.modules"
      :pt="context.pt"
      :pt-options="context.ptOptions"
      :unstyled="unstyled"
      @text-change="handleInput"
      @selection-change="handleSelection"
    />
  </div>
</template>
