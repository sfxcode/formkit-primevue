export function useInputEditor() {
  const primeInputWithOptionNames = ['CascadeSelect', 'Listbox', 'MultiSelect', 'RadioButton', 'Select', 'SelectButton', 'TreeSelect']

  const primeInputNames = [...primeInputWithOptionNames, 'AutoComplete', 'Checkbox', 'ColorPicker', 'DatePicker', 'Editor', 'InputMask', 'InputNumber', 'InputOtp', 'InputText', 'Knob', 'Password', 'Rating', 'Slider', 'Textarea', 'ToggleButton', 'ToggleSwitch'].sort()

  function generateSchemaItemId(): string {
    return `id-${Math.random().toString(36).substring(2, 15)}`
  }

  function editorDataToSchema(data: any): any {
    if (!data)
      return {}

    const formkitInput = data?._dollar_formkit
    let tempData = { }
    if (data.prime && data.prime?.length > 0) {
      const mapped = data.prime?.map((entry) => {
        const key = entry.prime_key
        let value = entry.prime_value
        // some inputs require numbers
        if (formkitInput === 'primeInputOtp' && key === 'length')
          value = +value
        return [key, value]
      })
      tempData = Object.assign(...mapped.map(([key, val]) => ({ [key]: val })))
    }

    const readonlyValue = data.readonly ? true : undefined
    const disabledValue = data.disabled ? true : undefined
    const preserveValue = data.preserve ? true : undefined

    const defaultObject = { readonly: readonlyValue, disabled: disabledValue, preserve: preserveValue }

    const undefinedObject = { prime: undefined, schemaResultFormKey: undefined, _dollar_formkit: undefined, slots: undefined, selectButton: undefined }

    const useOptions = primeInputWithOptionNames.map(s => `prime${s}`).includes(formkitInput)

    let result = {}
    if (useOptions)
      result = { ...data, $formkit: formkitInput, ...tempData, ...undefinedObject, ...defaultObject, optionLabel: 'label', optionValue: 'value' }
    else
      result = { ...data, $formkit: formkitInput, ...tempData, ...undefinedObject, ...defaultObject, options: undefined }

    return result
  }

  function dataToSchema(data: any): any {
    const schema = editorDataToSchema(data)
    if (schema.options) {
      const options = schema.options.map((o: object) => JSON.parse(JSON.stringify(o)))
      return { ...schema, options }
    }
    else {
      return schema
    }
  }

  function editorDataToJson(data: any): string {
    return JSON.stringify(dataToSchema(data))
  }

  function objectToString(data: any) {
    return `{${Object.entries(data).map(([key, value]) => {
      if (key === 'options' && value.length > 0) {
        let result = '['
        value.forEach(o => result = `${result + objectToString(o)}, `)
        return `${key}: ${result.substring(0, result.length - 2)}]`
      }
      else if (key === 'primeInputOtp') {
        return `${key}: ${value}`
      }
      else {
        return `${key}: '${value}'`
}
    }).join()}}`
  }

  function editorDataToObject(data: any): string {
    return objectToString(JSON.parse(editorDataToJson(data)))
  }

  function schemaToEditorData(schema: any): any {
    const formkitInput = schema?.$formkit
    return { ...schema, _dollar_formkit: formkitInput }
  }

  return { primeInputNames, generateSchemaItemId, editorDataToSchema, editorDataToJson, editorDataToCode: editorDataToObject, schemaToEditorData }
}
