import { Options } from 'orval'
import { mergeDeepWithKey } from 'ramda'

type TransformerFn = Exclude<
  Exclude<
    Exclude<Options['input'], string | undefined>['override'],
    undefined
  >['transformer'],
  string | undefined
>

export const zodTransformer: TransformerFn = (inputSchema) =>
  mergeDeepWithKey(
    (k, l, r) => (k === 'format' && Boolean(r) ? undefined : l),
    inputSchema,
    {
      components: {
        schemas: {
          Gif: {
            properties: {
              update_datetime: { format: 'date' },
              create_datetime: { format: 'date' },
              import_datetime: { format: 'date' },
              trending_datetime: { format: 'date' }
            }
          }
        }
      }
    }
  )
