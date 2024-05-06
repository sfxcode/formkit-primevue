import { useFormKitSchema } from './useFormKitSchema'

export function useInputEditorSchema() {
  const { addElement } = useFormKitSchema()

  const inputNames = ['AutoComplete', 'Calendar', 'CascadeSelect', 'Checkbox', 'Chips', 'ColorPicker', 'Dropdown', 'Editor', 'InputMask', 'InputNumber', 'InputOtp', 'InputSwitch', 'InputText']

  const inputOptions = inputNames.map((name: string) => {
    return { label: name, value: `prime${name}` }
  })

  function editorDataToSchema(data: any): any {
    const formkitInput = data?._dollar_formkit
    return { ...data, $formkit: formkitInput, _dollar_formkit: undefined, slots: undefined, showBasic: undefined, showBase: undefined, showValidation: undefined, showDisplay: undefined }
  }

  function jsonDataToSchema(data: any): any {
    const formkitInput = data?._dollar_formkit
    return { ...data, $formkit: formkitInput, _dollar_formkit: undefined, slots: undefined, showBasic: undefined, showBase: undefined, showValidation: undefined, showDisplay: undefined }
  }

  function editorDataToJson(data: any): string {
    return JSON.stringify(editorDataToSchema(data))
  }

  function editorDataToCode(data: any): string {
    return `{${Object.entries(JSON.parse(editorDataToJson(data))).map(([key, value]) => `${key}: '${value}'`).join()}}`
  }

  function schemaToEditorData(schema: any): any {
    const formkitInput = schema?.$formkit
    return { ...schema, _dollar_formkit: formkitInput }
  }

  const editorSchema
        = [
          addElement('div', [
            {
              $formkit: 'primeCheckbox',
              name: 'showBase',
              id: 'showBase',
              value: true,
              labelLeft: 'Base',
            },
            {
              $formkit: 'primeCheckbox',
              name: 'showValidation',
              id: 'showValidation',
              labelLeft: 'Validation',
            },
            {
              $formkit: 'primeCheckbox',
              name: 'showDisplay',
              id: 'showDisplay',
              labelLeft: 'Display',
            },
          ], { class: 'flex gap-4' }),
          {
            $formkit: 'primeDropdown',
            id: 'inputSelection',
            name: '_dollar_formkit',
            label: 'Prime Input',
            value: 'primeInputText',
            optionLabel: 'label',
            optionValue: 'value',
            options: inputOptions,
          },
          addElement('h4', ['Base'], {}, '$get(showBase).value'),

          {
            $formkit: 'primeInputText',
            if: '$get(showBase).value',
            name: 'name',
            label: 'Field Name',
            validation: 'required',
          },
          {
            $formkit: 'primeInputText',
            if: '$get(showBase).value',
            name: 'value',
            label: 'Input Value',
          },
          {
            $formkit: 'primeInputText',
            if: '$get(showBase).value',
            name: 'id',
            label: 'Input ID',
          },
          {
            $formkit: 'primeInputText',
            if: '$get(showBase).value',
            name: 'label',
            label: 'Input Label',
          },
          {
            $formkit: 'primeInputText',
            if: '$get(showBase).value',
            name: 'help',
            label: 'Input Help',
          },
          addElement('h4', ['Validation'], {}, '$get(showValidation).value'),
          {
            $formkit: 'primeInputText',
            if: '$get(showValidation).value',
            name: 'validation',
            label: 'Field Validation',
          },
          {
            $formkit: 'primeInputText',
            if: '$get(showValidation).value',
            name: 'validation-visibility',
            value: 'blur',
            label: 'Field Validation Visibility',
          },
          addElement('h4', ['Display'], {}, '$get(showDisplay).value'),
          {
            $formkit: 'primeInputText',
            if: '$get(showDisplay).value',
            name: 'if',
            label: 'Should Render',
          },
          {
            $formkit: 'primeInputText',
            if: '$get(showDisplay).value',
            name: 'style',
            label: 'Input Style',
          },
          {
            $formkit: 'primeInputText',
            if: '$get(showDisplay).value',
            name: 'class',
            label: 'Input StyleClass',
          },
        ]

  return { editorSchema, inputNames, inputOptions, editorDataToSchema, jsonDataToSchema, editorDataToJson, editorDataToCode, schemaToEditorData }
}
