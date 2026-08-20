import { SeasonalAnalysis } from "@/components/trends/SeasonalAnalysis";

export default function TrendsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">روندها</h1>
        <p className="text-muted-foreground mt-1">
          تحلیل زمانی و فصلی فروش
        </p>
      </div>
      <SeasonalAnalysis />
    </div>
  );
}