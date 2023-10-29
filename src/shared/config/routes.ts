import { createRoute } from 'atomic-router'

export const routes = {
  index: { path: '/', route: createRoute() },
  notFound: { path: '/404', route: createRoute() },

  trending: { path: '/trending', route: createRoute() },
  search: { path: '/search/:query', route: createRoute<{ query: string }>() },
  gif: { path: '/gif/:id', route: createRoute<{ id: string }>() }
}

export const routesConfig = [
  routes.index,
  routes.notFound,

  routes.trending,
  routes.search,
  routes.gif
]
