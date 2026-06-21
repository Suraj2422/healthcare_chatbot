import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { Brand } from "./Brand";

export function AuthLayout({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-muted/40">
      <header className="px-6 py-5">
        <Brand />
      </header>
      <main className="flex flex-1 items-center justify-center px-4 py-10">
        <div className="w-full max-w-md">
          <div className="rounded-2xl border bg-card p-8 shadow-card">
            <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
            {subtitle ? <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p> : null}
            <div className="mt-6">{children}</div>
          </div>
          {footer ? <div className="mt-4 text-center text-sm text-muted-foreground">{footer}</div> : null}
        </div>
      </main>
      <footer className="px-6 py-5 text-center text-xs text-muted-foreground">
        <Link to="/" className="hover:text-foreground">← Back to home</Link>
      </footer>
    </div>
  );
}