import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { Plus, Phone, Bell } from "lucide-react";
import { PageHeader } from "@/components/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { family } from "@/lib/mock";

export function FamilyPage() {
  useDocumentTitle("Family Profiles — HealthMate AI");
  return (
    <>
      <PageHeader
        title="Family Profiles"
        description="Separate, private profiles for the people you care about."
        actions={
          <Dialog>
            <DialogTrigger asChild>
              <Button><Plus className="h-4 w-4" /> Add member</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader><DialogTitle>Add family member</DialogTitle></DialogHeader>
              <form className="space-y-4">
                <div className="space-y-2"><Label>Full name</Label><Input placeholder="e.g. Priya Sharma" /></div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2"><Label>Relation</Label><Input placeholder="Spouse" /></div>
                  <div className="space-y-2"><Label>Age</Label><Input type="number" placeholder="30" /></div>
                </div>
              </form>
              <DialogFooter><Button>Add member</Button></DialogFooter>
            </DialogContent>
          </Dialog>
        }
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {family.map((f) => (
          <Card key={f.id} className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-primary/10 text-primary">{f.initials}</AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <p className="truncate font-semibold">{f.name}</p>
                  <p className="text-xs text-muted-foreground">{f.relation} · {f.age} years</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-lg bg-muted p-2">
                  <p className="text-sm font-semibold">82</p>
                  <p className="text-[10px] text-muted-foreground">Score</p>
                </div>
                <div className="rounded-lg bg-muted p-2">
                  <p className="text-sm font-semibold">2</p>
                  <p className="text-[10px] text-muted-foreground">Meds</p>
                </div>
                <div className="rounded-lg bg-muted p-2">
                  <p className="text-sm font-semibold">1</p>
                  <p className="text-[10px] text-muted-foreground">Appts</p>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <Button variant="outline" size="sm" className="flex-1"><Bell className="h-4 w-4" /> Reminders</Button>
                <Button variant="outline" size="sm" className="flex-1"><Phone className="h-4 w-4" /> Emergency</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-6 shadow-card">
        <CardHeader><CardTitle className="text-base">Emergency contacts</CardTitle></CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-2">
          {[
            { name: "Dr. Meera Patel", role: "Family physician", phone: "+91 98201 23456" },
            { name: "Apollo Hospital", role: "Nearest hospital", phone: "+91 22 6767 1000" },
          ].map((c) => (
            <div key={c.name} className="flex items-center justify-between rounded-xl border p-3">
              <div>
                <p className="font-medium">{c.name}</p>
                <p className="text-xs text-muted-foreground">{c.role}</p>
              </div>
              <Button variant="outline" size="sm"><Phone className="h-4 w-4" /> {c.phone}</Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
}