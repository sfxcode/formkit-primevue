<script setup lang='ts'>
import type { FormKitFrameworkContext } from '@formkit/core'
import type { PasswordProps } from 'primevue/password'

import type { PropType } from 'vue'
import { useFormKitInput } from '../composables'

export interface FormKitPrimePasswordProps {
  mediumRegex?: PasswordProps['mediumRegex']
  strongRegex?: PasswordProps['strongRegex']
  promptLabel?: PasswordProps['promptLabel']
  weakLabel?: PasswordProps['weakLabel']
  mediumLabel?: PasswordProps['mediumLabel']
  strongLabel?: PasswordProps['strongLabel']
  maskIcon?: PasswordProps['maskIcon']
  unmaskIcon?: PasswordProps['unmaskIcon']
  pt?: PasswordProps['pt']
  ptOptions?: PasswordProps['ptOptions']
  unstyled?: PasswordProps['unstyled']
  placeholder?: PasswordProps['placeholder']
  feedback?: PasswordProps['feedback']
  toggleMask?: PasswordProps['toggleMask']
  size?: PasswordProps['size']
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimePasswordProps>,
    required: true,
  },
})

const { validSlotNames, unstyled, isInvalid, handleInput, handleBlur } = useFormKitInput(props.context)
</script>

<template>
  <div class="p-formkit">
    <Password
      v-model="context._value"
      v-bind="context?.attrs"
      :input-id="context.id"
      :disabled="!!context?.disabled"
      :readonly="context?.attrs.readonly ?? false"
      :input-style="context?.attrs.style"
      :input-class="context?.attrs?.class"
      :invalid="isInvalid"
      :tabindex="context?.attrs.tabindex"
      :aria-label="context?.attrs.ariaLabel"
      :aria-labelledby="context?.attrs.ariaLabelledby"
      :size="context?.size ?? undefined"
      :placeholder="context.placeholder"
      :medium-regex="context.mediumRegex ?? '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'"
      :strong-regex="context.strongRegex ?? '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})'"
      :prompt-label="context.promptLabel"
      :weak-label="context.weakLabel"
      :medium-label="context.mediumLabel"
      :strong-label="context.strongLabel"
      :mask-icon="context.maskIcon"
      :unmask-icon="context.unmaskIcon"
      :feedback="context.feedback ?? false"
      :toggle-mask="context.toggleMask ?? false"
      :pt="context.pt"
      :pt-options="context.ptOptions"
      :unstyled="unstyled"
      @input="handleInput"
      @blur="handleBlur"
    >
      <template v-for="slotName in validSlotNames" :key="slotName" #[slotName]="slotProps">
        <component :is="context?.slots[slotName]" v-bind="{ ...context, ...slotProps }" />
      </template>
    </Password>
  </div>
</template>
