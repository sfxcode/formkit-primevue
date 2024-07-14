<script setup lang='ts'>
import type { PropType } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'

import type { CascadeSelectProps } from 'primevue/cascadeselect'
import { useFormKitInput } from '../composables'

export interface FormKitPrimeCascadeSelectProps {
  options?: CascadeSelectProps['options']
  optionLabel?: CascadeSelectProps['optionLabel']
  optionValue?: CascadeSelectProps['optionValue']
  optionGroupLabel?: CascadeSelectProps['optionGroupLabel']
  optionGroupChildren?: CascadeSelectProps['optionGroupChildren']
  placeholder?: CascadeSelectProps['placeholder']
  pt?: CascadeSelectProps['pt']
  ptOptions?: CascadeSelectProps['ptOptions']
  unstyled?: CascadeSelectProps['unstyled']
  wrapperClass?: string
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeCascadeSelectProps>,
    required: true,
  },
})

const { styleClass, wrapperClass, handleInput, handleBlur } = useFormKitInput(props.context)
</script>

<template>
  <div :class="wrapperClass">
    <CascadeSelect
      :id="context.id"
      v-model="context._value"
      v-bind="context?.attrs"
      :disabled="!!context?.disabled"
      :readonly="context?.attrs.readonly ?? false"
      :class="styleClass"
      :tabindex="context?.attrs.tabindex"
      :aria-label="context?.attrs.ariaLabel"
      :aria-labelledby="context?.attrs.ariaLabelledby"
      :options="context?.options"
      :option-label="context?.optionLabel"
      :option-value="context.optionValue"
      :option-group-label="context.optionGroupLabel"
      :option-group-children="context.optionGroupChildren"
      :placeholder="context.placeholder"
      :pt="context.pt"
      :pt-options="context.ptOptions"
      :unstyled="context.unstyled ?? false"
      @change="handleInput"
      @blur="handleBlur"
    />
  </div>
</template>
