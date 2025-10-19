export function useInputEditor() {
  const primeInputWithOptionNames = ['CascadeSelect', 'Listbox', 'MultiSelect', 'RadioButton', 'Select', 'SelectButton', 'TreeSelect']

  const primeInputNames = [...primeInputWithOptionNames, 'AutoComplete', 'Checkbox', 'ColorPicker', 'DatePicker', 'Editor', 'InputMask', 'InputNumber', 'InputOtp', 'InputText', 'Knob', 'Password', 'Rating', 'Slider', 'Textarea', 'ToggleButton', 'ToggleSwitch'].sort()

  const primeOutputNames = ['OutputBoolean', 'OutputDate', 'OutputDuration', 'OutputLink', 'OutputList', 'OutputNumber', 'OutputReference', 'OutputText']

  function editorDataToSchema(data: any): any {
    if (!data)
      return {}

    const formkitInput = data?._dollar_formkit
    let tempData: Record<string, any> = {}

    if (data.prime && Array.isArray(data.prime) && data.prime.length > 0) {
      const mapped = data.prime
        .filter((entry: any) => entry && typeof entry === 'object' && 'prime_key' in entry && 'prime_value' in entry)
        .map((entry: { prime_key: string, prime_value: any }) => {
          const key: string = entry.prime_key || ''
          let value: any = entry.prime_value
          // some inputs require numbers
          if (formkitInput === 'primeInputOtp' && key === 'length' && value !== undefined) {
            value = Number(value)
          }
          return [key, value] as [string, any]
        })

      tempData = Object.assign({}, ...mapped.map(([key, val]: [string, any]) => ({ [key]: val })))
    }

    const readonlyValue = data.readonly === true ? true : undefined
    const disabledValue = data.disabled === true ? true : undefined
    const preserveValue = data.preserve === true ? true : undefined

    const defaultObject = {
      readonly: readonlyValue,
      disabled: disabledValue,
      preserve: preserveValue,
    }

    // outer class
    let outerClass: string | undefined = ''
    if (data.outerClass)
      outerClass = `${outerClass} ${data.outerClass}`.trim()

    // wrapper class
    let wrapperClass: string | undefined = ''
    if (data.wrapperClass)
      wrapperClass = `${wrapperClass} ${data.wrapperClass}`.trim()

    // inner class
    let innerClass: string | undefined = ''
    if (data.innerClass)
      innerClass = `${innerClass} ${data.innerClass}`.trim()

    const undefinedObject = {
      prime: undefined,
      schemaResultFormKey: undefined,
      _dollar_formkit: undefined,
      slots: undefined,
      selectButton: undefined,
    }

    const useOptions = formkitInput
      ? primeInputWithOptionNames
          .map(s => `prime${s}`)
          .includes(formkitInput)
      : false

    let result: Record<string, any> = {}

    if (useOptions) {
      result = {
        ...data,
        $formkit: formkitInput,
        ...tempData,
        ...undefinedObject,
        ...defaultObject,
        outerClass,
        wrapperClass,
        innerClass,
        optionLabel: 'label',
        optionValue: 'value',
      }
    }
    else {
      result = {
        ...data,
        $formkit: formkitInput,
        ...tempData,
        ...undefinedObject,
        ...defaultObject,
        outerClass,
        wrapperClass,
        innerClass,
        options: undefined,
      }
    }

    // cleanup empty values
    for (const key in result) {
      const value = result[key]
      if (value !== null && value !== undefined
        && (typeof value === 'string')) {
        if (value.trim().length === 0)
          result[key] = undefined
      }
    }

    return result
  }

  function dataToSchema(data: any): any {
    if (!data)
      return {}

    const schema = editorDataToSchema(data)

    if (schema?.options && Array.isArray(schema.options)) {
      const options = schema.options.map((o: object) =>
        o ? JSON.parse(JSON.stringify(o)) : {})
      return { ...schema, options }
    }
    else {
      return schema
    }
  }

  function editorDataToJson(data: any): string {
    if (!data)
      return '{}'
    return JSON.stringify(dataToSchema(data))
  }

  function objectToString(data: Record<string, any>): string {
    if (!data)
      return '{}'

    return `{${Object.entries(data).map(([key, value]: [string, any]) => {
      if (key === 'options' && Array.isArray(value) && value.length > 0) {
        let result = '['
        value.forEach((o: any) => {
          if (o && typeof o === 'object') {
            result = `${result + objectToString(o)}, `
          }
        })
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
    if (!data)
      return '{}'

    try {
      const jsonData = editorDataToJson(data)
      return objectToString(JSON.parse(jsonData))
    }
    catch (error) {
      console.error('Error in editorDataToObject:', error)
      return '{}'
    }
  }

  function schemaToEditorData(schema: any): any {
    if (!schema)
      return {}

    const formkitInput = schema?.$formkit
    return { ...schema, _dollar_formkit: formkitInput }
  }

  return {
    primeInputNames,
    primeOutputNames,
    editorDataToSchema,
    editorDataToJson,
    editorDataToCode: editorDataToObject,
    schemaToEditorData,
  }
}
