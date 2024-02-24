<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context
const attrs = computed(() => context?.attrs)

const suggestions = ref([])

function search(event) {
  suggestions.value = attrs.value.complete(event.query)
}

function handleInput(e: any) {
  context?.node.input(props.context?._value)
}

const styleClass = computed(() => (context?.state.validationVisible && !context?.state.valid) ? `${attrs.value?.class} p-invalid` : attrs.value?.class)
</script>

<template>
  <div class="p-formkit">
    <AutoComplete
      :id="context.id"
      v-model="context._value"
      :disabled="attrs._disabled ?? !!context?.disabled"
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
