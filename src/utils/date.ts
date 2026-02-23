export function formatMonthDayWithOrdinal(
  isoDate: string,
  locale?: string | string[],
): string {
  const date = new Date(`${isoDate}T00:00:00Z`);
  const month = new Intl.DateTimeFormat(locale, {
    month: "long",
    timeZone: "UTC",
  }).format(date);
  const day = date.getUTCDate();
  const dayRemainder = day % 100;
  const suffix =
    dayRemainder >= 11 && dayRemainder <= 13
      ? "th"
      : day % 10 === 1
        ? "st"
        : day % 10 === 2
          ? "nd"
          : day % 10 === 3
            ? "rd"
            : "th";

  return `${month} ${day}${suffix}`;
}
