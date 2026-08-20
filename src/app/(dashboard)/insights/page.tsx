import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface InsightListItem {
  id: string;
  title: string;
  ready: boolean;
}

const INSIGHTS_LIST: InsightListItem[] = [
  { id: "sales-trend", title: "علت افت/رشد فروش", ready: false },
  { id: "payment-leakage", title: "نشت پرداخت / درآمد از دست‌رفته", ready: true },
  { id: "repeat-customer", title: "نرخ مشتریان تکراری", ready: false },
  { id: "benchmark", title: "مقایسه با هم‌صنفی‌ها", ready: false },
  { id: "failure-analysis", title: "تحلیل شکست تراکنش‌ها", ready: false },
  { id: "retry-recovery", title: "تلاش مجدد و بازیابی", ready: false },
  { id: "customer-at-risk", title: "مشتریان در خطر ریزش", ready: false },
   { id: "peak-time", title: "زمان اوج فروش", ready: true },
  { id: "revenue-concentration", title: "تمرکز درآمد", ready: false },
  { id: "anomaly", title: "تشخیص ناهنجاری", ready: false },
];

export default function InsightsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">بینش‌ها</h1>
        <p className="text-muted-foreground mt-1">
          تحلیل‌های آماده‌شده برای کسب‌وکار شما
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {INSIGHTS_LIST.map((item) => {
          const content = (
            <Card
              className={cn(
                "h-full transition-colors",
                item.ready ? "hover:border-primary cursor-pointer" : "opacity-50"
              )}
            >
              <CardContent className="flex items-center justify-between pt-6">
                <span className="font-medium">{item.title}</span>
                {item.ready ? (
                  <ArrowLeft className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Badge variant="secondary" className="text-xs">
                    به‌زودی
                  </Badge>
                )}
              </CardContent>
            </Card>
          );

          return item.ready ? (
            <Link key={item.id} href={`/insights/${item.id}`}>
              {content}
            </Link>
          ) : (
            <div key={item.id}>{content}</div>
          );
        })}
      </div>
    </div>
  );
}