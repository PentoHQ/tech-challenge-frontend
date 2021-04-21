import { useQuery, gql } from '@apollo/client'
import { SessionsQueryQuery, SessionsQueryQueryVariables } from '../../generated/graphql'

const sessionsQuery = gql`
  query SessionsQuery {
    sessions {
      id
      name
      startDate
      endDate
    }
  }
`

export function useGetSessions() {
  const { data, loading, error } = useQuery<SessionsQueryQuery, SessionsQueryQueryVariables>(
    sessionsQuery,
  )
  return { data, isLoading: loading, error }
}
