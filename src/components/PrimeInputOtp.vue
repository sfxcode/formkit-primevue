<script setup lang='ts'>
import type { FormKitFrameworkContext } from '@formkit/core'
import type { InputOtpProps } from 'primevue/inputotp'

import type { PropType } from 'vue'
import { useFormKitInput } from '../composables'

export interface FormKitPrimeInputOtpProps {
  unstyled?: InputOtpProps['unstyled']
  ptOptions?: InputOtpProps['ptOptions']
  pt?: InputOtpProps['pt']
  length?: InputOtpProps['length']
  variant?: InputOtpProps['variant']
  mask?: InputOtpProps['mask']
  integerOnly?: InputOtpProps['integerOnly']
  size?: InputOtpProps['size']
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeInputOtpProps>,
    required: true,
  },
})

const { validSlotNames, unstyled, isInvalid, handleBlur, handleInput } = useFormKitInput(props.context)
</script>

<template>
  <div class="p-formkit">
    <InputOtp
      :id="context.id"
      v-model="context._value"
      v-bind="context?.attrs"
      :disabled="!!context?.disabled"
      :readonly="context?.attrs.readonly ?? false"
      :style="context?.attrs.style"
      :class="context?.attrs?.class"
      :invalid="isInvalid"
      :tabindex="context?.attrs.tabindex"
      :aria-label="context?.attrs.ariaLabel"
      :aria-labelledby="context?.attrs.ariaLabelledby"
      :size="context?.size ?? undefined"
      :length="context.length"
      :variant="context.variant"
      :mask="context.mask"
      :integer-only="context.integerOnly"
      :pt="context.pt"
      :pt-options="context.ptOptions"
      :unstyled="unstyled"
      @change="handleInput"
      @blur="handleBlur"
    >
      <template v-for="slotName in validSlotNames" :key="slotName" #[slotName]="slotProps">
        <component :is="context?.slots[slotName]" v-bind="{ ...context, ...slotProps }" />
      </template>
    </InputOtp>
  </div>
</template>
