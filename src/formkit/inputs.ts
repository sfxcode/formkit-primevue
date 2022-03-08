import {FormKitTypeDefinition} from "@formkit/core";
import {createInput} from "@formkit/vue";
import PrimeInputText from "./PrimeInputText.vue";
import PrimeInputTextArea from "./PrimeInputTextArea.vue";
import PrimeCheckBox from "./PrimeCheckBox.vue";
import PrimeInputSwitch from "./PrimeInputSwitch.vue";
import PrimeEditor from "./PrimeEditor.vue";

export const primeInputTextDefinition: FormKitTypeDefinition = createInput(PrimeInputText, {
    props: ['iconRight', 'iconLeft'],
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
