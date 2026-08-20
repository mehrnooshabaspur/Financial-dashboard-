import { SalesChart } from "@/components/dashboard/SalesChart";
import { PaymentLeakageCard } from "@/components/dashboard/PaymentLeakageCard";
import { PeakTimeCard } from "@/components/dashboard/PeakTimeCard";
import { BenchmarkCard } from "@/components/dashboard/BenchmarkCard";
export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">داشبورد</h1>
        <p className="text-muted-foreground mt-1">
          سلام، بذارید نگاهی به وضعیت کسب‌وکارتان بیندازیم.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SalesChart />
        <PaymentLeakageCard />
        <PeakTimeCard/>
        <BenchmarkCard />
      </div>
    </div>
  );
}