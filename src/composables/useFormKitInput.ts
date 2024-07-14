import { computed } from 'vue'

export function useFormKitInput(context: any) {
  const styleClass = computed(() => {
    return (context?.state.validationVisible && !context?.state.valid) ? `${context?.attrs?.class} p-invalid` : context?.attrs?.class
  })

  const wrapperClass = computed(() => {
    return context?.wrapperClass ? `p-formkit ${context?.wrapperClass}` : 'p-formkit '
  })

  function handleBlur(event: Event) {
    context?.handlers.blur(event)
  }

  function handleChange(_: any) {
    context?.node.input(context?._value)
  }

  function handleInput(_: any) {
    context?.node.input(context?._value)
  }

  function handleSelect(e: any) {
    context?.node.input(e)
  }

  return { styleClass, wrapperClass, handleBlur, handleChange, handleInput, handleSelect }
}
