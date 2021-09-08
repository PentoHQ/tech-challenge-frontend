import React from 'react'
import {
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import PropTypes from 'prop-types'
import { stringToColour } from '../../util/stringToColour'

interface ChartProps<T> {
  sessions: T[]
  title: string
  names: string[]
  formatter?: (value: T, index: number) => string
}

export default function Chart<T>({ sessions, title, names, formatter }: ChartProps<T>) {
  const Bars = names.map((x: string) => (
    <Bar key={x} dataKey={x} name={x} stackId="a" fill={stringToColour(x)} />
  ))

  return (
    <React.Fragment>
      <ResponsiveContainer height="100%">
        <BarChart
          data={sessions}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 10,
          }}
        >
          <XAxis dataKey="startDate" />
          <YAxis tickFormatter={formatter}>
            <Label position="left" style={{ textAnchor: 'middle' }} offset={0} angle={-90}>
              Duration in hours
            </Label>
          </YAxis>
          <CartesianGrid strokeDasharray="3 3" />
          <Legend />
          <Tooltip formatter={formatter} />
          {Bars}
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  )
}
/**
 * The expected shape of the data is
 * sessions: {startDAte: String, task1: duration, task2: duration}
 * names: ['task1','task2']
 */
Chart.propTypes = {
  title: PropTypes.node,
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
  formatter: PropTypes.func,
  sessions: PropTypes.array,
}
Chart.defaultProps = {
  sessions: [],
  formatter: () => {},
}
