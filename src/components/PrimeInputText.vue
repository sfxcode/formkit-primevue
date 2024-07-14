<script setup lang='ts'>
import { type PropType, computed } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'

import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import type { InputTextProps } from 'primevue/inputtext'
import { useFormKitInput } from '../composables'

export interface FormKitPrimeInputTextProps {
  pt?: InputTextProps['pt']
  ptOptions?: InputTextProps['ptOptions']
  unstyled?: InputTextProps['unstyled']
  placeholder?: InputTextProps['placeholder']
  icon?: string
  wrapperClass?: string
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeInputTextProps>,
    required: true,
  },
})

const { styleClass, wrapperClass, handleInput, handleBlur } = useFormKitInput(props.context)

const hasIcon = computed(() => {
  if (props.context?.icon && props.context?.icon.length > 0)
    return true

  return props.context?.attrs?.icon && props.context?.attrs?.icon.length > 0
})

const icon = computed(() => {
  return props.context?.icon ?? props.context?.attrs?.icon
})

const iconPosition = computed(() => {
  return props.context?.attrs?.iconPosition ?? undefined
})
</script>

<template>
  <div :class="wrapperClass">
    <IconField v-if="hasIcon" :icon-position="iconPosition">
      <InputIcon :class="icon" />
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
    </IconField>
    <InputText
      v-else
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
  </div>
</template>
