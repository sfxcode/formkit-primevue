<script setup lang='ts'>
import { type PropType, computed } from 'vue';
import { type FormKitFrameworkContext } from '@formkit/core';
import { ChipsProps } from 'primevue/chips'

export type FormKitPrimeChipsProps = {
  allowDuplicate?: ChipsProps['allowDuplicate'];
  addOnBlur?: ChipsProps['addOnBlur'];
  max?: ChipsProps['max'];
  placeholder?: ChipsProps['placeholder'];
  separator?: ChipsProps['separator'];
  pt?: ChipsProps['pt'];
  ptOptions?: ChipsProps['ptOptions'];
  unstyled?: ChipsProps['unstyled'];
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeChipsProps>,
    required: true,
  },
})

const context = props.context

function handleInput(e: any) {
  context?.node.input(props.context?._value)
}
const styleClass = computed(() => (context?.state.validationVisible && !context?.state.valid) ? `${context?.attrs?.class} p-invalid` : context?.attrs?.class)
</script>

<template>
  <div class="p-formkit">
    <Chips
      v-model="context._value"
      v-bind="attrs"
      :input-id="context.id"
      :disabled="!!context?.disabled"
      :readonly="context?.attrs._readonly ?? false"
      :input-style="context?.attrs.style"
      :input-class="styleClass"
      :tabindex="context?.attrs.tabindex"
      :aria-label="context?.attrs.ariaLabel"
      :aria-labelledby="context?.attrs.ariaLabelledby"
      :allow-duplicate="context.allowDuplicate ?? true"
      :add-on-blur="context.addOnBlur ?? false"
      :max="context.max ?? undefined"
      :placeholder="context.placeholder"
      :separator="context.separator"
      :pt="context.pt"
      :pt-options="context.ptOptions"
      :unstyled="context.unstyled ?? false"
      @add="handleInput"
      @remove="handleInput"
    />
  </div>
</template>
