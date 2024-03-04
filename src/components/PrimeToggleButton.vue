<script setup lang='ts'>
import { type PropType, computed } from 'vue';
import { type FormKitFrameworkContext } from '@formkit/core';
import { type ToggleButtonProps } from 'primevue/togglebutton'

export type FormKitPrimeToggleButtonProps = {
  pt?: ToggleButtonProps['pt'];
  ptOptions?: ToggleButtonProps['ptOptions'];
  unstyled?: ToggleButtonProps['unstyled'];
  onLabel?: ToggleButtonProps['onLabel'];
  offLabel?: ToggleButtonProps['offLabel'];
  onIcon?: ToggleButtonProps['onIcon'];
  offIcon?: ToggleButtonProps['offIcon'];
  iconPos?: ToggleButtonProps['iconPos'];
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeToggleButtonProps>,
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
    <ToggleButton
      v-model="context._value"
      v-bind="attrs"
      :input-id="context.id"
      :disabled="!!context?.disabled"
      :readonly="attrs._readonly ?? false"
      :input-style="attrs.style"
      :input-class="styleClass"
      :tabindex="attrs.tabindex"
      :aria-label="attrs.ariaLabel"
      :aria-labelledby="attrs.ariaLabelledby"
      :on-label="context.onLabel ?? 'Yes'"
      :off-label="context.offLabel ?? 'No'"
      :on-icon="context.onIcon ?? 'pi pi-check'"
      :off-icon="context.offIcon ?? 'pi pi-times'"
      :icon-pos="context.iconPos ?? 'left'"
      :pt="context.pt"
      :pt-options="context.ptOptions"
      :unstyled="context.unstyled ?? false"
      @change="handleChange"
      @blur="handleBlur"
    />
  </div>
</template>
