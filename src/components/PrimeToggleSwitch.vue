<script setup lang='ts'>
import { type PropType, computed } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'
import type { ToggleSwitchProps } from 'primevue/toggleswitch'

export interface FormKitPrimeToggleSwitchProps {
  trueValue?: ToggleSwitchProps['trueValue']
  falseValue?: ToggleSwitchProps['falseValue']
  pt?: ToggleSwitchProps['pt']
  ptOptions?: ToggleSwitchProps['ptOptions']
  unstyled?: ToggleSwitchProps['unstyled']
  labelLeft?: string
  labelRight?: string
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeToggleSwitchProps>,
    required: true,
  },
})

function handleInput(_: any) {
  props.context?.node.input(props.context?._value)
}

function handleBlur(e: Event) {
  props.context?.handlers.blur(e)
}

const styleClass = computed(() => (props.context?.state.validationVisible && !props.context?.state.valid) ? `${props.context?.attrs?.class} p-invalid` : props.context?.attrs?.class)
</script>

<template>
  <div :class="context?.attrs.option_class" class="p-formkit">
    <span v-if="context.attrs.labelLeft" class="formkit-prime-left">{{ context.labelLeft }}</span>
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
    <span v-if="context.attrs.labelRight" class="formkit-prime-right">{{ context.labelRight }}</span>
  </div>
</template>
