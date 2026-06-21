import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { Download } from "lucide-react";
import { PageHeader } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { reportsWeekly } from "@/lib/mock";

function Ring({ value, label }: { value: number; label: string }) {
  const c = 2 * Math.PI * 36;
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-24 w-24">
        <svg viewBox="0 0 100 100" className="h-24 w-24 -rotate-90">
          <circle cx="50" cy="50" r="36" stroke="var(--color-muted)" strokeWidth="8" fill="none" />
          <circle cx="50" cy="50" r="36" stroke="var(--color-primary)" strokeWidth="8" fill="none" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c - (value / 100) * c} />
        </svg>
        <div className="absolute inset-0 grid place-items-center text-sm font-semibold">{value}%</div>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

export function ReportsPage() {
  useDocumentTitle("Health Reports — HealthMate AI");
  return (
    <>
      <PageHeader
        title="Health Reports"
        description="A simple, visual summary of how you're doing."
        actions={<Button variant="outline"><Download className="h-4 w-4" /> Download PDF</Button>}
      />

      <Tabs defaultValue="weekly">
        <TabsList className="grid w-full grid-cols-4 md:w-auto">
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="daily" className="mt-5 grid gap-5 md:grid-cols-4">
          <Card className="shadow-card md:col-span-4">
            <CardHeader><CardTitle className="text-base">Today's goals</CardTitle></CardHeader>
            <CardContent className="flex flex-wrap items-center justify-around gap-6">
              <Ring value={72} label="Steps" />
              <Ring value={88} label="Hydration" />
              <Ring value={64} label="Calories" />
              <Ring value={91} label="Sleep" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="weekly" className="mt-5 grid gap-5 md:grid-cols-2">
          <Card className="shadow-card">
            <CardHeader><CardTitle className="text-base">Steps this week</CardTitle></CardHeader>
            <CardContent className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={reportsWeekly}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis dataKey="day" stroke="var(--color-muted-foreground)" fontSize={12} />
                  <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
                  <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 12 }} />
                  <Bar dataKey="steps" fill="var(--color-primary)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardHeader><CardTitle className="text-base">Sleep hours</CardTitle></CardHeader>
            <CardContent className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={reportsWeekly}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis dataKey="day" stroke="var(--color-muted-foreground)" fontSize={12} />
                  <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
                  <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 12 }} />
                  <Line type="monotone" dataKey="sleep" stroke="var(--color-primary)" strokeWidth={2.5} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monthly" className="mt-5">
          <Card className="shadow-card">
            <CardHeader><CardTitle className="text-base">Calories — last 30 days</CardTitle></CardHeader>
            <CardContent className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={Array.from({ length: 30 }, (_, i) => ({ d: i + 1, cal: 1800 + Math.round(Math.sin(i / 3) * 200 + Math.random() * 100) }))}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis dataKey="d" stroke="var(--color-muted-foreground)" fontSize={12} />
                  <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
                  <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 12 }} />
                  <Line type="monotone" dataKey="cal" stroke="var(--color-primary)" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="mt-5 grid gap-5 md:grid-cols-3">
          {["Resting heart rate", "Weight", "Blood pressure"].map((t, i) => (
            <Card key={t} className="shadow-card">
              <CardHeader><CardTitle className="text-base">{t}</CardTitle></CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold">{[68, 72, 124][i]}<span className="ml-1 text-sm text-muted-foreground">{["bpm", "kg", "/82"][i]}</span></p>
                <p className="mt-1 text-xs text-muted-foreground">Trending {i === 1 ? "down" : "stable"} over 30 days</p>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </>
  );
}