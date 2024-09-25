<script setup lang='ts'>
import type { FormKitFrameworkContext } from '@formkit/core'
import type { InputNumberBlurEvent, InputNumberProps } from 'primevue/inputnumber'

import type { PropType } from 'vue'
import { watch } from 'vue'
import { useFormKitInput } from '../composables'

export interface FormKitPrimeInputNumberProps {
  useGrouping?: InputNumberProps['useGrouping']
  min?: InputNumberProps['min']
  max?: InputNumberProps['max']
  minFractionDigits?: InputNumberProps['minFractionDigits']
  maxFractionDigits?: InputNumberProps['maxFractionDigits']
  locale?: InputNumberProps['locale']
  mode?: InputNumberProps['mode']
  currency?: InputNumberProps['currency']
  prefix?: InputNumberProps['prefix']
  suffix?: InputNumberProps['suffix']
  showButtons?: InputNumberProps['showButtons']
  buttonLayout?: InputNumberProps['buttonLayout']
  step?: InputNumberProps['step']
  pt?: InputNumberProps['pt']
  ptOptions?: InputNumberProps['ptOptions']
  unstyled?: InputNumberProps['unstyled']
  placeholder?: InputNumberProps['placeholder']

}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeInputNumberProps>,
    required: true,
  },
})

const { unstyled, isInvalid } = useFormKitInput(props.context)

function handleBlur(e: InputNumberBlurEvent) {
  props.context?.handlers.blur(e.originalEvent)
}

function handleInput(_: any) {
  props.context?.node.input(_.value)
}

function roundToDecimals(value: any, decimals: number) {
  const factor = 10 ** decimals
  return Math.round(value * factor) / factor
}

watch(
  () => props.context._value,
  (newValue) => {
    if (newValue !== props.context.node.value) {
      if (props.context.maxFractionDigits) {
        // fix floating-point precision issues
        props.context?.node.input(roundToDecimals(newValue, props.context.maxFractionDigits))
      }
      else {
      // Only update if the value is different
        props.context?.node.input(newValue)
      }
    }
  },
)
</script>

<template>
  <div class="p-formkit">
    <InputNumber
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
      :placeholder="context.placeholder"
      :use-grouping="context.useGrouping ?? true"
      :min="context.min ?? undefined"
      :max="context.max ?? undefined"
      :min-fraction-digits="context.minFractionDigits ?? undefined"
      :max-fraction-digits="context.maxFractionDigits ?? undefined"
      :locale="context.locale ?? undefined"
      :mode="context.mode ?? undefined"
      :currency="context.currency ?? undefined"
      :prefix="context.prefix ?? undefined"
      :suffix="context.suffix ?? undefined"
      :show-buttons="context.showButtons ?? undefined"
      :button-layout="context.buttonLayout ?? 'stacked'"
      :step="context.step ?? undefined"
      :pt="context.pt"
      :pt-options="context.ptOptions"
      :unstyled="unstyled"
      @input="handleInput"
      @blur="handleBlur"
    />
  </div>
</template>
