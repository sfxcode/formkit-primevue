<script setup lang='ts'>
import { type PropType, computed } from 'vue';
import { type FormKitFrameworkContext } from '@formkit/core';
import { KnobProps } from 'primevue/knob'

export type FormKitPrimeKnobProps = {
  pt?: KnobProps['pt'];
  ptOptions?: KnobProps['ptOptions'];
  unstyled?: KnobProps['unstyled'];
  min?: KnobProps['min'];
  max?: KnobProps['max'];
  step?: KnobProps['step'];
  size?: KnobProps['size'];
  strokeWidth?: KnobProps['strokeWidth'];
  showValue?: KnobProps['showValue'];
  valueColor?: KnobProps['valueColor'];
  rangeColor?: KnobProps['rangeColor'];
  textColor?: KnobProps['textColor'];
  valueTemplate?: KnobProps['valueTemplate'];
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeKnobProps>,
    required: true,
  },
})

const context = props.context

function handleInput(e: any) {
  context?.node.input(e)
  context?.handlers.blur(e)
}

function updateValue(n: number) {
  context?.node.input(n)
}

const styleClass = computed(() => (context?.state.validationVisible && !context?.state.valid) ? `${context?.attrs?.class} p-invalid` : context?.attrs?.class)
</script>

<template>
  <div class="p-formkit">
    <Knob
      :id="context.id"
      v-model="context._value"
      :disabled="!!context?.disabled"
      :readonly="context?.attrs._readonly ?? false"
      :style="context?.attrs.style"
      :class="styleClass"
      :tabindex="context?.attrs.tabindex"
      :aria-label="context?.attrs.ariaLabel"
      :aria-labelledby="context?.attrs.ariaLabelledby"
      :min="context.min ?? 0"
      :max="context.max ?? 100"
      :step="context.step ?? undefined"
      :size="context.size ?? 100"
      :stroke-width="context.strokeWidth ?? 14"
      :show-value="context.showValue ?? true"
      :value-color="context.valueColor ?? undefined"
      :range-color="context.rangeColor ?? undefined"
      :text-color="context.textColor ?? undefined"
      :value-template="context.valueTemplate ?? undefined"
      :pt="context.pt"
      :pt-options="context.ptOptions"
      :unstyled="context.unstyled ?? false"
      @change="handleInput"
      @update:model-value="updateValue"
    />
  </div>
</template>
