<script setup lang='ts'>
import { computed, defineProps } from 'vue'

const props = defineProps({
  context: Object,
})

const context = props.context
const attrs = computed(() => context?.attrs)

function hasIcon() {
  return context?.icon && context?.icon.length > 0
}

function handleBlur(e: any) {
  context?.handlers.blur(e.target.value)
}

function handleInput(e: any) {
  context?.node.input(e.target.value)
}

const styleClass = computed(() => (context?.state.validationVisible && !context?.state.valid) ? `${attrs.value?.class} p-invalid` : attrs.value?.class)
</script>

<template>
  <div class="p-formkit">
    <IconField v-if="hasIcon()" :icon-position="attrs.iconPosition">
      <InputIcon :class="context.icon" />
      <InputText
        :id="context.id"
        v-model="context._value"
        v-bind="attrs"
        :disabled="attrs._disabled ?? !!context?.disabled"
        :readonly="attrs._readonly ?? false"
        :style="attrs.style"
        :class="styleClass"
        @input="handleInput"
        @blur="handleBlur"
      />
    </IconField>
    <InputText
      v-else
      :id="context.id"
      v-model="context._value"
      v-bind="attrs"
      :disabled="attrs._disabled ?? !!context?.disabled"
      :readonly="attrs._readonly ?? false"
      :style="attrs.style"
      :class="styleClass"
      @input="handleInput"
      @blur="handleBlur"
    />
  </div>
</template>
