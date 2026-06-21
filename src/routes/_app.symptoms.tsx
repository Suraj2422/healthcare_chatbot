import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useState } from "react";
import { Search, AlertTriangle, Stethoscope } from "lucide-react";
import { PageHeader } from "@/components/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const bodyParts = ["Head", "Eyes", "Throat", "Chest", "Abdomen", "Back", "Arms", "Legs", "Skin"];
const extras = ["Fever", "Cough", "Nausea", "Dizziness", "Fatigue", "Shortness of breath", "Loss of appetite"];

export function SymptomsPage() {
  useDocumentTitle("Symptom Checker — HealthMate AI");
  const [bodyPart, setBodyPart] = useState("Head");
  const [severity, setSeverity] = useState([4]);
  const [duration, setDuration] = useState("1-2-days");
  const [selectedExtras, setSelectedExtras] = useState<string[]>(["Fever"]);
  const [result, setResult] = useState(false);

  return (
    <>
      <PageHeader
        title="Symptom Checker"
        description="Describe what you're feeling and we'll give you an evidence-based assessment."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        <Card className="shadow-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Your symptoms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Search symptoms</Label>
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="e.g. headache, sore throat" className="pl-9" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Body part</Label>
              <div className="flex flex-wrap gap-2">
                {bodyParts.map((p) => (
                  <button
                    key={p}
                    onClick={() => setBodyPart(p)}
                    className={cn(
                      "rounded-full border px-3 py-1.5 text-sm transition-colors",
                      bodyPart === p ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:bg-muted",
                    )}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label>Severity</Label>
                <span className="text-sm font-medium">{severity[0]}/10</span>
              </div>
              <Slider value={severity} onValueChange={setSeverity} max={10} min={1} step={1} />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Mild</span><span>Moderate</span><span>Severe</span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Duration</Label>
                <Select value={duration} onValueChange={setDuration}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="few-hours">A few hours</SelectItem>
                    <SelectItem value="1-2-days">1–2 days</SelectItem>
                    <SelectItem value="3-7-days">3–7 days</SelectItem>
                    <SelectItem value="weeks">Weeks</SelectItem>
                    <SelectItem value="months">Months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>When does it occur?</Label>
                <Select defaultValue="constant">
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="constant">Constantly</SelectItem>
                    <SelectItem value="morning">Mornings</SelectItem>
                    <SelectItem value="evening">Evenings</SelectItem>
                    <SelectItem value="exertion">With activity</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Additional symptoms</Label>
              <div className="flex flex-wrap gap-2">
                {extras.map((e) => {
                  const active = selectedExtras.includes(e);
                  return (
                    <button
                      key={e}
                      onClick={() =>
                        setSelectedExtras((prev) =>
                          prev.includes(e) ? prev.filter((x) => x !== e) : [...prev, e],
                        )
                      }
                      className={cn(
                        "rounded-full border px-3 py-1.5 text-sm",
                        active ? "border-primary bg-accent text-accent-foreground" : "bg-card hover:bg-muted",
                      )}
                    >
                      {e}
                    </button>
                  );
                })}
              </div>
            </div>

            <Button size="lg" className="w-full" onClick={() => setResult(true)}>
              Generate health assessment
            </Button>
          </CardContent>
        </Card>

        <div className="space-y-5">
          {result ? (
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Assessment</CardTitle>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">Moderate risk</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-5">
                <div>
                  <p className="text-sm font-medium">Possible conditions</p>
                  <div className="mt-2 space-y-2">
                    {[
                      { name: "Viral infection", conf: 72 },
                      { name: "Tension headache", conf: 54 },
                      { name: "Sinusitis", conf: 38 },
                    ].map((c) => (
                      <div key={c.name}>
                        <div className="flex justify-between text-xs">
                          <span>{c.name}</span>
                          <span className="text-muted-foreground">{c.conf}%</span>
                        </div>
                        <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                          <div className="h-full rounded-full bg-primary" style={{ width: `${c.conf}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium">Recommended actions</p>
                  <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2"><Stethoscope className="mt-0.5 h-4 w-4 text-primary" /> Rest and stay hydrated for 24–48 hours.</li>
                    <li className="flex gap-2"><Stethoscope className="mt-0.5 h-4 w-4 text-primary" /> Take paracetamol if fever exceeds 100°F.</li>
                    <li className="flex gap-2"><AlertTriangle className="mt-0.5 h-4 w-4 text-destructive" /> Seek care if symptoms worsen or fever crosses 102°F.</li>
                  </ul>
                </div>
                <Button className="w-full">Consult a doctor</Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="shadow-card">
              <CardContent className="py-10 text-center text-sm text-muted-foreground">
                Fill in your symptoms to see a personalized assessment.
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </>
  );
}