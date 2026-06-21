import { Link } from "react-router-dom";
import { useState } from "react";
import { AuthLayout } from "@/components/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export function ForgotPasswordPage() {
  useDocumentTitle("Reset password — HealthMate AI");
  const [sent, setSent] = useState(false);
  return (
    <AuthLayout
      title="Reset your password"
      subtitle="We'll send a reset link to your email."
      footer={
        <>
          Remembered it?{" "}
          <Link to="/login" className="font-medium text-primary hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      {sent ? (
        <div className="rounded-lg border bg-accent/40 p-4 text-sm text-accent-foreground">
          If an account exists for that email, you'll receive a reset link shortly.
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="space-y-4"
        >
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required placeholder="you@example.com" />
          </div>
          <Button type="submit" className="w-full">Send reset link</Button>
        </form>
      )}
    </AuthLayout>
  );
}