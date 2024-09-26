<script setup lang='ts'>
import type { FormKitFrameworkContext } from '@formkit/core'
import type { InputMaskProps } from 'primevue/inputmask'

import type { PropType } from 'vue'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import { useFormKitInput, useFormKitSection } from '../composables'

export interface FormKitPrimeInputMaskProps {
  mask?: InputMaskProps['mask']
  slotChar?: InputMaskProps['slotChar']
  autoClear?: InputMaskProps['autoClear']
  unmask?: InputMaskProps['unmask']
  pt?: InputMaskProps['pt']
  ptOptions?: InputMaskProps['ptOptions']
  unstyled?: InputMaskProps['unstyled']
  invalid?: InputMaskProps['invalid']
  variant?: InputMaskProps['variant']
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeInputMaskProps>,
    required: true,
  },
})

const { unstyled, isInvalid, handleInput, handleBlur } = useFormKitInput(props.context)
const { hasPrefixIcon, hasSuffixIcon } = useFormKitSection(props.context)
</script>

<template>
  <div class="p-formkit">
    <IconField v-if="hasPrefixIcon || hasSuffixIcon">
      <InputIcon v-if="hasPrefixIcon" :class="context?.iconPrefix" />
      <InputMask
        :id="context.id"
        v-model="context._value"
        v-bind="context?.attrs"
        :disabled="!!context?.disabled"
        :readonly="context?.attrs.readonly ?? false"
        :class="context?.attrs?.class"
        :invalid="isInvalid"
        :tabindex="context?.attrs.tabindex"
        :aria-label="context?.attrs.ariaLabel"
        :aria-labelledby="context?.attrs.ariaLabelledby"
        :mask="context.mask ?? undefined"
        :slot-char="context.slotChar ?? '_'"
        :auto-clear="context.autoClear ?? true"
        :unmask="context.unmask ?? false"
        :pt="context.pt"
        :variant="context.variant"
        :pt-options="context.ptOptions"
        :unstyled="unstyled"
        @update:model-value="handleInput"
        @blur="handleBlur"
      />
      <InputIcon v-if="hasSuffixIcon" :class="context?.iconSuffix" />
    </IconField>
    <InputMask
      v-if="!hasPrefixIcon && !hasSuffixIcon"
      :id="context.id"
      v-model="context._value"
      v-bind="context?.attrs"
      :disabled="!!context?.disabled"
      :readonly="context?.attrs.readonly ?? false"
      :class="context?.attrs?.class"
      :invalid="isInvalid"
      :tabindex="context?.attrs.tabindex"
      :aria-label="context?.attrs.ariaLabel"
      :aria-labelledby="context?.attrs.ariaLabelledby"
      :mask="context.mask ?? undefined"
      :slot-char="context.slotChar ?? '_'"
      :auto-clear="context.autoClear ?? true"
      :unmask="context.unmask ?? false"
      :pt="context.pt"
      :variant="context.variant"
      :pt-options="context.ptOptions"
      :unstyled="unstyled"
      @update:model-value="handleInput"
      @blur="handleBlur"
    />
  </div>
</template>
