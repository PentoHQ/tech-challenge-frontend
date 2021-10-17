import React, { ReactChild } from 'react'
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
import Text from '../../components/Text'
import { stringToColour } from '../../util/stringToColour'
import styles from './Chart.module.scss'
import { NoData } from './NoData'
import Spinner from '../../components/Spinner'

function Title({ children }: { children: ReactChild }) {
  return (
    <Text className={styles.title} variant="title">
      {children}
    </Text>
  )
}

interface ChartProps<T> {
  sessions: T[]
  title: string
  names: string[]
  formatter?: (value: T, index: number) => string
  xLabel?: string
  xDataKey: string
  isLoading?: boolean
}

export default function Chart<T>({
  xDataKey,
  xLabel = '',
  sessions,
  title,
  names,
  formatter,
  isLoading = false,
}: ChartProps<T>) {
  const Bars = names.map((x: string) => (
    <Bar key={x} dataKey={x} name={x} stackId="a" fill={stringToColour(x)} />
  ))

  return (
    <div className={styles.wrapper}>
      <Title>{title}</Title>
      <ResponsiveContainer height={500}>
        {isLoading ? (
          <div className={styles.spinnerContainer}>
            <Spinner withBackdrop={true} backdropPosition="absolute" />
          </div>
        ) : sessions.length === 0 ? (
          <NoData />
        ) : (
          <BarChart
            data={sessions}
            margin={{
              top: 16,
              right: 16,
              bottom: 0,
              left: 10,
            }}
          >
            <XAxis dataKey={xDataKey}>
              <Label position="insideBottom" offset={0}>
                {xLabel}
              </Label>
            </XAxis>
            <YAxis tickFormatter={formatter}>
              <Label position="left" style={{ textAnchor: 'middle' }} offset={0} angle={-90}>
                Duration
              </Label>
            </YAxis>
            <CartesianGrid strokeDasharray="3 3" />
            <Legend />
            <Tooltip formatter={formatter} />
            {Bars}
          </BarChart>
        )}
      </ResponsiveContainer>
    </div>
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
