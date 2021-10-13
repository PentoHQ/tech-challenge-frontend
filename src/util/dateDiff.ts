/**
 * Given dates as ISO strings or Date objects
 * returns the difference between them in milliseconds
 * or 0 if the second date is not defined.
 * Can be used to calculate durations
 */
export function dateDiff(start: string | Date, end?: string | Date) {
  if (!end) return 0
  const a = start instanceof Date ? start : new Date(start)
  const b = end instanceof Date ? end : new Date(end)
  return b.getTime() - a.getTime()
}
