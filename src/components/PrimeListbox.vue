<script setup lang='ts'>
import { type PropType, computed } from 'vue';
import { type FormKitFrameworkContext } from '@formkit/core';
import { CascadeSelectProps } from 'primevue/cascadeselect'

export type FormKitPrimeCascadeSelectProps = {
  options?: CascadeSelectProps['options'];
  optionLabel?: CascadeSelectProps['optionLabel'];
  optionValue?: CascadeSelectProps['optionValue'];
  optionGroupLabel?: CascadeSelectProps['optionGroupLabel'];
  optionGroupChildren?: CascadeSelectProps['optionGroupChildren'];
  placeholder?: CascadeSelectProps['placeholder'];
  pt?: CascadeSelectProps['pt'];
  ptOptions?: CascadeSelectProps['ptOptions'];
  unstyled?: CascadeSelectProps['unstyled'];
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeCascadeSelectProps>,
    required: true,
  },
})

const context = props.context
const attrs = computed(() => context?.attrs)

function handleInput(e: any) {
  context?.node.input(props.context?._value)
}

function handleBlur(e: Event) {
  context?.handlers.blur(e)
}

const styleClass = computed(() => (context?.state.validationVisible && !context?.state.valid) ? `${attrs.value?.class} p-invalid` : attrs.value?.class)
</script>

<template>
  <div class="p-formkit">
    <Listbox
      :id="context.id"
      v-model="context._value"
      :disabled="!!context?.disabled"
      :readonly="attrs._readonly ?? false"
      :class="styleClass"
      :tabindex="attrs.tabindex"
      :aria-label="attrs.ariaLabel"
      :aria-labelledby="attrs.ariaLabelledby"
      :options="context?.options"
      :option-label="context?.optionLabel"
      :option-value="context.optionValue"
      :option-group-label="context.optionGroupLabel"
      :option-group-children="context.optionGroupChildren"
      :placeholder="context.placeholder"
      :pt="context.pt"
      :pt-options="context.ptOptions"
      :unstyled="context.unstyled ?? false"
      @change="handleInput"
      @blur="handleBlur"
    />
  </div>
</template>
