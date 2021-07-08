import { gql } from '@apollo/client';

export const updateSession = gql`
  mutation updateSession(
    $input: sessions_set_input
    $id: sessions_pk_columns_input!
  ) {
    update_sessions_by_pk(_set: $input, pk_columns: $id) {
      id
      name
      startDate
      endDate
    }
  }
`;

export default updateSession;
