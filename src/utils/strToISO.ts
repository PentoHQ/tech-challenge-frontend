export function strToISO(dateStr: string, timeStr: string) {
  const [hour, min, sec] = timeStr.split(':');
  const [year, month, day] = dateStr.split('/');
  return new Date(+year, +month - 1, +day, +hour, +min, +sec).toISOString();
}
