import { gql } from '@apollo/client';

export const getSessionsQuery = gql`
  query SessionsQuery {
    sessions {
      id
      name
      startDate
      endDate
    }
  }
`;

export default getSessionsQuery;
