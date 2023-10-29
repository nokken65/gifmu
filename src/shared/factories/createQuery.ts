import {
  Contract,
  createQuery as createQueryFarfetched
} from '@farfetched/core'
import { createEffect } from 'effector'
import { ZodSchema } from 'zod'

import { schemas } from '../api/giphy'

export function createQuery<Params, Response>({
  handler
}: {
  handler: (params?: Params | undefined) => Promise<Response>
}) {
  const requestFx = createEffect(handler)

  const handlerResponseSchemasEntrie = Object.entries(schemas).find(
    ([name]) => {
      return name.includes(handler.name) && name.includes('Response')
    }
  )

  const query = createQueryFarfetched({
    effect: requestFx,
    name: 'fisher0129',
    ...(handlerResponseSchemasEntrie === undefined
      ? {}
      : {
          contract: zodContract<Awaited<ReturnType<typeof requestFx>>>(
            handlerResponseSchemasEntrie[1]
          )
        })
  })

  if (import.meta.env.DEV) {
    query.$succeeded.watch((done) => {
      if (done) {
        console.debug(`[query - ${handler.name}] => OK`)
      }
    })
    // @ts-ignore
    query.$error.watch((error) => {
      if (error !== null) {
        console.error(`[query - ${handler.name}] => error: `, error)
      }
    })
  }

  return query
}

function zodContract<T>(data: ZodSchema): Contract<unknown, T> {
  return {
    isData: (raw: unknown): raw is T => data.safeParse(raw).success,
    getErrorMessages(raw: unknown) {
      const validation = data.safeParse(raw)

      if (validation.success) {
        return []
      }

      return validation.error.errors.map((e) => {
        const path = e.path.join('.')
        return path !== '' ? `${e.message}, path: ${path}` : e.message
      })
    }
  }
}
