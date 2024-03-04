<script setup lang='ts'>
import { computed, defineProps } from 'vue'

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
    <Rating
      :id="context.id"
      v-model="context._value"
      v-bind="attrs"
      :disabled="attrs._disabled ?? !!context?.disabled"
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
