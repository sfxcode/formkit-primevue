<script setup lang='ts'>
import type { PropType } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'

import type { RadioButtonProps } from 'primevue/radiobutton'
import { useFormKitInput } from '../composables'

export interface FormKitPrimeRadioButtonProps {
  pt?: RadioButtonProps['pt']
  ptOptions?: RadioButtonProps['ptOptions']
  unstyled?: RadioButtonProps['unstyled']
  options?: { label: string, value: any }[]
  optionClass?: string
  labelClass?: string
  wrapperClass?: string
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeRadioButtonProps>,
    required: true,
  },
})

const { styleClass, wrapperClass, handleChange, handleBlur } = useFormKitInput(props.context)
</script>

<template>
  <div :class="wrapperClass">
    <div v-for="option in context.options" :key="option.value" :class="context.optionClass">
      <RadioButton
        :id="context.id"
        v-model="context._value"
        v-bind="context?.attrs"
        :disabled="!!context?.disabled"
        :readonly="context?.attrs.readonly ?? false"
        :name="context?.attrs.name"
        :value="option.value"
        :input-style="context?.attrs.style"
        :input-class="styleClass"
        :pt="context.pt"
        :pt-options="context.ptOptions"
        :unstyled="context.unstyled ?? false"
        @click="handleChange"
        @change="handleChange"
        @blur="handleBlur"
      />
      <label :for="option.value" :class="context.labelClass" class="p-formkit-radio-label">{{ option.label }}</label>
    </div>
  </div>
</template>
