import { format } from 'date-fns';
/**
 * Given the date as ISO strings return the day of month
 * Can be used to calculate dayOfMonth
 */
export function dayOfMonth(date: Date) {
  const month = format(date, 'MMM');
  const day = format(date, 'dd');
  return `${day} ${month}`;
}
