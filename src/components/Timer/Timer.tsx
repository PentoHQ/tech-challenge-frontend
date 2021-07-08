import React, { useState, useEffect } from 'react';
import { intervalToDuration } from 'date-fns';

import Text, { TextVariant } from 'components/Text';
import styles from './Timer.module.scss';

export interface TimerProps {
  /**
   * How large should the text in the timer component should be?
   */
  size?: TextVariant;
  /**
   * Provide your custom styles by passing a class name that will
   * be applied to the root of the component (edit to match reality)
   */
  className?: string;
  /**
   * Provide a start date for the timer component
   */
  startDate: Date;
}

/**
 * Primary UI component for user interaction
 */
function Timer({ size, className, startDate }: TimerProps) {
  const [timerVal, setTimerVal] = useState<Date>(startDate);
  const { hours, minutes, seconds } = intervalToDuration({
    start: startDate,
    end: timerVal,
  });

  const classes = [styles.wrapper, className].join(' ').trim();

  useEffect(() => {
    let interval = setInterval(() => {
      setTimerVal(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [startDate]);

  return (
    <Text variant={size} className={classes}>
      {`${hours}:${minutes}:${seconds}`}
    </Text>
  );
}

export default Timer;
