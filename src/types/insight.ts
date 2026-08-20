export type InsightCategory =
  | "sales_trend"
  | "payment_leakage"
  | "repeat_customer"
  | "benchmark"
  | "failure_analysis"
  | "retry_recovery"
  | "customer_at_risk"
  | "peak_time"
  | "revenue_concentration"
  | "anomaly";

export interface InsightTrace {
  sourceFields: string[];
  calculation: string;
  sampleSize: number;
  caveats?: string[];
}

export interface FailureReasonBreakdown {
  code: string;
  label: string;
  count: number;
  lostRevenue: number;
}

export interface PaymentLeakageInsight {
  id: string;
  category: "payment_leakage";
  title: string;
  totalLostRevenue: number;
  failedTransactionCount: number;
  lostRevenuePercentOfTotal: number;
  breakdown: FailureReasonBreakdown[];
  actionableText: string;
  trace: InsightTrace;
}
export interface HourlyBucket {
  hour: number; // 0-23
  revenue: number;
  transactionCount: number;
}

export interface WeekdayBucket {
  weekday: string; // برچسب فارسی: شنبه، یکشنبه، ...
  weekdayIndex: number; // 0=شنبه ... 6=جمعه
  revenue: number;
  transactionCount: number;
}

export interface PeakTimeInsight {
  id: string;
  category: "peak_time";
  title: string;
  peakHourRange: string; // مثلاً "۱۸ تا ۲۰"
  peakWeekday: string; // مثلاً "پنجشنبه"
  peakConcentrationPercent: number; // چند درصد درآمد در ساعات اوج متمرکز شده
  hourlyDistribution: HourlyBucket[];
  weekdayDistribution: WeekdayBucket[];
  actionableText: string;
  trace: InsightTrace;
}

export interface BenchmarkInsight {
  id: string;
  category: "benchmark";
  title: string;
  categoryTitle: string;
  percentile: number;
  merchantMetricLabel: string;
  merchantValue: number;
  peerMedianValue: number;
  peerTopDecileValue: number;
  actionableText: string;
  trace: InsightTrace;
}