import { computed } from 'vue'
import { v4 as uuidv4 } from 'uuid'

export function useFormKitSection(context: any) {
  const hasPrefix = computed(() => {
    return context?.prefix && context?.prefix.length > 0
  })

  const hasPrefixIcon = computed(() => {
    return context?.prefixIcon && context?.prefixIcon.length > 0
  })

  const hasSuffixIcon = computed(() => {
    return context?.suffixIcon && context?.suffixIcon.length > 0
  })

  const hasSuffix = computed(() => {
    return context?.suffix && context?.suffix.length > 0
  })

  function generateId() {
    return uuidv4()
  }

  return { generateId, hasPrefix, hasPrefixIcon, hasSuffix, hasSuffixIcon }
}
