<script setup lang='ts'>
import type { FormKitFrameworkContext } from '@formkit/core'
import type { ToggleButtonProps } from 'primevue/togglebutton'

import type { PropType } from 'vue'
import { useFormKitInput } from '../composables'

export interface FormKitPrimeToggleButtonProps {
  pt?: ToggleButtonProps['pt']
  ptOptions?: ToggleButtonProps['ptOptions']
  unstyled?: ToggleButtonProps['unstyled']
  onLabel?: ToggleButtonProps['onLabel']
  offLabel?: ToggleButtonProps['offLabel']
  onIcon?: ToggleButtonProps['onIcon']
  offIcon?: ToggleButtonProps['offIcon']
  iconPos?: ToggleButtonProps['iconPos']
  size?: ToggleButtonProps['size']

}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeToggleButtonProps>,
    required: true,
  },
})

const { validSlotNames, unstyled, isInvalid, handleChange, handleBlur } = useFormKitInput(props.context)
</script>

<template>
  <div class="p-formkit">
    <ToggleButton
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
      :on-label="context.onLabel ?? 'Yes'"
      :off-label="context.offLabel ?? 'No'"
      :on-icon="context.onIcon"
      :off-icon="context.offIcon"
      :icon-pos="context.iconPos"
      :pt="context.pt"
      :pt-options="context.ptOptions"
      :unstyled="unstyled"
      @change="handleChange"
      @blur="handleBlur"
    >
      <template v-for="slotName in validSlotNames" :key="slotName" #[slotName]="slotProps">
        <component :is="context?.slots[slotName]" v-bind="{ ...context, ...slotProps }" />
      </template>
    </ToggleButton>
  </div>
</template>
