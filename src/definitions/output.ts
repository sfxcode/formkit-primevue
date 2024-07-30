import type { FormKitTypeDefinition } from '@formkit/core'
import { createInput } from '@formkit/vue'
import PrimeOutputText from '../components/PrimeOutputText.vue'
import PrimeOutputDate from '../components/PrimeOutputDate.vue'
import PrimeOutputNumber from '../components/PrimeOutputNumber.vue'
import PrimeOutputLink from '../components/PrimeOutputLink.vue'
import PrimeOutputBoolean from '../components/PrimeOutputBoolean.vue'
import PrimeOutputDuration from '../components/PrimeOutputDuration.vue'
import PrimeOutputList from '../components/PrimeOutputList.vue'

export const primeOutputTextDefinition: FormKitTypeDefinition = createInput(PrimeOutputText, {
  props: ['prefix', 'suffix', 'iconPrefix', 'iconSuffix'],
})

export const primeOutputDateDefinition: FormKitTypeDefinition = createInput(PrimeOutputDate, {
  props: ['prefix', 'suffix', 'iconPrefix', 'iconSuffix'],
})

export const primeOutputNumberDefinition: FormKitTypeDefinition = createInput(PrimeOutputNumber, {
  props: ['prefix', 'suffix', 'iconPrefix', 'iconSuffix'],
})

export const primeOutputLinkDefinition: FormKitTypeDefinition = createInput(PrimeOutputLink, {
  props: ['prefix', 'suffix', 'iconPrefix', 'iconSuffix'],
})

export const primeOutputBooleanDefinition: FormKitTypeDefinition = createInput(PrimeOutputBoolean, {
  props: ['prefix', 'suffix', 'iconPrefix', 'iconSuffix'],
})

export const primeOutputDurationDefinition: FormKitTypeDefinition = createInput(PrimeOutputDuration, {
  props: ['prefix', 'suffix', 'iconPrefix', 'iconSuffix'],
})

export const primeOutputListDefinition: FormKitTypeDefinition = createInput(PrimeOutputList, {
  props: ['prefix', 'suffix', 'iconPrefix', 'iconSuffix'],
})
