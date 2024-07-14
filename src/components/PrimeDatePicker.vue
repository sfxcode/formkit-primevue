<script setup lang='ts'>
import type { PropType } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'

import type { DatePickerBlurEvent, DatePickerProps } from 'primevue/datepicker'
import { useFormKitInput } from '../composables'

export interface FormKitPrimeDatePickerProps {
  dateFormat?: DatePickerProps['dateFormat']
  placeholder?: DatePickerProps['placeholder']
  selectionMode?: DatePickerProps['selectionMode']
  inline?: DatePickerProps['inline']
  icon?: DatePickerProps['icon']
  showOtherMonths?: DatePickerProps['showOtherMonths']
  selectOtherMonths?: DatePickerProps['selectOtherMonths']
  showIcon?: DatePickerProps['showIcon']
  prevIcon?: DatePickerProps['prevIcon']
  nextIcon?: DatePickerProps['nextIcon']
  incrementIcon?: DatePickerProps['incrementIcon']
  decrementIcon?: DatePickerProps['decrementIcon']
  numberOfMonths?: DatePickerProps['numberOfMonths']
  responsiveOptions?: DatePickerProps['responsiveOptions']
  view?: DatePickerProps['view']
  minDate?: DatePickerProps['minDate']
  maxDate?: DatePickerProps['maxDate']
  disabledDates?: DatePickerProps['disabledDates']
  disabledDays?: DatePickerProps['disabledDays']
  maxDateCount?: DatePickerProps['maxDateCount']
  showOnFocus?: DatePickerProps['showOnFocus']
  autoZIndex?: DatePickerProps['autoZIndex']
  baseZIndex?: DatePickerProps['baseZIndex']
  showButtonBar?: DatePickerProps['showButtonBar']
  showTime?: DatePickerProps['showTime']
  timeOnly?: DatePickerProps['timeOnly']
  shortYearCutoff?: DatePickerProps['shortYearCutoff']
  hourFormat?: DatePickerProps['hourFormat']
  stepHour?: DatePickerProps['stepHour']
  stepMinute?: DatePickerProps['stepMinute']
  stepSecond?: DatePickerProps['stepSecond']
  showSeconds?: DatePickerProps['showSeconds']
  hideOnDateTimeSelect?: DatePickerProps['hideOnDateTimeSelect']
  hideOnRangeSelection?: DatePickerProps['hideOnRangeSelection']
  timeSeparator?: DatePickerProps['timeSeparator']
  showWeek?: DatePickerProps['showWeek']
  manualInput?: DatePickerProps['manualInput']
  appendTo?: DatePickerProps['appendTo']
  panelStyle?: DatePickerProps['panelStyle']
  panelClass?: DatePickerProps['panelClass']
  pt?: DatePickerProps['pt']
  ptOptions?: DatePickerProps['ptOptions']
  unstyled?: DatePickerProps['unstyled']
  wrapperClass?: string
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeDatePickerProps>,
    required: true,
  },
})

const { styleClass, wrapperClass, handleInput, handleSelect } = useFormKitInput(props.context)

function handleBlur(e: DatePickerBlurEvent) {
  props.context?.handlers.blur(e.originalEvent)
}

function handleClearClick() {
  props.context?.node.input(null)
}
</script>

<template>
  <div :class="wrapperClass">
    <DatePicker
      v-model="context._value"
      v-bind="context?.attrs"
      :input-id="context.id"
      :disabled="!!context?.disabled"
      :readonly="context?.attrs.readonly ?? false"
      :input-style="context?.attrs.style"
      :input-class="styleClass"
      :tabindex="context?.attrs.tabindex"
      :aria-label="context?.attrs.ariaLabel"
      :aria-labelledby="context?.attrs.ariaLabelledby"
      :date-format="context?.dateFormat"
      :placeholder="context?.placeholder"
      :selection-mode="context?.selectionMode ?? 'single'"
      :inline="context?.inline ?? false"
      :show-other-months="context?.showOtherMonths ?? true"
      :select-other-months="context?.selectOtherMonths ?? false"
      :icon="context?.icon"
      :show-icon="context.showIcon"
      :previous-icon="context?.previousIcon ?? 'pi pi-chevron-left'"
      :next-icon="context?.nextIcon ?? 'pi pi-chevron-right'"
      :increment-icon="context?.incrementIcon ?? 'pi pi-chevron-up'"
      :decrement-icon="context?.decrementIcon ?? 'pi pi-chevron-down'"
      :number-of-months="context?.numberOfMonths ?? 1"
      :responsive-options="context?.responsiveOptions"
      :view="context?.view ?? 'date'"
      :touch-u-i="context?.touchUI ?? false"
      :min-date="context?.minDate"
      :max-date="context?.maxDate"
      :disabled-dates="context?.disabledDates"
      :disabled-days="context?.disabledDays"
      :max-date-count="context?.maxDateCount"
      :show-on-focus="context?.showOnFocus ?? true"
      :auto-z-index="context?.autoZIndex ?? true"
      :base-z-index="context?.baseZIndex ?? 0"
      :show-button-bar="context?.showButtonBar ?? false"
      :show-time="context?.showTime ?? false"
      :time-only="context?.timeOnly ?? false"
      :short-year-cutoff="context?.shortYearCutoff ?? '+10'"
      :hour-format="context?.hourFormat ?? '24'"
      :step-hour="context?.stepHour ?? 1"
      :step-minute="context?.stepMinute ?? 1"
      :step-second="context?.stepSecond ?? 1"
      :show-seconds="context?.showSeconds ?? false"
      :hide-on-date-time-select="context?.hideOnDateTimeSelect ?? false"
      :hide-on-range-selection="context?.hideOnRangeSelection ?? false"
      :time-separator="context?.timeSeparator ?? ':'"
      :show-week="context?.showWeek ?? false"
      :manual-input="context?.manualInput ?? true"
      :append-to="context?.appendTo ?? 'body'"
      :panel-style="context?.panelStyle"
      :panel-class="context?.panelClass"
      :pt="context?.pt"
      :pt-options="context?.ptOptions"
      :unstyled="context?.unstyled ?? false"
      @date-select="handleSelect"
      @input="handleInput"
      @blur="handleBlur"
      @clear-click="handleClearClick"
    />
  </div>
</template>
