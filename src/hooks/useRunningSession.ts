import { getSessionsQuery, runningQuery } from 'features/SessionsList/graphql';
import {
  useCreateSessionMutation,
  useRunningSessionQuery,
  useStartSessionMutation,
} from 'generated/graphql';

export type UseRunningSession =
  | {
      onCompleted?: () => void;
    }
  | undefined;

export default function useRunningSession({
  onCompleted,
}: UseRunningSession = {}) {
  const { data, loading } = useRunningSessionQuery();
  const [mutate, startResult] = useStartSessionMutation({ onCompleted });
  const [createSession, creationResult] = useCreateSessionMutation();
  const runningSession = data?.running_sessions[0];

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
        throw new Error('Do not mutate before data has finished loading');
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
      });
    },
  };
}
