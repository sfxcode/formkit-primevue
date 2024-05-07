import { useFormKitSchema } from './useFormKitSchema'

export function useInputEditorSchema() {
  const { addElement } = useFormKitSchema()

  const inputNames = ['AutoComplete', 'Calendar', 'CascadeSelect', 'Checkbox', 'Chips', 'ColorPicker', 'Dropdown', 'Editor', 'InputMask', 'InputNumber', 'InputOtp', 'InputSwitch', 'InputText']

  const inputOptions = inputNames.map((name: string) => {
    return { label: name, value: `prime${name}` }
  })

  const selectOptions = [
    { label: 'Base', value: 'showBasic' },
    { label: 'Validation', value: 'showValidation' },
    { label: 'Display', value: 'showDisplay' },
    { label: 'Prime', value: 'showPrime' },
  ]

  function editorDataToSchema(data: any): any {
    const formkitInput = data?._dollar_formkit
    return { ...data, $formkit: formkitInput, _dollar_formkit: undefined, slots: undefined, selectButton: undefined }
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
          {
            $formkit: 'primeSelectButton',
            id: 'selectButton',
            name: 'selectButton',
            options: selectOptions,
            optionLabel: 'label',
            optionValue: 'value',
            value: 'showBasic',
          },

          {
            $formkit: 'primeInputText',
            if: '$get(selectButton).value === \'showBasic\'',
            name: 'name',
            label: 'Field Name',
            validation: 'required',
            validationVisibility: 'live',
            key: 'name',
            preserve: true,
          },
          {
            $formkit: 'primeInputText',
            if: '$get(selectButton).value === \'showBasic\'',
            name: 'label',
            label: 'Input Label',
            key: 'label',
            preserve: true,
          },
          {
            $formkit: 'primeInputText',
            if: '$get(selectButton).value === \'showBasic\'',
            name: 'help',
            label: 'Input Help',
            key: 'help',
            preserve: true,
          },
          {
            $formkit: 'primeInputText',
            if: '$get(selectButton).value === \'showBasic\'',
            name: 'id',
            label: 'Input ID',
            key: 'id',
            preserve: true,
          },
          {
            $formkit: 'primeInputText',
            if: '$get(selectButton).value === \'showBasic\'',
            name: 'value',
            label: 'Input Value',
            key: 'value',
            preserve: true,
          },
          {
            $formkit: 'primeInputText',
            if: '$get(selectButton).value === \'showValidation\'',
            name: 'validation',
            label: 'Field Validation',
            key: 'validation',
            preserve: true,
          },
          {
            $formkit: 'primeInputText',
            if: '$get(selectButton).value === \'showValidation\'',
            name: 'validation-visibility',
            value: 'blur',
            label: 'Field Validation Visibility',
            key: 'validation-visibility',
            preserve: true,
          },
          {
            $formkit: 'primeInputText',
            if: '$get(selectButton).value === \'showValidation\'',
            name: 'validation-label',
            label: 'Field Validation Visibility',
            key: 'validation-label',
            preserve: true,
          },
          {
            $formkit: 'primeInputText',
            if: '$get(selectButton).value === \'showDisplay\'',
            name: 'tabindex',
            label: 'Tab Index',
            key: 'tabindex',
            preserve: true,
          },
          {
            $formkit: 'primeInputText',
            if: '$get(selectButton).value === \'showDisplay\'',
            name: 'if',
            label: 'Should Render',
            key: 'if',
            preserve: true,
          },

          {
            $formkit: 'primeInputText',
            if: '$get(selectButton).value === \'showDisplay\'',
            name: 'style',
            label: 'Input Style',
            key: 'style',
            preserve: true,
          },
          {
            $formkit: 'primeInputText',
            if: '$get(selectButton).value === \'showDisplay\'',
            name: 'class',
            label: 'Input StyleClass',
            key: 'class',
            preserve: true,
          },
        ]

  return { editorSchema, inputNames, inputOptions, editorDataToSchema, editorDataToJson, editorDataToCode, schemaToEditorData }
}
