<script setup lang='ts'>
import { type PropType, computed } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'
import type { CascadeSelectProps } from 'primevue/cascadeselect'

export interface FormKitPrimeCascadeSelectProps {
  options?: CascadeSelectProps['options']
  optionLabel?: CascadeSelectProps['optionLabel']
  optionValue?: CascadeSelectProps['optionValue']
  optionGroupLabel?: CascadeSelectProps['optionGroupLabel']
  optionGroupChildren?: CascadeSelectProps['optionGroupChildren']
  placeholder?: CascadeSelectProps['placeholder']
  pt?: CascadeSelectProps['pt']
  ptOptions?: CascadeSelectProps['ptOptions']
  unstyled?: CascadeSelectProps['unstyled']
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeCascadeSelectProps>,
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
  <div class="p-formkit">
    <CascadeSelect
      :id="context.id"
      v-model="context._value"
      v-bind="context?.attrs"
      :disabled="!!context?.disabled"
      :readonly="context?.attrs.readonly ?? false"
      :class="styleClass"
      :tabindex="context?.attrs.tabindex"
      :aria-label="context?.attrs.ariaLabel"
      :aria-labelledby="context?.attrs.ariaLabelledby"
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
