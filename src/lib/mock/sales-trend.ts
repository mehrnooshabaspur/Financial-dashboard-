import type { SalesTrendData } from "@/types/analytics";

export const mockSalesTrend: SalesTrendData = {
  points: [
    { date: "1403-09-01", revenue: 182_000_000, transactionCount: 410, avgTicket: 443_902 },
    { date: "1403-09-15", revenue: 195_000_000, transactionCount: 430, avgTicket: 453_488 },
    { date: "1403-10-01", revenue: 178_000_000, transactionCount: 395, avgTicket: 450_632 },
    { date: "1403-10-15", revenue: 210_000_000, transactionCount: 460, avgTicket: 456_521 },
    { date: "1403-11-01", revenue: 225_000_000, transactionCount: 470, avgTicket: 478_723 },
    { date: "1403-11-15", revenue: 240_000_000, transactionCount: 505, avgTicket: 475_247 },
    { date: "1403-12-01", revenue: 310_000_000, transactionCount: 610, avgTicket: 508_196 },
    { date: "1403-12-15", revenue: 395_000_000, transactionCount: 740, avgTicket: 533_783 },
    { date: "1404-01-01", revenue: 520_000_000, transactionCount: 890, avgTicket: 584_269 },
    { date: "1404-01-15", revenue: 340_000_000, transactionCount: 560, avgTicket: 607_142 },
    { date: "1404-02-01", revenue: 260_000_000, transactionCount: 480, avgTicket: 541_666 },
  ],
  anomalies: [
    {
      date: "1404-01-01",
      type: "spike",
      label: "عید نوروز",
      explanation: "فروش ۶۷٪ نسبت به نیمه‌ی اسفند رشد کرد؛ عمده‌ی رشد از افزایش تعداد تراکنش بود، نه افزایش میانگین مبلغ خرید.",
      revenueChangePercent: 67,
    },
  ],
};