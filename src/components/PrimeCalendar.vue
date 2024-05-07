<script setup lang='ts'>
import type { CalendarBlurEvent, CalendarProps } from 'primevue/calendar'
import { type PropType, computed } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'

export interface FormKitPrimeCalendarProps {
  dateFormat?: CalendarProps['dateFormat']
  placeholder?: CalendarProps['placeholder']
  selectionMode?: CalendarProps['selectionMode']
  inline?: CalendarProps['inline']
  icon?: CalendarProps['icon']
  showOtherMonths?: CalendarProps['showOtherMonths']
  selectOtherMonths?: CalendarProps['selectOtherMonths']
  showIcon?: CalendarProps['showIcon']
  previousIcon?: CalendarProps['previousIcon']
  nextIcon?: CalendarProps['nextIcon']
  incrementIcon?: CalendarProps['incrementIcon']
  decrementIcon?: CalendarProps['decrementIcon']
  numberOfMonths?: CalendarProps['numberOfMonths']
  responsiveOptions?: CalendarProps['responsiveOptions']
  view?: CalendarProps['view']
  touchUI?: CalendarProps['touchUI']
  minDate?: CalendarProps['minDate']
  maxDate?: CalendarProps['maxDate']
  disabledDates?: CalendarProps['disabledDates']
  disabledDays?: CalendarProps['disabledDays']
  maxDateCount?: CalendarProps['maxDateCount']
  showOnFocus?: CalendarProps['showOnFocus']
  autoZIndex?: CalendarProps['autoZIndex']
  baseZIndex?: CalendarProps['baseZIndex']
  showButtonBar?: CalendarProps['showButtonBar']
  showTime?: CalendarProps['showTime']
  timeOnly?: CalendarProps['timeOnly']
  shortYearCutoff?: CalendarProps['shortYearCutoff']
  hourFormat?: CalendarProps['hourFormat']
  stepHour?: CalendarProps['stepHour']
  stepMinute?: CalendarProps['stepMinute']
  stepSecond?: CalendarProps['stepSecond']
  showSeconds?: CalendarProps['showSeconds']
  hideOnDateTimeSelect?: CalendarProps['hideOnDateTimeSelect']
  hideOnRangeSelection?: CalendarProps['hideOnRangeSelection']
  timeSeparator?: CalendarProps['timeSeparator']
  showWeek?: CalendarProps['showWeek']
  manualInput?: CalendarProps['manualInput']
  appendTo?: CalendarProps['appendTo']
  panelStyle?: CalendarProps['panelStyle']
  panelClass?: CalendarProps['panelClass']
  pt?: CalendarProps['pt']
  ptOptions?: CalendarProps['ptOptions']
  unstyled?: CalendarProps['unstyled']
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeCalendarProps>,
    required: true,
  },
})

function handleInput(_: any) {
  props.context?.node.input(props.context?._value)
}

function handleSelect(e: any) {
  props.context?.node.input(e)
}

function handleBlur(e: CalendarBlurEvent) {
  props.context?.handlers.blur(e.originalEvent)
}

function handleClearClick() {
  props.context?.node.input(null)
}

const styleClass = computed(() => (props.context?.state.validationVisible && !props.context?.state.valid) ? `${props.context?.attrs?.class} p-invalid` : props.context?.attrs?.class)
</script>

<template>
  <div class="p-formkit">
    <Calendar
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
