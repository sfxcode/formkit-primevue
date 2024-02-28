<script setup lang='ts'>
import type { CalendarBlurEvent } from 'primevue/calendar'

const props = defineProps({
  context: Object,
})

const context = props.context
const attrs = computed(() => context?.attrs)

function handleInput(e: any) {
  context?.node.input(context?._value)
}

function handleSelect(e: any) {
  context?.node.input(e)
}

function handleBlur(e: CalendarBlurEvent) {
  context?.handlers.blur(e.value)
}

function handleClearClick() {
  context?.node.input(null)
}

const styleClass = computed(() => (context?.state.validationVisible && !context?.state.valid) ? `${attrs.value?.class} p-invalid` : attrs.value?.class)
</script>

<template>
  <div class="p-formkit">
    <Calendar
      v-model="context._value"
      v-bind="attrs"
      :input-id="props.context.id"
      :disabled="attrs._disabled ?? !!context?.disabled"
      :readonly="attrs._readonly ?? false"
      :input-style="attrs.style"
      :input-class="styleClass"
      :show-icon="context.showIcon"
      @date-select="handleSelect"
      @input="handleInput"
      @blur="handleBlur"
      @clear-click="handleClearClick"
    />
  </div>
</template>
