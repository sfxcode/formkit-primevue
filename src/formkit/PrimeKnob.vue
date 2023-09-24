<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context
const attrs = context?.attrs

function handleInput(e: any) {
  context?.node.input(e)
  context?.handlers.blur(e)
}

function updateValue(n: number) {
  context?.node.input(n)
}

const styleClass = computed(() => (context?.state.validationVisible && !context?.state.valid) ? `${attrs?.class} p-invalid` : attrs?.class)
</script>

<template>
  <div>
    <Knob
      :id="context.id"
      v-model="context._value"
      :disabled="attrs._disabled ?? false"
      :readonly="attrs._readonly ?? false"
      :style="attrs.style"
      :class="styleClass"
      :tabindex="attrs.tabindex"
      :aria-label="attrs.ariaLabel"
      :aria-labelledby="attrs.ariaLabelledby"
      :min="attrs.min ?? 0"
      :max="attrs.max ?? 100"
      :step="attrs.step ?? undefined"
      :size="attrs.size ?? 100"
      :stroke-width="attrs.strokeWidth ?? 14"
      :show-value="attrs.showValue ?? true"
      :value-color="attrs.valueColor ?? undefined"
      :range-color="attrs.rangeColor ?? undefined"
      :text-color="attrs.textColor ?? undefined"
      :value-template="attrs.valueTemplate ?? undefined"
      :pt="attrs.pt"
      :pt-options="attrs.ptOptions"
      :unstyled="attrs.unstyled ?? false"
      @change="handleInput"
      @update:model-value="updateValue"
    />
  </div>
</template>
