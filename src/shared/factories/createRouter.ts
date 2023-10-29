import { createHistoryRouter } from 'atomic-router'
import { createStore, sample } from 'effector'
import { createBrowserHistory } from 'history'
import { combineEvents } from 'patronum'
import type { UnmappedRouteObject } from 'atomic-router'
import type { Event } from 'effector'

type TOptions = {
  routes: UnmappedRouteObject<any>[]
  setup: Event<void>
}

export const createRouter = ({ routes, setup }: TOptions) => {
  const router = createHistoryRouter({
    routes
  })

  const $isReady = createStore(false)

  sample({
    clock: setup,
    fn: () => createBrowserHistory(),
    target: router.setHistory
  })

  sample({
    clock: combineEvents({ events: [router.initialized, router.setHistory] }),
    source: [],
    fn: () => true,
    target: $isReady
  })

  return { router, $isReady }
}
