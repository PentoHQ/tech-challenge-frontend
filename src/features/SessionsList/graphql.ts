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

export const updateSession = gql`
  mutation updateSession($input: sessions_set_input!, $id: sessions_pk_columns_input!) {
    update_sessions_by_pk(_set: $input, pk_columns: $id) {
      id
      name
    }
  }
`
