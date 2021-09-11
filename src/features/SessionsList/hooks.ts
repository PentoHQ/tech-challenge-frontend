import {
  useAllRunningSessionsQuery,
  useAllSessionsQuery,
  useCreateSessionMutation,
  useCreateRunningSessionMutation,
  useDeleteAllRunningSessionsMutation,
  useDeleteSessionMutation,
} from '../../generated/graphql'
import { getAllRunningSessionsQuery, getAllSessionsQuery } from './graphql'

export function useGetSessions() {
  const { data, loading, error } = useAllSessionsQuery()
  return {
    data,
    isLoading: loading,
    error,
  }
}

export type UseRunningSession =
  | {
      onCompleted?: () => void
    }
  | undefined

export function useRunningSession({ onCompleted }: UseRunningSession = {}) {
  const { data, loading } = useAllRunningSessionsQuery()

  const [createSession, createSessionResult] = useCreateSessionMutation()
  const [createRunningSession] = useCreateRunningSessionMutation()
  const [deleteAllRunningSessions] = useDeleteAllRunningSessionsMutation()
  const [deleteSession] = useDeleteSessionMutation()
  const runningSession = data?.running_sessions[0]

  return {
    runningSession,
    isLoading: createSessionResult.loading || loading || createSessionResult.loading,
    startSession: (name: string, id: string = '', startDate: string = '', endDate: string = '') => {
      if (!!id) {
        deleteSession({
          variables: { input: id },
          awaitRefetchQueries: true,
          refetchQueries: [
            {
              query: getAllSessionsQuery,
            },
          ],
        })
      }

      let newStartDate
      if (startDate && endDate) {
        newStartDate = new Date(
          new Date(startDate).getTime() + Date.now() - new Date(endDate).getTime(),
        )
      }

      return createRunningSession({
        variables: {
          input: { name, startDate: newStartDate || new Date().toISOString() },
        },
        awaitRefetchQueries: true,
        // https://github.com/apollographql/apollo-client/issues/4922
        refetchQueries: [
          {
            query: getAllRunningSessionsQuery,
          },
        ],
      })
    },
    stop: () => {
      if (!runningSession) {
        throw new Error('Do not mutate before data has finished loading')
      }

      deleteAllRunningSessions()
      return createSession({
        variables: {
          input: {
            name: runningSession.name,
            startDate: runningSession.startDate,
            endDate: new Date().toISOString(),
          },
        },
        awaitRefetchQueries: true,
        refetchQueries: [
          {
            query: getAllSessionsQuery,
          },
          {
            query: getAllRunningSessionsQuery,
          },
        ],
      })
    },
  }
}

export function useSwitchSession() {
  const { startSession, stop, runningSession, isLoading } = useRunningSession()

  const switchSession = (name: string, id: string, startDate: string, endDate: string) => {
    if (isLoading) {
      throw new Error('Do not try to switch while running session is loading')
    }

    if (!runningSession) return startSession(name, id, startDate, endDate)
    return stop().then(() => startSession(name, id, startDate, endDate))
  }
  return switchSession
}
