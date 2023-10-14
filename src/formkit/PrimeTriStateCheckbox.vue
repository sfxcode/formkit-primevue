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
  <div class="p-formkit">
    <span v-if="context.attrs.labelLeft" class="formkit-prime-left">{{ context.attrs.labelLeft }}</span>
    <TriStateCheckbox
      v-model="context._value"
      :input-id="context.id"
      :disabled="attrs._disabled ?? false"
      :readonly="attrs._readonly ?? false"
      :input-style="attrs.style"
      :input-class="styleClass"
      :tabindex="attrs.tabindex"
      :aria-label="attrs.ariaLabel"
      :aria-labelledby="attrs.ariaLabelledby"
      :pt="attrs.pt"
      :pt-options="attrs.ptOptions"
      :unstyled="attrs.unstyled ?? false"
      @click="handleChange"
    />
    <span v-if="context.attrs.labelRight" class="formkit-prime-right">{{ context.attrs.labelRight }}</span>
  </div>
</template>
