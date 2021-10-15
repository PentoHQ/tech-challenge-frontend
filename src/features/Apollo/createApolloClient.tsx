import { InMemoryCache, ApolloClient, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_API,
})

const createApolloClient = (authToken: string) => {
  const authLink = setContext((_, { headers }) => {
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        Authorization: `Bearer ${authToken}`,
      },
    }
  })

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
    connectToDevTools: process.env.NODE_ENV === 'development',
  })
  return client
}

export default createApolloClient
