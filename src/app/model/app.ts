import { createPhases } from '@/shared/factories/createPhases'

import { router } from './router'

const { run, $status } = createPhases({
  phases: [
    {
      name: 'initialized',
      deps: [router.setup]
    }
  ]
})

export const app = {
  run,
  $status
}
