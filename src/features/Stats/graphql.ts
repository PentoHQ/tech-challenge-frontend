import { useQuery } from '@apollo/client'
import { getAllSessionsQuery } from 'features/SessionsList/graphql'
import { AllSessionsQuery, AllSessionsQueryVariables } from '../../generated/graphql'

export function useGetSessions() {
  const { data, loading, error } = useQuery<AllSessionsQuery, AllSessionsQueryVariables>(
    getAllSessionsQuery,
  )
  return { data, isLoading: loading, error }
}
