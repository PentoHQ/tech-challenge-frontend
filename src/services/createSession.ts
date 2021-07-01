import { gql } from '@apollo/client';

export const createSession = gql`
  mutation createSession($input: sessions_insert_input!) {
    insert_sessions_one(object: $input) {
      id
      name
      startDate
      endDate
    }
    delete_running_sessions(where: {}) {
      affected_rows
    }
  }
`;

export default createSession;
