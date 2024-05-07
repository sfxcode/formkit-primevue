<script setup lang='ts'>
import { type PropType, computed } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'
import type { TriStateCheckboxProps } from 'primevue/tristatecheckbox'

export interface FormKitPrimeTriStateCheckboxProps {
  pt?: TriStateCheckboxProps['pt']
  ptOptions?: TriStateCheckboxProps['ptOptions']
  unstyled?: TriStateCheckboxProps['unstyled']
  variant?: TriStateCheckboxProps['variant']
  labelLeft?: string
  labelRight?: string
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeTriStateCheckboxProps>,
    required: true,
  },
})

function handleChange(_: any) {
  props.context?.node.input(props.context?._value)
}

function handleBlur(e: Event) {
  props.context?.handlers.blur(e)
}

const styleClass = computed(() => (props.context?.state.validationVisible && !props.context?.state.valid) ? `${props.context?.attrs?.class} p-invalid` : props.context?.attrs?.class)
</script>

<template>
  <div class="p-formkit">
    <span v-if="context.attrs.labelLeft" class="formkit-prime-left">{{ context.labelLeft }}</span>
    <TriStateCheckbox
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
      :pt="context.pt"
      :pt-options="context.ptOptions"
      :unstyled="context.unstyled ?? false"
      :variant="context.variant"
      @change="handleChange"
      @blur="handleBlur"
    />
    <span v-if="context.attrs.labelRight" class="formkit-prime-right">{{ context.labelRight }}</span>
  </div>
</template>
