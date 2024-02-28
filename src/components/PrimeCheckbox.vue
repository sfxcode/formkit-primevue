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
    <span v-if="context.attrs.labelLeft" class="formkit-prime-left">{{ context.attrs.labelLeft }}</span>
    <Checkbox
      v-model="context._value"
      v-bind="attrs"
      :input-id="context.id"
      :disabled="!!context?.disabled"
      :readonly="attrs._readonly ?? false"
      :input-style="attrs.style"
      :input-class="styleClass"
      :binary="attrs.binary ?? true"
      @change="handleInput"
      @blur="handleBlur"
    />
    <span v-if="context.attrs.labelRight" class="formkit-prime-right">{{ context.attrs.labelRight }}</span>
  </div>
</template>
