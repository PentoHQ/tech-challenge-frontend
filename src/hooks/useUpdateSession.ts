import {
  Sessions_Pk_Columns_Input,
  Sessions_Set_Input,
  useUpdateSessionMutation,
} from 'generated/graphql';
import { getSessionsQuery } from 'services';

export default function useUpdateSession() {
  const [updateSession, { loading, error }] = useUpdateSessionMutation();

  return {
    isLoading: loading,
    error: error,
    updateSession: (input: Sessions_Set_Input, id: Sessions_Pk_Columns_Input) =>
      updateSession({
        variables: {
          input,
          id,
        },
        awaitRefetchQueries: true,
        refetchQueries: [
          {
            query: getSessionsQuery,
          },
        ],
      }),
  };
}
