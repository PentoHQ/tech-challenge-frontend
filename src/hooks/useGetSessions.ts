import { useSessionsQueryQuery } from 'generated/graphql';

export default function useGetSessions() {
  const { data, loading, error } = useSessionsQueryQuery();
  return {
    data,
    isLoading: loading,
    error,
  };
}
