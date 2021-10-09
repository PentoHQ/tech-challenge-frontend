import type { FC, LazyExoticComponent } from 'react'

export type RoutingLevel = 'UNPROTECTED' | 'PROTECTED'

export type UnprotectedRoute = '/'
export type ProtectedRoute = '/stats' | '/'

export type RouteObject = {
  component: FC | LazyExoticComponent<FC>
}

export type PartitionedRoutes<T extends string> = Record<T, RouteObject>
