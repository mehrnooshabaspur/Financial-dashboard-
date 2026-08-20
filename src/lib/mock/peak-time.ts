import type { PeakTimeInsight, HourlyBucket, WeekdayBucket } from "@/types/insight";

const hourlyDistribution: HourlyBucket[] = [
  { hour: 0, revenue: 2_100_000, transactionCount: 4 },
  { hour: 1, revenue: 1_200_000, transactionCount: 2 },
  { hour: 2, revenue: 800_000, transactionCount: 1 },
  { hour: 3, revenue: 600_000, transactionCount: 1 },
  { hour: 4, revenue: 500_000, transactionCount: 1 },
  { hour: 5, revenue: 900_000, transactionCount: 2 },
  { hour: 6, revenue: 2_400_000, transactionCount: 5 },
  { hour: 7, revenue: 5_200_000, transactionCount: 11 },
  { hour: 8, revenue: 9_800_000, transactionCount: 19 },
  { hour: 9, revenue: 14_300_000, transactionCount: 27 },
  { hour: 10, revenue: 17_600_000, transactionCount: 33 },
  { hour: 11, revenue: 19_100_000, transactionCount: 36 },
  { hour: 12, revenue: 16_400_000, transactionCount: 30 },
  { hour: 13, revenue: 13_700_000, transactionCount: 25 },
  { hour: 14, revenue: 15_200_000, transactionCount: 28 },
  { hour: 15, revenue: 18_900_000, transactionCount: 35 },
  { hour: 16, revenue: 22_300_000, transactionCount: 41 },
  { hour: 17, revenue: 27_800_000, transactionCount: 49 },
  { hour: 18, revenue: 34_600_000, transactionCount: 61 },
  { hour: 19, revenue: 38_200_000, transactionCount: 68 },
  { hour: 20, revenue: 33_100_000, transactionCount: 58 },
  { hour: 21, revenue: 24_700_000, transactionCount: 44 },
  { hour: 22, revenue: 14_900_000, transactionCount: 26 },
  { hour: 23, revenue: 6_800_000, transactionCount: 13 },
];

const weekdayDistribution: WeekdayBucket[] = [
  { weekday: "شنبه", weekdayIndex: 0, revenue: 58_400_000, transactionCount: 104 },
  { weekday: "یکشنبه", weekdayIndex: 1, revenue: 61_200_000, transactionCount: 112 },
  { weekday: "دوشنبه", weekdayIndex: 2, revenue: 59_800_000, transactionCount: 108 },
  { weekday: "سه‌شنبه", weekdayIndex: 3, revenue: 63_500_000, transactionCount: 115 },
  { weekday: "چهارشنبه", weekdayIndex: 4, revenue: 71_900_000, transactionCount: 128 },
  { weekday: "پنجشنبه", weekdayIndex: 5, revenue: 42_100_000, transactionCount: 76 },
  { weekday: "جمعه", weekdayIndex: 6, revenue: 28_300_000, transactionCount: 51 },
];

export const mockPeakTime: PeakTimeInsight = {
  id: "peak-time",
  category: "peak_time",
  title: "زمان اوج فروش",
  peakHourRange: "۱۸ تا ۲۰",
  peakWeekday: "چهارشنبه",
  peakConcentrationPercent: 27.3,
  hourlyDistribution,
  weekdayDistribution,
  actionableText:
    "۲۷٪ از کل درآمد شما بین ساعت ۱۸ تا ۲۰ ثبت می‌شود. اطمینان حاصل کنید زیرساخت پرداخت (PSP و سرویس‌دهنده) در این بازه بار اضافه را بدون افت کیفیت پوشش می‌دهد، و کمپین‌های تبلیغاتی یا موجودی محصول را برای این بازه‌ی زمانی اولویت‌بندی کنید.",
  trace: {
    sourceFields: ["created_at", "amount", "session_status"],
    calculation:
      "برای هر تراکنش موفق، ساعت و روز هفته از created_at استخراج و مجموع amount در هر بازه محاسبه شده است.",
    sampleSize: 3_412,
    caveats: [
      "فقط تراکنش‌هایی که session_status نهایتاً موفق بوده لحاظ شده‌اند.",
      "منطقه‌ی زمانی محاسبات بر اساس تایم‌زون تهران (Asia/Tehran) است.",
    ],
  },
};