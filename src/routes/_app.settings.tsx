import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { PageHeader } from "@/components/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { user } from "@/lib/mock";

export function SettingsPage() {
  useDocumentTitle("Settings — HealthMate AI");
  return (
    <>
      <PageHeader title="Settings" description="Personalize HealthMate AI to fit you." />

      <div className="grid gap-5 lg:grid-cols-2">
        <Card className="shadow-card">
          <CardHeader><CardTitle className="text-base">Profile</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2"><Label>Full name</Label><Input defaultValue={user.name} /></div>
            <div className="space-y-2"><Label>Email</Label><Input type="email" defaultValue={user.email} /></div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2"><Label>Age</Label><Input type="number" defaultValue={user.age} /></div>
              <div className="space-y-2"><Label>Blood group</Label>
                <Select defaultValue="O+"><SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {["A+","A-","B+","B-","AB+","AB-","O+","O-"].map(g => <SelectItem key={g} value={g}>{g}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button>Save changes</Button>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader><CardTitle className="text-base">Notifications</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: "Medication reminders", hint: "Daily push at scheduled times" },
              { label: "Appointment alerts", hint: "1 hour before each appointment" },
              { label: "Weekly health report", hint: "Every Sunday morning" },
              { label: "Tips & insights", hint: "Occasional personalized tips" },
            ].map((n, i) => (
              <div key={n.label} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{n.label}</p>
                  <p className="text-xs text-muted-foreground">{n.hint}</p>
                </div>
                <Switch defaultChecked={i < 3} />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader><CardTitle className="text-base">Language & region</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2"><Label>Language</Label>
              <Select defaultValue="en"><SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="hi">हिन्दी</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                  <SelectItem value="fr">Français</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2"><Label>Units</Label>
              <Select defaultValue="metric"><SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="metric">Metric (kg, cm)</SelectItem>
                  <SelectItem value="imperial">Imperial (lb, in)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader><CardTitle className="text-base">Privacy</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {[
              "Share anonymized data for research",
              "Allow family members to view my records",
              "Two-factor authentication",
            ].map((p, i) => (
              <div key={p} className="flex items-center justify-between">
                <p className="text-sm">{p}</p>
                <Switch defaultChecked={i === 2} />
              </div>
            ))}
            <Button variant="outline">Download my data</Button>
          </CardContent>
        </Card>

        <Card className="shadow-card lg:col-span-2">
          <CardHeader><CardTitle className="text-base">Appearance</CardTitle></CardHeader>
          <CardContent>
            <RadioGroup defaultValue="light" className="grid gap-3 sm:grid-cols-3">
              <label className="flex cursor-pointer items-center gap-3 rounded-xl border bg-card p-4">
                <RadioGroupItem value="light" id="t-light" />
                <div>
                  <p className="text-sm font-medium">Light</p>
                  <p className="text-xs text-muted-foreground">Default theme</p>
                </div>
              </label>
              <label className="flex cursor-not-allowed items-center gap-3 rounded-xl border bg-muted/40 p-4 opacity-60">
                <RadioGroupItem value="dark" id="t-dark" disabled />
                <div>
                  <p className="text-sm font-medium">Dark</p>
                  <p className="text-xs text-muted-foreground">Coming soon</p>
                </div>
              </label>
              <label className="flex cursor-not-allowed items-center gap-3 rounded-xl border bg-muted/40 p-4 opacity-60">
                <RadioGroupItem value="system" id="t-system" disabled />
                <div>
                  <p className="text-sm font-medium">System</p>
                  <p className="text-xs text-muted-foreground">Coming soon</p>
                </div>
              </label>
            </RadioGroup>
          </CardContent>
        </Card>
      </div>
    </>
  );
}