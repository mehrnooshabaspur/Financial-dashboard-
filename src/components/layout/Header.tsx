import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

export function Header() {
  return (
    <header className="flex h-14 shrink-0 items-center gap-2 border-b border-border px-4">
      <SidebarTrigger />
      <Separator orientation="vertical" className="h-4" />
      <span className="text-sm text-muted-foreground">
        پذیرنده: نمونه فروشگاه
      </span>
    </header>
  );
}