<script setup lang='ts'>
import { type PropType, computed } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'
import type { ChipsProps } from 'primevue/chips'

export interface FormKitPrimeChipsProps {
  allowDuplicate?: ChipsProps['allowDuplicate']
  addOnBlur?: ChipsProps['addOnBlur']
  max?: ChipsProps['max']
  placeholder?: ChipsProps['placeholder']
  separator?: ChipsProps['separator']
  pt?: ChipsProps['pt']
  ptOptions?: ChipsProps['ptOptions']
  unstyled?: ChipsProps['unstyled']
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeChipsProps>,
    required: true,
  },
})

function handleInput(_: any) {
  props.context?.node.input(props.context?._value)
}
const styleClass = computed(() => (props.context?.state.validationVisible && !props.context?.state.valid) ? `${props.context?.attrs?.class} p-invalid` : props.context?.attrs?.class)
</script>

<template>
  <div class="p-formkit">
    <Chips
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
