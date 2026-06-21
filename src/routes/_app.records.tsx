import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { Upload, Download, FileText, Pill, FlaskConical, ShieldAlert, Syringe } from "lucide-react";
import { PageHeader } from "@/components/AppShell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { records } from "@/lib/mock";

export function RecordsPage() {
  useDocumentTitle("Medical Records — HealthMate AI");
  return (
    <>
      <PageHeader
        title="Medical Records"
        description="Everything in one calm place — history, prescriptions, labs, allergies and vaccinations."
        actions={
          <>
            <Button variant="outline"><Download className="h-4 w-4" /> Export all</Button>
            <Button><Upload className="h-4 w-4" /> Upload</Button>
          </>
        }
      />

      <Tabs defaultValue="history">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
          <TabsTrigger value="labs">Lab Reports</TabsTrigger>
          <TabsTrigger value="allergies">Allergies</TabsTrigger>
          <TabsTrigger value="vaccinations">Vaccinations</TabsTrigger>
        </TabsList>

        <TabsContent value="history" className="mt-5 grid gap-4 md:grid-cols-2">
          {records.history.map((r) => (
            <RecordCard key={r.id} icon={<FileText className="h-4 w-4" />} title={r.title} sub={`${r.date} · ${r.doctor}`} />
          ))}
        </TabsContent>
        <TabsContent value="prescriptions" className="mt-5 grid gap-4 md:grid-cols-2">
          {records.prescriptions.map((r) => (
            <RecordCard key={r.id} icon={<Pill className="h-4 w-4" />} title={r.title} sub={`${r.date} · ${r.doctor}`} />
          ))}
        </TabsContent>
        <TabsContent value="labs" className="mt-5">
          <Card className="shadow-card">
            <CardContent className="p-0">
              <table className="w-full text-sm">
                <thead className="border-b text-left text-xs uppercase text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3">Test</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {records.labs.map((l) => (
                    <tr key={l.id} className="border-b last:border-0">
                      <td className="px-4 py-3 font-medium">{l.title}</td>
                      <td className="px-4 py-3 text-muted-foreground">{l.date}</td>
                      <td className="px-4 py-3">
                        <Badge variant="secondary" className={l.status === "Normal" ? "bg-accent text-accent-foreground" : "bg-orange-100 text-orange-800"}>
                          {l.status}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <Button variant="ghost" size="sm"><Download className="h-4 w-4" /></Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="allergies" className="mt-5 grid gap-4 md:grid-cols-2">
          {records.allergies.map((r) => (
            <RecordCard
              key={r.id}
              icon={<ShieldAlert className="h-4 w-4" />}
              title={r.title}
              sub={`Severity: ${r.severity}`}
              tone={r.severity === "High" ? "danger" : "default"}
            />
          ))}
        </TabsContent>
        <TabsContent value="vaccinations" className="mt-5 grid gap-4 md:grid-cols-2">
          {records.vaccinations.map((r) => (
            <RecordCard key={r.id} icon={<Syringe className="h-4 w-4" />} title={r.title} sub={r.date} />
          ))}
        </TabsContent>
      </Tabs>
    </>
  );
}

function RecordCard({
  icon,
  title,
  sub,
  tone = "default",
}: {
  icon: React.ReactNode;
  title: string;
  sub: string;
  tone?: "default" | "danger";
}) {
  return (
    <Card className="shadow-card">
      <CardContent className="flex items-center justify-between gap-3 py-5">
        <div className="flex min-w-0 items-center gap-3">
          <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${tone === "danger" ? "bg-destructive/10 text-destructive" : "bg-accent text-accent-foreground"}`}>
            {icon}
          </span>
          <div className="min-w-0">
            <p className="truncate font-medium">{title}</p>
            <p className="text-xs text-muted-foreground">{sub}</p>
          </div>
        </div>
        <Button variant="ghost" size="sm"><Download className="h-4 w-4" /></Button>
      </CardContent>
    </Card>
  );
}