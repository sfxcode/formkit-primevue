<script setup lang='ts'>
import { computed } from 'vue'

const props = defineProps({
  context: Object,
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
    <span v-if="context.attrs.labelLeft" class="formkit-prime-left">{{ context.attrs.labelLeft }}</span>
    <Checkbox
      v-model="context._value"
      v-bind="attrs"
      :input-id="context.id"
      :disabled="attrs._disabled ?? !!context?.disabled"
      :readonly="attrs._readonly ?? false"
      :input-style="attrs.style"
      :input-class="styleClass"
      :binary="attrs.binary ?? true"
      @change="handleInput"
    />
    <span v-if="context.attrs.labelRight" class="formkit-prime-right">{{ context.attrs.labelRight }}</span>
  </div>
</template>