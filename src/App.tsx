import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { LandingPage } from "@/routes/index";
import { LoginPage } from "@/routes/login";
import { RegisterPage } from "@/routes/register";
import { ForgotPasswordPage } from "@/routes/forgot-password";
import { DashboardPage } from "@/routes/_app.dashboard";
import { ChatPage } from "@/routes/_app.chat";
import { SymptomsPage } from "@/routes/_app.symptoms";
import { RecordsPage } from "@/routes/_app.records";
import { MedicationsPage } from "@/routes/_app.medications";
import { ReportsPage } from "@/routes/_app.reports";
import { FamilyPage } from "@/routes/_app.family";
import { TimelinePage } from "@/routes/_app.timeline";
import { SettingsPage } from "@/routes/_app.settings";

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Button asChild>
            <Link to="/">Go home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route element={<AppShell />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/symptoms" element={<SymptomsPage />} />
          <Route path="/records" element={<RecordsPage />} />
          <Route path="/medications" element={<MedicationsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/family" element={<FamilyPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}