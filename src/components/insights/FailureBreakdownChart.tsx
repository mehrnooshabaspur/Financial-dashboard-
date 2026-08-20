"use client";

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis } from "recharts";
import { formatRial } from "@/lib/formatters";
import type { FailureReasonBreakdown } from "@/types/insight";

const chartConfig = {
  lostRevenue: {
    label: "درآمد ازدست‌رفته",
    color: "var(--chart-4)",
  },
};

export function FailureBreakdownChart({ data }: { data: FailureReasonBreakdown[] }) {
  return (
    <ChartContainer config={chartConfig} className="h-[260px] w-full">
      <BarChart data={data} layout="vertical">
        <XAxis type="number" hide />
        <YAxis dataKey="label" type="category" tickLine={false} axisLine={false} width={140} />
        <ChartTooltip content={<ChartTooltipContent formatter={(value) => formatRial(Number(value))} />} />
        <Bar dataKey="lostRevenue" fill="var(--color-lostRevenue)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}