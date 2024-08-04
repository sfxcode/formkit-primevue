import type { FormKitTypeDefinition } from '@formkit/core'
import { createInput } from '@formkit/vue'
import PrimeOutputText from '../components/PrimeOutputText.vue'
import PrimeOutputDate from '../components/PrimeOutputDate.vue'
import PrimeOutputNumber from '../components/PrimeOutputNumber.vue'
import PrimeOutputLink from '../components/PrimeOutputLink.vue'
import PrimeOutputBoolean from '../components/PrimeOutputBoolean.vue'
import PrimeOutputDuration from '../components/PrimeOutputDuration.vue'
import PrimeOutputList from '../components/PrimeOutputList.vue'
import PrimeOutputReference from '../components/PrimeOutputReference.vue'

export const primeOutputTextDefinition: FormKitTypeDefinition = createInput(PrimeOutputText, {
  props: ['prefix', 'suffix', 'iconPrefix', 'iconSuffix', 'html'],
})

export const primeOutputDateDefinition: FormKitTypeDefinition = createInput(PrimeOutputDate, {
  props: ['prefix', 'suffix', 'iconPrefix', 'iconSuffix'],
})

export const primeOutputNumberDefinition: FormKitTypeDefinition = createInput(PrimeOutputNumber, {
  props: ['prefix', 'suffix', 'iconPrefix', 'iconSuffix'],
})

export const primeOutputLinkDefinition: FormKitTypeDefinition = createInput(PrimeOutputLink, {
  props: ['prefix', 'suffix', 'iconPrefix', 'iconSuffix', 'title'],
})

export const primeOutputReferenceDefinition: FormKitTypeDefinition = createInput(PrimeOutputReference, {
  props: ['prefix', 'suffix', 'iconPrefix', 'iconSuffix', 'reference', 'internal', 'linkComponentName', 'title'],
})

export const primeOutputBooleanDefinition: FormKitTypeDefinition = createInput(PrimeOutputBoolean, {
  props: ['prefix', 'suffix', 'iconPrefix', 'iconSuffix', 'trueValue', 'falseValue'],
})

export const primeOutputDurationDefinition: FormKitTypeDefinition = createInput(PrimeOutputDuration, {
  props: ['prefix', 'suffix', 'iconPrefix', 'iconSuffix'],
})

export const primeOutputListDefinition: FormKitTypeDefinition = createInput(PrimeOutputList, {
  props: ['prefix', 'suffix', 'iconPrefix', 'iconSuffix', 'divider', 'itemClass', 'dividerClass'],
})
