import { Link } from "react-router-dom";
import { Calendar, Droplet, Moon, Pill, Stethoscope, MessageSquare, Plus, Upload, Activity, AlertCircle, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/AppShell";
import { HealthScoreCard } from "@/components/health/HealthScoreCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { appointments, medications, recentSymptoms, sleepWeek, insights } from "@/lib/mock";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export function DashboardPage() {
  useDocumentTitle("Dashboard — HealthMate AI");
  const waterGoal = 8;
  const waterCups = 5;
  return (
    <>
      <PageHeader title="Good morning, Aarav" description="Here's your health snapshot for today." />

      <div className="grid gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-5">
          <HealthScoreCard />

          <div className="grid gap-5 sm:grid-cols-2">
            {/* Water */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Droplet className="h-4 w-4 text-primary" /> Daily Water Intake
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-3xl font-semibold">{waterCups}<span className="text-base text-muted-foreground">/{waterGoal}</span></div>
                    <div className="text-xs text-muted-foreground">cups today</div>
                  </div>
                  <Button size="sm" variant="outline"><Plus className="h-4 w-4" /> Add cup</Button>
                </div>
                <div className="mt-4 grid grid-cols-8 gap-1.5">
                  {Array.from({ length: waterGoal }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-8 rounded-md ${i < waterCups ? "bg-primary/80" : "bg-muted"}`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sleep */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Moon className="h-4 w-4 text-primary" /> Sleep Tracker
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-3xl font-semibold">7h 24m</div>
                    <div className="text-xs text-muted-foreground">last night</div>
                  </div>
                  <Badge variant="secondary">Good</Badge>
                </div>
                <div className="mt-4 flex h-16 items-end gap-2">
                  {sleepWeek.map((d) => (
                    <div key={d.day} className="flex flex-1 flex-col items-center gap-1">
                      <div
                        className="w-full rounded-md bg-primary/70"
                        style={{ height: `${(d.hours / 9) * 100}%` }}
                      />
                      <span className="text-[10px] text-muted-foreground">{d.day}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Appointments */}
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-base">
                <Calendar className="h-4 w-4 text-primary" /> Upcoming Appointments
              </CardTitle>
              <Button variant="ghost" size="sm">View all</Button>
            </CardHeader>
            <CardContent className="space-y-3">
              {appointments.map((a) => (
                <div key={a.id} className="flex items-center justify-between rounded-xl border p-3">
                  <div className="min-w-0">
                    <p className="truncate font-medium">{a.doctor}</p>
                    <p className="text-xs text-muted-foreground">{a.specialty} · {a.mode}</p>
                  </div>
                  <div className="text-right text-sm">
                    <div className="font-medium">{a.date}</div>
                    <div className="text-xs text-muted-foreground">{a.time}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-5">
          {/* Quick actions */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-base">Quick actions</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-2">
              <Button asChild variant="outline" className="h-auto flex-col gap-1 py-3">
                <Link to="/chat"><MessageSquare className="h-4 w-4" /><span className="text-xs">Ask AI</span></Link>
              </Button>
              <Button asChild variant="outline" className="h-auto flex-col gap-1 py-3">
                <Link to="/symptoms"><Stethoscope className="h-4 w-4" /><span className="text-xs">Log symptom</span></Link>
              </Button>
              <Button asChild variant="outline" className="h-auto flex-col gap-1 py-3">
                <Link to="/medications"><Pill className="h-4 w-4" /><span className="text-xs">Add med</span></Link>
              </Button>
              <Button asChild variant="outline" className="h-auto flex-col gap-1 py-3">
                <Link to="/records"><Upload className="h-4 w-4" /><span className="text-xs">Upload report</span></Link>
              </Button>
            </CardContent>
          </Card>

          {/* Active medications */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Pill className="h-4 w-4 text-primary" /> Active Medications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {medications.slice(0, 3).map((m) => (
                <div key={m.id} className="flex items-center justify-between rounded-lg border p-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{m.name}</p>
                    <p className="text-xs text-muted-foreground">{m.dosage} · next {m.next}</p>
                  </div>
                  <Activity className="h-4 w-4 shrink-0 text-primary" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent symptoms */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Stethoscope className="h-4 w-4 text-primary" /> Recent Symptoms
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {recentSymptoms.map((s) => (
                <span key={s.id} className="rounded-full border bg-muted px-3 py-1 text-xs">
                  {s.label} · <span className="text-muted-foreground">{s.when}</span>
                </span>
              ))}
            </CardContent>
          </Card>

          {/* Insights */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-base">Health Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {insights.map((i) => (
                <div key={i.id} className="flex gap-3 rounded-lg border p-3">
                  {i.tone === "positive" ? (
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  ) : (
                    <AlertCircle className="h-4 w-4 shrink-0 text-destructive" />
                  )}
                  <div className="min-w-0">
                    <p className="text-sm font-medium">{i.title}</p>
                    <p className="text-xs text-muted-foreground">{i.body}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}