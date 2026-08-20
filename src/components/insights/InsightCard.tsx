import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface InsightCardProps {
  title: string;
  value: string;
  subtitle?: string;
  href: string;
  tone?: "default" | "danger" | "success";
}

export function InsightCard({ title, value, subtitle, href, tone = "default" }: InsightCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Link href={href} className="text-xs text-muted-foreground flex items-center gap-1 hover:text-foreground">
          جزئیات
          <ArrowLeft className="h-3 w-3" />
        </Link>
      </CardHeader>
      <CardContent>
        <div
          className={cn(
            "text-2xl font-bold",
            tone === "danger" && "text-destructive",
            tone === "success" && "text-success"
          )}
        >
          {value}
        </div>
        {subtitle && <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>}
      </CardContent>
    </Card>
  );
}