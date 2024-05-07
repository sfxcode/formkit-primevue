<script setup lang='ts'>
import { type PropType, computed } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'
import type { InputTextProps } from 'primevue/inputtext'
import type { IconFieldProps } from 'primevue/iconfield'

export interface FormKitPrimeInputTextProps {
  pt?: InputTextProps['pt']
  ptOptions?: InputTextProps['ptOptions']
  unstyled?: InputTextProps['unstyled']
  placeholder?: InputTextProps['placeholder']
  icon?: string
  iconPosition?: IconFieldProps['iconPosition']
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeInputTextProps>,
    required: true,
  },
})

const hasIcon = computed(() => {
  if (props.context?.icon && props.context?.icon.length > 0)
    return true

  return props.context?.attrs?.icon && props.context?.attrs?.icon.length > 0
})

const icon = computed(() => {
  return props.context?.icon ?? props.context?.attrs?.icon
})

const iconPosition = computed(() => {
  return props.context?.attrs?.iconPosition ?? undefined
})

function handleBlur(e: Event) {
  props.context?.handlers.blur(e)
}

function handleInput(e: any) {
  props.context?.node.input(e.target.value)
}

const styleClass = computed(() => (props.context?.state.validationVisible && !props.context?.state.valid) ? `${props.context?.attrs?.class} p-invalid` : props.context?.attrs?.class)
</script>

<template>
  <div class="p-formkit">
    <IconField v-if="hasIcon" :icon-position="iconPosition">
      <InputIcon :class="icon" />
      <InputText
        :id="context.id"
        v-model="context._value"
        v-bind="context?.attrs"
        :disabled="!!context?.disabled"
        :readonly="context?.attrs.readonly ?? false"
        :style="context?.attrs.style"
        :class="styleClass"
        :tabindex="context?.attrs.tabindex"
        :aria-label="context?.attrs.ariaLabel"
        :aria-labelledby="context?.attrs.ariaLabelledby"
        :placeholder="context.placeholder"
        :pt="context.pt"
        :pt-options="context.ptOptions"
        :unstyled="context.unstyled ?? false"
        @input="handleInput"
        @blur="handleBlur"
      />
    </IconField>
    <InputText
      v-else
      :id="context.id"
      v-model="context._value"
      v-bind="context?.attrs"
      :disabled="!!context?.disabled"
      :readonly="context?.attrs.readonly ?? false"
      :style="context?.attrs.style"
      :class="styleClass"
      :tabindex="context?.attrs.tabindex"
      :aria-label="context?.attrs.ariaLabel"
      :aria-labelledby="context?.attrs.ariaLabelledby"
      :placeholder="context.placeholder"
      :pt="context.pt"
      :pt-options="context.ptOptions"
      :unstyled="context.unstyled ?? false"
      @input="handleInput"
      @blur="handleBlur"
    />
  </div>
</template>
