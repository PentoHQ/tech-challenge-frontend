import { lazy } from 'react'
import type { PartitionedRoutes, UnprotectedRoute } from 'src/routes/@types'

/**
 * Unprotected Routes object
 */
export const unprotectedRoutes: PartitionedRoutes<UnprotectedRoute> = {
  '/': {
    component: lazy(() => import('src/features/Auth/Page')),
  },
}
