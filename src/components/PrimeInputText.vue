<script setup lang='ts'>
import type { PropType } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'

import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import type { InputTextProps } from 'primevue/inputtext'
import { useFormKitInput, useFormKitSection } from '../composables'

export interface FormKitPrimeInputTextProps {
  pt?: InputTextProps['pt']
  ptOptions?: InputTextProps['ptOptions']
  unstyled?: InputTextProps['unstyled']
  placeholder?: InputTextProps['placeholder']
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeInputTextProps>,
    required: true,
  },
})

const { styleClass, handleInput, handleBlur } = useFormKitInput(props.context)
const { hasPrefixIcon, hasSuffixIcon } = useFormKitSection(props.context)
</script>

<template>
  <div class="p-formkit">
    <IconField>
      <InputIcon v-if="hasPrefixIcon" :class="context?.iconPrefix" />
      <InputText
        :id="context.id"
        v-model="context._value"
        v-bind="context?.attrs"
        :disabled="!!context?.disabled"
        :readonly="context?.attrs.readonly ?? false"
        :style="context?.attrs.style"
        :class="styleClass"
        :tabindex="context?.attrs.tabindex"
        :aria-label="context?.attrs.ariaLabel"
        :aria-labelledby="context?.attrs.ariaLabelledby"
        :placeholder="context.placeholder"
        :pt="context.pt"
        :pt-options="context.ptOptions"
        :unstyled="context.unstyled ?? false"
        @input="handleInput"
        @blur="handleBlur"
      />
      <InputIcon v-if="hasSuffixIcon" :class="context?.iconSuffix" />
    </IconField>
  </div>
</template>
