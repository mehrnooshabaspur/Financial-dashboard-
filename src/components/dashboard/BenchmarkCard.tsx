import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { BenchmarkScore } from "@/components/benchmark/BenchmarkScore";
import { mockBenchmark } from "@/lib/mock/benchmark";
import { cn } from "@/lib/utils";

export function BenchmarkCard() {
  const data = mockBenchmark;
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">مقایسه با هم‌صنفی‌ها</CardTitle>
        <CardDescription>صنف: {data.categoryTitle}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <BenchmarkScore percentile={data.percentile} label={`بهتر از ${data.percentile}٪ هم‌صنفی‌ها`} />
        <Link href="/benchmark" className={cn(buttonVariants({ variant: "secondary" }), "w-full")}>
          مشاهده مقایسه کامل
        </Link>
      </CardContent>
    </Card>
  );
}