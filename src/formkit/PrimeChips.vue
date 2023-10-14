<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context
const attrs = context?.attrs

function handleInput(e: any) {
  context?.node.input(props.context?._value)
}
const styleClass = computed(() => (context?.state.validationVisible && !context?.state.valid) ? `${attrs?.class} p-invalid` : attrs?.class)
</script>

<template>
  <div class="p-formkit">
    <Chips
      v-model="context._value"
      :input-id="context.id"
      :disabled="attrs._disabled ?? false"
      :readonly="attrs._readonly ?? false"
      :input-style="attrs.style"
      :input-class="styleClass"
      :tabindex="attrs.tabindex"
      :aria-label="attrs.ariaLabel"
      :aria-labelledby="attrs.ariaLabelledby"
      :allow-duplicate="attrs.allowDuplicate ?? true"
      :add-on-blur="attrs.addOnBlur ?? false"
      :max="attrs.max ?? undefined"
      :placeholder="attrs.placeholder"
      :separator="attrs.separator"
      :pt="attrs.pt"
      :pt-options="attrs.ptOptions"
      :unstyled="attrs.unstyled ?? false"
      @add="handleInput"
      @remove="handleInput"
    />
  </div>
</template>
