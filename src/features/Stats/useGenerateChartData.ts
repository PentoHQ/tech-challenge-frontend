import { format, intervalToDuration, startOfWeek } from 'date-fns'
import { useGetSessions } from './graphql'
import { stringToColour } from '../../util/stringToColour'

export enum GroupingFormat {
  DAY,
  WEEK,
  MONTH,
}

export function useGenerateChartData() {
  const { data, isLoading, error } = useGetSessions()
  return {
    dataForRange: (startDate: Date, endDate: Date) => {
      let rangeData =
        data?.sessions
          .filter((session) => {
            let sessionStartDate = new Date(session.startDate)
            let sessionEndDate = new Date(session.endDate)
            return sessionStartDate > startDate && sessionEndDate < endDate
          })
          .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()) || []
      return rangeData
    },
    groupRange: (rangeData: any[], groupingFormat: GroupingFormat) => {
      let chartData: any = {}
      let data: any[] = []
      rangeData
        .map((session) => {
          let sessionStartDate = new Date(session.startDate)
          let sessionEndDate = new Date(session.endDate)
          let duration: any = intervalToDuration({ start: sessionStartDate, end: sessionEndDate })
          let formattedName
          switch (groupingFormat) {
            case GroupingFormat.DAY:
              formattedName = format(sessionStartDate, 'E, do LLL')
              break
            case GroupingFormat.WEEK:
              formattedName = format(startOfWeek(sessionStartDate), "'Week of 'dd'/'LL'/'yy")
              break
            case GroupingFormat.MONTH:
              formattedName = format(startOfWeek(sessionStartDate), "MMMM', 'yyyy")
              break
          }
          return {
            id: session.id,
            label: session.name,
            stackId: 'a',
            time: formatTimeInHours(duration),
            // [session.name]: formatTimeInHours(duration),

            name: formattedName,
            color: stringToColour(session.name),
          }
        })
        .map((session) => {
          if (chartData[session.name]) {
            chartData[session.name].push({
              time: session.time,
              label: session.label,
              // color: session.color,
            })
          } else {
            Object.assign(chartData, {
              [session.name]: [
                {
                  time: session.time,
                  label: session.label,
                  // color: session.color
                },
              ],
            })
          }
          return undefined
        })
      for (const key in chartData) {
        if (Object.prototype.hasOwnProperty.call(chartData, key)) {
          const item = { name: key }
          const element = chartData[key]
          element.map((sesh: any) => Object.assign(item, { [sesh.label]: sesh.time }))
          data.push(item)
        }
      }
      console.log(data)
      return data
    },
    isLoading,
    error,
  }
}

const formatTimeInHours = ({
  days,
  hours,
  minutes,
  seconds,
}: {
  days: number
  hours: number
  minutes: number
  seconds: number
}) => {
  let time
  time = days * 24 + hours + (minutes + seconds / 60) / 60
  return Math.round((time + Number.EPSILON) * 100) / 100
}
