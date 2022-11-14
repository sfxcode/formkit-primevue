<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context
const attrs = context?.attrs

function handleInput(e: any) {
  context?.node.input(props.context?._value)
}
</script>

<template>
  <Rating
    :id="context.id"
    v-model="context._value"
    :disabled="attrs._disabled ?? false"
    :readonly="attrs._readonly ?? false"
    :style="attrs.style"
    :class="attrs.class"
    :stars="attrs.stars ?? 5"
    :cancel="attrs.cancel ?? false"
    :on-icon="attrs.onIcon ?? 'pi pi-star-fill'"
    :off-icon="attrs.offIcon ?? 'pi pi-star'"
    :cancel-icon="attrs.cancelIcon ?? 'pi pi-ban'"
    @change="handleInput"
  />
</template>
