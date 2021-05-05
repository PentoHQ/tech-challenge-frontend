import { useState, useEffect } from 'react'
import { intervalToDuration } from 'date-fns'
import styles from './CountDown.module.scss'

export interface CountDownProps {
  startTime: Date
}

export const CountDown = ({ startTime }: CountDownProps) => {
  const [{ hours, minutes, seconds }, setDuration] = useState(() =>
    intervalToDuration({ start: startTime, end: Date.now() }),
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setDuration(intervalToDuration({ start: startTime, end: Date.now() }))
    }, 1000)
    return () => clearInterval(interval)
  }, [startTime])

  return (
    <div className={styles.wrapper}>
      {hours}:{minutes}:{seconds}
    </div>
  )
}

export default CountDown
