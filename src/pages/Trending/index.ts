import { createRouteView } from 'atomic-router-react'

import { routes } from '@/shared/config/routes'
import { createLazyPage } from '@/shared/factories/createLazyPage'

export const trendingPage = {
  route: routes.trending.route,
  view: createRouteView({
    route: routes.trending.route,
    view: createLazyPage(routes.trending.route, () => import('./page'), {})
  })
}
