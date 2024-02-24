<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context
const attrs = computed(() => context?.attrs)

function handleChange(e: any) {
  context?.node.input(props.context?._value)
}
</script>

<template>
  <div class="p-formkit">
    <ColorPicker
      v-model="context._value"
      :disabled="attrs._disabled ?? !!context?.disabled"
      :readonly="attrs._readonly ?? false"
      :style="attrs.style"
      :panel-class="attrs.class"
      :tabindex="attrs.tabindex"
      :aria-label="attrs.ariaLabel"
      :aria-labelledby="attrs.ariaLabelledby"
      :default-color="attrs.defaultColor ?? 'ff0000'"
      :inline="attrs.inline ?? false"
      :format="attrs.format"
      :pt="attrs.pt"
      :pt-options="attrs.ptOptions"
      :unstyled="attrs.unstyled ?? false"
      @change="handleChange"
    />
  </div>
</template>
