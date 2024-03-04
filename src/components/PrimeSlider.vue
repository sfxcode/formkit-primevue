<script setup lang='ts'>
import { computed } from 'vue'

const props = defineProps({
  context: Object,
})

const context = props.context
const attrs = computed(() => context?.attrs)

function handleInput(e: any) {
  context?.node.input(e)
  context?.handlers.blur(e)
}
const styleClass = computed(() => (context?.state.validationVisible && !context?.state.valid) ? `${attrs.value?.class} p-invalid` : attrs.value?.class)
</script>

<template>
  <div class="p-formkit">
    <Slider
      :id="context.id"
      v-model="context._value"
      v-bind="attrs"
      :disabled="attrs._disabled ?? !!context?.disabled"
      :readonly="attrs._readonly ?? false"
      :style="attrs.style"
      :class="styleClass"
      @change="handleInput"
    />
  </div>
</template>
