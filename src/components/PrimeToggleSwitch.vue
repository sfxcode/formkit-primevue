<script setup lang='ts'>
import type { PropType } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'

import type { ToggleSwitchProps } from 'primevue/toggleswitch'
import { useFormKitInput, useFormKitSection } from '../composables'

export interface FormKitPrimeToggleSwitchProps {
  trueValue?: ToggleSwitchProps['trueValue']
  falseValue?: ToggleSwitchProps['falseValue']
  pt?: ToggleSwitchProps['pt']
  ptOptions?: ToggleSwitchProps['ptOptions']
  unstyled?: ToggleSwitchProps['unstyled']
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeToggleSwitchProps>,
    required: true,
  },
})

const { hasPrefix, hasSuffix } = useFormKitSection(props.context)

const { styleClass, handleInput, handleBlur } = useFormKitInput(props.context)
</script>

<template>
  <div class="p-formkit">
    <span v-if="hasPrefix" class="formkit-prefix">
      {{ context?.prefix }}
    </span>
    <ToggleSwitch
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
      :true-value="context.trueValue ?? undefined"
      :false-value="context.falseValue ?? undefined"
      :pt="context.pt"
      :pt-options="context.ptOptions"
      :unstyled="context.unstyled ?? false"
      @change="handleInput"
      @blur="handleBlur"
    />
    <span v-if="hasSuffix" class="formkit-suffix">
      {{ context?.suffix }}
    </span>
  </div>
</template>
