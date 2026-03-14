<script setup lang='ts'>
import type { FormKitFrameworkContext } from '@formkit/core'
import type { RadioButtonProps } from 'primevue/radiobutton'

import type { PropType } from 'vue'
import { computed } from 'vue'
import { useFormKitInput } from '../composables'

export interface FormKitPrimeRadioButtonProps {
  pt?: RadioButtonProps['pt']
  ptOptions?: RadioButtonProps['ptOptions']
  unstyled?: RadioButtonProps['unstyled']
  size?: RadioButtonProps['size']
  options?: { label: string, value: any }[]
  optionsClass?: string
  optionClass?: string
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeRadioButtonProps>,
    required: true,
  },
})

const { unstyled, isInvalid, handleChange, handleBlur, modelValue } = useFormKitInput(props.context)

const optionsClass = computed(() => props.context?.optionsClass ?? '')
const optionClass = computed(() => props.context?.optionClass ?? '')
const labelClass = computed(() => props.context?.labelClass ?? '')
</script>

<template>
  <div class="p-formkit p-formkit-options" :class="optionsClass">
    <div v-for="option in context.options" :key="option.value" class="p-formkit-option" :class="optionClass">
      <RadioButton
        :id="context.id"
        v-model="modelValue"
        v-bind="context?.attrs"
        :disabled="!!context?.disabled"
        :readonly="context?.attrs.readonly ?? false"
        :name="context?.attrs.name"
        :value="option.value"
        :input-style="context?.attrs.style"
        :input-class="context?.attrs?.class"
        :invalid="isInvalid"
        :size="context?.size ?? undefined"
        :pt="context.pt"
        :pt-options="context.ptOptions"
        :unstyled="unstyled"
        @click="handleChange"
        @change="handleChange"
        @blur="handleBlur"
      />
      <label :for="option.value" :class="labelClass">{{ option.label }}</label>
    </div>
  </div>
</template>
