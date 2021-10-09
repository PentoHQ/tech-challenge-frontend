import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutingLevel } from 'src/hooks/useRoutingLevel'

export const AppRoutes = (): JSX.Element => {
  const { RoutingComponent } = useRoutingLevel()

  return (
    <Router>
      <RoutingComponent />
    </Router>
  )
}
