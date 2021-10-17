import { format } from 'date-fns'
import { useSessionsQueryInDateRangeQuery } from '../../generated/graphql'

type DateRange = {
  from?: Date
  to?: Date
}

const FORMAT_TEMPLATE = "yyyy-MM-dd'T'HH:mm:ssxxx"
const MIN_DATE = format(new Date(0), FORMAT_TEMPLATE)
const MAX_DATE = format(new Date(2147468400 * 1000), FORMAT_TEMPLATE)

export function useGetSessionsInRange(range: DateRange = {}) {
  const from = range.from || MIN_DATE
  const to = range.to || MAX_DATE

  const { data, loading, error } = useSessionsQueryInDateRangeQuery({
    variables: {
      lowerBound: from,
      upperBound: to,
    },
    pollInterval: 0,
  })

  return { data, isLoading: loading, error }
}
