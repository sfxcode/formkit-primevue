<script setup lang="ts">
import type { FormKitFrameworkContext } from "@formkit/core";
import type { PropType } from "vue";
import type { FormKitIconProps } from "./FormKitIcon.vue";
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useFormKitSection } from "../composables/index.ts";
import FormKitIcon from "./FormKitIcon.vue";
import FormKitPrefix from "./FormKitPrefix.vue";
import FormKitSuffix from "./FormKitSuffix.vue";

export interface FormKitOutputTextProps {
  html?: boolean;
  isTranslationKey?: boolean;
  convertValue?: (value: string) => string;
  maxLength?: number;
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext> & FormKitIconProps & FormKitOutputTextProps,
    required: true,
  },
});

const textValue = computed(() => {
  const value = props.context?._value;
  const { t } = useI18n();
  let result = "";
  if (value) {
    if (props.context?.isTranslationKey) {
      result = t(value);
    } else if (typeof props.context?.convertValue === "function") {
      result = props.context?.convertValue(value);
    } else {
      result = value;
    }
  }

  // Apply maxLength truncation if specified
  const maxLength = props.context?.maxLength as number | undefined;
  if (result && maxLength && !props.context?.html && result.length > maxLength) {
    // Try to truncate at word boundary
    let truncated = result.substring(0, maxLength);
    const lastSpaceIndex = truncated.lastIndexOf(" ");

    // Only truncate at word boundary if there's a space, and it's not too far back
    // (at least 80% of maxLength to avoid cutting too much)
    if (lastSpaceIndex > maxLength * 0.8) {
      truncated = truncated.substring(0, lastSpaceIndex);
    }
    result = `${truncated}...`;
  }

  return result;
});

const { hasPrefix, hasPrefixIcon, hasSuffix, hasSuffixIcon } = useFormKitSection(props.context);
</script>

<template>
  <div class="p-formkit p-output-text">
    <FormKitIcon
      v-if="hasPrefixIcon"
      :icon-class="context?.iconPrefix as string"
      :on-click="context?.onIconPrefixClicked as () => void"
      position="prefix"
    />
    <FormKitPrefix v-if="hasPrefix" :prefix="context?.prefix as string" />
    <span
      v-if="context?.html"
      :id="context?.id"
      :class="context?.attrs?.class"
      :style="context?.attrs?.style"
      v-html="textValue"
    />
    <span
      v-else
      :id="context?.id"
      :class="context?.attrs?.class"
      :style="context?.attrs?.style"
      v-text="textValue"
    />
    <FormKitSuffix v-if="hasSuffix" :suffix="context?.suffix as string" />
    <FormKitIcon
      v-if="hasSuffixIcon"
      :icon-class="context?.iconSuffix as string"
      :on-click="context?.onIconSuffixClicked as () => void"
      position="suffix"
    />
  </div>
</template>
