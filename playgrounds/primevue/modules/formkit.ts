import type { FormKitExtendableSchemaRoot, FormKitNode } from '@formkit/core'
import type { UserModule } from '@/types'
import { createAutoAnimatePlugin, createMultiStepPlugin } from '@formkit/addons'

import { de, en } from '@formkit/i18n'
import { defaultConfig, plugin } from '@formkit/vue'
import { primeInputs, primeOutputs } from 'my-library/definitions'
import { addPrimeAsteriskPlugin } from '../../../packages/formkit-primevue/src/plugins'
import '@formkit/addons/css/multistep'

export function addPrimeLabelPlugin(node: FormKitNode): void {
  if (!node.props.type.startsWith('prime'))
    return

  node.on('created', () => {
    if (node.props.definition?.schema) {
      const schemaFn = node.props.definition?.schema as FormKitExtendableSchemaRoot
      node.props.definition!.schema = (sectionsSchema = {}) => {
        sectionsSchema.label = {
          children: [
            {
              $cmp: 'PrimeLabel',
              props: {
                label: '$label',
                help: '$help',
              },
            },
          ],
        }
        sectionsSchema.help = {
        }

        return schemaFn(sectionsSchema)
      }
    }
  })
}

export const install: UserModule = ({ app }) => {
  app.use(plugin, defaultConfig({
    locales: { de, en },
    // Define the active locale
    locale: 'en',
    inputs: { ...primeInputs, ...primeOutputs },
    plugins: [
      createAutoAnimatePlugin(
        {
          /* optional AutoAnimate config */
          // default:
          duration: 250,
          easing: 'ease-in-out',
        },
        {
          /* optional animation targets object */
          // default:
          global: ['outer', 'inner'],
          form: ['form'],
          repeater: ['items'],
        },
      ),
      addPrimeAsteriskPlugin,
      createMultiStepPlugin(),
    ],
  }))
}
