<script setup lang='ts'>
import type { PropType } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'

import type { ToggleButtonProps } from 'primevue/togglebutton'
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

}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeToggleButtonProps>,
    required: true,
  },
})

const { styleClass, handleChange, handleBlur } = useFormKitInput(props.context)
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
      :input-class="styleClass"
      :tabindex="context?.attrs.tabindex"
      :aria-label="context?.attrs.ariaLabel"
      :aria-labelledby="context?.attrs.ariaLabelledby"
      :on-label="context.onLabel ?? 'Yes'"
      :off-label="context.offLabel ?? 'No'"
      :on-icon="context.onIcon ?? 'pi pi-check'"
      :off-icon="context.offIcon ?? 'pi pi-times'"
      :icon-pos="context.iconPos ?? 'left'"
      :pt="context.pt"
      :pt-options="context.ptOptions"
      :unstyled="context.unstyled ?? false"
      @change="handleChange"
      @blur="handleBlur"
    />
  </div>
</template>
