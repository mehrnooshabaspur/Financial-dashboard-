import type { BenchmarkInsight } from "@/types/insight";

export const mockBenchmark: BenchmarkInsight = {
  id: "benchmark",
  category: "benchmark",
  title: "مقایسه با هم‌صنفی‌ها",
  categoryTitle: "پوشاک و مد",
  percentile: 72,
  merchantMetricLabel: "میانگین درآمد ماهانه",
  merchantValue: 410_000_000,
  peerMedianValue: 265_000_000,
  peerTopDecileValue: 620_000_000,
  actionableText:
    "شما بهتر از ۷۲٪ کسب‌وکارهای هم‌صنف خود (پوشاک و مد) عمل کرده‌اید. فاصله‌ی شما تا ۱۰٪ برتر این صنف حدود ۲۱۰ میلیون ریال است؛ تمرکز روی افزایش میانگین مبلغ سبد خرید می‌تواند این فاصله را کم کند.",
  trace: {
    sourceFields: ["category_id", "category_title", "amount", "merchant_key"],
    calculation:
      "برای هر پذیرنده در همان category_id، میانگین درآمد ماهانه محاسبه و رتبه‌ی پذیرنده‌ی شما در بین آن‌ها به‌صورت صدک (Percentile) تعیین شده است.",
    sampleSize: 184,
    caveats: [
      "این مقایسه فقط بین پذیرندگانی انجام شده که در بازه‌ی زمانی مشابه فعال بوده‌اند.",
      "تفاوت در حجم/اندازه‌ی کسب‌وکار (مثلاً تعداد شعبه) در این عدد لحاظ نشده است.",
    ],
  },
};