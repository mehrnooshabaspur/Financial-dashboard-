"use client";

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis } from "recharts";
import { formatRial } from "@/lib/formatters";

const chartConfig = {
  value: { label: "درآمد ماهانه", color: "var(--chart-1)" },
};

export function PeerComparisonChart({
  merchantValue,
  peerMedianValue,
  peerTopDecileValue,
}: {
  merchantValue: number;
  peerMedianValue: number;
  peerTopDecileValue: number;
}) {
  const data = [
    { label: "شما", value: merchantValue },
    { label: "میانه‌ی هم‌صنفی‌ها", value: peerMedianValue },
    { label: "۱۰٪ برتر", value: peerTopDecileValue },
  ];

  return (
    <ChartContainer config={chartConfig} className="h-[200px] w-full">
      <BarChart data={data} layout="vertical">
        <XAxis type="number" hide />
        <YAxis dataKey="label" type="category" tickLine={false} axisLine={false} width={110} />
        <ChartTooltip content={<ChartTooltipContent formatter={(v) => formatRial(Number(v))} />} />
        <Bar dataKey="value" fill="var(--color-value)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}