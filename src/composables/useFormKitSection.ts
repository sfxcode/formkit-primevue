import { computed } from 'vue'

export function useFormKitSection(context: any) {
  const hasPrefix = computed(() => {
    return context?.attrs?.prefix && context?.attrs?.prefix.length > 0
  })

  const hasPrefixIcon = computed(() => {
    return context?.prefixIcon && context?.prefixIcon.length > 0
  })

  const hasSuffixIcon = computed(() => {
    return context?.suffixIcon && context?.suffixIcon.length > 0
  })

  const hasSuffix = computed(() => {
    return context?.attrs?.suffix && context?.attrs?.suffix.length > 0
  })

  return { hasPrefix, hasPrefixIcon, hasSuffix, hasSuffixIcon }
}
