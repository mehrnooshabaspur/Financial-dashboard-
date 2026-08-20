"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AreaChart, Area, XAxis } from "recharts";
import { mockSalesTrend } from "@/lib/mock/sales-trend";
import { formatRial } from "@/lib/formatters";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const chartConfig = {
  revenue: {
    label: "درآمد",
    color: "var(--chart-1)",
  },
};

export function SalesChart() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">روند فروش</CardTitle>
        <Link
          href="/trends"
          className="text-xs text-muted-foreground flex items-center gap-1 hover:text-foreground"
        >
          مشاهده کامل
          <ArrowLeft className="h-3 w-3" />
        </Link>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[120px] w-full">
          <AreaChart data={mockSalesTrend.points}>
            <defs>
              <linearGradient id="salesFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-revenue)" stopOpacity={0.35} />
                <stop offset="95%" stopColor="var(--color-revenue)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" hide />
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
              strokeWidth={2}
              fill="url(#salesFill)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}