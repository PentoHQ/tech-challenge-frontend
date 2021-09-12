import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { ApolloProvider } from '@apollo/client'
import createApolloClient from './createApolloClient'
import Spinner from 'components/Spinner'

function AuthWrapper({ children }: { children: React.ReactNode }) {
  const { getAccessTokenSilently } = useAuth0()
  const [token, setToken] = useState('null')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getAccessTokenSilently()
      .then((token) => setToken(token))
      .finally(() => setIsLoading(false))
  }, [getAccessTokenSilently])

  if (isLoading) return <Spinner />
  const client = createApolloClient(token)
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default AuthWrapper
