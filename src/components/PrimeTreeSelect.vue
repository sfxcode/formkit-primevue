<script setup lang='ts'>
import { type PropType, computed } from 'vue';
import { type FormKitFrameworkContext } from '@formkit/core';
import { type TreeSelectProps } from 'primevue/treeselect'

export type FormKitPrimeTreeSelectProps = {
  options?: TreeSelectProps['options'];
  placeholder?: TreeSelectProps['placeholder'];
  selectionMode?: TreeSelectProps['selectionMode'];
  pt?: TreeSelectProps['pt'];
  ptOptions?: TreeSelectProps['ptOptions'];
  unstyled?: TreeSelectProps['unstyled'];
  emptyMessage?: TreeSelectProps['emptyMessage'];
  display?: TreeSelectProps['display'];
  metaKeySelection?: TreeSelectProps['metaKeySelection'];
  appendTo?: TreeSelectProps['appendTo'];
  scrollHeight?: TreeSelectProps['scrollHeight'];
  panelClass?: TreeSelectProps['panelClass'];
  variant?: TreeSelectProps['variant'];
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeTreeSelectProps>,
    required: true,
  },
})

const context = props.context
const attrs = computed(() => context?.attrs)

function handleInput(e: any) {
  context?.node.input(props.context?._value)
}

function handleBlur(e: Event) {
  context?.handlers.blur(e)
}

const styleClass = computed(() => (context?.state.validationVisible && !context?.state.valid) ? `${attrs.value?.class} p-invalid` : attrs.value?.class)
</script>

<template>
  <div class="p-formkit">
    <TreeSelect
      v-model="context._value"
      v-bind="attrs"
      :input-id="context.id"
      :disabled="!!context?.disabled"
      :readonly="attrs._readonly ?? false"
      :input-style="attrs.style"
      :input-class="styleClass"
      :tabindex="attrs.tabindex"
      :aria-label="attrs.ariaLabel"
      :aria-labelledby="attrs.ariaLabelledby"
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
