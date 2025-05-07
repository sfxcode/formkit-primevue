<script setup lang='ts'>
import type { FormKitFrameworkContext } from '@formkit/core'
import type { InputTextProps } from 'primevue/inputtext'

import type { PropType } from 'vue'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import { useFormKitInput, useFormKitSection } from '../composables'

export interface FormKitPrimeInputTextProps {
  pt?: InputTextProps['pt']
  ptOptions?: InputTextProps['ptOptions']
  unstyled?: InputTextProps['unstyled']
  size?: InputTextProps['size']
  inputType?: string | undefined
  placeholder?: string
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeInputTextProps>,
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
      <InputText
        :id="context.id"
        v-model="context._value"
        v-bind="context?.attrs"
        :type="context?.attrs?.inputType ?? 'text'"
        :disabled="!!context?.disabled"
        :readonly="context?.attrs.readonly ?? false"
        :style="context?.attrs?.style"
        :class="context?.attrs?.class"
        :invalid="isInvalid"
        :tabindex="context?.attrs.tabindex"
        :aria-label="context?.attrs.ariaLabel"
        :aria-labelledby="context?.attrs.ariaLabelledby"
        :size="context?.size ?? undefined"
        :placeholder="context.placeholder"
        :pt="context.pt"
        :pt-options="context.ptOptions"
        :unstyled="unstyled"
        @input="handleInput"
        @blur="handleBlur"
      />
      <InputIcon v-if="hasSuffixIcon" :class="context?.iconSuffix" />
    </IconField>
    <InputText
      v-if="!hasPrefixIcon && !hasSuffixIcon"
      :id="context.id"
      v-model="context._value"
      v-bind="context?.attrs"
      :type="context?.inputType ?? 'text'"
      :disabled="!!context?.disabled"
      :readonly="context?.attrs.readonly ?? false"
      :style="context?.attrs.style"
      :class="context?.attrs?.class"
      :invalid="isInvalid"
      :tabindex="context?.attrs.tabindex"
      :aria-label="context?.attrs.ariaLabel"
      :aria-labelledby="context?.attrs.ariaLabelledby"
      :size="context?.size ?? undefined"
      :placeholder="context.placeholder"
      :pt="context.pt"
      :pt-options="context.ptOptions"
      :unstyled="unstyled"
      @input="handleInput"
      @blur="handleBlur"
    />
  </div>
</template>
