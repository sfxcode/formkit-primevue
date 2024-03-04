<script setup lang='ts'>
import { type PropType, computed } from 'vue';
import { type FormKitFrameworkContext } from '@formkit/core';
import { type RadioButtonProps } from 'primevue/radiobutton'

export type FormKitPrimeRadioButtonProps = {
  pt?: RadioButtonProps['pt'];
  ptOptions?: RadioButtonProps['ptOptions'];
  unstyled?: RadioButtonProps['unstyled'];
  options?: { label: string, value: any }[];
  options_class?: string;
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeRadioButtonProps>,
    required: true,
  },
})

const context = props.context

function handleChange(e: any) {
  context?.node.input(props.context?._value)
}

function handleBlur(e: Event) {
  context?.handlers.blur(e)
}

const styleClass = computed(() => (context?.state.validationVisible && !context?.state.valid) ? `${context?.attrs?.class} p-invalid` : context?.attrs?.class)
</script>

<template>
  <div :class="context.options_class" class="p-formkit">
    <div v-for="option in context.options" :key="option.value" :class="context.option_class">
      <RadioButton
        :id="context.id"
        v-model="context._value"
        :disabled="!!context?.disabled"
        :readonly="context?.attrs._readonly ?? false"
        :name="context?.attrs.name"
        :value="option.value"
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
