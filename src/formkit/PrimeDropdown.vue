<script setup lang="ts">
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
      :input-id="context.id"
      :disabled="attrs._disabled ?? false"
      :readonly="attrs._readonly ?? false"
      :style="attrs.style"
      :class="styleClass"
      :input-style="attrs.style"
      :input-class="styleClass"
      :tabindex="attrs.tabindex"
      :aria-label="attrs.ariaLabel"
      :aria-labelledby="attrs.ariaLabelledby"
      :options="attrs.options"
      :option-label="attrs.optionLabel ?? 'label'"
      :option-value="attrs.optionValue ?? 'value'"
      :placeholder="attrs.placeholder"
      :filter="attrs.filter ?? false"
      :show-clear="attrs.showClear ?? false"
      :pt="attrs.pt"
      :pt-options="attrs.ptOptions"
      :unstyled="attrs.unstyled ?? false"
      @change="handleInput"
      @blur="handleBlur"
    />
  </div>
</template>
