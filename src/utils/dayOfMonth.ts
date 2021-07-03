import { format, getMonth } from 'date-fns';
import { Month } from 'constants/month';
/**
 * Given the date as ISO strings return the day of month
 * Can be used to calculate dayOfMonth
 */
export function dayOfMonth(date: Date) {
  console.log('month', getMonth(date));

  const month = Month.find((item) => item.id === getMonth(date))?.value;
  const day = format(date, 'dd');
  return `${day} ${month}`;
}
