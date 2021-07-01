import { gql } from '@apollo/client';

export const runningQuery = gql`
  query RunningSession {
    running_sessions {
      name
      startDate
    }
  }
`;

export default runningQuery;
