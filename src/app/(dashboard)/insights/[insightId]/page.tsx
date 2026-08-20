import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { mockPaymentLeakage } from "@/lib/mock/payment-leakage";
import { mockPeakTime } from "@/lib/mock/peak-time";
import { formatRial } from "@/lib/formatters";
import { ExplainInsight } from "@/components/insights/ExplainInsight";
import { ActionCard } from "@/components/insights/ActionCard";
import { FailureBreakdownChart } from "@/components/insights/FailureBreakdownChart";
import { PeakTimeChart } from "@/components/insights/PeakTimeChart";

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ insightId: string }>;
}) {
  const { insightId } = await params;

  if (insightId === "payment-leakage") {
    const data = mockPaymentLeakage;
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">{data.title}</h1>
          <p className="text-muted-foreground mt-1">
            {formatRial(data.totalLostRevenue)} از {data.failedTransactionCount.toLocaleString("fa-IR")} تراکنش ناموفق
          </p>
        </div>
        <ActionCard text={data.actionableText} />
        <Card>
          <CardHeader>
            <CardTitle>علت‌های شکست تراکنش</CardTitle>
            <CardDescription>سهم هر دلیل از کل درآمد ازدست‌رفته</CardDescription>
          </CardHeader>
          <CardContent>
            <FailureBreakdownChart data={data.breakdown} />
          </CardContent>
        </Card>
        <ExplainInsight trace={data.trace} />
      </div>
    );
  }

  if (insightId === "peak-time") {
    const data = mockPeakTime;
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">{data.title}</h1>
          <p className="text-muted-foreground mt-1">
            {data.peakConcentrationPercent}٪ از درآمد در بازه‌ی {data.peakHourRange} ثبت می‌شود
          </p>
        </div>
        <ActionCard text={data.actionableText} />
        <Card>
          <CardHeader>
            <CardTitle>توزیع فروش بر اساس ساعت روز</CardTitle>
            <CardDescription>روز پرفروش: {data.peakWeekday}</CardDescription>
          </CardHeader>
          <CardContent>
            <PeakTimeChart data={data.hourlyDistribution} />
          </CardContent>
        </Card>
        <ExplainInsight trace={data.trace} />
      </div>
    );
  }

  notFound();
}