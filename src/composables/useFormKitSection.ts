import { computed } from 'vue'

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

  return { hasPrefix, hasPrefixIcon, hasSuffix, hasSuffixIcon }
}
