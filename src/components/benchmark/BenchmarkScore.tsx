export function BenchmarkScore({ percentile, label }: { percentile: number; label: string }) {
  return (
    <div className="space-y-2">
      <div className="relative h-3 rounded-full bg-secondary overflow-hidden">
        <div
          className="absolute inset-y-0 start-0 rounded-full bg-gradient-to-r from-primary to-chart-2"
          style={{ width: `${percentile}%` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 h-5 w-5 rounded-full border-2 border-background bg-foreground"
          style={{ insetInlineStart: `calc(${percentile}% - 10px)` }}
        />
      </div>
      <div className="flex justify-between text-[11px] text-muted-foreground">
        <span>۰٪</span>
        <span>۵۰٪</span>
        <span>۱۰۰٪</span>
      </div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}