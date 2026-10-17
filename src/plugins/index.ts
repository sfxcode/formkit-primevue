import type { FormKitExtendableSchemaRoot, FormKitNode } from '@formkit/core'
import { formInputs, formOutputs } from '../definitions'

// `prime` types are matched by prefix, as before. `form` types by exact name: a prefix match
// would also catch FormKit's own `form` type and any `formSomething` type of the application.
function isFormType(type: string): boolean {
  return Object.hasOwn(formInputs, type) || Object.hasOwn(formOutputs, type)
}

function isPrimeType(type: string): boolean {
  return type.startsWith('prime') || isFormType(type)
}

function isOutputType(type: string): boolean {
  return type.startsWith('primeOutput') || Object.hasOwn(formOutputs, type)
}

export function addPrimeAsteriskPlugin(node: FormKitNode): void {
  if (!isPrimeType(node.props.type) || isOutputType(node.props.type))
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

export function addLabelPlugin(node: FormKitNode): void {
  if (!isPrimeType(node.props.type))
    return

  node.on('created', () => {
    if (node.props.definition?.schema) {
      const schemaFn = node.props.definition?.schema as FormKitExtendableSchemaRoot
      node.props.definition!.schema = (sectionsSchema = {}) => {
        sectionsSchema.label = {
          children: [{
            $el: 'span',
            attrs: {
              title: '$help',
              class: 'p-formkit-label',
            },
            children: ['$label'],
          }, {
            $el: 'span',
            if: '$state.required',
            attrs: {
              class: 'p-formkit-required',
              title: '$help',
            },
            children: ['*'],
          }],
        }
        sectionsSchema.help = {
          children: [],
        }

        return schemaFn(sectionsSchema)
      }
    }
  })
}

export { createAutoAnimatePlugin } from './autoAnimate'
export type { AutoAnimateTargets } from './autoAnimate'
