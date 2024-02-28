<script setup lang='ts'>
import { type PropType, computed } from 'vue';
import { type FormKitFrameworkContext } from '@formkit/core';

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext>,
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
      :editor-style="attrs.style"
      :class="styleClass"
      @blur="handleInput"
    />
  </div>
</template>
