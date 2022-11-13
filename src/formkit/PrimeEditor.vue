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
</script>

<template>
  <Editor
    :id="context.id"
    v-model="context._value"
    :disabled="attrs._disabled ?? false"
    :readonly="attrs._readonly ?? false"
    :editor-style="attrs.style"
    :class="attrs.class"
    :placeholder="attrs.placeholder"
    :formats="attrs.formats"
    :modules="attrs.modules"
    @text-change="handleInput"
    @selection-change="handleSelection"
  />
</template>
