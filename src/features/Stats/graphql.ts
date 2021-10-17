import { gql } from '@apollo/client'

// used by generator
export const sessionsQuery = gql`
  query SessionsQueryInDateRange($lowerBound: timestamptz!, $upperBound: timestamptz!) {
    sessions(
      where: { startDate: { _gt: $lowerBound, _lt: $upperBound } }
      order_by: { startDate: asc }
    ) {
      id
      name
      startDate
      endDate
    }
  }
`
