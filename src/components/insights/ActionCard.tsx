import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

export function ActionCard({ text }: { text: string }) {
  return (
    <Card className="border-primary/40 bg-primary/5">
      <CardContent className="flex items-start gap-3 pt-6">
        <Lightbulb className="h-5 w-5 text-primary shrink-0 mt-0.5" />
        <p className="text-sm">{text}</p>
      </CardContent>
    </Card>
  );
}