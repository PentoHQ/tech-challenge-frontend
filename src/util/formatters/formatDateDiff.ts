import { formatMinutes4Human } from './formatMinutes4Human'
import format from 'date-fns/format'
import differenceInMinutes from 'date-fns/differenceInMinutes'

type DateCompatible = Date | string | number

/**
 * Returns the diff between two dates in an human readable format
 */
export const formatDateDiff = (start: DateCompatible, end: DateCompatible) =>
  formatMinutes4Human(differenceInMinutes(new Date(end), new Date(start)))

const formatStart = 'yyy-MM-dd HH:mm'

/**
 * Formats startdate including hours and minutes
 */
export function formatStartDate(date: DateCompatible) {
  return format(new Date(date), formatStart)
}
/**
 * Convert milliseconds to a human readable format with hours and minutes
 */
export function msToHuman(ms: number) {
  return formatMinutes4Human(ms / 60000)
}

/**
 * Returns human readable date format
 */
export function formatDateToHuman(date: DateCompatible) {
  return format(new Date(date), 'yyyy-MM-dd hh:mm:ss')
}
