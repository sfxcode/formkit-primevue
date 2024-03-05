<script setup lang='ts'>
import { type PropType, computed } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'
import type { RadioButtonProps } from 'primevue/radiobutton'

export interface FormKitPrimeRadioButtonProps {
  pt?: RadioButtonProps['pt']
  ptOptions?: RadioButtonProps['ptOptions']
  unstyled?: RadioButtonProps['unstyled']
  options?: { label: string, value: any }[]
  options_class?: string
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeRadioButtonProps>,
    required: true,
  },
})

function handleChange(_: any) {
  props.context?.node.input(props.context?._value)
}

const styleClass = computed(() => (props.context?.state.validationVisible && !props.context?.state.valid) ? `${props.context?.attrs?.class} p-invalid` : props.context?.attrs?.class)
</script>

<template>
  <div :class="context.options_class" class="p-formkit">
    <div v-for="option in context.options" :key="option.value" :class="context.option_class">
      <RadioButton
        :id="context.id"
        :value="context._value"
        v-bind="context.attrs"
        :disabled="!!context?.disabled"
        :readonly="context?.attrs._readonly ?? false"
        :name="context?.attrs.name"
        :input-style="context?.attrs.style"
        :input-class="styleClass"
        :pt="context.pt"
        :pt-options="context.ptOptions"
        :unstyled="context.unstyled ?? false"
        @click="handleChange"
        @change="handleChange"
        @blur="handleChange"
      />
      <label :for="option.value">{{ option.label }}</label>
    </div>
  </div>
</template>
