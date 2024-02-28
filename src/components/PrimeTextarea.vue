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
    <Textarea
      :id="context.id"
      v-model="context._value"
      :disabled="!!context?.disabled"
      :readonly="attrs._readonly ?? false"
      :style="attrs.style"
      :class="styleClass"
      :rows="context.rows ?? 3"
      @input="handleInput"
      @blur="handleBlur"
    />
  </div>
</template>
