import { createRoutesView } from 'atomic-router-react'

import { Layout } from './layouts/Lauout'
import { trendingPage } from './Trending'

const Routing = createRoutesView({
  routes: [
    {
      route: trendingPage.route,
      view: trendingPage.view,
      layout: Layout
    }
  ]
})

export { Routing }
