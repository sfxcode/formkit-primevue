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

function handleChange(e: any) {
  context?.node.input(props.context?._value)
}
</script>

<template>
  <div class="p-formkit">
    <ColorPicker
      v-model="context._value"
      :disabled="!!context?.disabled"
      :readonly="attrs._readonly ?? false"
      :style="attrs.style"
      :panel-class="attrs.class"
      @change="handleChange"
    />
  </div>
</template>
