export interface SalesTrendPoint {
  date: string;         // فرمت ISO یا شمسی، مثلاً "1403-12-01"
  revenue: number;       // ریال
  transactionCount: number;
  avgTicket: number;     // ریال، میانگین مبلغ هر تراکنش
}

export interface SalesTrendAnomaly {
  date: string;
  type: "spike" | "drop";
  label: string;          // مثلاً "نوروز ۱۴۰۴"
  explanation: string;    // چرا این اتفاق افتاد
  revenueChangePercent: number;
}

export interface SalesTrendData {
  points: SalesTrendPoint[];
  anomalies: SalesTrendAnomaly[];
}