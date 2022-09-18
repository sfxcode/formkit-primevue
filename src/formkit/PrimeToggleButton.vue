<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context

function handleChange(e: any) {
  context?.node.input(props.context?._value)
}
</script>

<template>
  <ToggleButton
    :id="context.id"
    v-model="context._value"
    :input-class="context.attrs.inputClass"
    :input-style="context.attrs.inputStyle"
    :on-label="context.attrs.onLabel ?? 'Yes'"
    :off-label="context.attrs.offLabel ?? 'No'"
    :on-icon="context.attrs.onIcon ?? 'pi pi-check'"
    :off-icon="context.attrs.offIcon ?? 'pi pi-times'"
    @change="handleChange"
  />
</template>
