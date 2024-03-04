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
      v-bind="attrs"
      :disabled="attrs._disabled ?? !!context?.disabled"
      :class="styleClass"
      :suggestions="suggestions"
      @complete="search"
      @change="handleInput"
    />
  </div>
</template>
