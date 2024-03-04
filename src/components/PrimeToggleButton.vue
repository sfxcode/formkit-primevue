<script setup lang='ts'>
import { computed } from 'vue'

const props = defineProps({
  context: Object,
})

const context = props.context
const attrs = computed(() => context?.attrs)

function handleChange(e: any) {
  context?.node.input(props.context?._value)
}
const styleClass = computed(() => (context?.state.validationVisible && !context?.state.valid) ? `${attrs.value?.class} p-invalid` : attrs.value?.class)
</script>

<template>
  <div class="p-formkit">
    <ToggleButton
      v-model="context._value"
      v-bind="attrs"
      :input-id="context.id"
      :disabled="attrs._disabled ?? !!context?.disabled"
      :readonly="attrs._readonly ?? false"
      :input-style="attrs.style"
      :input-class="styleClass"
      :on-icon="context.onIcon ?? 'pi pi-check'"
      :off-icon="context.offIcon ?? 'pi pi-times'"
      @change="handleChange"
    />
  </div>
</template>
