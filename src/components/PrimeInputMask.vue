<script setup lang='ts'>
import { type PropType, computed } from 'vue';
import { type FormKitFrameworkContext } from '@formkit/core';
import { type InputMaskProps } from 'primevue/inputmask'

export type FormKitPrimeInputMaskProps = {
  mask?: InputMaskProps['mask'];
  slotChar?: InputMaskProps['slotChar'];
  autoClear?: InputMaskProps['autoClear'];
  unmask?: InputMaskProps['unmask'];
  pt?: InputMaskProps['pt'];
  ptOptions?: InputMaskProps['ptOptions'];
  unstyled?: InputMaskProps['unstyled'];
  invalid?: InputMaskProps['invalid'];
  variant?: InputMaskProps['variant'];
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeInputMaskProps>,
    required: true,
  },
})

const context = props.context

function handleInput(e: Event) {
  context?.node.input(props.context?._value)
  context?.handlers.blur(e)
}
const styleClass = computed(() => (context?.state.validationVisible && !context?.state.valid) ? `${context?.attrs?.class} p-invalid` : context?.attrs?.class)
</script>

<template>
  <div class="p-formkit">
    <InputMask
      :id="context.id"
      v-model="context._value"
      :disabled="!!context?.disabled"
      :readonly="context?.attrs._readonly ?? false"
      :class="styleClass"
      :tabindex="context?.attrs.tabindex"
      :aria-label="context?.attrs.ariaLabel"
      :aria-labelledby="context?.attrs.ariaLabelledby"
      :mask="context.mask ?? undefined"
      :slot-char="context.slotChar ?? '_'"
      :auto-clear="context.autoClear ?? true"
      :unmask="context.unmask ?? false"
      :pt="context.pt"
      :invalid="context.invalid"
      :variant="context.variant"
      :pt-options="context.ptOptions"
      :unstyled="context.unstyled ?? false"
      @blur="handleInput"
    />
  </div>
</template>
