<script setup lang='ts'>
import type { FormKitFrameworkContext } from '@formkit/core'
import type { SelectButtonProps } from 'primevue/selectbutton'

import type { PropType } from 'vue'
import { useFormKitInput } from '../composables'

export interface FormKitPrimeSelectButtonProps {
  pt?: SelectButtonProps['pt']
  ptOptions?: SelectButtonProps['ptOptions']
  unstyled?: SelectButtonProps['unstyled']
  optionLabel?: SelectButtonProps['optionLabel']
  optionValue?: SelectButtonProps['optionValue']
  optionDisabled?: SelectButtonProps['optionDisabled']
  multiple?: SelectButtonProps['multiple']
  dataKey?: SelectButtonProps['dataKey']
  options?: SelectButtonProps['options']

}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeSelectButtonProps>,
    required: true,
  },
})

const { validSlotNames, unstyled, isInvalid, handleChange, handleBlur } = useFormKitInput(props.context)
</script>

<template>
  <div class="p-formkit">
    <SelectButton
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
      :options="context.options"
      :option-label="context.optionLabel"
      :option-value="context.optionValue"
      :option-disabled="context.optionDisabled"
      :multiple="context.multiple ?? false"
      :data-key="context.dataKey"
      :pt="context.pt"
      :pt-options="context.ptOptions"
      :unstyled="unstyled"
      @change="handleChange"
      @blur="handleBlur"
    >
      <template v-for="slotName in validSlotNames" :key="slotName" #[slotName]="slotProps">
        <component :is="context?.slots[slotName]" v-bind="{ ...context, ...slotProps }" />
      </template>
    </SelectButton>
  </div>
</template>
