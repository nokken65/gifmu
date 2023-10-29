import { RouterProvider } from 'atomic-router-react'
import type { ReactNode } from 'react'

import { router } from '../model/router'

export const withRouter = (component: () => ReactNode) => () => (
  <RouterProvider router={router}>{component()}</RouterProvider>
)
