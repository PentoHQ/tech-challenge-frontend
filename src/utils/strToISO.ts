export function strToISO(dateStr: string, timeStr: string) {
  const [hour, min, sec] = timeStr.split(':');
  const [year, month, day] = dateStr.split('/');
  return new Date(+year, +month, +day, +hour, +min, +sec).toISOString();
}
