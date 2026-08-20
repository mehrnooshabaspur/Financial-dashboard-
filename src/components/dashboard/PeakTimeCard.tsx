"use client";

import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis } from "recharts";
import { ArrowLeft } from "lucide-react";
import { mockPeakTime } from "@/lib/mock/peak-time";
import { formatRial } from "@/lib/formatters";
import { ROUTES } from "@/constants/routes";

const chartConfig = {
  revenue: {
    label: "درآمد",
    color: "var(--chart-1)",
  },
};

export function PeakTimeCard() {
  const data = mockPeakTime;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-sm font-medium">زمان اوج فروش</CardTitle>
          <p className="text-xs text-muted-foreground mt-0.5">در این بازه‌ی زمانی</p>
        </div>
        <Link
          href={ROUTES.INSIGHT_DETAIL(data.id)}
          className="text-xs text-muted-foreground flex items-center gap-1 hover:text-foreground shrink-0"
        >
          جزئیات
          <ArrowLeft className="h-3 w-3" />
        </Link>
      </CardHeader>

      <CardContent className="space-y-3">
        <div>
          <div className="text-xl font-bold">
            ساعت {data.peakHourRange}
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">
            {data.peakConcentrationPercent}٪ از کل درآمد در این بازه
          </p>
        </div>

        <ChartContainer config={chartConfig} className="h-[70px] w-full">
          <BarChart data={data.hourlyDistribution}>
            <XAxis dataKey="hour" hide />
            <ChartTooltip content={<ChartTooltipContent formatter={(value) => formatRial(Number(value))} />} />
            <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}