import { lazy } from 'react'
import type { PartitionedRoutes, ProtectedRoute } from 'src/routes/@types'

/**
 * Protected Routes object
 */
export const protectedRoutes: PartitionedRoutes<ProtectedRoute> = {
  '/': {
    component: lazy(() => import('src/features/SessionsList/Page')),
  },
  '/stats': {
    component: lazy(() => import('src/features/Stats/Page')),
  },
}
