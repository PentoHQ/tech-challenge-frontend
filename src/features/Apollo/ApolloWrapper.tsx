import { ApolloProvider } from '@apollo/client'
import { useAuth0 } from '@auth0/auth0-react'
import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import Loading from 'src/components/Loading'
import createApolloClient from './createApolloClient'

type Props = {
  children: ReactNode
}

const ApolloWrapper = ({ children }: Props): JSX.Element => {
  const { getAccessTokenSilently } = useAuth0()
  const [token, setToken] = useState('null')
  const [isLoading, setIsLoading] = useState(true)

  const client = createApolloClient(token)

  useEffect(() => {
    getAccessTokenSilently()
      .then((token) => setToken(token))
      .finally(() => setIsLoading(false))
  }, [getAccessTokenSilently])

  if (isLoading) return <Loading />

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default ApolloWrapper
