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
  <span v-if="context.attrs.labelLeft" class="formkit-prime-left">{{ context.attrs.labelLeft }}</span>

  <TriStateCheckbox
    :id="context.id"
    v-model="context._value"
    @click="handleChange"
  />
  <span v-if="context.attrs.labelRight" class="formkit-prime-right">{{ context.attrs.labelRight }}</span>
</template>
