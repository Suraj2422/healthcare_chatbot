import { Link } from "react-router-dom";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import {
  ArrowRight,
  MessageSquare,
  Stethoscope,
  FolderHeart,
  Pill,
  LineChart,
  Users,
  ShieldCheck,
  Sparkles,
  HeartPulse,
  Clock,
} from "lucide-react";
import { Brand } from "@/components/Brand";
import { Button } from "@/components/ui/button";

export function LandingPage() {
  useDocumentTitle("HealthMate AI — Your AI Health Companion");
  return <Landing />;
}

const features = [
  { icon: MessageSquare, title: "AI Health Chat", body: "Ask questions, describe symptoms, and get clear, evidence-based guidance." },
  { icon: Stethoscope, title: "Symptom Checker", body: "Step-by-step assessment with risk levels and recommended next steps." },
  { icon: FolderHeart, title: "Medical Records", body: "Prescriptions, lab reports, allergies and vaccinations in one place." },
  { icon: Pill, title: "Medication Manager", body: "Dose schedules, reminders, refill alerts and medicine history." },
  { icon: LineChart, title: "Health Reports", body: "Daily, weekly and monthly trends with insights you can act on." },
  { icon: Users, title: "Family Profiles", body: "Track health for your loved ones with separate, private profiles." },
];

const steps = [
  { n: "01", title: "Create your profile", body: "Tell us about your health basics — age, conditions, medications." },
  { n: "02", title: "Chat and track", body: "Log symptoms, ask questions, and upload reports any time." },
  { n: "03", title: "Get personal insights", body: "Receive simple, evidence-based guidance and reminders." },
];

const why = [
  { icon: ShieldCheck, title: "Private by design", body: "Your data stays yours. Encrypted, never sold." },
  { icon: Sparkles, title: "Personalized", body: "Insights tailored to your history and goals." },
  { icon: HeartPulse, title: "Evidence-based", body: "Guidance grounded in current medical knowledge." },
  { icon: Clock, title: "Always available", body: "Get help at 2 AM the same way you would at 2 PM." },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-8">
          <Brand />
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#how" className="hover:text-foreground">How it works</a>
            <a href="#why" className="hover:text-foreground">Why HealthMate</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm">
              <Link to="/login">Sign in</Link>
            </Button>
            <Button asChild size="sm">
              <Link to="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px] bg-gradient-to-b from-accent/40 to-transparent" />
        <div className="mx-auto max-w-6xl px-4 py-20 text-center md:px-8 md:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Now in early access
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Your AI <span className="text-primary">Health Companion</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            Personalized healthcare assistance for everyday wellness — chat with an AI doctor,
            track symptoms, manage medications and keep your records calm and organized.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link to="/register">
                Get Started <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/dashboard">View live demo</Link>
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            For informational purposes only. Not a substitute for professional medical advice.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t bg-muted/40 py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">Everything in one calm place</h2>
            <p className="mt-3 text-muted-foreground">
              Built to feel like a real healthcare product — not a dashboard with too many widgets.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="rounded-2xl border bg-card p-6 shadow-card">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-accent-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How */}
      <section id="how" className="py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">How it works</h2>
            <p className="mt-3 text-muted-foreground">Three small steps to better health awareness.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl border bg-card p-6 shadow-card">
                <div className="text-sm font-semibold text-primary">{s.n}</div>
                <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section id="why" className="border-t bg-muted/40 py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">Why choose HealthMate AI</h2>
            <p className="mt-3 text-muted-foreground">Designed with privacy, clarity and care.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((w) => {
              const Icon = w.icon;
              return (
                <div key={w.title} className="rounded-2xl border bg-card p-6 shadow-card">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-semibold">{w.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{w.body}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 rounded-2xl border bg-card p-8 text-center shadow-card md:p-12">
            <h3 className="text-2xl font-semibold tracking-tight">Ready to feel a little more in control?</h3>
            <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
              Set up your profile in under two minutes. Free during early access.
            </p>
            <div className="mt-6 flex justify-center">
              <Button asChild size="lg">
                <Link to="/register">Create your account</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4 md:px-8">
          <div>
            <Brand />
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Personalized AI healthcare assistance for you and your family.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Product</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground">Features</a></li>
              <li><a href="#how" className="hover:text-foreground">How it works</a></li>
              <li><Link to="/dashboard" className="hover:text-foreground">Live demo</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">About</a></li>
              <li><a href="#" className="hover:text-foreground">Careers</a></li>
              <li><a href="#" className="hover:text-foreground">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Privacy</a></li>
              <li><a href="#" className="hover:text-foreground">Terms</a></li>
              <li><a href="#" className="hover:text-foreground">HIPAA</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} HealthMate AI. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
