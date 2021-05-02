import { FC, useEffect, useState } from 'react'

export interface CountDownProps {
  isPaused?: boolean
}

const formatNumberToLocale = (number: number) => ('0' + number).slice(-2)

/**
 * Primary UI component for user interaction
 */
export const CountDown: FC<CountDownProps> = ({ isPaused }) => {
  const [count, setCount] = useState(0)
  const seconds = count % 60
  const minutes = Math.floor(count / 60) % 60
  const hours = Math.floor(minutes / 60) % 24
  const formattedSeconds = formatNumberToLocale(seconds)
  const formattedMinutes = formatNumberToLocale(minutes)
  const formattedHours = formatNumberToLocale(hours)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isPaused) {
        setCount((prevCount) => prevCount + 1)
      }
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [isPaused])

  return (
    <div>
      {formattedHours}:{formattedMinutes}:{formattedSeconds}
    </div>
  )
}

export default CountDown
