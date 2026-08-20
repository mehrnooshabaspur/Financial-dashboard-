"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import type { InsightTrace } from "@/types/insight";
import { cn } from "@/lib/utils";

export function ExplainInsight({ trace }: { trace: InsightTrace }) {
  const [open, setOpen] = useState(false);

  return (
    <Card>
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium"
      >
        این عدد چطور محاسبه شده؟
        <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <CardContent className="pt-0 text-sm text-muted-foreground space-y-3">
          <div>
            <span className="text-foreground font-medium">فرمول محاسبه: </span>
            {trace.calculation}
          </div>
          <div>
            <span className="text-foreground font-medium">ستون‌های منبع: </span>
            {trace.sourceFields.join("، ")}
          </div>
          <div>
            <span className="text-foreground font-medium">حجم نمونه: </span>
            {trace.sampleSize.toLocaleString("fa-IR")} تراکنش
          </div>
          {trace.caveats && trace.caveats.length > 0 && (
            <div>
              <span className="text-foreground font-medium">نکات مهم: </span>
              <ul className="list-disc pr-5 mt-1 space-y-1">
                {trace.caveats.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
}