import { redirect } from 'atomic-router'
import { createEvent } from 'effector'

import { routes, routesConfig } from '@/shared/config/routes'
import { createRouter } from '@/shared/factories/createRouter'

const setup = createEvent<void>()

const { router: routerInstance, $isReady } = createRouter({
  routes: routesConfig,
  setup
})

redirect({
  clock: routerInstance.routeNotFound,
  route: routes.notFound.route
})

redirect({
  clock: routes.index.route.opened,
  route: routes.trending.route
})

export const router = { ...routerInstance, $isReady, setup }
