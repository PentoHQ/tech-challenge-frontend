import { gql } from '@apollo/client'
// This is picked up by graphql generator so it is not actually unused

export const getSessionsQuery = gql`
  query SessionsQuery {
    sessions {
      id
      name
      startDate
      endDate
    }
  }
`

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
`

export const updateSession = gql`
  mutation updateSession($_set: sessions_set_input, $pk_columns: sessions_pk_columns_input!) {
    update_sessions_by_pk(_set: $_set, pk_columns: $pk_columns) {
      id
      name
      startDate
      endDate
    }
  }
`

export const runningQuery = gql`
  query RunningSession {
    running_sessions {
      name
      startDate
    }
  }
`
export const startSession = gql`
  mutation startSession($input: running_sessions_insert_input!) {
    insert_running_sessions_one(object: $input) {
      id
      name
      startDate
    }
  }
`
