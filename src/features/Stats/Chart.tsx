import React, { useEffect, useState } from 'react'
import { XAxis, YAxis, ResponsiveContainer, BarChart, Bar, CartesianGrid, Tooltip } from 'recharts'
import { stringToColour } from '../../util/stringToColour'
import { startOfDay, endOfDay, addDays } from 'date-fns'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import styles from './Chart.module.scss'
import { GroupingFormat, useGenerateChartData } from './useGenerateChartData'
import { Spinner } from 'components/Spinner/Spinner'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'

const generateBars = (groupedData: any) => {
  let bars: any = []
  groupedData.map((task: any) => {
    Object.keys(task).map((key) => {
      if (key !== 'name') {
        bars.push(<Bar key={key} dataKey={key} name={key} stackId="a" fill={stringToColour(key)} />)
      }
      return undefined
    })
    return undefined
  })
  return bars
}

export default function Chart() {
  const { dataForRange, groupRange, isLoading } = useGenerateChartData()
  const [selection, setSelection] = useState({
    startDate: startOfDay(new Date()),
    endDate: endOfDay(new Date()),
    key: 'selection',
  })
  const [groupingFormat, setGroupingFormat] = useState(GroupingFormat.DAY)
  const [groupedData, setGroupedData] = useState(
    groupRange(
      dataForRange(startOfDay(selection.startDate), endOfDay(selection.endDate)),
      groupingFormat,
    ),
  )
  useEffect(() => {
    if (!isLoading) {
      setGroupedData(
        groupRange(
          dataForRange(startOfDay(selection.startDate), endOfDay(selection.endDate)),
          groupingFormat,
        ),
      )
    }
  }, [isLoading])
  if (isLoading) return <Spinner size={'10rem'} />
  return (
    <React.Fragment>
      <FormControl>
        <InputLabel id="select-grouping-label">Group By:</InputLabel>
        <Select
          labelId="select-grouping-label"
          id="select-grouping"
          value={groupingFormat}
          onChange={(e: any) => {
            setGroupingFormat(e.target.value)
            setGroupedData(
              groupRange(
                dataForRange(startOfDay(selection.startDate), endOfDay(selection.endDate)),
                e.target.value,
              ),
            )
          }}
        >
          <MenuItem value={GroupingFormat.DAY}>Day</MenuItem>
          <MenuItem value={GroupingFormat.WEEK}>Week</MenuItem>
          <MenuItem value={GroupingFormat.MONTH}>Month</MenuItem>
        </Select>
      </FormControl>
      <div className={styles.parent}>
        <ResponsiveContainer className={styles.responsive}>
          <BarChart
            data={groupedData}
            margin={{
              top: 20,
              right: 50,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Hours worked', position: 'insideLeft', angle: -90, dy: 50 }} />
            <Tooltip />
            {generateBars(groupedData)}
          </BarChart>
        </ResponsiveContainer>
        <DateRange
          onChange={(item) => {
            let dates = Object.assign({}, item.selection as any)
            Object.assign(dates, {
              startDate: startOfDay(dates.startDate),
              endDate: endOfDay(dates.endDate),
            })
            setSelection(dates)
            setGroupedData(
              groupRange(
                dataForRange(startOfDay(dates.startDate), endOfDay(dates.endDate)),
                groupingFormat,
              ),
            )
          }}
          months={1}
          direction="horizontal"
          ranges={[selection]}
          className={styles.dateRange}
          rangeColors={['#5e5ce4']}
          minDate={addDays(new Date(), -150)}
          maxDate={addDays(new Date(), 150)}
        />
      </div>
    </React.Fragment>
  )
}
