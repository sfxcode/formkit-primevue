<script setup lang='ts'>
import type { FormKitFrameworkContext } from '@formkit/core'
import type { CascadeSelectProps } from 'primevue/cascadeselect'

import type { PropType } from 'vue'
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
  size?: CascadeSelectProps['size']
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeCascadeSelectProps>,
    required: true,
  },
})

const { validSlotNames, unstyled, isInvalid, handleInput, handleBlur } = useFormKitInput(props.context)
</script>

<template>
  <div class="p-formkit">
    <CascadeSelect
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
      :size="context?.size ?? undefined"
      :options="context?.options"
      :option-label="context?.optionLabel"
      :option-value="context.optionValue"
      :option-group-label="context.optionGroupLabel"
      :option-group-children="context.optionGroupChildren"
      :placeholder="context.placeholder"
      :pt="context.pt"
      :pt-options="context.ptOptions"
      :unstyled="unstyled"
      @change="handleInput"
      @blur="handleBlur"
    >
      <template v-for="slotName in validSlotNames" :key="slotName" #[slotName]="slotProps">
        <component :is="context?.slots[slotName]" v-bind="{ ...context, ...slotProps }" />
      </template>
    </CascadeSelect>
  </div>
</template>
