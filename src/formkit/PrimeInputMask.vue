<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context
const attrs = computed(() => context?.attrs)

function handleInput(e: any) {
  context?.node.input(props.context?._value)
  context?.handlers.blur(props.context?._value)
}
const styleClass = computed(() => (context?.state.validationVisible && !context?.state.valid) ? `${attrs.value?.class} p-invalid` : attrs.value?.class)
</script>

<template>
  <div class="p-formkit">
    <InputMask
      :id="context.id"
      v-model="context._value"
      :disabled="attrs._disabled ?? false"
      :readonly="attrs._readonly ?? false"
      :editor-style="attrs.style"
      :class="styleClass"
      :tabindex="attrs.tabindex"
      :aria-label="attrs.ariaLabel"
      :aria-labelledby="attrs.ariaLabelledby"
      :placeholder="attrs.placeholder"
      :mask="attrs.mask ?? undefined"
      :slot-char="attrs.slotChar ?? '_'"
      :auto-clear="attrs.autoClear ?? true"
      :unmask="attrs.unmask ?? false"
      :pt="attrs.pt"
      :pt-options="attrs.ptOptions"
      :unstyled="attrs.unstyled ?? false"
      @blur="handleInput"
    />
  </div>
</template>
