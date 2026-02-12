export function convertDuration(durationMs?: number): string {
  if (!Number.isFinite(durationMs) || !durationMs || durationMs < 0) return '0:00'
  const totalSeconds = Math.floor(durationMs / 1000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}


/**
 * Повертає лише рік зі строки дати у форматі YYYY-MM-DD
 * @param dateStr - строка дати (наприклад '2024-01-24')
 * @returns рік, наприклад '2024'
 */
export function getYear(dateStr: string): string {
  return dateStr.slice(0, 4);
}

/**
 * Повертає формат "день три-літерний місяць" (наприклад '24 Jan')
 * @param dateStr - строка дати (наприклад '2024-01-24')
 * @returns '24 Jan'
 */
export function getDayMonth(dateStr: string): string {
  const date = new Date(dateStr);
  const day = date.getDate();
  const monthShort = date.toLocaleString('en', { month: 'short' });
  return `${day} ${monthShort}`;
}

// Conver Date from json
