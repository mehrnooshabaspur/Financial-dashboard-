import { format as formatJalali } from "date-fns-jalali";
import { format as formatGregorian } from "date-fns";

export function formatDateFa(date: string | Date, pattern = "yyyy/MM/dd"): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return formatJalali(d, pattern);
}

export function formatDateTimeFa(date: string | Date): string {
  return formatDateFa(date, "yyyy/MM/dd HH:mm");
}

export function formatMonthFa(date: string | Date): string {
  return formatDateFa(date, "MMMM yyyy");
}

export function formatDateEn(date: string | Date, pattern = "yyyy-MM-dd"): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return formatGregorian(d, pattern);
}
export function formatRial(amount: number): string {
  return new Intl.NumberFormat("fa-IR").format(amount) + " ریال";
}

export function formatPercent(value: number): string {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value}٪`;
}