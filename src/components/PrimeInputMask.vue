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
const attrs = computed(() => context?.attrs)

function handleInput(e: Event) {
  context?.node.input(props.context?._value)
  context?.handlers.blur(e)
}
const styleClass = computed(() => (context?.state.validationVisible && !context?.state.valid) ? `${attrs.value?.class} p-invalid` : attrs.value?.class)
</script>

<template>
  <div class="p-formkit">
    <InputMask
      :id="context.id"
      v-model="context._value"
      :disabled="!!context?.disabled"
      :readonly="attrs._readonly ?? false"
      :class="styleClass"
      :tabindex="attrs.tabindex"
      :aria-label="attrs.ariaLabel"
      :aria-labelledby="attrs.ariaLabelledby"
      :mask="context.mask ?? undefined"
      :slot-char="context.slotChar ?? '_'"
      :auto-clear="context.autoClear ?? true"
      :unmask="context.unmask ?? false"
      :pt="attrs.pt"
      :invalid="context.invalid"
      :variant="context.variant"
      :pt-options="context.ptOptions"
      :unstyled="context.unstyled ?? false"
      @blur="handleInput"
    />
  </div>
</template>
