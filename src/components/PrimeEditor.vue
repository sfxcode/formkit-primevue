<script setup lang='ts'>
import { computed } from 'vue'

import type { EditorSelectionChangeEvent } from 'primevue/editor'
import { type PropType, computed } from 'vue';
import { type FormKitFrameworkContext } from '@formkit/core';
import { type EditorProps } from 'primevue/editor'

export type FormKitPrimeEditorProps = {
  placeholder?: EditorProps['placeholder'];
  formats?: EditorProps['formats'];
  modules?: EditorProps['modules'];
  pt?: EditorProps['pt'];
  ptOptions?: EditorProps['ptOptions'];
  unstyled?: EditorProps['unstyled'];
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeEditorProps>,
    required: true,
  },
})

const context = props.context
const attrs = computed(() => context?.attrs)

function handleInput(e: any) {
  context?.node.input(e.htmlValue)
}

function handleSelection(e: EditorSelectionChangeEvent) {
  if (e.range === null)
    context?.handlers.blur(e.htmlValue)
}

const styleClass = computed(() => (context?.state.validationVisible && !context?.state.valid) ? `${attrs.value?.class} p-invalid` : attrs.value?.class)
</script>

<template>
  <div class="p-formkit">
    <Editor
      :id="context.id"
      v-model="context._value"
      :disabled="!!context?.disabled"
      :readonly="attrs._readonly ?? false"
      :editor-style="attrs.style"
      :class="styleClass"
      :tabindex="attrs.tabindex"
      :aria-label="attrs.ariaLabel"
      :aria-labelledby="attrs.ariaLabelledby"
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
