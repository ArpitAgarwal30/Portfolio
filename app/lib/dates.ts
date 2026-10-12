const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "2026-06" -> "Jun 2026". Formatted by hand so build-time and browser output always match. */
export function formatYearMonth(value: string): string {
  const [year, month] = value.split("-");
  const label = month ? MONTHS[Number(month) - 1] : undefined;
  return label ? `${label} ${year}` : value;
}
