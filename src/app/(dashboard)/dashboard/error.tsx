"use client";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-40 gap-3 text-center">
      <p className="text-destructive font-medium">
        مشکلی در بارگذاری داشبورد پیش آمد.
      </p>
      <button
        onClick={() => reset()}
        className="text-sm text-primary underline underline-offset-4"
      >
        تلاش مجدد
      </button>
    </div>
  );
}