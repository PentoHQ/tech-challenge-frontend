import { useAuth0 } from '@auth0/auth0-react'
import { useMemo } from 'react'
import type { RoutingLevel } from 'src/routes/@types'
import ProtectedRouter from 'src/routes/Routers/ProtectedRouter'
import UnprotectedRouter from 'src/routes/Routers/UnprotectedRouter'

const RoutingComponents: Record<RoutingLevel, () => JSX.Element> = {
  UNPROTECTED: UnprotectedRouter,
  PROTECTED: ProtectedRouter,
}

export const useRoutingLevel = () => {
  const { isAuthenticated } = useAuth0()

  const routingLevel = useMemo<RoutingLevel>(() => {
    if (!isAuthenticated) {
      return 'UNPROTECTED'
    }

    return 'PROTECTED'
  }, [isAuthenticated])

  const RoutingComponent = useMemo(() => RoutingComponents[routingLevel], [routingLevel])

  return { RoutingComponent }
}
