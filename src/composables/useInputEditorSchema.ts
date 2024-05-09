import { useFormKitSchema } from './useFormKitSchema'

export function useInputEditorSchema() {
  const { addElement, addList, addListGroup, addComponent } = useFormKitSchema()
  function addFlexElement(children: any[]) {
    return addElement('div', children, { style: 'min-width: 40rem;display: flex;gap: 1rem;' })
  }
  function addGroupButtons() {
    const addButtonComponent = (onClick: string = '', label: string = '', icon: string = '', severity: string = '', render: string = 'true', styleClass: string = 'p-button-sm', style: string = 'margin-left: 0.5rem;'): object => {
      return addComponent('Button', { onClick, label, icon, class: styleClass, style, severity }, render)
    }

    return addElement('div', [
      addButtonComponent('$removeNode($node, $index)', '', 'pi pi-times', 'danger'),
      addButtonComponent('$copyNode($node, $index)', '', 'pi pi-plus'),
      addButtonComponent('$moveNodeUp($node, $index)', '', 'pi pi-arrow-up', 'secondary', '$index != 0'),
      addElement('span', [], { style: 'margin-left: 0.5rem;margin-right: 2.5rem;' }, '$index == 0'),
      addButtonComponent('$moveNodeDown($node, $index)', '', 'pi pi-arrow-down', 'secondary', '$index < $node.value.length -1'),
      addElement('span', [], { style: 'margin-left: 0.5rem;margin-right: 2.5rem;' }, '$index == $node.value.length -1'),
    ], { style: 'padding-top: 1.5rem;' })
  }

  const primeInputWithOptionNames = ['CascadeSelect', 'Dropdown', 'Listbox', 'MultiSelect', 'RadioButton', 'SelectButton', 'TreeSelect']

  const primeInputNames = [...primeInputWithOptionNames, 'AutoComplete', 'Calendar', 'Checkbox', 'Chips', 'ColorPicker', 'Editor', 'InputMask', 'InputNumber', 'InputOtp', 'InputSwitch', 'InputText', 'Knob', 'Password', 'Rating', 'Slider', 'Textarea', 'ToggleButton', 'TriStateCheckbox'].sort()

  function primeInputOptions(list: string[]) {
    return list.map((name: string) => {
      return { label: name, value: `prime${name}` }
    })
  }

  const selectOptions = [
    { label: 'Base', value: 'showBasic' },
    { label: 'Display', value: 'showDisplay' },
    { label: 'Validation', value: 'showValidation' },
    { label: 'Options', value: 'showOptions' },
    { label: 'Prime', value: 'showPrime' },
  ]

  const validationOptions = [
    { label: 'Blur', value: 'blur' },
    { label: 'Live', value: 'live' },
    { label: 'Dirty', value: 'dirty' },
    { label: 'Submit', value: 'submit' },
  ]

  const positionOptions = [
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },

  ]

  function editorDataToSchema(data: any): any {
    const formkitInput = data?._dollar_formkit
    let tempData = { }
    if (data.prime?.length > 0) {
      const mapped = data.prime?.map(entry => [entry.prime_key, entry.prime_value])
      tempData = Object.assign(...mapped.map(([key, val]) => ({ [key]: val })))
    }

    const readonlyValue = data.readonly ? true : undefined
    const disabledValue = data.disabled ? true : undefined
    const preserveValue = data.preserve ? true : undefined

    const defaultObject = { readonly: readonlyValue, disabled: disabledValue, preserve: preserveValue }

    const undefinedObject = { prime: undefined, schemaResultFormKey: undefined, _dollar_formkit: undefined, slots: undefined, selectButton: undefined }

    const useOptions = primeInputWithOptionNames.map(s => `prime${s}`).includes(formkitInput)

    if (useOptions)
      return { ...data, $formkit: formkitInput, ...tempData, ...undefinedObject, ...defaultObject, optionLabel: 'label', optionValue: 'value' }
    else
      return { ...data, $formkit: formkitInput, ...tempData, ...undefinedObject, ...defaultObject, options: undefined }
  }

  function editorDataToJson(data: any): string {
    return JSON.stringify(editorDataToSchema(data))
  }

  function editorDataToObject(data: any): string {
    return `{${Object.entries(JSON.parse(editorDataToJson(data))).map(([key, value]) => `${key}: '${value}'`).join()}}`
  }

  function schemaToEditorData(schema: any): any {
    const formkitInput = schema?.$formkit
    return { ...schema, _dollar_formkit: formkitInput }
  }

  function editorSchema(inputOptions: any[] = primeInputOptions(primeInputNames)) {
    return [
      {
        $formkit: 'primeDropdown',
        id: 'inputSelection',
        name: '_dollar_formkit',
        label: 'Prime Input',
        value: 'primeInputText',
        optionLabel: 'label',
        optionValue: 'value',
        options: inputOptions,
        key: 'schema_inputSelection',
        preserve: true,
      },
      {
        $formkit: 'primeInputText',
        name: 'name',
        label: 'Field Name',
        validation: 'required',
        validationVisibility: 'live',
        key: 'schema_name',
        preserve: true,
      },
      {
        $formkit: 'primeSelectButton',
        id: 'selectButton',
        name: 'selectButton',
        options: selectOptions,
        optionLabel: 'label',
        optionValue: 'value',
        value: 'showBasic',
        allowEmpty: false,
        key: 'schema_selectButton',
        preserve: true,
      },
      {
        $formkit: 'primeInputText',
        if: '$get(selectButton).value === \'showBasic\'',
        name: 'label',
        label: 'Input Label',
        key: 'schema_label',
        preserve: true,
      },
      {
        $formkit: 'primeInputText',
        if: '$get(selectButton).value === \'showBasic\'',
        name: 'help',
        label: 'Input Help',
        key: 'schema_help',
        preserve: true,
      },
      {
        $formkit: 'primeInputText',
        if: '$get(selectButton).value === \'showBasic\'',
        name: 'id',
        label: 'Input ID',
        key: 'schema_id',
        preserve: true,
      },
      {
        $formkit: 'primeInputText',
        if: '$get(selectButton).value === \'showBasic\'',
        name: 'value',
        label: 'Input Value',
        key: 'schema_value',
        preserve: true,
      },
      {
        $formkit: 'primeInputText',
        if: '$get(selectButton).value === \'showBasic\'',
        name: 'key',
        label: 'Input Key',
        key: 'schema_key',
        preserve: true,
      },
      {
        $formkit: 'primeCheckbox',
        if: '$get(selectButton).value === \'showBasic\'',
        name: 'preserve',
        label: 'Input Preserve',
        key: 'schema_preserve',
        value: false,
        preserve: true,
      },
      {
        $formkit: 'primeInputText',
        if: '$get(selectButton).value === \'showValidation\'',
        name: 'validation',
        label: 'Field Validation',
        key: 'schema_validation',
        preserve: true,
      },
      {
        $formkit: 'primeDropdown',
        if: '$get(selectButton).value === \'showValidation\'',
        name: 'validation-visibility',
        label: 'Field Validation Visibility',
        value: 'blur',
        optionLabel: 'label',
        optionValue: 'value',
        options: validationOptions,
        key: 'schema_validation-visibility',
        preserve: true,
      },
      {
        $formkit: 'primeInputText',
        if: '$get(selectButton).value === \'showValidation\'',
        name: 'validation-label',
        label: 'Field Validation Label',
        key: 'schema_validation-label',
        preserve: true,
      },
      {
        $formkit: 'primeInputText',
        if: '$get(selectButton).value === \'showDisplay\'',
        name: 'tabindex',
        label: 'Tab Index',
        key: 'schema_tabindex',
        preserve: true,
      },
      {
        $formkit: 'primeInputText',
        if: '$get(selectButton).value === \'showDisplay\'',
        name: 'if',
        label: 'Should Render',
        key: 'schema_if',
        preserve: true,
      },

      {
        $formkit: 'primeInputText',
        if: '$get(selectButton).value === \'showDisplay\'',
        name: 'style',
        label: 'Input Style',
        key: 'schema_style',
        preserve: true,
      },
      {
        $formkit: 'primeInputText',
        if: '$get(selectButton).value === \'showDisplay\'',
        name: 'class',
        label: 'Input StyleClass',
        key: 'schema_class',
        preserve: true,
      },
      {
        $formkit: 'primeInputText',
        if: '$get(selectButton).value === \'showDisplay\'',
        name: 'icon',
        label: 'Icon',
        key: 'schema_icon',
        preserve: true,
      },
      {
        $formkit: 'primeDropdown',
        if: '$get(selectButton).value === \'showDisplay\'',
        name: 'iconPosition',
        label: 'Icon Position',
        optionLabel: 'label',
        optionValue: 'value',
        options: positionOptions,
        key: 'schema_iconPosition',
        preserve: true,
      },
      {
        $formkit: 'primeCheckbox',
        if: '$get(selectButton).value === \'showDisplay\'',
        name: 'disabled',
        label: 'Input Disabled',
        key: 'schema_disabled',
        value: false,
        preserve: true,
      },
      {
        $formkit: 'primeCheckbox',
        if: '$get(selectButton).value === \'showDisplay\'',
        name: 'readonly',
        label: 'Input Read Only',
        key: 'schema_readonly',
        value: false,
        preserve: true,
      },
      addList('options', [
        addFlexElement([
          addComponent('Button', { onClick: '$addNode($node)', label: 'Add Option', class: 'p-button-sm', style: 'margin-bottom: 2rem;', icon: 'pi pi-plus' }, '$node.value.length == 0'),
        ]),
        addListGroup(
          [
            addFlexElement([
              {
                $formkit: 'primeInputText',
                label: 'Label',
                name: 'label',
              },
              {
                $formkit: 'primeInputText',
                label: 'Value',
                name: 'value',

              },
              addGroupButtons(),
            ]),
          ],
        ),
      ], true, '$get(selectButton).value === \'showOptions\'', { key: 'schema_options', preserve: true }),
      addList('prime', [
        addFlexElement([
          addComponent('Button', { onClick: '$addNode($node)', label: 'Add PrimeVue Attribute', class: 'p-button-sm', style: 'margin-bottom: 2rem;', icon: 'pi pi-plus' }, '$node.value.length == 0'),
        ]),
        addListGroup(
          [
            addFlexElement([
              {
                $formkit: 'primeInputText',
                label: 'PrimeVue Property',
                name: 'prime_key',
              },
              {
                $formkit: 'primeInputText',
                label: 'Value',
                name: 'prime_value',

              },
              addGroupButtons(),
            ]),
          ],
        ),
      ], true, '$get(selectButton).value === \'showPrime\'', { key: 'schema_prime', preserve: true }),
    ]
  }

  return { editorSchema, primeInputNames, primeInputOptions, editorDataToSchema, editorDataToJson, editorDataToCode: editorDataToObject, schemaToEditorData }
}
