<script setup lang="ts">
import { EditorSelectionChangeEvent } from 'primevue/editor'

const props = defineProps({
  context: Object,
})

const context = props.context

function handleInput(e: any) {
  context?.node.input(e.htmlValue)
}

function handleSelection(e: EditorSelectionChangeEvent) {
  if (e.range === null) {
    context?.handlers.blur(e.htmlValue)
  }
}
</script>

<template>
  <Editor
    v-model="context._value"
    :id="context.id"
    :name="context.name"
    :class="context.attrs.class"
    :placeholder="context.attrs.placeholder"
    @text-change="handleInput"
    @selection-change="handleSelection"
  />
</template>
