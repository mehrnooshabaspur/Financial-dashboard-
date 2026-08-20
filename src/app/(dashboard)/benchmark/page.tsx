import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { BenchmarkScore } from "@/components/benchmark/BenchmarkScore";
import { PeerComparisonChart } from "@/components/benchmark/PeerComparison";
import { ActionCard } from "@/components/insights/ActionCard";
import { ExplainInsight } from "@/components/insights/ExplainInsight";
import { mockBenchmark } from "@/lib/mock/benchmark";

export default function BenchmarkPage() {
  const data = mockBenchmark;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">مقایسه با هم‌صنفی‌ها</h1>
        <p className="text-muted-foreground mt-1">صنف: {data.categoryTitle}</p>
      </div>

      <ActionCard text={data.actionableText} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>جایگاه شما</CardTitle>
            <CardDescription>{data.merchantMetricLabel}</CardDescription>
          </CardHeader>
          <CardContent>
            <BenchmarkScore percentile={data.percentile} label={`بهتر از ${data.percentile}٪ هم‌صنفی‌ها`} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>مقایسه‌ی عددی</CardTitle>
            <CardDescription>شما در برابر میانه و ۱۰٪ برتر صنف</CardDescription>
          </CardHeader>
          <CardContent>
            <PeerComparisonChart
              merchantValue={data.merchantValue}
              peerMedianValue={data.peerMedianValue}
              peerTopDecileValue={data.peerTopDecileValue}
            />
          </CardContent>
        </Card>
      </div>

      <ExplainInsight trace={data.trace} />
    </div>
  );
}