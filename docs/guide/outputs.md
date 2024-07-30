# Output Components

formkit-primevue can also be used to output data.

Different types of data can behandled.

::: warning
Some outputs depends on vue-i18n e.g. **OutputNumber** or **OutputDate**.

numberFormats / datetimeFormats from vue-i18n are used to display the values accordingly to the selected format.
:::

## Examples

### OutputNumber

```ts
  const formkitItem =  {
      $formkit: 'primeOutputNumber',
      name: 'mumber', 
      format: 'decimal',  // vue-i18n format
    }
```



## Naming in FormKit
Outputs are used in schema with **prime** as prefix and the **output name** as suffix.

E.g. OutputText -> primeOutputText

## Supported Inputs

<DisplayOutputComponents />
