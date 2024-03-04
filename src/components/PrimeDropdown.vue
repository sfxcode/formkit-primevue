<script setup lang='ts'>
import { computed } from 'vue'

const props = defineProps({
  context: Object,
})

const context = props.context
const attrs = computed(() => context?.attrs)

function handleBlur(e: any) {
  context?.handlers.blur(e.value)
}
function handleInput(e: any) {
  context?.node.input(e.value)
}
const styleClass = computed(() => (context?.state.validationVisible && !context?.state.valid) ? `${attrs.value?.class} p-invalid` : attrs.value?.class)
</script>

<template>
  <div class="p-formkit">
    <Dropdown
      v-model="context._value"
      v-bind="attrs"
      :input-id="context.id"
      :disabled="attrs._disabled ?? !!context?.disabled"
      :readonly="attrs._readonly ?? false"
      :style="attrs.style"
      :class="styleClass"
      :input-style="attrs.style"
      :input-class="styleClass"
      :input-props="attrs.inputProps"
      @change="handleInput"
      @blur="handleBlur"
    />
  </div>
</template>
