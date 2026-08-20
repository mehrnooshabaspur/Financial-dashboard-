import type { PaymentLeakageInsight } from "@/types/insight";

export const mockPaymentLeakage: PaymentLeakageInsight = {
  id: "payment-leakage",
  category: "payment_leakage",
  title: "نشت پرداخت / درآمد از دست‌رفته",
  totalLostRevenue: 184_500_000,
  failedTransactionCount: 312,
  lostRevenuePercentOfTotal: 8.4,
  breakdown: [
    { code: "51", label: "موجودی ناکافی", count: 128, lostRevenue: 71_200_000 },
    { code: "05", label: "رد شده توسط بانک صادرکننده", count: 96, lostRevenue: 58_100_000 },
    { code: "TIMEOUT", label: "اتمام زمان (Timeout)", count: 54, lostRevenue: 32_400_000 },
    { code: "OTHER", label: "سایر خطاها", count: 34, lostRevenue: 22_800_000 },
  ],
  actionableText:
    "۴۱٪ از تراکنش‌های ناموفق به دلیل «موجودی ناکافی» بوده‌اند. با نمایش پیام هشدار پیش از پرداخت یا پیشنهاد روش پرداخت جایگزین می‌توانید بخشی از این درآمد را بازیابی کنید.",
  trace: {
    sourceFields: ["session_status", "try_status", "switch_response_code", "amount"],
    calculation:
      "مجموع amount در تراکنش‌هایی که session_status نهایتاً موفق نشده، از کل مجموع amount همان بازه محاسبه شده است.",
    sampleSize: 312,
    caveats: [
      "برخی رکوردهای switch_response_code خالی (Null) بوده‌اند و در دسته «سایر خطاها» قرار گرفته‌اند.",
      "این عدد شامل تلاش‌های مجدد موفق (Retry) نمی‌شود؛ فقط session هایی که در نهایت ناموفق مانده‌اند لحاظ شده‌اند.",
    ],
  },
};