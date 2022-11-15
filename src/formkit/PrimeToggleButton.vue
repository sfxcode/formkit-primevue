<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context
const attrs = context?.attrs

function handleChange(e: any) {
  context?.node.input(props.context?._value)
}
</script>

<template>
  <ToggleButton
    v-model="context._value"
    :input-id="context.id"
    :disabled="attrs._disabled ?? false"
    :readonly="attrs._readonly ?? false"
    :input-style="attrs.style"
    :input-class="attrs.class"
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
</template>
