import {
  useCreateSessionMutation,
  useRunningSessionQuery,
  useSessionsQueryQuery,
  useStartSessionMutation,
  useDeleteSessionMutation,
} from '../../generated/graphql'
import { runningQuery, getSessionsQuery } from './graphql'

export function useGetSessions() {
  const { data, loading, error } = useSessionsQueryQuery()
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
  const { data, loading } = useRunningSessionQuery()
  const [mutate, startResult] = useStartSessionMutation({ onCompleted })
  const [createSession, creationResult] = useCreateSessionMutation()
  const runningSession = data?.running_sessions[0]

  return {
    runningSession,
    isLoading: startResult.loading || loading || creationResult.loading,
    startSession: (name: string) =>
      mutate({
        variables: {
          input: { name, startDate: new Date().toISOString() },
        },
        awaitRefetchQueries: true,
        // https://github.com/apollographql/apollo-client/issues/4922
        refetchQueries: [
          {
            query: runningQuery,
          },
        ],
      }),
    stop: () => {
      if (!runningSession) {
        throw new Error('Do not mutate before data has finished loading')
      }

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
            query: getSessionsQuery,
          },
          {
            query: runningQuery,
          },
        ],
      })
    },
  }
}

export function useSwitchSession() {
  const { startSession, stop, runningSession, isLoading } = useRunningSession()
  const switchSession = (name: string) => {
    if (isLoading) {
      throw new Error('Do not try to switch while running session is loading')
    }
    if (!runningSession) return startSession(name)
    return stop().then(() => startSession(name))
  }
  return switchSession
}

export function useDeleteSession(id: number) {
  const [deleteSessionMutation, { loading, error }] = useDeleteSessionMutation({
    variables: {
      id,
    },
    refetchQueries: [
      {
        query: getSessionsQuery, // Propagate the change
      },
    ],
  })
  const { stop, runningSession } = useRunningSession()

  const deleteSession = async () => {
    if (loading) {
      throw new Error('Session is already being deleted')
    }
    if (runningSession?.id === id) {
      // If the session is currently running, stop it first
      await stop()
    }
    return deleteSessionMutation(id as any)
  }
  return {
    loading,
    error,
    deleteSession,
  }
}
