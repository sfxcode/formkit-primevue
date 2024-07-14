<script setup lang='ts'>
import type { PropType } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'

import type { CheckboxProps } from 'primevue/checkbox'
import { useFormKitInput } from '../composables'

export interface FormKitPrimeCheckboxProps {
  binary?: CheckboxProps['binary']
  trueValue?: CheckboxProps['trueValue']
  falseValue?: CheckboxProps['falseValue']
  pt?: CheckboxProps['pt']
  ptOptions?: CheckboxProps['ptOptions']
  unstyled?: CheckboxProps['unstyled']
  indeterminate?: CheckboxProps['indeterminate']
  variant?: CheckboxProps['variant']
  labelLeft?: string
  labelRight?: string
  wrapperClass?: string
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeCheckboxProps>,
    required: true,
  },
})

const { styleClass, wrapperClass, handleInput, handleBlur } = useFormKitInput(props.context)
</script>

<template>
  <div :class="wrapperClass">
    <span v-if="context.labelLeft" class="formkit-prime-left">{{ context.labelLeft }}</span>
    <Checkbox
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
      :indeterminate="context.indeterminate ?? null"
      :binary="context.binary ?? true"
      :variant="context.variant ?? 'outlined'"
      :true-value="context.trueValue ?? undefined"
      :false-value="context.falseValue ?? undefined"
      :pt="context.pt"
      :pt-options="context.ptOptions"
      :unstyled="context.unstyled ?? false"
      @change="handleInput"
      @blur="handleBlur"
    />
    <span v-if="context.labelRight" class="formkit-prime-right">{{ context.labelRight }}</span>
  </div>
</template>
