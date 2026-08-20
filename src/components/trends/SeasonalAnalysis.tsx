"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, ReferenceDot } from "recharts";
import { mockSalesTrend } from "@/lib/mock/sales-trend";
import { formatRial, formatPercent } from "@/lib/formatters";
import { Badge } from "@/components/ui/badge";

const chartConfig = {
  revenue: {
    label: "درآمد",
    color: "var(--chart-1)",
  },
};

export function SeasonalAnalysis() {
  const { points, anomalies } = mockSalesTrend;

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>روند فروش در طول زمان</CardTitle>
          <CardDescription>
            بررسی تغییرات درآمد و شناسایی نقاط عطف فصلی
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[320px] w-full">
            <AreaChart data={points}>
              <XAxis dataKey="date" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} width={0} />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    formatter={(value) => formatRial(Number(value))}
                  />
                }
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="var(--color-revenue)"
                fill="var(--color-revenue)"
                fillOpacity={0.2}
              />
              {anomalies.map((a) => {
                const point = points.find((p) => p.date === a.date);
                if (!point) return null;
                return (
                  <ReferenceDot
                    key={a.date}
                    x={a.date}
                    y={point.revenue}
                    r={5}
                    fill="var(--success)"
                    stroke="var(--card)"
                    strokeWidth={2}
                  />
                );
              })}
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {anomalies.map((a) => (
        <Card key={a.date}>
          <CardContent className="flex items-start justify-between gap-4 pt-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium">{a.label}</span>
                <Badge
                  variant="outline"
                  className={
                    a.type === "spike"
                      ? "text-success border-success"
                      : "text-destructive border-destructive"
                  }
                >
                  {formatPercent(a.revenueChangePercent)}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{a.explanation}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}