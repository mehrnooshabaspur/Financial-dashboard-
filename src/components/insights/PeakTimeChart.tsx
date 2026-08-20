"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import type { HourlyBucket } from "@/types/insight";
import { formatRial } from "@/lib/formatters";

interface PeakTimeChartProps {
  data: HourlyBucket[];
}

export function PeakTimeChart({ data }: PeakTimeChartProps) {
  const maxRevenue = Math.max(...data.map((d) => d.revenue));

  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data} margin={{ top: 8, right: 8, left: 8, bottom: 8 }}>
        <XAxis
          dataKey="hour"
          tickFormatter={(h) => `${h}`}
          className="text-xs"
          stroke="var(--muted-foreground)"
        />
        <YAxis hide />
        <Tooltip
          contentStyle={{
            backgroundColor: "var(--popover)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-md)",
          }}
          labelFormatter={(h) => `ساعت ${h}`}
          formatter={(value) => [formatRial(Number(value ?? 0)), "درآمد"]}
        />
        <Bar dataKey="revenue" radius={[6, 6, 0, 0]}>
          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={
                entry.revenue === maxRevenue
                  ? "var(--chart-1)"
                  : "var(--chart-1)"
              }
              fillOpacity={entry.revenue / maxRevenue * 0.6 + 0.4}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}