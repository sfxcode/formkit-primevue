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

const styleClass = computed(() => (context?.state.validationVisible && !context?.state.valid) ? `${attrs.value?.class} p-invalid` : attrs.value?.class)
</script>

<template>
  <div class="p-formkit">
    <Rating
      :id="context.id"
      v-model="context._value"
      :disabled="!!context?.disabled"
      :readonly="attrs._readonly ?? false"
      :style="attrs.style"
      :class="styleClass"
      :on-icon="attrs.onIcon ?? 'pi pi-star-fill'"
      :off-icon="attrs.offIcon ?? 'pi pi-star'"
      :cancel="attrs.cancel ?? false"
      @change="handleInput"
    />
  </div>
</template>
