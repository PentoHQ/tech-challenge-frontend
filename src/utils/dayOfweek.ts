import { getDay } from 'date-fns';
import { Week } from 'constants/week';
/**
 * Given the date as ISO strings return the day of week
 * Can be used to calculate dayOfweek
 */
export function dayOfweek(date: Date) {
  const output = Week.find((item) => item.id === getDay(date))?.value;
  return output;
}
