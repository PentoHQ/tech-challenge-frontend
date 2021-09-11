import { gql } from '@apollo/client'
// This is picked up by graphql generator so it is not actually unused

export const getAllSessionsQuery = gql`
  query AllSessions {
    sessions {
      id
      name
      startDate
      endDate
    }
  }
`

export const getAllRunningSessionsQuery = gql`
  query AllRunningSessions {
    running_sessions {
      id
      name
      startDate
    }
  }
`

export const createSessionMutation = gql`
  mutation CreateSession($input: sessions_insert_input!) {
    insert_sessions_one(object: $input) {
      id
      name
      startDate
      endDate
    }
  }
`

export const createRunningSessionMutation = gql`
  mutation CreateRunningSession($input: running_sessions_insert_input!) {
    insert_running_sessions_one(object: $input) {
      id
      name
      startDate
    }
  }
`

export const deleteAllRunningSessionsMutation = gql`
  mutation DeleteAllRunningSessions {
    delete_running_sessions(where: {}) {
      affected_rows
    }
  }
`

export const deleteSessionMutation = gql`
  mutation DeleteSession($input: uuid!) {
    delete_sessions_by_pk(id: $input) {
      id
      name
      startDate
      endDate
    }
  }
`

export const updateSessionMutation = gql`
  mutation UpdateSession($set: sessions_set_input!, $id: uuid!) {
    update_sessions(_set: $set, where: { id: { _eq: $id } }) {
      affected_rows
      returning {
        id
        name
        startDate
        endDate
      }
    }
  }
`
