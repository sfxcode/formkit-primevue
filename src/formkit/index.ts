import {FormKitTypeDefinition} from "@formkit/core";
import {createInput} from "@formkit/vue";

import PrimeInputText from "./PrimeInputText.vue";
import PrimePassword from "./PrimePassword.vue";
import PrimeInputTextArea from "./PrimeInputTextArea.vue";
import PrimeCheckBox from "./PrimeCheckBox.vue";
import PrimeInputSwitch from "./PrimeInputSwitch.vue";
import PrimeEditor from "./PrimeEditor.vue";
import PrimeDropdown from "./PrimeDropdown.vue";
import PrimeCalendar from "./PrimeCalendar.vue";

export const primeInputTextDefinition: FormKitTypeDefinition = createInput(PrimeInputText, {
    props: ['iconRight', 'iconLeft'],
})

export const primePasswordDefinition: FormKitTypeDefinition = createInput(PrimePassword, {
    props: ['feedback', 'toggleMask'],
})

export const primeInputTextAreaDefinition: FormKitTypeDefinition = createInput(PrimeInputTextArea, {
    props: ['rows'],
})

export const primeCheckBoxDefinition: FormKitTypeDefinition = createInput(PrimeCheckBox, {
    props: [],
})

export const primeInputSwitchDefinition: FormKitTypeDefinition = createInput(PrimeInputSwitch, {
    props: [],
})

export const primeEditorDefinition: FormKitTypeDefinition = createInput(PrimeEditor, {
    props: [],
})

export const primeDropdownDefinition: FormKitTypeDefinition = createInput(PrimeDropdown, {
    props: [],
})

export const primeCalendarDefinition: FormKitTypeDefinition = createInput(PrimeCalendar, {
    props: [],
})

export const primeInputs = {
    primeInputText: primeInputTextDefinition,
    primePassword: primePasswordDefinition,
    primeCheckBox: primeCheckBoxDefinition,
    primeInputSwitch: primeInputSwitchDefinition,
    primeInputTextArea: primeInputTextAreaDefinition,
    primeEditor: primeEditorDefinition,
    primeDropdown: primeDropdownDefinition,
    primeCalendar: primeCalendarDefinition,
}
