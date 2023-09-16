<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context
const attrs = context?.attrs

const suggestions = ref([])

function search(event) {
  suggestions.value = attrs.complete(event.query)
}

function handleInput(e: any) {
  context?.node.input(props.context?._value)
}

const styleClass = computed(() => (context?.state.validationVisible && !context?.state.valid) ? `${attrs?.class} p-invalid` : attrs?.class)
</script>

<template>
  <div>
    <AutoComplete
      :id="context.id"
      v-model="context._value"
      :disabled="attrs._disabled ?? false"
      :tabindex="attrs.tabindex"
      :aria-label="attrs.ariaLabel"
      :aria-labelledby="attrs.ariaLabelledby"
      :suggestions="suggestions"
      :dropdown="attrs?.dropdown ?? false"
      :multiple="attrs.multiple ?? false"
      :pt="attrs.pt"
      :pt-options="attrs.ptOptions"
      :unstyled="attrs.unstyled ?? false"
      @complete="search"
      @change="handleInput"
    />
  </div>
</template>
