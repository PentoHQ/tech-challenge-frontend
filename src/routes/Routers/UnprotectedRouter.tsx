import { Redirect, Route, Switch } from 'react-router-dom'
import type { UnprotectedRoute } from 'src/routes/@types'
import { unprotectedRoutes } from 'src/routes/routingObjects/unprotectedRoutes'

const UnprotectedRouter = (): JSX.Element => {
  return (
    <Switch>
      {(Object.keys(unprotectedRoutes) as (keyof typeof unprotectedRoutes)[]).map((entry) => {
        const Component = unprotectedRoutes[entry].component

        return (
          <Route<{}, UnprotectedRoute> path={entry} key={entry}>
            <Component />
          </Route>
        )
      })}
      <Route path="/*" component={() => <Redirect to="/" />} />
    </Switch>
  )
}

export default UnprotectedRouter
