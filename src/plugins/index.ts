export function addPrimeAsteriskPlugin(node: any): any {
  if (!node.props.type.startsWith('prime'))
    return

  node.on('created', () => {
    const schemaFn = node.props.definition.schema
    node.props.definition.schema = (sectionsSchema = {}) => {
      sectionsSchema.label = {
        children: ['$label', {
          $el: 'span',
          if: '$state.required',
          attrs: {
            class: 'p-formkit-asterisk',
          },
          children: ['*'],
        }],
      }

      return schemaFn(sectionsSchema)
    }
  })
}
