<script setup lang="ts">
import type { EditorSelectionChangeEvent } from 'primevue/editor'

const props = defineProps({
  context: Object,
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
      v-bind="attrs"
      :disabled="attrs._disabled ?? !!context?.disabled"
      :readonly="attrs._readonly ?? false"
      :editor-style="attrs.style"
      :class="styleClass"
      @text-change="handleInput"
      @selection-change="handleSelection"
    />
  </div>
</template>
