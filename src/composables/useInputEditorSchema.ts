import { useFormKitSchema } from './useFormKitSchema'
import { useInputEditor } from './useInputEditor'
import { useFormKitRepeater } from './useFormKitRepeater'

export function useInputEditorSchema() {
  const { addList, addListGroup } = useFormKitSchema()
  const { addInsertButton, addGroupButtons } = useFormKitRepeater()
  const { primeInputNames, primeOutputNames } = useInputEditor()

  function primeInputOptions(list: string[]) {
    return list.map((name: string) => {
      return { label: name, value: `prime${name}` }
    })
  }

  const selectOptions = [
    { label: 'Base', value: 'showBasic' },
    { label: 'Display', value: 'showDisplay' },
    { label: 'Style', value: 'showStyle' },
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

  function editorSchema(inputOptions: any[] = primeInputOptions([...primeInputNames, ...primeOutputNames])) {
    return [
      {
        $formkit: 'primeSelect',
        id: 'inputSelection',
        name: '_dollar_formkit',
        label: 'Prime Input',
        value: 'primeInputText',
        optionLabel: 'label',
        optionValue: 'value',
        options: inputOptions,
        filter: true,
        key: 'schema_inputSelection',
        outerClass: 'col-6',
        preserve: true,
      },
      {
        $formkit: 'primeInputText',
        name: 'name',
        label: 'Field Name',
        validation: 'required',
        validationVisibility: 'live',
        key: 'schema_name',
        outerClass: 'col-6',
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
        name: 'value',
        label: 'Input Value',
        key: 'schema_value',
        outerClass: 'col-6',
        preserve: true,
      },
      {
        $formkit: 'primeInputText',
        if: '$get(selectButton).value === \'showBasic\'',
        name: 'format',
        label: 'Value Format',
        key: 'schema_format',
        outerClass: 'col-6',
        preserve: true,
      },
      {
        $formkit: 'primeInputText',
        if: '$get(selectButton).value === \'showBasic\'',
        name: 'id',
        label: 'Input ID',
        key: 'schema_id',
        outerClass: 'col-6',
        preserve: true,
      },
      {
        $formkit: 'primeInputText',
        if: '$get(selectButton).value === \'showBasic\'',
        name: 'key',
        label: 'Input Key',
        key: 'schema_key',
        outerClass: 'col-6',
        preserve: true,
      },
      {
        $formkit: 'primeInputText',
        if: '$get(selectButton).value === \'showBasic\'',
        name: 'tabindex',
        label: 'Tab Index',
        key: 'schema_tabindex',
        outerClass: 'col-6',
        preserve: true,
      },
      {
        $formkit: 'primeCheckbox',
        if: '$get(selectButton).value === \'showBasic\'',
        name: 'preserve',
        label: 'Preserve',
        key: 'schema_preserve',
        value: false,
        suffix: 'Input Preserve',
        outerClass: 'col-3',
        preserve: true,
      },
      {
        $formkit: 'primeInputText',
        if: '$get(selectButton).value === \'showDisplay\'',
        name: 'class',
        label: 'Input StyleClass',
        key: 'schema_class',
        outerClass: 'col-6',
        preserve: true,
      },
      {
        $formkit: 'primeInputText',
        if: '$get(selectButton).value === \'showDisplay\'',
        name: 'style',
        label: 'Input Style',
        key: 'schema_style',
        outerClass: 'col-6',
        preserve: true,
      },
      {
        $formkit: 'primeInputText',
        if: '$get(selectButton).value === \'showDisplay\'',
        name: 'if',
        label: 'Should Render (if-Expression)',
        key: 'schema_if',
        preserve: true,
      },
      {
        $formkit: 'primeInputText',
        if: '$get(selectButton).value === \'showDisplay\'',
        name: 'iconPrefix',
        label: 'Prefix Icon',
        key: 'schema_prefix_icon',
        outerClass: 'col-6',
        preserve: true,
      },
      {
        $formkit: 'primeInputText',
        if: '$get(selectButton).value === \'showDisplay\'',
        name: 'prefix',
        label: 'Prefix',
        key: 'schema_prefix',
        outerClass: 'col-6',
        preserve: true,
      },
      {
        $formkit: 'primeInputText',
        if: '$get(selectButton).value === \'showDisplay\'',
        name: 'suffix',
        label: 'Suffix',
        key: 'schema_suffix',
        outerClass: 'col-6',
        preserve: true,
      },
      {
        $formkit: 'primeInputText',
        if: '$get(selectButton).value === \'showDisplay\'',
        name: 'iconSuffix',
        label: 'Suffix Icon',
        key: 'schema_suffix_icon',
        outerClass: 'col-6',
        preserve: true,
      },
      {
        $formkit: 'primeCheckbox',
        if: '$get(selectButton).value === \'showDisplay\'',
        name: 'disabled',
        label: 'Input Disabled',
        key: 'schema_disabled',
        value: false,
        outerClass: 'col-3',
        preserve: true,
      },
      {
        $formkit: 'primeCheckbox',
        if: '$get(selectButton).value === \'showDisplay\'',
        name: 'readonly',
        label: 'Input Read Only',
        key: 'schema_readonly',
        value: false,
        outerClass: 'col-3',
        preserve: true,
      },
      {
        $formkit: 'primeInputText',
        if: '$get(selectButton).value === \'showStyle\'',
        name: 'outerClass',
        label: 'Outer Class',
        key: 'schema_outerClass',
        preserve: true,
      },
      {
        $formkit: 'primeInputText',
        if: '$get(selectButton).value === \'showStyle\'',
        name: 'wrapperClass',
        label: 'Wrapper Class',
        key: 'schema_wrapperClass',
        preserve: true,
      },
      {
        $formkit: 'primeInputText',
        if: '$get(selectButton).value === \'showStyle\'',
        name: 'innerClass',
        label: 'Inner Class',
        key: 'schema_innerClass',
        preserve: true,
      },
      {
        $formkit: 'primeInputText',
        if: '$get(selectButton).value === \'showValidation\'',
        name: 'validation',
        label: 'Field Validation',
        key: 'schema_validation',
        outerClass: 'col-6',
        preserve: true,
      },
      {
        $formkit: 'primeSelect',
        if: '$get(selectButton).value === \'showValidation\'',
        name: 'validation-visibility',
        label: 'Field Validation Visibility',
        optionLabel: 'label',
        optionValue: 'value',
        options: validationOptions,
        key: 'schema_validation-visibility',
        outerClass: 'col-6',
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

      addList('options', [
        addInsertButton('Add Option'),
        addListGroup(
          [
            {
              $formkit: 'primeInputText',
              label: 'Label',
              name: 'label',
              outerClass: 'col-4',
            },
            {
              $formkit: 'primeInputText',
              label: 'Value',
              name: 'value',
              outerClass: 'col-4',
            },
            addGroupButtons(),
          ],
        ),
      ], true, '$get(selectButton).value === \'showOptions\'', { key: 'schema_options', preserve: true }),
      addList('prime', [
        addInsertButton('Add PrimeVue Attribute'),
        addListGroup(
          [
            {
              $formkit: 'primeInputText',
              label: 'PrimeVue Key',
              name: 'prime_key',
              outerClass: 'col-3',
            },
            {
              $formkit: 'primeInputText',
              label: 'Value',
              name: 'prime_value',
              outerClass: 'col-3',
            },
            addGroupButtons(),
          ],
        ),
      ], true, '$get(selectButton).value === \'showPrime\'', { key: 'schema_prime', preserve: true }),
    ]
  }

  return { editorSchema, primeInputOptions }
}
