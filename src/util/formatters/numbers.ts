// casts to string
export function enforceTwoDigits(value: number | undefined) {
  if (!value) {
    return '00'
  }
  return Number(value) < 10 ? `0${value}` : value.toString()
}
