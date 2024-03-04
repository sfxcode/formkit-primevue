<script setup lang='ts'>
import { type PropType, computed } from 'vue';
import { type FormKitFrameworkContext } from '@formkit/core';
import { type PasswordProps } from 'primevue/password'

export type FormKitPrimePasswordProps = {
  mediumRegex?: PasswordProps['mediumRegex'];
  strongRegex?: PasswordProps['strongRegex'];
  promptLabel?: PasswordProps['promptLabel'];
  weakLabel?: PasswordProps['weakLabel'];
  mediumLabel?: PasswordProps['mediumLabel'];
  strongLabel?: PasswordProps['strongLabel'];
  hideIcon?: PasswordProps['hideIcon'];
  showIcon?: PasswordProps['showIcon'];
  pt?: PasswordProps['pt'];
  ptOptions?: PasswordProps['ptOptions'];
  unstyled?: PasswordProps['unstyled'];
  placeholder?: PasswordProps['placeholder'];
  feedback?: PasswordProps['feedback'];
  toggleMask?: PasswordProps['toggleMask'];
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimePasswordProps>,
    required: true,
  },
})

const context = props.context
const attrs = computed(() => context?.attrs)

function handleBlur(e: Event) {
  context?.handlers.blur(e)
}

function handleInput(e: any) {
  context?.node.input(e.target.value)
}

const styleClass = computed(() => (context?.state.validationVisible && !context?.state.valid) ? `${attrs.value?.class} p-invalid` : attrs.value?.class)
</script>

<template>
  <div class="p-formkit">
    <Password
      v-model="context._value"
      :input-id="context.id"
      :disabled="!!context?.disabled"
      :readonly="attrs._readonly ?? false"
      :input-style="attrs.style"
      :input-class="styleClass"
      :tabindex="attrs.tabindex"
      :aria-label="attrs.ariaLabel"
      :aria-labelledby="attrs.ariaLabelledby"
      :placeholder="context.placeholder"
      :medium-regex="context.mediumRegex ?? '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'"
      :strong-regex="context.strongRegex ?? '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})'"
      :prompt-label="context.promptLabel"
      :weak-label="context.weakLabel"
      :medium-label="context.mediumLabel"
      :strong-label="context.strongLabel"
      :hide-icon="context.hideIcon ?? 'pi pi-eye-slash'"
      :show-icon="context.showIcon ?? 'pi pi-eye'"
      :feedback="context.feedback ?? false"
      :toggle-mask="context.toggleMask ?? false"
      :pt="attrs.pt"
      :pt-options="attrs.ptOptions"
      :unstyled="attrs.unstyled ?? false"
      @input="handleInput"
      @blur="handleBlur"
    />
  </div>
</template>
