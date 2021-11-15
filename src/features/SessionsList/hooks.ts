import {
  useCreateSessionMutation,
  useDeleteSessionMutation,
  useRunningSessionQuery,
  useSessionsQueryQuery,
  useStartSessionMutation,
  useUpdateSessionMutation,
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
  return { switchSession, isLoading }
}

export const useDeleteSession = () => {
  const [deleteSession, loading] = useDeleteSessionMutation()
  const deleteById = (sessionId: string) =>
    deleteSession({
      variables: {
        input: sessionId,
      },
      awaitRefetchQueries: true,
      refetchQueries: [
        {
          query: getSessionsQuery,
        },
      ],
    })

  return { deleteById, isLoading: loading.loading }
}

export const useChangeSession = () => {
  const [updateSession, result] = useUpdateSessionMutation()

  return {
    isLoading: result.loading,
    updateSession: (id: string, name: string) => {
      return updateSession({
        variables: {
          input: {
            id,
          },
          data: {
            name,
          },
        },
        awaitRefetchQueries: true,
        refetchQueries: [
          {
            query: getSessionsQuery,
          },
        ],
      })
    },
  }
}
