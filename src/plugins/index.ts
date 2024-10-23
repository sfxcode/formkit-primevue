import type { FormKitExtendableSchemaRoot, FormKitNode } from '@formkit/core'

export function addPrimeAsteriskPlugin(node: FormKitNode): void {
  if (!node.props.type.startsWith('prime'))
    return

  node.on('created', () => {
    if (node.props.definition?.schema) {
      const schemaFn = node.props.definition?.schema as FormKitExtendableSchemaRoot
      node.props.definition!.schema = (sectionsSchema = {}) => {
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
    }
  })
}
