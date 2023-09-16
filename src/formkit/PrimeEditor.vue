<script setup lang="ts">
import type { EditorSelectionChangeEvent } from 'primevue/editor'

const props = defineProps({
  context: Object,
})

const context = props.context
const attrs = context?.attrs

function handleInput(e: any) {
  context?.node.input(e.htmlValue)
}

function handleSelection(e: EditorSelectionChangeEvent) {
  if (e.range === null)
    context?.handlers.blur(e.htmlValue)
}

const styleClass = computed(() => (context?.state.validationVisible && !context?.state.valid) ? `${attrs?.class} p-invalid` : attrs?.class)
</script>

<template>
  <div>
    <Editor
      :id="context.id"
      v-model="context._value"
      :disabled="attrs._disabled ?? false"
      :readonly="attrs._readonly ?? false"
      :editor-style="attrs.style"
      :class="styleClass"
      :tabindex="attrs.tabindex"
      :aria-label="attrs.ariaLabel"
      :aria-labelledby="attrs.ariaLabelledby"
      :placeholder="attrs.placeholder"
      :formats="attrs.formats"
      :modules="attrs.modules"
      :pt="attrs.pt"
      :pt-options="attrs.ptOptions"
      :unstyled="attrs.unstyled ?? false"
      @text-change="handleInput"
      @selection-change="handleSelection"
    />
  </div>
</template>
