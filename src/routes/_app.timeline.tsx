import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useState } from "react";
import { Stethoscope, Calendar, FileText, HeartPulse } from "lucide-react";
import { PageHeader } from "@/components/AppShell";
import { Card, CardContent } from "@/components/ui/card";
import { timeline } from "@/lib/mock";
import { HealthScoreCard } from "@/components/health/HealthScoreCard";
import { cn } from "@/lib/utils";

const filters = ["All", "Symptom", "Appointment", "Report", "Recovery"] as const;

const iconFor = (type: string) => {
  switch (type) {
    case "Symptom": return Stethoscope;
    case "Appointment": return Calendar;
    case "Report": return FileText;
    default: return HeartPulse;
  }
};

export function TimelinePage() {
  useDocumentTitle("Health Timeline — HealthMate AI");
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const items = filter === "All" ? timeline : timeline.filter((t) => t.type === filter);

  return (
    <>
      <PageHeader title="Health Timeline" description="A chronological view of your health journey." />

      <div className="grid gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-5">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-sm",
                  filter === f ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:bg-muted",
                )}
              >
                {f}
              </button>
            ))}
          </div>

          <Card className="shadow-card">
            <CardContent className="py-6">
              <ol className="relative space-y-6 border-l pl-6">
                {items.map((t) => {
                  const Icon = iconFor(t.type);
                  return (
                    <li key={t.id} className="relative">
                      <span className="absolute -left-[34px] grid h-7 w-7 place-items-center rounded-full border bg-card text-primary shadow-soft">
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <div className="flex flex-wrap items-baseline gap-2">
                        <p className="font-medium">{t.title}</p>
                        <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] uppercase tracking-wide text-muted-foreground">{t.type}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{t.date}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{t.body}</p>
                    </li>
                  );
                })}
              </ol>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-5">
          <HealthScoreCard />
        </div>
      </div>
    </>
  );
}