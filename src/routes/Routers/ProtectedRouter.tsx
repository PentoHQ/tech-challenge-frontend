import { useAuth0 } from '@auth0/auth0-react'
import { useCallback } from 'react'
import { Link, Redirect, Route, Switch, useLocation } from 'react-router-dom'
import styles from 'src/App.module.scss'
import Page from 'src/components/Page'
import Tabs, { Tab } from 'src/components/Tabs'
import ApolloWrapper from 'src/features/Apollo/ApolloWrapper'
import type { ProtectedRoute } from 'src/routes/@types'
import { protectedRoutes } from 'src/routes/routingObjects/protectedRoutes'

const ProtectedRouter = (): JSX.Element => {
  const location = useLocation()
  const { logout } = useAuth0()

  const onLogout = useCallback(() => {
    logout()
  }, [logout])

  return (
    <>
      <Page className={styles.APP}>
        <div className={styles.header}>
          <Tabs selected={location.pathname} tabComponent={Link}>
            <Tab label="sessions" value="/" to="/"></Tab>
            <Tab label="Stats" value="/stats" to="/stats"></Tab>
          </Tabs>
          <button className={styles.logout} onClick={onLogout}>
            Logout
          </button>
        </div>

        <ApolloWrapper>
          <Switch>
            {(Object.keys(protectedRoutes) as (keyof typeof protectedRoutes)[]).map((entry) => {
              const Component = protectedRoutes[entry].component

              return (
                <Route<{}, ProtectedRoute> exact path={entry} key={entry}>
                  <Component />
                </Route>
              )
            })}
            <Route path="/*" component={() => <Redirect to="/" />} />
          </Switch>
        </ApolloWrapper>
      </Page>
    </>
  )
}

export default ProtectedRouter
