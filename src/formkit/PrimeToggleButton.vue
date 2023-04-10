<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context
const attrs = context?.attrs

function handleChange(e: any) {
  context?.node.input(props.context?._value)
}
const styleClass = computed(() => (context?.state.validationVisible && !context?.state.valid) ? `${attrs?.class} p-invalid` : attrs?.class)
</script>

<template>
  <div>
    <ToggleButton
      v-model="context._value"
      :input-id="context.id"
      :disabled="attrs._disabled ?? false"
      :readonly="attrs._readonly ?? false"
      :input-style="attrs.style"
      :input-class="styleClass"
      :tabindex="attrs.tabindex"
      :aria-label="attrs.ariaLabel"
      :aria-labelledby="attrs.ariaLabelledby"
      :on-label="attrs.onLabel ?? 'Yes'"
      :off-label="attrs.offLabel ?? 'No'"
      :on-icon="attrs.onIcon ?? 'pi pi-check'"
      :off-icon="attrs.offIcon ?? 'pi pi-times'"
      :icon-pos="attrs.iconPos ?? 'left'"
      @change="handleChange"
    />
  </div>
</template>
