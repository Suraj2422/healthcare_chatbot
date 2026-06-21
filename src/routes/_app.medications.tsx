import { useState } from "react";
import { Plus, Pill, Bell, RefreshCw, History } from "lucide-react";
import { PageHeader } from "@/components/AppShell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { medications } from "@/lib/mock";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export function MedicationsPage() {
  useDocumentTitle("Medications — HealthMate AI");
  const [meds, setMeds] = useState(medications);

  return (
    <>
      <PageHeader
        title="Medication Manager"
        description="Track dosages, reminders and refills in one place."
        actions={
          <Dialog>
            <DialogTrigger asChild>
              <Button><Plus className="h-4 w-4" /> Add medicine</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add medicine</DialogTitle>
              </DialogHeader>
              <form className="space-y-4">
                <div className="space-y-2"><Label>Name</Label><Input placeholder="e.g. Paracetamol" /></div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2"><Label>Dosage</Label><Input placeholder="500 mg" /></div>
                  <div className="space-y-2"><Label>Frequency</Label><Input placeholder="Twice daily" /></div>
                </div>
                <div className="space-y-2"><Label>Refill date</Label><Input type="date" /></div>
              </form>
              <DialogFooter>
                <Button>Save medication</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        }
      />

      <div className="grid gap-4">
        {meds.map((m) => (
          <Card key={m.id} className="shadow-card">
            <CardContent className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-5 sm:flex sm:items-center sm:justify-between">
              <div className="flex min-w-0 items-center gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <Pill className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="truncate font-semibold">{m.name}</p>
                    <Badge variant="secondary">{m.dosage}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {m.schedule.join(" · ")} · Next dose at {m.next}
                  </p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                    <RefreshCw className="h-3 w-3" /> Refill by {m.refill}
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <div className="flex items-center gap-2">
                  <Bell className="h-4 w-4 text-muted-foreground" />
                  <Switch
                    checked={m.reminder}
                    onCheckedChange={(v) =>
                      setMeds((prev) => prev.map((x) => (x.id === m.id ? { ...x, reminder: v } : x)))
                    }
                  />
                </div>
                <Button variant="ghost" size="sm"><History className="h-4 w-4" /></Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}