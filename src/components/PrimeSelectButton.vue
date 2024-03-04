<script setup lang='ts'>
import { type PropType, computed } from 'vue';
import { type FormKitFrameworkContext } from '@formkit/core';
import { SelectButtonProps } from 'primevue/selectbutton'

export type FormKitPrimeSelectButtonProps = {
  pt?: SelectButtonProps['pt'];
  ptOptions?: SelectButtonProps['ptOptions'];
  unstyled?: SelectButtonProps['unstyled'];
  optionLabel?: SelectButtonProps['optionLabel'];
  optionValue?: SelectButtonProps['optionValue'];
  optionDisabled?: SelectButtonProps['optionDisabled'];
  multiple?: SelectButtonProps['multiple'];
  unselectable?: SelectButtonProps['unselectable'];
  dataKey?: SelectButtonProps['dataKey'];
  options?: SelectButtonProps['options'];
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeSelectButtonProps>,
    required: true,
  },
})

const context = props.context
const attrs = computed(() => context?.attrs)

function handleChange(e: any) {
  context?.node.input(props.context?._value)
}

function handleBlur(e: Event) {
  context?.handlers.blur(e)
}

const styleClass = computed(() => (context?.state.validationVisible && !context?.state.valid) ? `${attrs.value?.class} p-invalid` : attrs.value?.class)
</script>

<template>
  <div class="p-formkit">
    <SelectButton
      :id="context.id"
      v-model="context._value"
      :disabled="!!context?.disabled"
      :readonly="attrs._readonly ?? false"
      :style="attrs.style"
      :class="styleClass"
      :tabindex="attrs.tabindex"
      :aria-label="attrs.ariaLabel"
      :aria-labelledby="attrs.ariaLabelledby"
      :options="context.options"
      :option-label="context.optionLabel"
      :option-value="context.optionValue"
      :option-disabled="context.optionDisabled"
      :multiple="context.multiple ?? false"
      :unselectable="context.unselectable ?? true"
      :data-key="context.dataKey"
      :pt="context.pt"
      :pt-options="context.ptOptions"
      :unstyled="context.unstyled ?? false"
      @change="handleChange"
      @blur="handleBlur"
    />
  </div>
</template>
